# Add a link to the Footer
The project is set up to import the Footer component from @magento/venia-concept.
Let replace it with our own by copying the Footer component from Venia to our own storefront.     
`cp -R  node_modules/\@magento/venia-concept/src/components/Footer src/components/`

Next in _src/components/Main/main.js_ change the import statement for the footer to:    
`import Footer from 'src/components/Footer';`

Not the Project will load our local Footer component.  We need to add React's Link element which we get from _src/drivers_:     
`import { Link } from 'src/drivers';`

Finally add the below JSX to render the Link for the _foo.html_ static route:
```javascript
<div className={classes.tile}>
    <p className={classes.tileBody}>
        <Link to="/foo.html">Foo Demo Page</Link>
    </p>
</div>
```


---
[> see other topics](../../README.md#Topics)