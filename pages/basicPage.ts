export default class BasicPage {
  page

  constructor(page) {
    this.page = page
  }

  async getElementImage(element) {
    return this.page.$eval(element, (e) => e.querySelector('img')['src'])
  }

  async getElementValue(element) {
    return this.page.$eval(element, (e) => e.value)
  }

  async getElementInnerText(element) {
    return this.page.$eval(element, (e) => e.innerText)
  }

  async getElementClassName(element) {
    return this.page.$eval(element, (e) => e.className)
  }

  async checkIfElementExists(
    element,
    options = { visible: true, timeout: 5000 },
  ) {
    const elem = await this.page.waitForSelector(element, options)
    expect(elem).toBeDefined()
  }

  async runUnitTests(obj) {
    let failedTests = []
    for (const [elem, selector] of Object.entries(obj)) {
      try {
        await this.checkIfElementExists(selector, {
          visible: true,
          timeout: 100,
        })
      } catch (error) {
        failedTests.push(elem)
      }
      try {
        expect(failedTests).toEqual(expect.arrayContaining([]))
      } catch (getElementClassName) {
        throw new Error(`Following unit tests have failed: ${failedTests}`)
      }
    }
  }
}
