module.exports = {
  "extends": "airbnb/base",
  "plugins": [
    "react"
  ],
  "rules": {
    "no-console": "off",
    "prefer-template": "warn",
    "max-len": ["warn" , 100],
    "no-multiple-empty-lines": ["error", {"max": 3, "maxEOF": 1}],
    "no-param-reassign": ["error", { "props": true }],
    "arrow-body-style": "off",
    "padded-blocks": ["error", "never"],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }],
    "object-shorthand": ["error", "properties", { "avoidQuotes": true }],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "id-length": ["error", {"exceptions": ["n", "m", "i", "j", "k"]}]
  },
  "env": {
    "node": true,
    "mocha": true
  }
}
