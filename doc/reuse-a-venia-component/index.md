---
title: Reuse a Venia Component
--- 

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

Check the storefront of the app to see the _CategoryList_ component rendered.

## Learn more

-   [Modular components][]

---
- [> see other topics](../../README.md#what-you-will-learn)

[Modular components]: https://magento.github.io/pwa-studio/venia-pwa-concept/features/modular-components/
