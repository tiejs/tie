import { Application, Container } from '@tiejs/common'
import { PluginStoreBuilder } from './builders/PluginStoreBuilder'
import { MiddlewareStoreBuilder } from './builders/MiddlewareStoreBuilder'

export interface Options {
  port: number
}

export class Loader {
  constructor(private app: Application) {
    this.app = app
  }

  async init() {
    const pluginStoreBuilder = Container.get(PluginStoreBuilder)

    this.app.pluginStore = await pluginStoreBuilder.createPluginStore()

    await this.initPluginStore()

    const middlewareStoreBuilder = Container.get(MiddlewareStoreBuilder)

    this.app.middlewareStore = await middlewareStoreBuilder.createMiddlewareStore()

    this.applyBeforeMiddleware()

    await this.applyMiddlewareDidReady()
  }

  private async initPluginStore() {
    // call all configDidLoad first
    for (const item of this.app.pluginStore) {
      if (item.configDidLoad) {
        await item.configDidLoad.call(item.instance, this.app)
      }
    }

    for (const item of this.app.pluginStore) {
      // call plugin appDidReady
      if (item.appDidReady) {
        await item.appDidReady.call(item.instance, this.app)
      }
    }
  }

  private async applyBeforeMiddleware() {
    for (const item of this.app.middlewareStore) {
      if (!item.enable) continue

      // TODO: 需优化
      if (!item.matcher) {
        this.app.use(item.use as any)
      } else {
        this.app.use(async (ctx, next) => {
          if (ctx.request.url.includes(item.matcher?.path || '')) {
            await (item.use as any)(ctx, next)
          } else {
            await next()
          }
        })
      }
    }
  }

  private async applyMiddlewareDidReady() {
    for (const item of this.app.pluginStore) {
      if (item.middlewareDidReady) {
        await item.middlewareDidReady.call(item.instance, this.app)
      }
    }
  }
}
