# nlcst-normalize [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

Normalize a word for easier comparison, useful for [NLCST][nlcst]

## Installation

[npm][npm-install]:

```bash
npm install nlcst-normalize
```

**nlcst-normalize** is also available for [duo][duo-install], and as an
AMD, CommonJS, and globals module, [uncompressed and compressed][releases].

## Usage

```js
var normalize = require('nlcst-normalize');

normalize('Don’t'); // 'dont'
normalize('Don\'t'); // 'dont'
normalize('Block-level'); // 'blocklevel'
normalize('Don’t', true); // 'don\'t'

normalize({
    'type': 'WordNode',
    'children': [
        {
            'type': 'TextNode',
            'value': 'Block'
        },
        {
            'type': 'PunctuationNode',
            'value': '-'
        },
        {
            'type': 'TextNode',
            'value': 'level'
        }
    ]
}); // 'blocklevel'
```

## API

### `normalize(value[, allowApostrophes])`

Quote a value.

**Parameters**

*   `value` ([`Node`][nlcst-node], `Array.<Node>`, or `string`)
    — Value to normalize;

*   `allowApostrophes` (`boolean`, default: `false`)
    — Do not strip apostrophes (but do normalize them).

**Returns**: `string` — Normalized value.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/nlcst-normalize.svg

[travis]: https://travis-ci.org/wooorm/nlcst-normalize

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/nlcst-normalize.svg

[codecov]: https://codecov.io/github/wooorm/nlcst-normalize

[npm-install]: https://docs.npmjs.com/cli/install

[duo-install]: http://duojs.org/#getting-started

[releases]: https://github.com/wooorm/nlcst-normalize/releases

[license]: LICENSE

[author]: http://wooorm.com

[nlcst]: https://github.com/wooorm/nlcst

[nlcst-node]: https://github.com/wooorm/nlcst#node
