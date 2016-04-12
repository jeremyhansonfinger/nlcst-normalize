var normalize = require('nlcst-normalize');

console.log(normalize('Don’t', false)); // 'dont'
console.log(normalize('Don\'t', false)); // 'dont'
console.log(normalize('Block-level', false)); // 'blocklevel'
console.log(normalize('Don’t', true)); // 'don\'t'
console.log(normalize('Block-level', false, true)); // 'block-level'

console.log(normalize({
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
}, false, true)); // 'block-level'

console.log(normalize({
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
}, false, false)); // 'blocklevel'
