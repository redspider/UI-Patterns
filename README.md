## UI Patterns

This is a pattern page intended to have just about every form of UI element I normally use on it, all styled using a lesscss stack.

### Usage

Just clone the repo locally and open patterns.html in a browser.

### Editing

If you're editing for use, you want to generally create a new -theme.less file and make any modifications in there. If
you're editing for play, change whatever, commit back improvements.

It's important to note that the browser will not always pick up changes if you change an included less file. For
production use of course this would never be an issue because you'd build your CSS prior to deployment etc, but for
playing it's handy to have less just do its thing. I'm sure there's a better solution but all I do is add/delete a
space in the app.less file every time I make a change, or set an instant expire on the whole CSS dir.

### Rules

* Where possible, CSS is used instead of javascript
* Hover is used only for highlighting on mouse over, in order to support touch devices
* All coloring, edge styling, borders etc are done within the theme
* Where possible, HTML should be minimal and semantic
* HTML5 elements are to be used as appropriate
* Browser support (with modernizer) is IE8 or greater, Chrome, Firefox 4, Safari .. something.
