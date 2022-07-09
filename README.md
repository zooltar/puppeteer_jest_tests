<p align="center" style="font-size: 1.2rem;">Test repository using Jest & Puppeteer</p>

## Usage

After checkouting the repository, install all dependencies by calling:

```bash
yarn && yarn install
```

### Running puppeteer tests

```sh
yarn run test
```

### Developing tests

Often time you will find that during development process, you would need to see what's happening in the browser context. There's a configuration that will launch chrome browser with headless mode disabled. Additionally, execution speed will be reduced to 100ms per action. This can be reconfigured in the jest-puppeteer.config.js file.

```sh
yarn run test:debug
```