# Add a link to the Footer
The project is set up to import the Footer component from @magento/venia-concept.
Copy the _Main_ and _Footer_ component from the _@magento/venia-ui_ package.
```bash
cp -R node_modules/@magento/venia-ui/lib/components/Main src/components/
cp -R node_modules/@magento/venia-ui/lib/components/Footer src/components/
```

Then update the `import` statements for these components.

_[/src/components/Footer/footer.js]_
```javascript
import React, { useEffect } from 'react';
import { shape, string } from 'prop-types';

import { useQuery } from '@magento/peregrine';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './footer.css';
import storeConfigDataQuery from '@magento/venia-ui/lib/queries/getStoreConfigData.graphql';
```

_[/src/components/Main/main.js]_
```javascript
import React from 'react';
import { bool, shape, string } from 'prop-types';
import { useScrollLock } from '@magento/peregrine';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import Footer from '../Footer';
import Header from '@magento/venia-ui/lib/components/Header';
import defaultClasses from './main.css';
```

In _[/src/components/App/app.js]_ change:
```javascript
import Main from '@magento/venia-ui/lib/components/Main';
```
To:
```javascript
import Main from '../Main';
```

Now the Project should load our new Footer component.  To add a link to the footer, we need to add React's Link element which we get via [venia-ui/lib/drivers]:     
```javascript
import { Link } from '@magento/venia-ui/lib/drivers';
```

Finally add the below JSX to render the Link for the _foo.html_ static route:
```javascript
<div className={classes.tile}>
    <p className={classes.tileBody}>
        <Link to="/foo.html">Foo Demo Page</Link>
    </p>
</div>
```


---
- [> see other topics](../../README.md#Topics)

[/src/components/App/app.js]: /src/components/App/app.js
[/src/components/Main/main.js]: /src/components/Main/main.js
[/src/components/Footer/footer.js]: /src/components/Footer/footer.js
[venia-ui/lib/drivers]: https://github.com/magento/pwa-studio/tree/develop/packages/venia-ui/lib/drivers