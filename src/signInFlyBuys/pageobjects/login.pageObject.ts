import { t, Role, Selector } from "testcafe";
import { SERVER, User } from "../../../globalResources/constants";

// elements for login page
class LoginPage {
  signinButton: Selector = Selector("li[id='signin_btn']");
  username: Selector = Selector("input[id='user_username']");
  next: Selector = Selector("button[type='submit']");
  password: Selector = Selector("input[id='user_password']");
  loginButton: Selector = Selector("button[id='user-submit-action']");
  greetingsName: Selector = Selector("div[id='account_menu_btn']")
  myAccount: Selector = Selector("a[href='/myflybuys']")
  formError: Selector = Selector("div[class*='alert alert-warning']");
  logoutButton: Selector = Selector("input[value='Sign out']");
  homePage: Selector = Selector("div[id='sparkle_logo']");                 

  /**
   * User Roles login a particular user
   * Used to limit the amount of logins required for a test and therefore reducing execution time
   *
   * https://devexpress.github.io/testcafe/documentation/test-api/authentication/user-roles.html
   */

  login = async () => {
    const regularUser = Role(
      SERVER.url,
      async () => {
        await t
        .click(this.signinButton)
          .typeText(this.username, User.USERNAME, { paste: true })
          .click(this.next)
          .typeText(this.password, User.PASSWORD, { paste: true })
          .click(this.loginButton)
          .click(this.greetingsName)
          },
      { preserveUrl: true }
    );
    await t.useRole(regularUser);
  };
}

export default new LoginPage();
