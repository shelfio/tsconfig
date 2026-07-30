# @shelf/tsconfig

## Install

```
$ pnpm add -D @shelf/tsconfig
```

## Usage

In your `tsconfig.json`:

### Backend

```json
{
  "extends": "@shelf/tsconfig/backend",
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

### Frontend

```json
{
  "extends": "@shelf/tsconfig/frontend",
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

## How to release a new version

Bump the version on the same branch that contains the changes you want to publish:

```sh
pnpm version major|minor|patch|x.y.z
```

Use `major`, `minor`, `patch`, a prerelease increment, or an exact `x.y.z` version.

`pnpm version` creates the version commit automatically. Push the branch, open a
PR to `master`, and merge it. After the merge, centralized CircleCI publishes the
new version to npm using OIDC.

## License

MIT © [Shelf](https://shelf.io)
