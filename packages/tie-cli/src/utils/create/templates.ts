export const templates: any = {
  'minimal-controller': ['@tiejs/core@latest', 'tie-cli@latest'],
  'minimal-graphql': ['@tiejs/core@latest', 'tie-cli@latest'],

  'simple-controller': ['@tiejs/core@latest', 'tie-cli@latest'],
  'simple-graphql': ['@tiejs/core@latest', 'tie-cli@latest'],

  'example-mvc': ['@tiejs/core@latest', 'tie-cli@latest'],

  'example-typeorm': [
    '@tiejs/core@latest',
    '@tiejs/typeorm@latest',
    'tie-cli@latest',
  ],

  'example-typeorm-mongo': [
    '@tiejs/core@latest',
    '@tiejs/typeorm@latest',
    'mongodb@latest',
    'tie-cli@latest',
  ],

  'example-graphql-subscription': ['@tiejs/core@latest', 'tie-cli@latest'],
}
