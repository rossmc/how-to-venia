# Add a Static Route
### Intro
Before adding a static route review [Routing with PWA Studio](./routing-with-pwa-studio.md)

---

To add a static rout we need to customise the component responsible for rendering routes.
Copy the _App_ component from the _@magento/venia-ui_ package.

```bash
mkdir src/components
cp -R node_modules/@magento/venia-ui/lib/components/App src/components/
```

Now lets correct the import statements within the _App_ component you just copied to use _@magento/venia-ui_ package, when necessary.    
Open [/src/components/App/app.js] and change the `import` statements to the following:
```javascript
import React, { Fragment, useCallback, useEffect, useMemo } from 'react';
import { array, bool, func, shape, string } from 'prop-types';

import { HeadProvider, Title } from '@magento/venia-ui/lib/components/Head';
import Main from '@magento/venia-ui/lib/components/Main';
import Mask from '@magento/venia-ui/lib/components/Mask';
import MiniCart from '@magento/venia-ui/lib/components/MiniCart';
import Navigation from '@magento/venia-ui/lib/components/Navigation';
import renderRoutes from './renderRoutes';
import errorRecord from '@magento/peregrine/lib/util/createErrorRecord';
import ToastContainer from '@magento/venia-ui/lib/components/ToastContainer';
import Icon from '@magento/venia-ui/lib/components/Icon';

import { getToastId, useToasts } from '@magento/peregrine';

import {
    AlertCircle as AlertCircleIcon,
    CloudOff as CloudOffIcon,
    Wifi as WifiIcon
} from 'react-feather';
```

Next open [/src/components/App/renderRoutes.js] and change it's import statements to the following:
```javascript
import React from 'react';
import { Switch, Route } from '@magento/venia-drivers';
import { Page } from '@magento/peregrine';
import ErrorView from '@magento/venia-ui/lib/components/ErrorView/index';
import CreateAccountPage from '@magento/venia-ui/lib/components/CreateAccountPage/index';
import Search from '@magento/venia-ui/lib/RootComponents/Search';
```

Next, in the same file, just after the `create-account` route add the following static route with inline [JSX]:

```jsx
<Route exact path="/foo.html" render={() => <h3>Hello World JSX.</h3>}/>
```

Now, lets use your new custom _App_ component in your application by opening [/src/index.js] changing

```javascript
import App, { AppContextProvider } from '@magento/venia-ui/lib/components/App';
```
to
```javascript
import App, { AppContextProvider } from './components/App';
```

Browse to the /foo.html URL in the application.

---

Now we will replace the inline [JSX] with a custom REACT component.

Start by adding the following files...

[/src/components/Foo/index.js]
```javascript
export { default } from './Foo';
```

[src/components/Foo/Foo.js]
```javascript
import React, { Component } from 'react';
 
class Foo extends Component {
 
 
    componentDidMount() {
        document.title = 'Foo Test Page';
    }
    render() {
        return (
            <h1>Hello Foo Component</h1>
        );
    }
}
 
export default Foo;
```

Return to the renderRoutes.js file and import the Foo component and update the route you previously added with it.

[/src/components/App/renderRoutes.js]
```javascript

// place beneath the other import statements
import Foo from 'src/components/Foo';
 
// other code...
 
<Route exact path="/foo.html" component={Foo}/>
```

Browse to the _/foo.html_ URL in the application. 

---
- [> see other topics](../../README.md#Topics)

[/src/components/App/app.js]: /src/components/App/app.js
[/src/components/App/renderRoutes.js]: /src/components/App/renderRoutes.js
[/src/index.js]: /src/index.js
[JSX]: https://reactjs.org/docs/introducing-jsx.html
[Link]: https://knowbody.github.io/react-router-docs/api/Link.html
[/src/components/Foo/index.js]: /src/components/Foo/index.js
[src/components/Foo/Foo.js]: src/components/Foo/Foo.js
