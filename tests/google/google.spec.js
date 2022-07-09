import 'expect-puppeteer'
import Google from '../../pages/google/frontpage'

describe('Google', () => {
  jest.setTimeout(15000)
  let helper

  beforeAll(async () => {
    await page.goto('https://www.google.com/webhp?hl=en', {
      waitUntil: 'networkidle0',
    })
    helper = new Google(page)
  })

  it('should display "google" text on page', async () => {
    await expect(page).toMatch('google')
  })

  it('RODO popup is displayed upon visiting for first time"', async () => {
    await expect(page).toClick('button', { text: 'Accept all' })
  })

  it('page title should be "google"', async () => {
    expect(await page.title()).toBe('Google')
  })

  it('search button should be visible', async () => {
    const buttonText = await helper.getElementValue(helper.searchButton)
    expect(buttonText).toMatch('Google Search')
  })

  it('feeling lucky button should be visible', async () => {
    const buttonText = await helper.getElementValue(helper.feelingLuckyButton)
    expect(buttonText).toMatch("I'm Feeling Lucky")
  })

  it('perform a search and assert results', async () => {
    await expect(page).toFill(helper.searchField, 'Pupppeteer')
    await Promise.all([
      await page.keyboard.press('Enter'),
      await page.waitForNavigation({ waitUntil: 'networkidle2' }),
    ])
    await page.waitForSelector('#search')
    await page.screenshot({ path: 'buddy-screenshot.png' })
    const searchResults = await page.$$('h1')
    const searchResultsTexts = await Promise.all(
      searchResults.map(async (elem) => {
        return await page.evaluate((e) => e.innerText, elem)
      }),
    )
    expect(searchResultsTexts).toContain('Search Results')
  })
})
