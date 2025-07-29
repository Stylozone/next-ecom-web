import configs from '@phaicom/eslint-config'
import pluginQuery from '@tanstack/eslint-plugin-query'

export default
configs(
  {
    nextjs: true,
    react: true,
    tailwind: true,
    formatters: {
      html: true,
      css: true,
    },
  },
  ...pluginQuery.configs['flat/recommended'],
)
