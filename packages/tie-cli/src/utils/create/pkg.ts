export const pkg: any = {
  name: 'projectName',
  scripts: {
    dev: 'tie dev',
    build: 'tie build',
    test: 'tie test',
  },
  eslintConfig: {
    extends: 'tie-app',
  },
  prettier: {
    semi: false,
    tabWidth: 2,
    singleQuote: true,
    trailingComma: 'all',
    printWidth: 100,
  },
}
