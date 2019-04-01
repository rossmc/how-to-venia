# Replace the header.css from @magento/venia-concept
Similarly to how we [replaced the Footer component earlier] we can do the same for _header.css_.
First copy the file from the @magento/venia-concept package:    
`cp -R  node_modules/\@magento/venia-concept/src/components/Header/header.css src/components/Header/`

Next change the defaultClasses import statement to the below:
`import defaultClasses from 'src/components/Header/header.css';`

Now edit the css in header.css as you wish.



---
- [> see other topics](../../README.md#Topics)
- [> see foo-demo branch for completed code](https://github.com/

[replaced the Footer component earlier]: ../add-link-to-footer/index.md