exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['tests/signaturit.spec.js'],
    directConnect: true,
    capabilities: {
      'browserName': 'chrome',
      'chromeOptions': {
        'args': ['--disable-notifications']
      }
    },
  }