import { join } from 'path'
import { Project } from 'ts-morph'
import saveSourceFile from '../utils/saveSourceFile'

export async function genApp() {
  const outPath = join(process.cwd(), 'generated', 'app.ts')
  const project = new Project()

  const sourceFile = project.createSourceFile(outPath, undefined, {
    overwrite: true,
  })

  sourceFile.addStatements(`declare const module: any;
import { Application } from '@tiejs/core'
import { config } from './config'

const app = new Application(config)
app.bootstrap()

if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => app.server && app.server.close());
}
`)

  await saveSourceFile(sourceFile)
}
