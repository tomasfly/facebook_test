class ConfigureDriver{
    configureDriver(){
        browser.waitForAngularEnabled(false);        
    }

}

module.exports = new ConfigureDriver();