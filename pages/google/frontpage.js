import BasicPage from "../basicPage";

export default class Google extends BasicPage {
    searchButton = "[aria-label*='Google Search']";
    feelingLuckyButton = "[aria-label*='Feeling Lucky']";

    constructor(page) {
        super(page);
    }
}
