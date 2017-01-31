# eslint-config-strawhouse
Straw House Labs shared eslint config

This package contains an extended version of the eslint-config-airbnb ESLint rules. It requires `eslint`, `eslint-config-airbnb`, `eslint-plugin-import`, `eslint-plugin-react`, and `eslint-plugin-jsx-a11y`.

## Steps to install

1. Ensure packages are installed with correct version numbers (see below).
1. If your project uses yarn, run `yarn` to update your yarn.lock for the new packages.
1. Add `"extends": "strawhouse"` to your .eslintrc.

The following command will install the correct versions of the required packages:

```
(
  export PKG=eslint-config-strawhouse;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

The above command produces and runs a command like:

```
npm install --save-dev eslint-config-strawhouse eslint-config-airbnb@^#.#.# eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.#
```

## Updating this NPM package

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
