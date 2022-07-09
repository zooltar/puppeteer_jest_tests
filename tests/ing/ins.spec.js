import 'expect-puppeteer'
import IngHomePage from '../../pages/ing/homepage'

describe('ING', () => {
  jest.setTimeout(15000)
  let helper

  beforeAll(async () => {
    await page.goto('https://www.ing.pl/', {
      waitUntil: 'networkidle0',
    })
    helper = new IngHomePage(page)
  })

  it('page title should be "ING Bank Śląski"', async () => {
    await expect(await page.title()).toMatch('ING Bank Śląski')
  })

  it('unit tests', async () => {
    await helper.runUnitTests(helper.unitTests)
  })
})
