import { by, element, ElementFinder } from 'protractor'
import { CommonPageObject } from '../common.po'

export class LoginPage extends CommonPageObject {
  get emailInput() {
    return element(by.id('email')) as ElementFinder
  }

  get passwordInput() {
    return element(by.id('password')) as ElementFinder
  }

  get submitButton() {
    return element(by.id('submitbutton')) as ElementFinder
  }

  get emailInvalidMessage() {
    return element(by.id('email-invalid')) as ElementFinder
  }

  get passwordInvalidMessage() {
    return element(by.id('password-invalid')) as ElementFinder
  }
}
