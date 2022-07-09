import 'expect-puppeteer'
import IngLogin from '../../pages/ing/login'

describe('ING login page', () => {
  jest.setTimeout(15000)
  let helper

  beforeAll(async () => {
    await page.goto('https://www.ing.pl/', {
      waitUntil: 'networkidle0',
    })
    helper = new IngLogin(page)
  })

  it('page title should be "ING Bank Śląski"', async () => {
    await expect(await page.title()).toMatch('ING Bank Śląski')
  })

  it('unit tests', async () => {
    await helper.runUnitTests(helper.unitTests)
  })

  it('open login page', async () => {
    await expect(page).toClick('button', { text: 'Zaakceptuj' })
    await expect(page).toClick(helper.elements.loginToggler)
    await Promise.all([
      await expect(page).toClick(helper.unitTests.loginButton),
      await page.waitForNavigation({ waitUntil: 'networkidle2' }),
    ])
    await page.waitForSelector('#login-input')
  })
})
