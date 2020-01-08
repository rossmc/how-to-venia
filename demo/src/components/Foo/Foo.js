import React, { useState, useEffect } from 'react';
import Greeting from './greeting';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import defaultClasses from './Foo.css';
import CategoryList from '@magento/venia-ui/lib/components/CategoryList';
import ProductLink from './productLink';
import { connect } from 'react-redux';
import UpdateRedux from './updateRedux';

const Foo = props => {
  const { foo } = props;
  const classes = mergeClasses(defaultClasses);
  const [nameText, setNameText] = useState('');

  useEffect(() => {
    document.title = 'Foo Test Page';
  }, []);

  function handleChange(e) {
    return setNameText(e.target.value);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>Foo Component</h1>
      <hr className={classes.spacer} />
      <p className={classes.label}>A child component with propTypes &amp; CSS Modules:</p>
      <Greeting name="Joe Bloggs" className={classes.title} />
      <hr className={classes.spacer} />
      <p className={classes.label}>A React controlled input element:</p>
      <input type="text" value={nameText} onChange={handleChange} />
      <div>{nameText}</div>
      <hr className={classes.spacer} />
      <p className={classes.label}>Reuse of a the PWA Studio component to render a category list:</p>
      <CategoryList title="Foo Recommends" id={2} />
      <hr className={classes.spacer} />
      <p className={classes.label}>A custom React Component using GraphQl &amp; Apollo</p>
      <ProductLink sku="VT11" />
      <hr className={classes.spacer} />
      <p className={classes.label}>The input below is interacting with Redux:</p>
      <UpdateRedux test={foo.test} />
      <p style={{ marginTop: 10 }}>{foo.test}</p>
    </div>
  );
}

const mapStateToProps = ({ foo }) => ({ foo });
export default connect(mapStateToProps)(Foo);