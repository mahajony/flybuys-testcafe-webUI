import { t, Selector } from "testcafe";
import { Details } from "../../registerFlyBuys/testdata/register.data";

// elements for login page
class Register {
  registerButton: Selector = Selector("a[id='register_link']");
  createAccountButton: Selector = Selector("button[id='gtm_create_account']");
  flyBuysCard: Selector = Selector("img[alt='Fly Buys']");
  genderCheckbox: Selector = Selector("input[id='male']");
  firstName: Selector = Selector("input[id='first-name']");
  lastName: Selector = Selector("input[id='last-name']")
  email: Selector = Selector("input[id='email']")
  dateOfBirth: Selector = Selector("input[id='dob']");
  homeAddress: Selector = Selector("input[id='home_address']");
  homeAddressConfirmed: Selector = Selector("li[class='af_item']");
  preferredContactNumber: Selector = Selector("input[id='contact_number']");  
  continueButton: Selector = Selector("div[class='continue']");               

  enterRegistrationDetails = async () => {
        await t
        .click(this.registerButton)
        .click(this.createAccountButton)
        .click(this.flyBuysCard)
        .click(this.genderCheckbox)
          .typeText(this.firstName, Details.FIRSTNAME, { paste: true })
          .typeText(this.lastName, Details.LASTNAME, { paste: true })
          .typeText(this.email, Details.EMAIL, { paste: true })
          .typeText(this.dateOfBirth, Details.DOB, { paste: true })
          .typeText(this.homeAddress, Details.HOMEADDRESS, { paste: true })
          .click(this.homeAddressConfirmed)
          .typeText(this.preferredContactNumber, Details.CONTACTNUMBER, { paste: true })
          }
};
export default new Register();
