import React, { Component } from 'react';
import { Link } from '@magento/venia-ui/lib/drivers';

import { useQuery } from '@apollo/react-hooks';
import GET_PRODUCT_DATA from '../../queries/getProductData.graphql';  // import the query you created above
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';

const productLink = props => {
  const { loading, error, data } = useQuery(GET_PRODUCT_DATA, {
    variables: { sku: props.sku }
  });

  let result = '';

  if (error) {
    result = 'An error occurred while fetching results.';
  } else if (loading) {
    result = (
      <LoadingIndicator />
    );
  } else if (!data.products.items) {
    result = 'No results were found.';
  } else {
    result = (
      <Link to={"/" + data.products.items[0].url_key + ".html"}>
        <img src={data.products.items[0].image.url} width="80px" /><br />
        {data.products.items[0].name}
      </Link>
    );
  }

  return result;
}

export default productLink;