module.exports ={
  'root': true,
  'parser': 'babel-eslint',
  'parserOptions': {
    'sourceType': 'module',
  },
  'plugins': [
    'react',
  ],
  'env': {
    'browser': true,
    'es6': true,
  },
  "extends": "airbnb",
  'rules': {
    'react/jsx-filename-extension': [1, {'extensions': [`.js`, '.jsx']}],
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-unused-vars': 1,
    'react/jsx-uses-vars': 1,
    'max-len': ["error", { "code": 250 }],
    'no-mixed-spaces-and-tabs': 'off',
    'react/jsx-no-bind': 0,
    'no-tabs':0,
    'react/prop-types':0,
    'react/react-in-jsx-scope': 0,
    'import/no-unresolved': 0,
    "linebreak-style": 0,
  }
}
