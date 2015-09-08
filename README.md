# translator

A javascript find/replace object that will translate (English) words in a specified section of a page, preserving case and plurality.

## Usage

```
Translation.define(from, to [, selector]);
```

Define a translation for the entire `<body>` of a page:
```
Translation.define('book', 'livre');
```

Define a translation for the contents of a specific selector:

```
Translation.define('book', 'livre', '.description');
```
