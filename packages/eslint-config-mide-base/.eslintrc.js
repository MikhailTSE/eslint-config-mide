/* eslint-disable quote-props */
module.exports = {
    extends: [
        'eslint-config-airbnb-base',
    ].map(require.resolve),
    rules: {
        'arrow-body-style': 'off',
        'indent': ['error', 4, {
            ignoredNodes: [
                'JSXElement',
                'JSXElement > *',
                'JSXAttribute',
                'JSXIdentifier',
                'JSXNamespacedName',
                'JSXMemberExpression',
                'JSXSpreadAttribute',
                'JSXExpressionContainer',
                'JSXOpeningElement',
                'JSXClosingElement',
                'JSXFragment',
                'JSXOpeningFragment',
                'JSXClosingFragment',
                'JSXText',
                'JSXEmptyExpression',
                'JSXSpreadChild',
            ],
            'SwitchCase': 1,
        }],
        'linebreak-style': 'off',
        'max-len': 'off',
        'jsx-quotes': ['error', 'prefer-single'],
        'no-console': ['error', { allow: ['warn', 'error'] }],
    },
};
