﻿# testDemoUI
This project is written in Typescript using TestCafe.

## Task Given

* Develop a set of tests to check whether Fly Buys works following a new software release
* Assume that the website at FlyBuys.co.nz is correct and write tests that check we have like-for-like
functionality with the next release.


## Answers:

### **1. What would be your highest priority tests?**
Flybuys website looked interesting that I could spot lots of scope to automate the webpage. Bur for the time being, I have decided to automate some UI Tests as follows:

  **SignIn** - *I have done a complete test around SignIn. But if you want to run the tests, please do the prerequisites:
  Enter valid user details in the resource/constants.ts file:

export const User = {
  USERNAME: "<enter valid username>",
  PASSWORD: "<enter valid password>"
};
*
***please note: signInFlyBuys Test2 and Test3 might be interrupted with the captcha message(verify human) if run multiple times***

  **Registration** - *Have created the test for the whole form registration but didnt submit to avoid invalid users registration*

> These are parts of the highest priority tests, that I was able to automate for the time being.

### **2. How might you ensure non-programmers can find out what is tested?**

TestCafe offers effective t.debug() function. This when added anywhere in the test, enables non-programmers to understand and follow the test steps better. 
Also the Test Report [testReport/index.html] and Screenshots [/screenshots] on a failure also helps them to understand the failures and outcomes better.
I have used the yarn package manager and the command to run a test report would be **yarn run test-report**

### **3. Are there any frameworks you would use? Why?**

 #### TestCafe
 I used **[TestCafe](https://devexpress.github.io/testcafe/documentation/getting-started/)** to write these tests. And supporting pre-requisites **[Node.js] (https://nodejs.org/en/)** and **[npm] (https://www.npmjs.com/get-npm)**

#### Reason
* TestCafe is a node.js tool to automate end-to-end web testing,
* TestCafe allows you to write tests using TypeScript or JavaScript, 
* TestCafe automatically waits for page loads and XHRs before the test starts and after each action, 
* It also wait for page elements to appear.
* Its one of thhose which support multi-browser testing


### clone this Repo

    Follow the below steps to get started
1. Navigate to the path to clone this repo e.g.`" Windows: cd C:\ "`
2. Create a new directory `mkdir flybuys-testcafe-webUI`
3. Using command prompt Navigate to the created directory `cd flybuys-testcafe-webUI`
4. git init
5. git clone https://github.com/mahajony/flybuys-testcafe-webUI.git  - to clone this repository

6. `npm install`
This step installs all the dependencies in the package.json file

### To Run the test

- testcafe <browserName> <filePath>  [e.g testcafe chrome src/registerFlyBuys]

### Configuration

Server and User configuration is set in `config/app.config.json`

### Debug 

TestCafe provides the `t.debug` method that pauses the test and allows you to debug using the browser's developer tools. 

`await t.debug()`

### Results

Screenshots will appear under the `screenshot` folder upon falure case.
Test report (html) will be generated under the `testReport` folder

I have used the yarn package manager and the command to run a test report would be **yarn run test-report**

## Standards

Have adhered to the camelCase syntax for defining file names, methods and objects
