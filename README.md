# ws_components
Examples from our Web Components lecture.

## Templates

### [Template 1](./examples/templates/template1.html)

In `template1.html` we define a web page with three parts: a button `b1`, an empty `main` element, and a template identified as `t1`.

When the button is clicked, the template is cloned and its contents are added to `main`.

The `cloneNode` function takes one parameter: `deep` which should be `true` if a deep copy of the template is desired (i.e. containing all text and element subnodes).  This is likely to be the desired behaviour for templates.

### [Template 2](./examples/templates/template2.html)


In `template2.html` we extend the example by altering the content of the template which now reads `<p>The time now is <em>not specified</em>.</p>`.

When the template is inserted into the page the current time replaces the words "not specified" in the template.

### [Template 3](./examples/templates/template3.html)

In `template2.html` we highlight that a page can contain multiple templates by comnbining the first two examples.  Each template must have a unique ID in order to be selectable.

## Shadow DOM

### [Shadow 1](./examples/shadowdom/shadow1.html)


In `shadow1.html` we define a web page with two parts: a button `b1`, and a `main` element which contains two sections, one of which has the id `example`.

This example introduces the concept of shadow DOM.  An instance of shadow DOM can contain elements just like the browser's normal DOM, and can be attached to the document just like any other element.

When the button is clicked, we create an instance of shadow DOM using the `attachShadow` method.  This replaces all the content of the `example` element that is being attached to.  We then add new content to the shadow DOM and it appears in place of the original paragraphs.

`attachShadow` takes an object parameter which *must* include a `mode` property, which can be `open` or `closed`.  A `closed` shadow DOM can be accessed and altered only by scripts that are contained within it.

### [Shadow 2](./examples/shadowdom/shadow2.html)

In `shadow2.html` we add a stylesheet to the shadow DOM.  The stylesheet contains one rule, setting all paragraphs to have red text.  The stylesheet only affects the paragraphs in the shadow DOM.

### [Shadow 3](./examples/shadowdom/shadow3.html)

In `shadow3.html` we see that we can use templates to populate shadow DOM elements.

### [Shadow 4](./examples/shadowdom/shadow4.html)

In `shadow4.html` the difference between an open and closed shadow DOM is illustrated.  Two shadow DOMs are created, one open, one closed.  The first can be written to by the JS, setting its innerHTML, the second cannot, and an error is thrown when the write is attemped.

## Web Components

### [Custom 1](./examples/custom/1/index.html)

### [Custom 2](./examples/custom/2/index.html)

### [Custom 3](./examples/custom/3/index.html)


### Custom 4 - See Also...

We've created a more 'useful' example of a web component called [img-melt](http://portsoc.github.io/img-melt/).

