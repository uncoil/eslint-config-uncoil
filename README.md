# eslint-config-strawhouse
Straw House Labs shared eslint config

## Install

Install the required peer dependencies:

`npm install --save-dev eslint@3.12.2 eslint-config-airbnb@13.0.0 eslint-plugin-import@2.2.0 eslint-plugin-jsx-a11y@3.0.2 eslint-plugin-react@6.8.0`

Then install this package:

`npm install --save-dev eslint-config-strawhouse`

In your `.eslintrc`:
```
{
  "extends": "eslint-config-strawhouse"
}
```

## Updating the NPM package

1. Commit changes and merge to `master`.
2. Update the `CHANGELOG.md` with version number and notes on changes since the last version.
3. Make sure you are logged in to npm on the CLI: `npm login`.
4. Run `npm version <update_type>`.
    - `update_type` is one of the semantic versioning release types: "patch","minor", or "major".
    - This will update the `package.json` and tag the git repo.
5. Commit and push versioning update and tags.
6. Run `npm publish`.
7. Visit https://www.npmjs.com/package/eslint-config-strawhouse and ensure the correct version is displayed.

### Futher reading:
**NPM docs: Updating the package** - https://docs.npmjs.com/getting-started/publishing-npm-packages#updating-the-package
