# CSS Modules
PWA Studio uses [CSS Modules] to scope styles to a component without side effects on other pieces of the page.   
To use them start by adding the following CSS file:

_src/components/Foo/Foo.css_
```css
.root {
    padding: 3rem 1rem 1rem;
    text-align: center;
}
 
.title {
    text-transform: uppercase;
}
 
.title,
.greeting {
    padding-bottom: .5rem;
}
 
.spacer {
    max-width: 500px;
    border-color: #ddd;
    border-top: 0;
    margin: 36px auto;
}
 
.label {
    color: #666;
    padding-bottom: 8px;
    font-style: italic;
    font-size: 14px;
}
```

Import the PWA studio's classify [HOC] and the CSS classes from the above _Foo.css_ into the Foo component:    
`import classify from 'src/classify';`   
`import defaultClasses from './Foo.css';`

Use the classify [HOC] to export the generated CSS classes on the MonsoonTest component.    
`export default classify(defaultClasses)(Foo);`

Use [es6's destructuring] syntax to assign class names added to REACT props by the classify HOC to a const within the *render()* function:    
`const { classes } = this.props;`

The CSS class names can now be added to the JSX with something like:

```javascript
return (
    <div className={classes.root}>
        <h1 className={classes.title}>Foo Component</h1>
        <hr className={classes.spacer}/>
        <p className={classes.label}>A child component with propTypes &amp; CSS Modules:</p>
        <Greeting name="Joe Bloggs" className={classes.title} />
    </div>
);
```

Inspect the `h1.title` element in the browser inspector to see how the CSS class name is scoped to the element.

![CSS Modules screenshot](./css-modules-screenshot.png)

---
- [> see other topics](../../README.md#Topics)
- [> see foo-demo branch for completed code](https://github.com/rossmc/how-to-venia/tree/foo-demo/src)

[CSS Modules]: https://magento.github.io/pwa-studio/technologies/basic-concepts/css-modules/
[HOC]: https://reactjs.org/docs/higher-order-components.html
[es6's destructuring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment