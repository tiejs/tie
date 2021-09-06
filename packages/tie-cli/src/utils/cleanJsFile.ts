import fs from 'fs'
import globby from 'globby'

export function cleanJsFile(cwd: string) {
  const files = globby.sync(['**/*.ts'], {
    ignore: ['**/node_modules/**'],
    absolute: true,
    onlyFiles: true,
    cwd,
  })
  for (const file of files) {
    removeOneFile(file)
  }
}

function removeOneFile(file: string) {
  const jsFile = file.replace(/ts?$/, 'js')
  if (fs.existsSync(jsFile)) {
    fs.unlinkSync(jsFile)
  }
}
