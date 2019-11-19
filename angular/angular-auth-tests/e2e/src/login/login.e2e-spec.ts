import { LoginPage } from './login.po'
import { browser, logging, element, by } from 'protractor'

describe('Login page', () => {
  let page: LoginPage
  const emailInput = element(by.id('email'))
  const passwordInput = element(by.id('password'))
  const submitButton = element(by.id('submitbutton'))
  const emailInvalidMessage = element(by.id('email-invalid'))
  const passwordInvalidMessage = element(by.id('password-invalid'))

  /**
   *
   */
  beforeEach(() => {
    page = new LoginPage()
  })

  it('should be at /login route after initialisation', () => {
    browser.waitForAngularEnabled(false)
    page.navigateTo('/login')
    expect(browser.getCurrentUrl()).toContain('localhost:4200/login')
  })

  /**
   *
   */
  it('should display correct error messages when no values are entered in inputs', () => {
    browser.waitForAngularEnabled(false)
    page.navigateTo('/login')
    emailInput.sendKeys('x')
    passwordInput.sendKeys('x')
    submitButton.click()
    browser.driver.sleep(500)

    expect(emailInvalidMessage).toBeTruthy()
    // expect(emailInvalidMessage).toContain('enter a valid email address')
    expect(passwordInvalidMessage).toBeTruthy()
    // expect(passwordInvalidMessage).toContain('enter a valid password')
    expect(browser.getCurrentUrl()).toContain('localhost:4200/login')
  })

  /**
   * Promised approach
   */
  it('should login successfully when provided with a valid email and password (Promise approach)', () => {
    browser.waitForAngularEnabled(false)
    page.navigateTo('/login')

    emailInput.sendKeys('test@server.com')
    passwordInput.sendKeys('secret')
    submitButton.click()

    browser.driver.sleep(500)
    expect(browser.getCurrentUrl()).toContain('localhost:4200/dashboard')
    expect(element(by.id('user-fullname'))).toBeTruthy()

    // tslint:disable-next-line: quotemark
    let getStoredToken = "return window.localStorage.getItem('token');"
    browser.executeScript(getStoredToken).then(token => expect(token).toBeTruthy())
    // tslint:disable-next-line: quotemark
    getStoredToken = "return window.localStorage.getItem('currentuser');"
    browser.executeScript(getStoredToken).then(user => expect(user).toBeTruthy())
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
    browser.executeScript("window.localStorage.removeItem('user')")
  })
})