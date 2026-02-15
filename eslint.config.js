import eslintPluginAstro from 'eslint-plugin-astro'

export default [
  // config bawaan Astro
  ...eslintPluginAstro.configs.recommended,

  {
    files: ['*.astro', '*.ts', '*.tsx'],
    processor: 'astro/client-side-ts',
    rules: {
      'astro/no-unused-astro-markdown-component-definition': 'error',
    },
  },
]
