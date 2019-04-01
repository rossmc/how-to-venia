# Reuse a Venia Component
Here we'll quickly demonstrated how PWA Studio components can be easily reused.

Import the CategoryList to the Foo component:    
`import CategoryList from '@magento/venia-concept/esm/components/CategoryList';`

Next add the following JSX.

```javascript
<p className={classes.label}>Reuse of a the PWA Studio component to render a category list:</p>
<CategoryList title="Foo Recommends" id={2} />
```

**Note:** In PWA Studio's 2019 [Roadmap] they plan to move catalog components such as the above, to their [@magento/peregrine] library.

---
- [> see other topics](../../README.md#Topics)
- [> see foo-demo branch for completed code](https://github.com/

[Roadmap]: https://github.com/magento-research/pwa-studio/wiki/Roadmap
[@magento/peregrine]: https://www.npmjs.com/package/@magento/peregrine