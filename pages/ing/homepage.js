import BasicPage from '../basicPage'

export default class IngHomePage extends BasicPage {
  unitTests = {
    cookiePolicy: '.cookie-policy-content',
    acceptCookie:
      ".cookie-policy-btn-wrapper [class*='js-cookie-policy-main-accept-button']",
    logo: '.header__logoSource',
    loginToggler: '.header__loginToggler',
    searchPanel: '.header__searchControl',
    headerPanel: '.header__top',
    headerTop: '.header__top',
    headerMid: '.header__mid',
    headerMobile: '.header__mobile',
    headerBottom: '.header__bottom',
  }

  elements = {
    loginButton: '.header__loginButton',
  }

  constructor(page) {
    super(page)
  }
}
