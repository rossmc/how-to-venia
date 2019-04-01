import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Page } from '@magento/peregrine';
import ErrorView from '@magento/venia-concept/esm/components/ErrorView/index';
import CreateAccountPage from '@magento/venia-concept/esm/components/CreateAccountPage/index';
import Search from 'src/RootComponents/Search';
import Foo from 'src/components/Foo';

const renderRoutingError = props => <ErrorView {...props} />;

const renderRoutes = () => (
    <Switch>
        <Route exact path="/search.html" component={Search} />
        <Route exact path="/create-account" component={CreateAccountPage} />
        <Route exact path="/foo.html" component={Foo}/>
        <Route render={() => <Page>{renderRoutingError}</Page>} />
    </Switch>
);

export default renderRoutes;
