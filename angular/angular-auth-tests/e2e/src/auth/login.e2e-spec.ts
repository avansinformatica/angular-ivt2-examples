import { LoginPage } from './login.po'
import { browser, logging, element, by } from 'protractor'
import { protractor } from 'protractor/built/ptor'

/**
 * https://www.youtube.com/watch?v=ympTE-bLYaU
 */
describe('Login page', () => {
  let page: LoginPage

  /**
   *
   */
  beforeEach(() => {
    page = new LoginPage()
  })

  /**
   *
   */
  it('should be at /login route after initialisation', () => {
    browser.waitForAngularEnabled(false)
    page.navigateTo('/login')
    expect(browser.getCurrentUrl()).toContain('/login')
    expect(page.submitButton.isEnabled()).toBe(false)
  })

  /**
   *
   */
  it('should display correct error messages when no values are entered in inputs', () => {
    browser.waitForAngularEnabled(false)
    page.navigateTo('/login')

    page.emailInput.click()
    page.passwordInput.click()

    // https://stackoverflow.com/a/52782814/3471923
    page.emailInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'))
    page.emailInput.sendKeys(protractor.Key.BACK_SPACE)
    page.passwordInput.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'))
    page.passwordInput.sendKeys(protractor.Key.BACK_SPACE)

    browser.driver.sleep(100)

    expect(page.emailInvalidMessage).toBeTruthy()
    expect(page.emailInvalidMessage.getText()).toContain('enter a valid email address')
    expect(page.passwordInvalidMessage).toBeTruthy()
    expect(page.passwordInvalidMessage.getText()).toContain('enter a valid password')
    expect(page.submitButton.isEnabled()).toBe(false)
    expect(browser.getCurrentUrl()).toContain('localhost:4200/login')
  })

  /**
   * Promised approach
   */
  it('should login successfully when provided with a valid email and password', () => {
    browser.waitForAngularEnabled(false)
    page.navigateTo('/login')

    page.emailInput.sendKeys('test@server.com')
    page.passwordInput.sendKeys('secret')
    expect(page.submitButton.isEnabled()).toBe(true)

    page.submitButton.click()

    browser.driver.sleep(500)
    expect(browser.getCurrentUrl()).toContain('localhost:4200/dashboard')
    expect(element(by.id('user-fullname'))).toBeTruthy()

    // tslint:disable-next-line: quotemark
    const getStoredToken = "return window.localStorage.getItem('token');"
    browser.executeScript(getStoredToken).then(token => expect(token).toBeTruthy())
    // tslint:disable-next-line: quotemark
    const getStoredUser = "return window.localStorage.getItem('currentuser');"
    browser.executeScript(getStoredUser).then(user => expect(user).toBeTruthy())
  })

  /**
   *
   */
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser
      .manage()
      .logs()
      .get(logging.Type.BROWSER)

    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE
      } as logging.Entry)
    )

    // tslint:disable-next-line: quotemark
    browser.executeScript("window.localStorage.removeItem('token')")
    // tslint:disable-next-line: quotemark
    browser.executeScript("window.localStorage.removeItem('currentuser')")
  })
})
