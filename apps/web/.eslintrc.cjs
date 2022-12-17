module.exports = {
  root: true,
  extends: ['taskeer'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  }
}
