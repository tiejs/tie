import { Project } from 'ts-morph'
import path from 'path'
import { join } from 'path'
import fs from 'fs-extra'
import saveSourceFile from '../utils/saveSourceFile'
import globby, { GlobbyOptions } from 'globby'

const events = ['**/*.event.ts']

export async function loadEventFiles() {
  let files: string[] = []
  let cwd: string = process.cwd()
  for (const item of events) {
    let patterns: any
    const opt: GlobbyOptions = {
      ignore: ['**/node_modules/**'],
      onlyFiles: true,
      cwd,
    }
    if (typeof item === 'string') patterns = item
    const paths = globby.sync(patterns, opt).map((i) => join(cwd, i))
    files = [...files, ...paths]
  }
  return files.map((i) => i.split(path.sep).join('/'))
}

export async function genEvents() {
  const project = new Project()
  const filePath = path.resolve(process.cwd(), 'generated', 'events.ts')

  if (fs.existsSync(filePath)) {
    fs.removeSync(filePath)
  }

  const sourceFile = project.createSourceFile(filePath, undefined, {
    overwrite: true,
  })
  const files = await loadEventFiles()

  for (const file of files) {
    sourceFile.addExportDeclaration({
      moduleSpecifier: file.replace('.ts', ''),
    })
  }

  if (files.length) {
    await saveSourceFile(sourceFile)
  }
}
