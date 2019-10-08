import LoginPage from "../../signInFlyBuys/pageobjects/login.pageObject";
import RegistrationPage from "../../registerFlyBuys/pageobjects/register.pageObjects";
import { getURL } from "../../../globalResources/utils";
import { SERVER, URL } from "../../../globalResources/constants";
import { t } from "testcafe";

fixture("Registration Test")
  .page(SERVER.url)
  .beforeEach(async () => {
    await t.click(LoginPage.homePage).maximizeWindow( )
  });

test("Register - New to Fly Buys", async () => {
  //verify you're on the login page
  const loginURL = await getURL();
  await t.expect(loginURL).contains(URL.FORM_LOGIN);

  //Enter Registration Details
  await RegistrationPage.enterRegistrationDetails();
  
  //Click Continue - didnt want to submit an invalid user details, hence disabled the below "continue" step
  //await t.click(RegistrationPage.continueButton)
})

test("Register - Do you have a Fly Buys number", async () => {
  //verify you're on the login page
  const loginURL = await getURL();
  await t.expect(loginURL).contains(URL.FORM_LOGIN);

  //Pre-requisite is to have a FlyBuys number but since I didnt have one, unable to do further steps.
})