import { existsSync } from 'fs'
import { join } from 'path'

export function getWebpack() {
  const cwd = process.cwd()
  const baseDir = join(__dirname, '..', '..')
  const command = join(cwd, 'node_modules', '.bin', 'webpack')
  if (existsSync(command)) {
    return command
  } else {
    return join(baseDir, 'node_modules', '.bin', 'webpack')
  }
}
