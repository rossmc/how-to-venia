# Copy Venia Concept Storefront
Rather than clone this repository you can set up your own by following the instructions below to pull the [@magento/venia-concept] package from the [pwa-studio monorepo], to create your own PWA Storefront.
Why [re-invent the wheel]?

### Clone & Copy
Use the following commands to clone the pwa-studio mono repo and copy it's venia concept to use as your projects base setup.
```bash
git clone https://github.com/magento-research/pwa-studio.git pwa-studio-temp
cd pwa-studio-temp

# Chekout the latest version
git checkout tags/v2.1.0 -b v2.1.0

# make a copy of the venia-concept package
cp -r packages/venia-concept ../how-to-venia

# we also need to copy some files from the workspace root directory of the pwa-studio monorepo
cp babel.config.js ../how-to-venia/
cp browserslist.js ../how-to-venia/
cp magento-compatibility.js ../how-to-venia/

# install dependencies
cd ../how-to-venia/
yarn install

# add a dependencies which are handled by PWA Studio in their workspace root
yarn add -D babel-plugin-module-resolver babel-eslint

# Create enviroment variables file, uses public Magento backend by default
cp .env.dist .env
```

Stop here and continue to [Step 2] of the project setup with a like for like copy of the Venia Concept storefront. 

Alternativly you can experiment by using [@magento/venia-concept] as a dependency in your project as I tried to outline in the [set-venia-as-project-dependency document].


---
- [> see other topics](../../README.md#Topics)

[@magento/venia-concept]: https://www.npmjs.com/package/@magento/venia-concept
[pwa-studio monorepo]: https://github.com/magento-research/pwa-studio#about-this-repository 
[set-venia-as-project-dependency document]: ./set-venia-as-project-dependency.md
[re-invent the wheel]: https://en.wikipedia.org/wiki/Reinventing_the_wheel
[Step 2]: ./index.md#2-change-the-name-of-your-project
