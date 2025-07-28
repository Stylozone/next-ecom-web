import configs from '@phaicom/eslint-config'

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
)
