# Project Structure
After installing a PWA Studio App with `npm init @magento/pwa` review the files and code in the `./src/` directory.

This is the directory where you can begin making customisations to your application.  
But there are not many files in this directory. 
This is because PWA Studio uses a [modular approach] to loading React components from the various PWA Studio packages, such as:
- [@magento/peregrine]
- [@magento/venia-ui]

These packages are used to create a PWA Studio app based on the [Venia Storefront (Concept)].    

So to start customising your project, you need to copy the React components from this library to the `./src/` directory, 
following the [Venia project structure]. It is worth reviewing Maagento's docs on [Venia project structure] and [Modular components] for this reason.

In subsequent topics we will explore how your project can be customised following this method.

---
- [> see other topics](../../README.md#Topics)

[modular approach]: https://magento.github.io/pwa-studio/technologies/theme-vs-storefront/#inheritance-vs-modularity
[@magento/peregrine]: https://www.npmjs.com/package/@magento/peregrine
[@magento/venia-ui]: https://www.npmjs.com/package/@magento/venia-ui
[Venia Storefront (Concept)]: https://magento.github.io/pwa-studio/venia-pwa-concept/
[Venia project structure]: https://magento.github.io/pwa-studio/venia-pwa-concept/project-structure/
[Modular components]: https://magento.github.io/pwa-studio/venia-pwa-concept/features/modular-components/
[Update site Footer]: ../update-site-footer/index.md
