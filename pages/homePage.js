var commons = require('../resources/common.json');
var helper = require('../utils/helper.js');

class HomePage {
    constructor() {
        this.postTextBox = element(by.id('pagelet_composer'));
        this.postButton = element(by.css('button[data-testid=react-composer-post-button]'));
    }

    makePost(post){
        helper.waitForTheElementToBeVisible(this.postTextBox);
        this.postTextBox.click();
        browser.actions().sendKeys(post).perform();
        helper.waitForTheElementToBeVisible(this.postButton);
        this.postButton.click();
        helper.waitForTheElementToBeInVisible(this.postButton);
    }

    verifyPost(post){
        let el = element(by.xpath("//p[text()='"+post+"']"));
        helper.waitForTheElementToBeVisible(el);
        return el.isPresent();
    }
}
module.exports = new HomePage();