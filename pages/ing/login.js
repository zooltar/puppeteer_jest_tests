import BasicPage from '../basicPage'

export default class IngLogin extends BasicPage {
  unitTests = {
    cookiePolicy: '.cookie-policy-content',
    acceptCookie:
      ".cookie-policy-btn-wrapper [class*='js-cookie-policy-main-accept-button']",
    loginButton: '.header__loginButton',
  }
  elements = {
    loginToggler: '.header__utilsLogin .header__loginToggler',
  }

  constructor(page) {
    super(page)
  }
}
