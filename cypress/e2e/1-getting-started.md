## cy.contains example

Trying to check [https://twitter.com/Kmaschta/status/1189120060054540289](https://twitter.com/Kmaschta/status/1189120060054540289)

To run this fiddle in this repo:

```
npm run cy:md
```

Then click on "contains-example.md" spec file.

<!-- fiddle-start -->

<!-- fiddle CSS Code block -->

```html
<div id="getting-started">Getting Started</div>
<h2>
  Getting Started
  <h2>
    <p>Get started with your documentation here...</p>
  </h2>
</h2>
```

```css
#getting-started {
  color: #f0f;
  padding: 1rem;
  font-weight: bold;
}
```

```js
cy.get("#getting-started")
  .should("have.text", "Getting Started")
  .and("have.css", "color", "rgb(255, 0, 255)");
```

<!-- fiddle-end -->
