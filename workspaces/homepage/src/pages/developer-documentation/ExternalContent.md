# This top level header will be ignored

Even in its very early release Confluenza is still easy to adjust so that it
fits the needs of your project.

## Frontmatter

Every markdown file that is supposed to be rendered by Confluenza needs to have a so called `frontmatter`
containing important metadata like `title`, `path` and `tag`.

> Markdown files without frontmatter will be ignored by Confluenza unless they serve as the *external content* for other files (see later in this document)

The frontmatter of a Confluenza file normally looks like this:

```
---
path: /components/user-login
title: User Login
tag: component
---
```

The `path` will become the part of the URL of the page and `title` is self-explaining.
The `tag` field needs a bit more in depth explanation.

## Tags

By *tagging* your file it will automatically be
assigned to one of the groups displayed in the navigation menu. For example, the Confluenza page
has three categories: *User Documentation*, *Developer Documentation*, and *Other Documents*.
Each of these categories is associated a tag: `user-documentation`, `developer-documentation`, and
`other` respectively. The tags are currently tightly coupled with the Confluenza source code in
the `src/components/navigation/Navigation.js` file.

> We will make Confluenza more intelligent about tags in the future.

For the current set of supported tags you will find the following two code fragments in the
above mentioned source file:

```javascript
export class Navigation extends React.PureComponent {
  state = {
    otherDeltas: [],
    userDocumentationDeltas: [],
    developerDocumentationDeltas: []
  }
  // ...
```

and then in the constructor:

```javascript
// ...
constructor (props) {
  super(props)

  this.navigationGroups = [
    this.createNavigationGroupForTag({
      title: 'User Documentation',
      tag: 'user-documentation',
      deltaGroupName: 'userDocumentation'
    }),
    this.createNavigationGroupForTag({
      title: 'Developer Documentation',
      tag: 'developer-documentation',
      deltaGroupName: 'developerDocumentation'
    }),
    this.createNavigationGroupForTag({
      title: 'Other Documents',
      tag: 'other',
      deltaGroupName: 'other'
    })
  ]
}
// ...
```

Let's say you would like to add another category *Components* identified by tag `component`.
You then first need to extend the state object shown above as follows:

```javascript
state = {
  otherDeltas: [],
  userDocumentationDeltas: [],
  developerDocumentationDeltas: [],
  componentsDeltas: []
}
```

and add the following to the constructor:

```javascript
this.createNavigationGroupForTag({
  title: 'Components',
  tag: 'component',
  deltaGroupName: 'components'
})
```

Notice that the `deltaGroupName` corresponds to the name of the attribute in the state.
So if `deltaGroupName` is `components` then the attribute in the state must be named `componentsDeltas`.

## External content

The frontmatter may also contain an optional field `content` allowing you to refer to the content placed in a separate markdown file.

The `content` field indicates that the intended content of this markdown file is to be found in
another file, as indicated by the value of the `content` field.

For example, the page you are reading now is the external content for
file `WorkingWithExternalContent.md` having the following frontmatter:

```
---
path: /developer-documentation/making-confluenza-yours
title: Making Confluenza Yours
tag: developer-documentation
content: ExternalContent.md
---
```

### How does it actually work
Confluenza is based on [Gatsby](https://www.gatsbyjs.org).
The [gatsby-transformer-remark](https://www.npmjs.com/package/gatsby-transformer-remark) plugin
that is used by Confluenza to process the markdown files, recognizes the `content` field in the `frontmatter` and if it can resolve the file indicated by its value,
it will process it as a regular markdown file and the result of this processing will be captured in the
`content` field of the corresponding Gatsby node. Below is an example of the remark node corresponding to the `MakingConfluenzaYours.md` (the file of which external content you are now reading):

```json
{
  "node": {
    "fileAbsolutePath": "/Users/.../confluenza/src/pages/developer-documentation/MakingConfluenzaYours.md",
    "headings": [
      {
        "value": "More"
      }
    ],
    "frontmatter": {
      "title": "Making Confluenza Yours",
      "path": "/developer-documentation/making-confluenza-yours",
      "content": {
        "childMarkdownRemark": {
          "fileAbsolutePath": "/Users/.../confluenza/src/pages/developer-documentation/ExternalContent.md",
          "headings": [
            {
              "value": "Frontmatter"
            },
            {
              "value": "Tags"
            },
            {
              "value": "External content"
            },
            {
              "value": "When to use the external content?"
            }
          ]
        }
      }
    }
  }
},
```

Now, for each rendered content, Confluenza checks if the `frontmatter` of the corresponding node contains the `content` field. If it does, Confluenza uses the `childMarkdownRemark` to render the page, otherwise it will use the original content. This way, the markdown files with `frontmatter` without the `content` field will be rendered  without any change. If the original file (the one with frontmatter containing the
`content` field) also contains valid markdown, it will be appended to the end of the external content.

> Confluenza will use the title from the frontmatter and will ignore the top-level header in the external content (but currently it requires you to put one).

## When to use the external content?

Whenever you like! But there are some cases where it really helps.

Sometimes you want the content of the markdown file to be rendered in various places. For instance you may
have a monorepo with a workspace corresponding to an npm package. This workspace will most certainly
contain a `README.md` file. You may want to include the content of this file in your Confluenza based
site and still let it be rendered by github or npmjs website.

Now, when rendering the markdown file, Confluenza depends on the so called `frontmatter` containing 
important metadata like `title`, `path` and `tag`. These metadata do not have any meaning outside of the 
Confluenza environment and therefore should not be kept e.g. in the actual README file of your npm package. 
This is not only a cleaner solution (the frontmatter may confuse the reader who is not aware of Confluenza),
but also helps sites that do not render the frontmatter correctly (like npmjs).
