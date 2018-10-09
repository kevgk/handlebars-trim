const test = require('ava');
const handlebars = require('handlebars');
const hbTrim = require('../index');

handlebars.registerHelper('trim', hbTrim);

test('removes indentations from the beginning of a string', t => {
  const template = '{{#trim}}  <p>Does it Work?</p>{{/trim}}';
  const fixed = handlebars.compile(template);
  t.is(fixed(), '<p>Does it Work?</p>');
});