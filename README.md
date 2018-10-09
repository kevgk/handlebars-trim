# handlebars-trim
A handlebars helper, that removes indentations from each line.
Useful, when working with partials or layouts, where you can't use ```{{~#}}```

## Install
```js
  npm i handlebars-trim
```

## Register the helper
```js
  const handlebars = require('handlebars');
  const hbTrim = require('handlebars-trim');

  handlebars.registerHelper('trim', hbTrim);
```

## How to use
```js
  handlebars.compile('{{#trim}}  <p>Does it Work?</p>{{/trim}}');
```