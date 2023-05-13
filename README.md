# Overview
The goal of this project is to demonstrate how to incorporate Exadel Smart Library into a JavaScript project using Babel compiler and to demonstrate how to overcome the problem of decorators support.

**Note** If you want to utilize the syntactic sugar offered by Exadel Smart Library, it is essential to have a compiler that supports TypeScript experimental decorators. However, even if your compiler lacks this support, the functionality provided by ESL will remain intact.

# Configuration
In order to enable full support for decorators, it requires to have a Babel config file configured with the necessary plugins: [@babel/plugin-proposal-decorators](https://babeljs.io/docs/babel-plugin-proposal-decorators) and [@babel/plugin-proposal-class-properties](https://babeljs.io/docs/babel-plugin-proposal-class-properties).

`
  "plugins": [
    ["@babel/plugin-proposal-decorators", {"version": "legacy"}],
    ["@babel/plugin-proposal-class-properties"]
  ]
`

ESL decorators are based on experimental decorators, defined at [wycats/javascript-decorators@e1bf8d41bf](https://github.com/wycats/javascript-decorators/blob/e1bf8d41bfa2591d949dd3bbf013514c8904b913/README.md). This is why decorator's `version` must be set to `legacy`.

Proposal class properties is a plugin that transforms static class properties as well as properties declared with the property initializer syntax. While the "@babel/plugin-proposal-class-properties" plugin is not mandatory for decorators support in general, it becomes crucial when utilizing specific decorators such as `jsonAttr` and `attr`.
