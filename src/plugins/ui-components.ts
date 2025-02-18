import type { App } from 'vue'

export default {
  install(app: App) {
    const modules = import.meta.glob<{ default: { name: string } }>('../components/**/*.vue', {
      eager: true,
    })

    for (const path in modules) {
      const component = modules[path]?.default
      const componentName =
        component?.name ||
        path
          .split('/')
          .pop()
          ?.replace(/\.\w+$/, '')
      if (componentName) {
        app.component(componentName, component)
      }
    }
  },
}
