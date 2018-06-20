var commons = require('../resources/common.json');


class Helper {
    constructor() {
    }
    waitForTheElementToBeVisible(element) {
        return browser.driver.wait(
            protractor.ExpectedConditions.visibilityOf(element, commons.timeout));
    }

    waitForTheElementToBeInVisible(element) {
        return browser.driver.wait(
            protractor.ExpectedConditions.invisibilityOf(element, commons.timeout));
    }
}
module.exports = new Helper();