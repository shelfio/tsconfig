# @shelf/tsconfig

## Install

```
$ yarn add --dev @shelf/tsconfig
```

## Usage

In your `tsconfig.json`

```json
{
  "extends": "@shelf/tsconfig/backend",
  "exclude": ["node_modules"],
  "include": ["src"]
}
```

## Publish

```sh
$ git checkout master
$ yarn version
$ yarn publish
$ git push origin master --tags
```

## License

MIT © [Shelf](https://shelf.io)
