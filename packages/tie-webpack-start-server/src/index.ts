import { Compiler } from 'webpack'
import spawn from 'cross-spawn'
import { existsSync } from 'fs'
import { join } from 'path'

export interface Options {
  name: string
}

function getCommand() {
  const cwd = process.cwd()
  const baseDir = join(__dirname, '..')
  const command = join(cwd, 'node_modules', '.bin', 'nodemon')
  if (existsSync(command)) {
    return command
  } else {
    return join(baseDir, 'node_modules', '.bin', 'nodemon')
  }
}

export default class StartServerPlugin {
  name: string
  started: boolean = false
  constructor(options: Options) {
    this.name = options.name || 'server.js'
  }

  apply(compiler: Compiler) {
    const { name } = this
    const cwd = process.cwd()
    compiler.hooks.afterEmit.tap('StartServerPlugin', compilation => {
      const command = getCommand()
      const startArgs: string[] = [
        '--watch',
        join(cwd, `./generated/${name}`),
        '--ext',
        'js',
        '--exec',
        `node generated/${name}`,
      ]

      if (!compilation.assets[name]) {
        console.error(`Can not found ${name}`)
        return
      }

      if (!this.started) {
        this.started = true
        const child = spawn(command, startArgs, { stdio: 'inherit' })
        child.on('exit', () => {
          console.log('server exit')
        })
      }
    })
  }
}

module.exports = StartServerPlugin
