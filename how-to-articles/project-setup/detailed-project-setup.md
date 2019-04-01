# Detailed Project Setup
Rather than clone this repository you can set up your own by following the instructions below to pull the [@magento/venia-concept] package from the pwa-studio monorepo to create your own PWA Storefront based upon.

After you have a copy of the venia storefront, you can make the [@magento/venia-concept] a dependency of your project and then begin to replace components in your project with ones which you import from the @magento/venia-concept package.

### 1. Clone & Copy
Use the following commands to clone the pwa-studio mono repo and copy it's venia concept to use as your projects base setup.
```bash
git clone https://github.com/magento-research/pwa-studio.git pwa-studio-temp
cd pwa-studio-temp

# Chekout the latest version
git checkout v2.1.0

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

You can stop here and continue to [Step 2] of the project setup with a like for like copy of the Venia Concept storefront.  Alternativly you can continue to and use [@magento/venia-concept] as a dependency in your project.

### 2. Setup @magento/venia-concept as a dependency
The idea is that your PWA Storefront will use the tools from PWA Studio rather than just copy them.  Therefore we need to also add the [@magento/venia-concept] package as a dependency, and import the components it provides.

After we have @magento/venia-concept set up as a dependency we'll begin replacing components in the project with ones which we import from it, bit by bit, testing as we go.
You may decide you want to keep some components rather than import them, as you are planning on customising them yourself, the `<Footer />` component for example.

Lets begin by simply adding the package as a dependency:
```bash
yarn add -D @magento/venia-concept@2.1.0
```

#### Update webpack.config.js
Next you need to make the following change to _webpack.config.js_ so that your build correctly parses `.graphql` files from the _@magento/venia-concept_ pacakge:
```diff
webpack.config.js
@@ -67,7 +67,7 @@ module.exports = async function(env) {
             rules: [
                 {
                     test: /\.graphql$/,
-                    exclude: /node_modules/,
+                    exclude: /node_modules\/(?!(@magento\/venia-concept)\/).*/,
                     use: [
```

#### Update RootComponents
Next update the _RootComponents_ to use components from the [@magento/venia-concept] pacakge as shown in the below DIFF.
```diff
diff --git a/src/RootComponents/CMS/index.js b/src/RootComponents/CMS/index.js
index 7cd4c0f..dde691a 100644
--- a/src/RootComponents/CMS/index.js
+++ b/src/RootComponents/CMS/index.js
@@ -4,4 +4,4 @@
* pageTypes = CMS_PAGE
*/

-export { default } from './CMS';
+export { default } from '@magento/venia-concept/esm/RootComponents/CMS/CMS';
\ No newline at end of file
diff --git a/src/RootComponents/Category/index.js b/src/RootComponents/Category/index.js
index c7653cc..dfea352 100644
--- a/src/RootComponents/Category/index.js
+++ b/src/RootComponents/Category/index.js
@@ -3,4 +3,4 @@
* description = 'Basic Category Page'
* pageTypes = CATEGORY
*/
-export { default } from './category';
+export { default } from '@magento/venia-concept/esm/RootComponents/Category/category';
diff --git a/src/RootComponents/NotFound/index.js b/src/RootComponents/NotFound/index.js
index c098bd0..45388b1 100644
--- a/src/RootComponents/NotFound/index.js
+++ b/src/RootComponents/NotFound/index.js
@@ -3,4 +3,4 @@
* description = 'Page to display when offline'
* pageTypes = NOTFOUND
*/
-export { default } from './notFound';
+export { default } from '@magento/venia-concept/esm/RootComponents/NotFound/notFound';
diff --git a/src/RootComponents/Product/index.js b/src/RootComponents/Product/index.js
index 33b7f67..b7fb8a4 100644
--- a/src/RootComponents/Product/index.js
+++ b/src/RootComponents/Product/index.js
@@ -4,4 +4,4 @@
* pageTypes = PRODUCT
*/

-export { default } from './Product';
+export { default } from '@magento/venia-concept/esm/RootComponents/Product/Product';
diff --git a/src/RootComponents/Search/index.js b/src/RootComponents/Search/index.js
index cce4948..d6da62d 100644
--- a/src/RootComponents/Search/index.js
+++ b/src/RootComponents/Search/index.js
@@ -3,5 +3,5 @@
* description = 'Basic Search'
* pageTypes = SEARCH
*/
-export { default as Search } from './search';
-export { default } from './container';
+export { default as Search } from '@magento/venia-concept/esm/RootComponents/Search/search';
+export { default } from '@magento/venia-concept/esm/RootComponents/Search/container';
```

#### Remove unused RootComponents
```bash
cd src/RootComponents/

rm -rf Category/category* Category/images/ Category/__tests__/ CMS/CMS.js CMS/cmsPage.css NotFound/notFound.* Product/Product.js Product/mockData.js rm -rf Search/c* Search/s*

cd ../..
```

Test that your changes work by continuing to [Step 2], [Step 3] and [Step 4] of the project setup before returning to [Update src/components]

### Update src/components
Similarly do the same for the following components in the _src/components/_ directory.

**NOTE:** We will replace many the local components with those imported from the [@magento/venia-concept] package, in realiity you may want to keep some in your project locally as you plan to customise them.  
For example the `<Footer />` compononent. 
Eitherway you can always add/remove them later, [as demonstrated here]. 

```diff
diff --git a/src/components/App/app.js b/src/components/App/app.js
index 2245e8a..699ee2d 100644
--- a/src/components/App/app.js
+++ b/src/components/App/app.js
@@ -1,12 +1,12 @@
import React, { Component, Fragment } from 'react';
import { array, bool, func, shape, string } from 'prop-types';

import Main from 'src/components/Main';
-import Mask from 'src/components/Mask';
-import MiniCart from 'src/components/MiniCart';
-import Navigation from 'src/components/Navigation';
-import OnlineIndicator from 'src/components/OnlineIndicator';
-import ErrorNotifications from './errorNotifications';
+import Mask from '@magento/venia-concept/esm/components/Mask';
+import MiniCart from '@magento/venia-concept/esm/components/MiniCart';
+import Navigation from '@magento/venia-concept/esm/components/Navigation';
+import OnlineIndicator from '@magento/venia-concept/esm/components/OnlineIndicator';
+import ErrorNotifications from '@magento/venia-concept/esm/components/App/errorNotifications';

diff --git a/src/components/App/renderRoutes.js b/src/components/App/renderRoutes.js
index 9b4f01c..0a1a930 100644
--- a/src/components/App/renderRoutes.js
+++ b/src/components/App/renderRoutes.js
@@ -1,7 +1,7 @@
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Page } from '@magento/peregrine';
-import ErrorView from 'src/components/ErrorView/index';
-import ErrorView from 'src/components/CreateAccountPage/index';
+import ErrorView from '@magento/venia-concept/esm/components/ErrorView/index';
+import CreateAccountPage from '@magento/venia-concept/esm/components/CreateAccountPage/index';
import Search from 'src/RootComponents/Search';

diff --git a/src/components/Header/header.js b/src/components/Header/header.js
index 0441030..d9f593e 100644
--- a/src/components/Header/header.js
+++ b/src/components/Header/header.js
@@ -6,11 +6,11 @@ import { Link, resourceUrl, Route } from 'src/drivers';
-import Icon from 'src/components/Icon';
+import Icon from '@magento/venia-concept/esm/components/Icon';
import SearchIcon from 'react-feather/dist/icons/search';
import MenuIcon from 'react-feather/dist/icons/menu';
-import CartTrigger from './cartTrigger';
-import NavTrigger from './navTrigger';
-import SearchTrigger from './searchTrigger';
+import CartTrigger from '@magento/venia-concept/esm/components/Header/cartTrigger';
+import NavTrigger from '@magento/venia-concept/esm/components/Header/navTrigger';
+import SearchTrigger from '@magento/venia-concept/esm/components/Header/searchTrigger';

-const SearchBar = React.lazy(() => import('src/components/SearchBar'));
+const SearchBar = React.lazy(() => import('@magento/venia-concept/esm/components/SearchBar'));

-import defaultClasses from './header.css';
+import defaultClasses from '@magento/venia-concept/esm/components/Header/header.css';

diff --git a/src/components/Main/main.js b/src/components/Main/main.js
index 56ff9a5..9df2394 100644
--- a/src/components/Main/main.js
+++ b/src/components/Main/main.js
@@ -1,7 +1,7 @@
import React, { Component } from 'react';
import { bool, shape, string } from 'prop-types';

import classify from 'src/classify';
-import Footer from 'src/components/Footer';
+import Footer from '@magento/venia-concept/esm/components/Footer';
import Header from 'src/components/Header';
-import defaultClasses from './main.css';
+import defaultClasses from '@magento/venia-concept/esm/components/Main/main.css';    
```

 Now you can remove all the components from your project which are being imported from _@magento/venia-concept_.

#### Remove unused components
 ```bash
 cd src/components/

 rm -rf App/errorNotifications.* Button/ ButtonGroup/ CategoryList/ Checkbox/ Checkout/ CreateAccount/ CreateAccountPage/ CmsBlock/ ErrorDisplay/ ErrorView/ Field/ ForgotPassword/ Footer/ Gallery/ Header/*Trigger* Header/cartCounter.* Header/header.css Home/ Icon/*.js  Input/ LoadingIndicator/Main/main.css Mask/ MiniCart/ MyAccountMenuPage/ Navigation/ NotFound/ Notifications/ OnlineIndicator/ P* R* S* Text* Trigger/*.js

 cd ../..
 ```

 Test the app by running `yarn watch` before continuing.

### Update the classify componet
Update your project's to use the classify component from [@magento/venia-concept].
```diff
diff --git a/src/components/Header/header.js b/src/components/Header/header.js
index 5cc3336..61c6a92 100644
--- a/src/components/Header/header.js
+++ b/src/components/Header/header.js
@@ -1,7 +1,7 @@
 import React, { Component, Suspense } from 'react';
 import PropTypes from 'prop-types';
 
-import classify from 'src/classify';
+import classify from '@magento/venia-concept/esm/classify';
 import { Link, resourceUrl, Route } from 'src/drivers';
 import Icon from '@magento/venia-concept/esm/components/Icon';
 import SearchIcon from 'react-feather/dist/icons/search';
diff --git a/src/components/Logo/logo.js b/src/components/Logo/logo.js
index 853ebf6..2e7bac3 100644
--- a/src/components/Logo/logo.js
+++ b/src/components/Logo/logo.js
@@ -1,6 +1,6 @@
 import React, { Component } from 'react';
 import PropTypes from 'prop-types';
-import classify from 'src/classify';
+import classify from '@magento/venia-concept/esm/classify';
 import logo from './logo.svg';
 
 class Logo extends Component {
diff --git a/src/components/Main/main.js b/src/components/Main/main.js
index 56ff9a5..9df2394 100644
--- a/src/components/Main/main.js
+++ b/src/components/Main/main.js
@@ -1,7 +1,7 @@
 import React, { Component } from 'react';
 import { bool, shape, string } from 'prop-types';
 
-import classify from 'src/classify';
+import classify from '@magento/venia-concept/esm/classify';
 import Footer from '@magento/venia-concept/esm/components/Footer';
 import Header from 'src/components/Header';
 import defaultClasses from './main.css';
```
Then `rm src/classify.js` and test the app by running `yarn watch` before continuing.

### Remove middleware/ selectors/ shared/ & util/ directories
Before removing these folders you need to make sure your app imports them from [@magento/venia-concept] by updating the files below:
```diff
diff --git a/src/actions/checkout/asyncActions.js b/src/actions/checkout/asyncActions.js
index b8ce04a..46328e4 100644
--- a/src/actions/checkout/asyncActions.js
+++ b/src/actions/checkout/asyncActions.js
@@ -3,8 +3,8 @@ import { RestApi, Util } from '@magento/peregrine';
 import { closeDrawer } from 'src/actions/app';
 import { clearGuestCartId, createGuestCart } from 'src/actions/cart';
 import { getCountries } from 'src/actions/directory';
-import { getOrderInformation } from 'src/selectors/cart';
-import { getAccountInformation } from 'src/selectors/checkoutReceipt';
+import { getOrderInformation } from '@magento/venia-concept/esm/selectors/cart';
+import { getAccountInformation } from '@magento/venia-concept/esm/selectors/checkoutReceipt';
 import checkoutReceiptActions from 'src/actions/checkoutReceipt';
 import actions from './actions';
 
diff --git a/src/actions/purchaseDetails/itemsAndOrderDetailsMocks.js b/src/actions/purchaseDetails/itemsAndOrderDetailsMocks.js
index 455d443..d11fcf4 100644
--- a/src/actions/purchaseDetails/itemsAndOrderDetailsMocks.js
+++ b/src/actions/purchaseDetails/itemsAndOrderDetailsMocks.js
@@ -1,4 +1,4 @@
-import { transparentPlaceholder } from 'src/shared/images';
+import { transparentPlaceholder } from '@magento/venia-concept/esm/shared/images';
 
 export const itemMock = {
     id: 1,
diff --git a/src/actions/user/asyncActions.js b/src/actions/user/asyncActions.js
index f346e50..4c9bf2f 100755
--- a/src/actions/user/asyncActions.js
+++ b/src/actions/user/asyncActions.js
@@ -1,7 +1,7 @@
 import { RestApi } from '@magento/peregrine';
 import { Util } from '@magento/peregrine';
 import { removeGuestCart } from 'src/actions/cart';
-import { refresh } from 'src/util/router-helpers';
+import { refresh } from '@magento/venia-concept/esm/util/router-helpers';
 
 const { request } = RestApi.Magento2;
 const { BrowserPersistence } = Util;
diff --git a/src/components/App/app.js b/src/components/App/app.js
index 55f9802..03c431a 100644
--- a/src/components/App/app.js
+++ b/src/components/App/app.js
@@ -8,7 +8,7 @@ import Navigation from '@magento/venia-concept/esm/components/Navigation';
 import OnlineIndicator from '@magento/venia-concept/esm/components/OnlineIndicator';
 import ErrorNotifications from '@magento/venia-concept/esm/components/App/errorNotifications';
 import renderRoutes from './renderRoutes';
-import errorRecord from 'src/util/createErrorRecord';
+import errorRecord from '@magento/venia-concept/esm/util/createErrorRecord';
```

Then `rm -rf src/middleware src/selectors src/shared src/util` and test the app by running `yarn watch` before continuing.

### Remove actions/ directory
Before removing the `src/actions` folder you need to make sure your app imports them from [@magento/venia-concept] by updating the files below:
```diff
diff --git a/src/components/App/container.js b/src/components/App/container.js
index e051b7e..23e4bda 100644
--- a/src/components/App/container.js
+++ b/src/components/App/container.js
@@ -1,6 +1,6 @@
 import { connect } from 'src/drivers';
 
-import appActions, { closeDrawer } from 'src/actions/app';
+import appActions, { closeDrawer } from '@magento/venia-concept/esm/actions/app';
 import App from './app';
 
 const mapStateToProps = ({ app, unhandledErrors }) => ({
diff --git a/src/components/Header/container.js b/src/components/Header/container.js
index c659a9a..013e835 100644
--- a/src/components/Header/container.js
+++ b/src/components/Header/container.js
@@ -1,7 +1,7 @@
 import { connect } from 'src/drivers';
 
 import Header from './header';
-import { toggleSearch } from 'src/actions/app';
+import { toggleSearch } from '@magento/venia-concept/esm/actions/app';
 
 const mapStateToProps = ({ app }) => {
     const { searchOpen } = app;
diff --git a/src/index.js b/src/index.js
index 79ca5a7..11710c9 100755
--- a/src/index.js
+++ b/src/index.js
@@ -5,7 +5,7 @@ import { Util } from '@magento/peregrine';
 
:...skipping...
diff --git a/src/components/App/container.js b/src/components/App/container.js
index e051b7e..23e4bda 100644
--- a/src/components/App/container.js
+++ b/src/components/App/container.js
@@ -1,6 +1,6 @@
 import { connect } from 'src/drivers';
 
-import appActions, { closeDrawer } from 'src/actions/app';
+import appActions, { closeDrawer } from '@magento/venia-concept/esm/actions/app';
 import App from './app';
 
 const mapStateToProps = ({ app, unhandledErrors }) => ({
diff --git a/src/components/Header/container.js b/src/components/Header/container.js
index c659a9a..013e835 100644
--- a/src/components/Header/container.js
+++ b/src/components/Header/container.js
@@ -1,7 +1,7 @@
 import { connect } from 'src/drivers';
 
 import Header from './header';
-import { toggleSearch } from 'src/actions/app';
+import { toggleSearch } from '@magento/venia-concept/esm/actions/app';
 
 const mapStateToProps = ({ app }) => {
     const { searchOpen } = app;
diff --git a/src/index.js b/src/index.js
index 79ca5a7..11710c9 100755
--- a/src/index.js
+++ b/src/index.js
@@ -5,7 +5,7 @@ import { Util } from '@magento/peregrine';
 
 import { Adapter } from 'src/drivers';
 import store from 'src/store';
-import app from 'src/actions/app';
+import app from '@magento/venia-concept/esm/actions/app';
 import App from 'src/components/App';
 import './index.css';
 
diff --git a/src/reducers/__tests__/cart.spec.js b/src/reducers/__tests__/cart.spec.js
index 5d7dc04..bec9028 100644
--- a/src/reducers/__tests__/cart.spec.js
+++ b/src/reducers/__tests__/cart.spec.js
@@ -1,6 +1,6 @@
 import reducer, { initialState } from 'src/reducers/cart';
-import actions from 'src/actions/cart';
-import checkoutActions from 'src/actions/checkout';
+import actions from '@magento/venia-concept/esm/actions/cart';
+import checkoutActions from '@magento/venia-concept/esm/actions/checkout';
 
 const state = { ...initialState };
 
diff --git a/src/reducers/__tests__/catalog.spec.js b/src/reducers/__tests__/catalog.spec.js
index 37e6551..1e59b3d 100644
--- a/src/reducers/__tests__/catalog.spec.js
+++ b/src/reducers/__tests__/catalog.spec.js
@@ -1,5 +1,5 @@
 import reducer, { initialState } from '../catalog';
-import actions from 'src/actions/catalog';
+import actions from '@magento/venia-concept/esm/actions/catalog';
 
 const state = { ...initialState };
 
diff --git a/src/reducers/__tests__/checkoutReceipt.spec.js b/src/reducers/__tests__/checkoutReceipt.spec.js
index 3de48ef..5f3bd88 100644
--- a/src/reducers/__tests__/checkoutReceipt.spec.js
+++ b/src/reducers/__tests__/checkoutReceipt.spec.js
@@ -1,4 +1,4 @@
-import actions from 'src/actions/checkoutReceipt';
+import actions from '@magento/venia-concept/esm/actions/checkoutReceipt';
 import reducer from '../checkoutReceipt';
 
 const order = { id: 1, billing_address: {} };
diff --git a/src/reducers/__tests__/purchaseDetails.spec.js b/src/reducers/__tests__/purchaseDetails.spec.js
index 03aa1ef..d7a8a43 100644
--- a/src/reducers/__tests__/purchaseDetails.spec.js
+++ b/src/reducers/__tests__/purchaseDetails.spec.js
@@ -1,5 +1,5 @@
 import purchaseDetailsReducer from '../purchaseDetails';
-import actions from 'src/actions/purchaseDetails';
+import actions from '@magento/venia-concept/esm/actions/purchaseDetails';
 
 test('purchaseDetails.request: toggle isFetching to true', () => {
     expect(
diff --git a/src/reducers/__tests__/purchaseHistory.spec.js b/src/reducers/__tests__/purchaseHistory.spec.js
index ce4ed6f..e16c4fb 100644
--- a/src/reducers/__tests__/purchaseHistory.spec.js
+++ b/src/reducers/__tests__/purchaseHistory.spec.js
@@ -1,5 +1,5 @@
 import purchaseHistoryReducer from '../purchaseHistory';
-import actions from 'src/actions/purchaseHistory';
+import actions from '@magento/venia-concept/esm/actions/purchaseHistory';
 
 const mockInitialState = { items: [], isFetching: false };
 
diff --git a/src/reducers/app.js b/src/reducers/app.js
index e4b0d25..f6bc935 100644
--- a/src/reducers/app.js
+++ b/src/reducers/app.js
@@ -1,6 +1,6 @@
 import { handleActions } from 'redux-actions';
 
-import actions from 'src/actions/app';
+import actions from '@magento/venia-concept/esm/actions/app';
 
 export const name = 'app';
 
diff --git a/src/reducers/cart.js b/src/reducers/cart.js
index 1fe7219..88b98fc 100644
--- a/src/reducers/cart.js
+++ b/src/reducers/cart.js
@@ -1,7 +1,7 @@
 import { handleActions } from 'redux-actions';
 
-import actions from 'src/actions/cart';
-import checkoutActions from 'src/actions/checkout';
+import actions from '@magento/venia-concept/esm/actions/cart';
+import checkoutActions from '@magento/venia-concept/esm/actions/checkout';
 
 export const name = 'cart';
 
diff --git a/src/reducers/catalog.js b/src/reducers/catalog.js
index 2c15341..b9933da 100644
--- a/src/reducers/catalog.js
+++ b/src/reducers/catalog.js
@@ -1,6 +1,6 @@
 import { handleActions } from 'redux-actions';
 
-import actions from 'src/actions/catalog';
+import actions from '@magento/venia-concept/esm/actions/catalog';
 
 export const name = 'catalog';
 
diff --git a/src/reducers/checkout.js b/src/reducers/checkout.js
index efc99c8..1e112a6 100644
--- a/src/reducers/checkout.js
+++ b/src/reducers/checkout.js
@@ -1,7 +1,7 @@
 import { handleActions } from 'redux-actions';
 import get from 'lodash/get';
 import { Util } from '@magento/peregrine';
-import actions from 'src/actions/checkout';
+import actions from '@magento/venia-concept/esm/actions/checkout';
 
 const { BrowserPersistence } = Util;
 const storage = new BrowserPersistence();
diff --git a/src/reducers/checkoutReceipt.js b/src/reducers/checkoutReceipt.js
index d619724..95e0323 100644
--- a/src/reducers/checkoutReceipt.js
+++ b/src/reducers/checkoutReceipt.js
@@ -1,5 +1,5 @@
 import { handleActions } from 'redux-actions';
-import actions from 'src/actions/checkoutReceipt';
+import actions from '@magento/venia-concept/esm/actions/checkoutReceipt';
 
 const initialState = {
     order: {}
diff --git a/src/reducers/directory.js b/src/reducers/directory.js
index d720dc9..ed47d51 100644
--- a/src/reducers/directory.js
+++ b/src/reducers/directory.js
@@ -1,6 +1,6 @@
 import { handleActions } from 'redux-actions';
 
-import actions from 'src/actions/directory';
+import actions from '@magento/venia-concept/esm/actions/directory';
 
 export const name = 'directory';
 
diff --git a/src/reducers/purchaseDetails.js b/src/reducers/purchaseDetails.js
index 0d7d622..6cf6c64 100644
--- a/src/reducers/purchaseDetails.js
+++ b/src/reducers/purchaseDetails.js
@@ -1,5 +1,5 @@
 import { handleActions } from 'redux-actions';
-import actions from 'src/actions/purchaseDetails';
+import actions from '@magento/venia-concept/esm/actions/purchaseDetails';
 
 const initialState = {
     item: {},
diff --git a/src/reducers/purchaseHistory.js b/src/reducers/purchaseHistory.js
index 73d7218..c1957ee 100644
--- a/src/reducers/purchaseHistory.js
+++ b/src/reducers/purchaseHistory.js
@@ -1,6 +1,6 @@
 import { handleActions } from 'redux-actions';
 
-import actions from '../actions/purchaseHistory/actions';
+import actions from '@magento/venia-concept/esm/actions/purchaseHistory/actions';
 
 const initialState = {
     items: [],
diff --git a/src/reducers/user.js b/src/reducers/user.js
index ce1fcd4..fcde6fe 100755
--- a/src/reducers/user.js
+++ b/src/reducers/user.js
@@ -5,7 +5,7 @@ const { BrowserPersistence } = Util;
 
 const storage = new BrowserPersistence();
 
-import actions from 'src/actions/user';
+import actions from '@magento/venia-concept/esm/actions/user';
 
 export const name = 'user';
 ```

Then `rm -rf src/actions` and test the app by running `yarn watch` before continuing.

### Keep directory and files
As far as I could find, you cannot remove the following directory and files without breaking the app.
- src/drivers/
- src/queries/
- src/reducers/
- src/components/Icon/icon.css (imported in @magento/venia-concept with [composes])
- src/components/Trigget/trigger.css (same as above)
- src/components/clickable.css (similar to above)

---
- [> see other topics](../../README.md#Topics)

[Step 2]: ./index.md#2-change-the-name-of-your-project
[Step 3]: ./index.md#3-pdate-enviroment-variables
[Step 4]: ./index.md#4-tart-the-app
[Update src/components]: #update-src/components
[@magento/venia-concept]: https://www.npmjs.com/package/@magento/venia-concept
[as demonstrated here]: ../add-link-to-footer/index.md
[composes]: https://github.com/css-modules/css-modules#composing-from-other-files
