# Add a Static Route
### Intro
Before adding a static route review [Routing with PWA Studio](./routing-with-pwa-studio.md)

---

Open _src/components/App/renderRoutes.js_.    
After the `create-account` route add the following static route with inline [JSX]:

```javascript
<Route exact path="/foo.html" render={() => <h3>Hello World JSX.</h3>}/>
```

Browse to the /foo.html URL in the application.

Next replace the inline [JSX] with a REACT component.

Start by adding the following files...

_src/components/Foo/index.js_
```javascript
export { default } from './Foo';
```

_src/components/Foo/Foo.js_
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

_src/components/App/renderRoutes.js_
```javascript

// place beneath the other import statements
import Foo from 'src/components/Foo';
 
// other code...
 
<Route exact path="/foo.html" component={Foo}/>
```

Browse to the _/foo.html_ URL in the application. 

---
- [> see other topics](../../README.md#Topics)
- [> see foo-demo branch for completed code](https://github.com/rossmc/how-to-venia/tree/foo-demo/src)

[JSX]: https://reactjs.org/docs/introducing-jsx.html
[Link]: https://knowbody.github.io/react-router-docs/api/Link.html