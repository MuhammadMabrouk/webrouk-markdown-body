# webroukMarkdownBody

Webrouk Markdown Body is a native JavaScript markdown-to-html web component to load and display markdown files.

### Demo
---
[CodePen Example](https://codepen.io/muhammad_mabrouk/full/dyKMgKr/)

### Installation
---
Use [NPM](https://www.npmjs.com/package/webrouk-markdown-body/) to download and install it directly in to your project

```sh
$ npm install webrouk-markdown-body --save
```

or include js file manually

```html
<!-- webrouk-markdown-body component file -->
<script src="webrouk-markdown-body.js"></script>
```

### Usage
---
Using webroukMarkdownBody is simple.

```html
<webrouk-markdown-body src="https://raw.githubusercontent.com/twbs/bootstrap/main/README.md" mode="light"></webrouk-markdown-body>
```

### Options
| Option | Type | Description | Default |
| ----------- |    :----:   | ----------- |    :----:   |
| src | `url` &#124; `path` | Loads and displays an external MD file | `null` |
| default | `# Hello World!` | Default message if there is no content | `null` |
| mode | `light` &#124; `dark` | Chooses the color mode to be applied | `null` |

### Write markdown inline
---
You can pass in your markdown inline too.

```html
<webrouk-markdown-body mode="dark">
  <textarea>
    - **item one**
    - _item two_
    - [x] item three
    - [Google](https://www.google.com/)
    - [YouTube](https://www.youtube.com/)
  </textarea>
</webrouk-markdown-body>
```

### License
-------
webroukMarkdownBody is licensed [MIT](https://choosealicense.com/licenses/mit/).
It can be used for free and without any attribution, in any personal or commercial project.
