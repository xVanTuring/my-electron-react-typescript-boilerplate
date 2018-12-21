## My Electron React Typescript Template

> based on electron-react-boilerplate and electron-react-typescript-boilerplate

## Info

No Test

## Use

1. Clone it

```bash
git clone --depth 1 --single-branch --branch master https://github.com/xVanTuring/my-electron-react-typescript-boilerplate.git your-project-name

```

2. use yarn or npm to install dep
3. `yarn dev` to start dev mode
   > for using css class in tsx
   > `<div className={style.big}/>`
   > you need to run `yarn tcm` to gen d.ts,feel free to remove them if you don't need

## Linter

### Typescript

> run `yarn lint-fix` to auto fix fixable problem
> For Vscode User use prettier ext to get full exp

### CSS/SCSS

> run `yarn lint-styles-fix` to fix css/scss

### Precommit

if you don't want auto lint before commit, remove file`.git/hook/precommit`
you can also stage changes and run `yarn precommit` to auto fix

## Test

I am lazy, if you need them you can create on you own base on electron-react-boilerplate

<!-- Maybe OneDay I will create these. -->
