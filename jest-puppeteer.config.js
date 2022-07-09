module.exports = {
    launch: {
        defaultViewport: null,
        headless: process.env.CI ? true : false,
        devtools: process.env.CI ? true : false,
        slowMo: process.env.CI ? 0 : 100,
    },
    browserContext: 'incognito',
}