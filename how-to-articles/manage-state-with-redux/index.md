# Manage State with Redux

PWA Studio's Venia storefront uses [Redux] to manage the appliction state. If you're not familiar with Redux you should do some reseach online so you have basic understanding of it.  

### Introduction
First lets look at how PWA Studio uses Redux by installing the [Redux DevTools] extension for Chrome.  Once you have it installed, browse to the [Venia storefront] and explore what it has in it's Redux Store.
![redux store in devtools](./redux-store-screenshot.png)

Next explore the following files & directories in the venia-concept package and look up their description in the [docs].

1. [src/index.js](https://github.com/magento-research/pwa-studio/blob/v2.1.0/packages/venia-concept/src/index.js#L6-L7)
2. [src/store.js](https://github.com/magento-research/pwa-studio/blob/v2.1.0/packages/venia-concept/src/store.js)
3. [src/reducers](https://github.com/magento-research/pwa-studio/tree/v2.1.0/packages/venia-concept/src/reducers)
4. [src/actions](https://github.com/magento-research/pwa-studio/tree/v2.1.0/packages/venia-concept/src/actions)
5. [src/middleware](https://github.com/magento-research/pwa-studio/tree/v2.1.0/packages/venia-concept/src/middleware)

### Add to The Redux Store
Create the following file...

_src/reducers/foo.js_
```javascript
import { handleActions } from 'redux-actions';
 
import actions from 'src/actions/app'; // we'll use these actions for now, and create our own one later
 
export const name = 'foo';
 
const initialState = {
    test: 'lorem ipsum'
};
 
const reducerMap = {
    [actions.toggleDrawer]: (state, { payload }) => {
        return {
            ...state,
            test: payload
        };
    }
};
 
export default handleActions(reducerMap, initialState);
```

Pay note of [handleActions] which replaces the traditional [switch statement] often used in Reducers.

Now go to the src/reducers/index.js file and the following import for the file you just created:     
`import foo from './foo';`

Then add `foo` to the exported combineReducers function.

Now check to the  storefront and you should be able to see foo.test added to the Redux State, open & close the navigation menu and it should update.

### Get from The Redux Store
We'll display the foo.test value we set in the Redux store in the Foo component we created earlier.  Open the src/components/Foo/Foo.js file and add the following import.

`import { connect } from 'src/drivers'; // this includes connect from react-redux`

Now replace the export statement with the following:
```javascript
const mapStateToProps = ({ foo }) => ({ foo });
export default connect(mapStateToProps)(classify(defaultClasses)(Foo));
```

And add the following to your JSX:
```javascript
<hr className={classes.spacer}/>
<p className={classes.label}>The Text below is from Redux:</p>
<p>{this.props.foo.test}</p>
```

Browse to /foo.html to see _"lorem ipsum"_ you have added to the redux store.

#### Refactor
PWA Studio seperates the much logic for handling Redux from the main component file.
Lets fo the same by creating:

_src/components/Foo/container.js_
```javascript
import { connect } from 'src/drivers';
import Foo from './Foo';
 
const mapStateToProps = ({ foo }) => ({ foo });
 
export default connect(
    mapStateToProps,
)(Foo);
```

Next update _src/components/Foo/index.js_ to be:
```
export { default } from './container';
export { default as Foo } from './Foo';
```

Now remove the following lines from Foo.js
```javascript
import { connect } from 'src/drivers';
const mapStateToProps = ({ foo }) => ({ foo });
```

And replace the export statement back to what it was previously:     
`export default classify(defaultClasses)(Foo);`

Browse to /foo.html to see the _"lorem ipsum"_ is still coming from the redux store.

### Update The Redux Store

#### Created an Action
To update the Redux store we first need to add a [redux action].

Add the following files...

_src/actions/foo/actions.js_
```javascript
import { createActions } from 'redux-actions';
 
const prefix = 'FOO';
const actionTypes = [
    'UPDATE_TEST'
];
 
export default createActions(...actionTypes, { prefix });
```

_src/actions/foo/asyncActions.js_
```javascript

import actions from './actions';
 
export const updateTest = value => async dispatch =>
    dispatch(actions.updateTest(value));
```

_src/actions/foo/index.js_
```javascript
export { default } from './actions';
export * from './asyncActions';
```

**NOTE:** PWA Studio's Venia uses:

- [createActions] to create multiple actions at once.
- [async actions] which are useful when API responses update the redux store.

#### Update the Reducer with the New Action
Now that we have our redux action created add it to our reducer go to _how-to-venia/_src/reducers/foo.js_ and change the `import actions` statement to:     
`import actions from 'src/actions/foo';`

And in the `reducerMap` change `toggleDrawer` to `actions.updateTest`.

#### Create a component to update the Redux Store

Next we'll create a new child component which will use the action above to update the redux store.

_src/components/Foo/updateRedux.js_
```javascript
import React, { Component } from 'react';
import { connect } from 'src/drivers';
import { compose } from 'redux';
import { PropTypes, func, string } from 'prop-types';
import { updateTest } from 'src/actions/foo';
 
class updateRedux extends Component {
    static propTypes = {
        test: PropTypes.string,
        updateTest: PropTypes.func.isRequired
    };
 
    render() {
        const { test, updateTest } = this.props;
 
        return (
            <input type="text" value={test} onChange={updateTest}/>
        );
    }
}
 
const mapDispatchToProps = dispatch => ({
    updateTest: (e) => dispatch(updateTest(e.target.value))
});
 
export default compose(
    connect(
        null,
        mapDispatchToProps
    )
)(updateRedux);
```

Import the above component to the FOO Component.     
`import UpdateRedux from './updateRedux';`

And add it to the JSX:    
`<UpdateRedux test={this.props.foo.test} />`

Now test it by typing into the new input box while checking Redux dev tools to see the value in the Redux store update.



---
- [> see other topics](../../README.md#Topics)
- [> see foo-demo branch for completed code](https://github.com/rossmc/how-to-venia/tree/foo-demo/src)

[Redux]: https://redux.js.org/
[Redux DevTools]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd
[Venia storefront]: https://veniapwa.com/
[docs]: https://magento-research.github.io/pwa-studio/venia-pwa-concept/project-structure/
[handleActions]: https://redux-actions.js.org/api/handleaction
[switch statement]: https://redux.js.org/basics/reducers#handling-more-actions
[redux action]: https://redux.js.org/basics/actions
[createActions]: https://redux-actions.js.org/api/createaction
[async actions]: https://redux.js.org/advanced/async-actions#async-actions