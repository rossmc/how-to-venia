import React, { Component } from 'react';
import Greeting from './greeting';
import classify from 'src/classify';
import defaultClasses from './Foo.css';
import CategoryList from '@magento/venia-concept/esm/components/CategoryList';
import CurrencyCode from './currencyCode';
import UpdateRedux from './updateRedux';
 
class Foo extends Component {
    state = {
        name: ''
    };
     
    handleChange = (e) =>{
        this.setState({name: e.target.value});
    };

    componentDidMount() {
        document.title = 'Foo Test Page';
    }
    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <h1 className={classes.title}>Foo Component</h1>
                <hr className={classes.spacer}/>
                <p className={classes.label}>A child component with propTypes &amp; CSS Modules:</p>
                <Greeting name="Joe Bloggs" className={classes.title} />
                <hr className={classes.spacer}/>
                <p className={classes.label}>A React controlled input element:</p>
                <input type="text" value={this.state.name} onChange={this.handleChange}/>
                <div>{this.state.name}</div>
                <hr className={classes.spacer}/>
                <p className={classes.label}>Reuse of a the PWA Studio component to render a category list:</p>
                <CategoryList title="Foo Recommends" id={2} />
                <hr className={classes.spacer}/>
                <p className={classes.label}>A child component which uses a custom apollo graphQL query<br />
                    to render data from the magento backend</p>
                <CurrencyCode />
                <hr className={classes.spacer}/>
                <p className={classes.label}>The Text below is from Redux:</p>
                <p>{this.props.foo.test}</p>
                <UpdateRedux test={this.props.foo.test} />
            </div>
        );
    }
}
 
export default classify(defaultClasses)(Foo);
