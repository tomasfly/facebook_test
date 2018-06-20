var commons = require('../resources/common.json');
var homePage = require('../pages/homePage.js');
var loginPage = require('../pages/loginPage.js');
var configureDriver = require('../configuration/configureDriver')
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const expect = chai.expect;
chai.use(chaiAsPromised);

describe('Search', function () {
    configureDriver.configureDriver();

    it('Facebook hello world.', function () {
        browser.get(commons.url);
        loginPage.login(commons.username, commons.password);
        homePage.makePost(commons.postText);
        homePage.verifyPost(commons.postText).then(function (result) {
            expect(result).to.be.true;
        });
    });
});