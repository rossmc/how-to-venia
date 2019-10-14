# Reuse a Venia Component
Here we'll quickly demonstrated how PWA Studio components can be easily reused.

Import the CategoryList to the Foo component:    
```javascript
import CategoryList from '@magento/venia-ui/lib/components/CategoryList';
```

Next add the following JSX.

```jsx
<hr className={classes.spacer} />
<p className={classes.label}>Reuse of a the PWA Studio component to render a category list:</p>
<CategoryList title="Foo Recommends" id={2} />
```

---
- [> see other topics](../../README.md#Topics)

[Roadmap]: https://github.com/magento-research/pwa-studio/wiki/Roadmap
[@magento/peregrine]: https://www.npmjs.com/package/@magento/peregrine
