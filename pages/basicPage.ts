export default class BasicPage {
    page

    constructor(page) {
        this.page = page
    }

    async getElementImage(element) {
        return this.page.$eval(element, e => e.querySelector("img")["src"]);
    }

    async getElementValue(element) {
        return this.page.$eval(element, e => e.value);
    }

    async getElementInnerText(element) {
        return this.page.$eval(element, e => e.innerText);
    }

    async getElementClassName(element) {
        return this.page.$eval(element, e => e.className);
    }
}