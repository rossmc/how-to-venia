import React, { Component } from 'react';
import { Link } from '@magento/venia-ui/lib/drivers';

import { Query } from '../../drivers';  // this component is originally from react-apollo
import productDataQuery from '../../queries/getProductData.graphql';  // import the query you created above
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';

class productLink extends Component {
  render() {
    return (
      <Query query={productDataQuery} variables={{ sku: this.props.sku }} >
        {({ loading, error, data }) => {
          if (error) {
            return (
              <div>
                Data Fetch Error: <pre>{error.message}</pre>
              </div>
            );
          }
          if (loading) {
            return <LoadingIndicator>{`Fetching Product...`}</LoadingIndicator>;
          }

          return (
            <div>
              <Link to={"/" + data.products.items[0].url_key + ".html"}>
                <img src={data.products.items[0].image.url} width="80px" /><br />
                {data.products.items[0].name}
              </Link>
            </div>
          );
        }
        }
      </Query >
    );
  }
}

export default productLink;