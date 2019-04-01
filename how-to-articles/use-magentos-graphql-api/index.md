# Use Magento's GraphQL API with Apollo
PWA Studio's Venia storefront uses Apollo Queries to fetch data. If you're not familiar with [React Apollo] do some reseach online so you have basic understanding of it.    

Create the below file:

_src/queries/getBaseCurrencyCode.graphql_
```graphql
query getBaseCurrencyCode {
  storeConfig {
    base_currency_code
  }
}
```

Create a new child component:

_src/components/Foo/currencyCode.js_
```javascript
import React, { Component } from 'react';
 
import { Query } from 'src/drivers';  // this component is origionally from react-apollo
import currencyCodeQuery from '../../queries/getBaseCurrencyCode.graphql';  // import the query you created above
 
 
class currencyCode extends Component {
 
    render() {
        return (
            <Query query={currencyCodeQuery}>
                {({ loading, error, data }) => {
                    if (error) {
                        return (
                            <div>
                                Data Fetch Error: <pre>{error.message}</pre>
                            </div>
                        );
                    }
                    if (loading) {
                        return <div>loading...</div>;
                    }
 
                    return (
                        <div>{data.storeConfig.base_currency_code}</div>
                    );
                }}
            </Query>
        );
    }
}
 
export default currencyCode;
```

Add the `<CurrencyCode />` component to the JSX section of the Foo component. _Don't forget to import it!_
Browse to the /foo.html URL in the application.

Import the loadingIndicator Venia component to currencyCode.js:
`import { loadingIndicator } from 'src/components/LoadingIndicator';`

Replace `<div>loading...</div>` with `<loadingIndicator />`.

Browse to the /foo.html URL in the application.

---
- [> see other topics](../../README.md#Topics)
- [> see foo-demo branch for completed code](https://github.com/

[React Apollo]: https://github.com/apollographql/react-apollo