import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import MagentoRoute from '@magento/venia-ui/lib/components/MagentoRoute';

const CreateAccountPage = lazy(() => import('@magento/venia-ui/lib/components/CreateAccountPage'));
const Search = lazy(() => import('@magento/venia-ui/lib/RootComponents/Search'));
const Foo = lazy(() => import('../Foo'));

const Routes = () => {
    return (
        <Suspense fallback={fullPageLoadingIndicator}>
            <Switch>
                <Route exact path="/search.html">
                    <Search />
                </Route>
                <Route exact path="/create-account">
                    <CreateAccountPage />
                </Route>
                <Route exact path="/foo.html" component={Foo} />
                <Route>
                    <MagentoRoute />
                </Route>
            </Switch>
        </Suspense>
    );
};

export default Routes;
