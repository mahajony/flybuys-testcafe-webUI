import LoginPage from "../pageobjects/login.pageObject";
import { getText, getURL } from "../../../globalResources/utils";
import { SERVER, URL, User } from "../../../globalResources/constants";
import { InvalidUser } from "../../signInFlyBuys/testdata/login.data";
import { t } from "testcafe";

fixture("Login tests")
  .page(SERVER.url)
  .beforeEach(async () => {
  await t.click(LoginPage.homePage).maximizeWindow( )
  });

test("User is able to sign in", async () => {
  //verify you're on the login page
  const loginURL = await getURL();
  await t.expect(loginURL).contains(URL.FORM_LOGIN);

  // login
  await LoginPage.login();

  //verify you're on the main page
  const currentURL = await getURL();
  await t.expect(currentURL).contains(URL.MAIN);
  })

test(`Signing in with incorrect user causes a login failure`, async () => {
  // login with incorrect details
  await t
  .click(LoginPage.signinButton)
    .typeText(LoginPage.username, InvalidUser.USERNAME)
    .click(LoginPage.next);

  //verify alert
  const errText = await getText(LoginPage.formError);
  await t
    .expect(errText)
    .eql("We can't find a Fly Buys account for the username you entered");
})

test("Signing in with incorrect password causes a login failure", async () => {
  // login with incorrect details
  await t
    .click(LoginPage.signinButton)
    .typeText(LoginPage.username, User.USERNAME)
    .click(LoginPage.next)
    .typeText(LoginPage.password, InvalidUser.PASSWORD)
    .click(LoginPage.loginButton)

  //verify alert
  const errText = await getText(LoginPage.formError);
  await t
    .expect(errText)
    .eql("Sorry, your email or password was incorrect. Did you forget your password?");
})

test("Logging out should re-direct to the login page", async () => {
  //verify you're on the login page
  let loginURL = await getURL();
  await t.expect(loginURL).notContains(URL.MAIN);

  // login
  await LoginPage.login();

  //verify you're on the main page
  const currentURL = await getURL();
  await t.expect(currentURL).contains(URL.MAIN);
  
  //click the logout button
  await t.click(LoginPage.logoutButton);

  //verify you're on the login page
  loginURL = await getURL();
  await t.expect(loginURL).notContains(URL.MAIN);
})
