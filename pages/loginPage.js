var commons = require('../resources/common.json');
var helper = require('../utils/helper.js');

class LoginPage {
    constructor() {
        this.username = element(by.id('email'));
        this.password = element(by.id('pass'));
        this.loginButton = element(by.id('loginbutton'));
        this.mainContainer = element(by.id('mainContainer'));
    }
    login(user,pass){
        this.username.sendKeys(user);
        this.password.sendKeys(pass);
        this.loginButton.click();
        helper.waitForTheElementToBeVisible(this.mainContainer);
    }
}
module.exports = new LoginPage();