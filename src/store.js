import { createStore } from 'redux';

import middleware from '@magento/venia-concept/esm/middleware';
import errorHandler from '@magento/venia-concept/esm/middleware/errorHandler';
import reducer from 'src/reducers';
import composeEnhancers from '@magento/venia-concept/esm/util/composeEnhancers';

export default createStore(reducer, composeEnhancers(middleware, errorHandler));
