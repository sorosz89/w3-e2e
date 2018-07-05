'use strict';


module.exports = function () {

    var SEARCH_BUTTON_SELECTOR = '.w3-right > a[title="Search W3Schools"]',
        SEARCH_BAR_SELECTOR = '#gsc-iw-id1',
        SEARC_BAR_INPUTFIELD_SELECTOR = 'input#gsc-i-id1.gsc-input',
        SEARCH_BUTTON2_SELECTOR = "//button[@class='gsc-search-button gsc-search-button-v2']",
        SRL_POPUP_SELECTOR = ".gsc-results-wrapper-overlay",
        X_BUTTON_OF_SRL_SELECTOR = "//div[@class='gsc-results-close-btn gsc-results-close-btn-visible']",
        W3SCHOOL_LOGO_SELECTOR = '//div[@class="w3-half"]/a[@class="w3schools-logo"]',
        W3SCHOOL_LOGO_PHONE_SELECTOR = '//div[@class="w3-center"]/a[@class="w3schools-logo"]',
        HOME_BUTTON_SELECTOR = 'a.topnav-icons.fa-home.w3-left',
        TITLE_SELECTOR = '.w3-col > h1',
        NEXT_BUTTON_SELECTOR = 'a.w3-right.w3-btn',
        HAMBURGER_MENU_BUTTON_SELECTOR = 'a[class="w3-bar-item w3-button w3-hover-white w3-padding-16 hidesm"] > i[class="fa"]',
        HAMBURGER_MENU_SELECTOR = '#myAccordion > div.w3-container.w3-padding-32',
        TUTORIAL_BUTTON_SELECTOR = '//div[@class="w3-container w3-padding-32"]/a[contains(text(), "TUTORIALS")]';


    this.Given(/^the w3school site is loaded$/, () => {
        driver.get('https://www.w3schools.com/');
        return driver.wait(() => driver.findElement(by.css(SEARCH_BUTTON_SELECTOR)).isDisplayed());
    });
    this.When(/^the Search button is clicked$/, () => {
        driver.findElement(by.css(SEARCH_BUTTON_SELECTOR)).click();
        return driver.wait(() => driver.findElement(by.css(SEARCH_BAR_SELECTOR)).isDisplayed());
    });
    this.When(/^the "(.*)" term is typed into the Search bar$/, (search_term) => {
        driver.findElement(by.css(SEARC_BAR_INPUTFIELD_SELECTOR)).sendKeys(search_term);
    });
    this.When(/^the Search button is clicked on the page$/, () => {
        driver.findElement(by.xpath(SEARCH_BUTTON2_SELECTOR)).click();
        return driver.wait(() => driver.findElement(by.css(SRL_POPUP_SELECTOR)).isDisplayed());
    });
    this.When(/^the X button of the SRL popup is clicked$/, () => {
        driver.findElement(by.xpath(X_BUTTON_OF_SRL_SELECTOR)).click();
        return driver.sleep(1000);
    });

    this.When(/^the "(.*)" item is clicked on the bar block$/, (title) => {
        driver.findElement(by.xpath('//a[contains(text(), "' + title + '")]')).click();
    });
    this.When(/^the "(.*)" item is clicked on hamburger menu$/, (title) => {
        driver.findElement(by.xpath('//div[@class="w3-col l3 m6"]/a[contains(text(), "' + title + '")]')).click();
    });
    this.When(/^the Next button is clicked$/, () => {
        driver.findElement(by.css(NEXT_BUTTON_SELECTOR)).click();
    });
    this.When(/^the Hamburger menu is clicked$/, () => {
        driver.findElement(by.css(HAMBURGER_MENU_BUTTON_SELECTOR)).click();
        return driver.wait(() => driver.findElement(by.css(HAMBURGER_MENU_SELECTOR)).isDisplayed());
    });
    this.When(/^the "Tutorial" button is clicked$/, () => {
        driver.findElement(by.xpath(TUTORIAL_BUTTON_SELECTOR)).click();
    });
    this.When(/^the Home button is (displayed|hidden)$/, (visibility) => {
        return expect (driver.findElement(by.css(HOME_BUTTON_SELECTOR)).isDisplayed()).to.eventually.equal(visibility === 'displayed');
     });
     this.When(/^the Home button is clicked$/, () => {
         driver.findElement(by.css(HOME_BUTTON_SELECTOR)).click();
     });
     this.Then(/^the Hamburger menu should be (displayed|hidden)$/, (visibility) => {
         return expect(driver.findElement(by.css(HAMBURGER_MENU_BUTTON_SELECTOR)).isDisplayed()).to.eventually.equal(visibility === 'displayed');
     });
    this.Then(/^the Search bar should be (displayed|hidden)$/, (visibility) => {
        return expect(driver.findElement(by.css(SEARCH_BAR_SELECTOR)).isDisplayed()).to.eventually.equal(visibility === 'displayed');
    });

    this.Then(/^the SRL popup should be (displayed|hidden)$/, (visibility) => {
        return expect(driver.findElement(by.css(SRL_POPUP_SELECTOR)).isDisplayed()).to.eventually.equal(visibility === 'displayed');
    });
    
    this.Then(/^the "(.*)" should be displayed in the Search bar$/, placeholder_text => {
        return expect(driver.findElement(by.css(SEARC_BAR_INPUTFIELD_SELECTOR)).getAttribute("placeholder")).to.eventually.equal(placeholder_text);
    });
    this.Then(/^the w3school logo should be (displayed|hidden)$/, (visibility) => {
        return expect(driver.findElement(by.xpath(W3SCHOOL_LOGO_SELECTOR)).isDisplayed()).to.eventually.equal(visibility === 'displayed');
    });
    this.Then(/^the w3school logo should be (displayed|hidden) on phone layout$/, (visibility) => {
        return expect(driver.findElement(by.xpath(W3SCHOOL_LOGO_PHONE_SELECTOR)).isDisplayed()).to.eventually.equal(visibility === 'displayed');
    });
    this.Then(/^the URL should contain the "(.*)"$/, parameter => {
        return expect(driver.getCurrentUrl()).to.eventually.contain(parameter);
    });
    
    this.Then(/^the "(.*)" should match the opened page$/, tutorial_title => {
        return expect(driver.findElement(by.css(TITLE_SELECTOR)).getText()).to.eventually.equal(tutorial_title);
    });
    this.Then(/^the home page URL should contain the "(.*)"$/, parameter_2 => {
        return expect(driver.getCurrentUrl()).to.eventually.contain(parameter_2);
    });

};
