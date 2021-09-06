import spawn from 'cross-spawn'
import path from 'path'
import { templates } from './templates'

export function install(root: string, type: string) {
  const command = 'npm'
  process.chdir(root)
  const args: string[] = ['i', ...templates[type]]

  const child = spawn(command, args, { stdio: 'inherit' })

  return new Promise((resolve, reject) => {
    child.on('close', code => {
      if (code !== 0) {
        // TODO: handle ERROR
        reject({
          command: `${command} ${args.join(' ')}`,
        })
        return
      }

      process.chdir(path.resolve(root, '..'))
      resolve()
    })
  })
}
