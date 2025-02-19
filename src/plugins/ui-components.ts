import type { App } from 'vue'

export default {
  install(app: App) {
    const uiComponents = import.meta.glob<{ default: { name: string } }>(
      '../components/ui/**/*.vue',
      {
        eager: true,
      },
    )

    const layoutComponents = import.meta.glob<{ default: { name: string } }>(
      '../components/layout/**/*.vue',
      {
        eager: true,
      },
    )

    const modules = { ...uiComponents, ...layoutComponents }

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
