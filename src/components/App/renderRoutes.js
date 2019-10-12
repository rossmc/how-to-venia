import React from 'react';
import { Switch, Route } from '@magento/venia-drivers';
import { Page } from '@magento/peregrine';
import ErrorView from '@magento/venia-ui/lib/components/ErrorView/index';
import CreateAccountPage from '@magento/venia-ui/lib/components/CreateAccountPage/index';
import Search from '@magento/venia-ui/lib/RootComponents/Search';
import Foo from 'src/components/Foo';

const renderRoutingError = props => <ErrorView {...props} />;

const renderRoutes = () => (
    <Switch>
        <Route exact path="/search.html" component={Search} />
        <Route exact path="/create-account" component={CreateAccountPage} />
        <Route exact path="/foo.html" component={Foo} />
        <Route render={() => <Page>{renderRoutingError}</Page>} />
    </Switch>
);

export default renderRoutes;
