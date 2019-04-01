# Project Setup
This project is based on PWA Studio v2.1.0.  Please ensure you have the correct [stack prerequisites] installed locally before continuing.

### 1. Clone this repository
Simply start by cloning this repository or read the [Detailed Project Setup] doc to see how this repository was created.
```bash
git clone git@github.com:rossmc/how-to-venia.git
cd how-to-venia

# install dependencies
yarn install

# Create enviroment variables file, uses public Magento backend by default
cp .env.dist .env
```

### 2. Change the name of your Project
Change the `name` of your project in [package.json] so that your dev server is named correctly. 

### 3. Update Enviroment Variables
You can continue to use the public Magento 2.3.1 backend & braintree credentials set in [.env] or you can update them to use your own by changing the properties for `MAGENTO_BACKEND_URL` and `BRAINTREE_TOKEN`.

See the PWA Studio docs on [Specify the Magento backend server] for more details.

### 4. Start the App
```bash
# start the app with development environment which includes hot-reloading
yarn watch

# OR run the staging enviroment which will mor closely reflects production
yarn build:prod
yarn start
```

---
- [> see other topics](../../README.md#Topics)

[stack prerequisites]: https://magento-research.github.io/pwa-studio/venia-pwa-concept/setup/#prerequisites
[Detailed Project Setup]: ./detailed-project-setup.md
[package.json]: ../../package.json#L2
[.env]: ../../.env
[Specify the Magento backend server]: https://magento-research.github.io/pwa-studio/venia-pwa-concept/setup/#step-3-specify-the-magento-backend-server