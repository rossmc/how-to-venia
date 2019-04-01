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