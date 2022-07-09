import BasicPage from '../basicPage'

export default class IngHomePage extends BasicPage {
  unitTests = {
    logo: '.header__logoSourcze',
    loginToggler: '.header__loginToggler',
    searchPanel: '.header__searchControl',
  }
  elements = {
    loginButton: '.header__loginButton',
  }

  constructor(page) {
    super(page)
  }
}
