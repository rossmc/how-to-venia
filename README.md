# How to Venia
## What?
This is a Magento 2.3.1 PWA Storefront built with the new [scaffolding mechanism] available from [PWA Studio] v4.1.0-dev.0.

More than that, it's a collection of **[how-to-articles]** which can be followed to give you a basic understanding of how to work with [PWA Studio] 
by creating a storefront based on Magento's [Venia Storefront (Concept)], [venia.magento.com].

## Why?
As I started to explore [PWA Studio] I kept notes to help me understand how it worked. 
As a Magento front-end developer there are new skills to master :smile:
I thought that these notes may be helpful to others who were in a similar position.

PWA Studio has not offered a clear way of setting up a PWA Studio app until recently.  
Previously you needed to clone their [monorepo] which was not a straightforward process, _(see [v1.0.0 of this repo])_.

Fortunately, PWA Studio improves this process with their new scaffolding mechanism, 
currently this is only available with a prototype command and has little documentation.  

Here I share my understanding of how it can work and be used to create your own custom PWA Studio storefront.

## How?

### How-to-Articles
Notes have been kept in markdown format in the [./how-to-articles/] directory.  
They cover basic [React] & [PWA Studio] concepts which I think may be useful to front-end developers with limited React & PWA experience.

#### Topics
1. [Project Set-Up](./how-to-articles/project-set-up/index.md)
    - [Project Structure](./how-to-articles/project-set-up/project-structure.md)
1. [Add a static route](./how-to-articles/add-a-static-route/index.md)
    - [Routing with PWA Studio](./how-to-articles/add-a-static-route/routing-with-pwa-studio.md)
1. [Update Site Footer](./how-to-articles/update-site-footer/index.md)
1. [Props & propTypes](./how-to-articles/props-proptypes/index.md)
1. [CSS Modules](./how-to-articles/css-modules/index.md)
1. [Configure CSS modules to use SCSS](./how-to-articles/css-modules-for-scss/index.md) (TODO)
1. [Component State](./how-to-articles/component-state/index.md)
1. [Reuse a PWA Studio component](./how-to-articles/reuse-a-venia-component/index.md)
1. [Explore Magento's GraphQL API in GraphiQL](./how-to-articles/explore-graphql-with-graphiql/index.md)
1. [Use Magento's GraphQL API with Apollo](./how-to-articles/use-magentos-graphql-api/index.md)
1. [Manage State with Redux](./how-to-articles/manage-state-with-redux/index.md)
1. [React Hooks](./how-to-articles/react-hooks/index.md) (TODO)
1. [Redux with Apollo Client](./how-to-articles/redux-with-apollo-client/index.md) (TODO)
1. [Use Magento's REST API](./how-to-articles/use-magentos-rest-api/index.md) (TODO)
1. [Use a another GraphQL API](./how-to-articles/use-another-graphql-api/index.md) (TODO)
1. [Use a another REST API](./how-to-articles/use-another-rest-api/index.md) (TODO)

### Quick Setup
#### Prerequisites
* [NodeJS >=10.14.1 LTS](https://nodejs.org/en/)
* [Yarn >=1.13.0](https://yarnpkg.com)
* Python 2.7 and build tools, [see the Installation instructions on `node-gyp`](https://github.com/nodejs/node-gyp#installation) for your platform.
* A unix based OS for example MacOS or Linux

```bash
git clone git@github.com:rossmc/how-to-venia.git
cd how-to-venia

# install dependencies
yarn install

# set default environment variables
cp .env.example .env

# start the app with development environment which includes hot-reloading
yarn watch

# OR run the staging environment which will more closely reflect production
yarn build:prod
yarn start
```

## Credits
Magento for creating [PWA Studio].

[PWA Studio]: https://magento.github.io/pwa-studio/
[venia.magento.com]: http://venia.magento.com/
[Venia Storefront (Concept)]: https://magento.github.io/pwa-studio/venia-pwa-concept/
[@magento/venia-concept]: https://www.npmjs.com/package/@magento/venia-concept
[re-invent the wheel]: https://en.wikipedia.org/wiki/Reinventing_the_wheel
[what magento says]: https://community.magento.com/t5/Magento-DevBlog/PWA-Studio-2-1-0-has-been-released/ba-p/127492
[@magento/peregrine]: https://www.npmjs.com/package/@magento/peregrine
[how-to-articles]: #How-to-Articles
[Venia storefront setup]: https://magento.github.io/pwa-studio/venia-pwa-concept/setup/
[monorepo]: https://github.com/magento-research/pwa-studio#about-this-repository
[@magento]: https://www.npmjs.com/org/magento
[Yarn Workspaces]: https://yarnpkg.com/en/docs/workspaces/
[fallback-studio]: https://github.com/Jordaneisenburger/fallback-studio
[ScandiPWA]: https://scandipwa.com/
[DEITY Falcon]: https://github.com/deity-io/falcon
[./how-to-articles/]: ./how-to-articles/
[PWA Studio]: https://github.com/magento-research/pwa-studio
[React]: https://reactjs.org/
[monorepo]: https://github.com/magento/pwa-studio/#about-this-repository
[v1.0.0 of this repo]: https://github.com/rossmc/how-to-venia/tree/1.0.0
[scaffolding mechanism]: https://github.com/magento/pwa-studio/blob/develop/pwa-devdocs/_drafts/scaffolding/index.md
