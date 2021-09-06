import fs from 'fs-extra'
import chalk from 'chalk'
import { filesToCheck } from './config'

export function checkAppDir(root: string, appName: string) {
  const appDirFiles = fs.readdirSync(root)
  const conflictFiles = appDirFiles.reduce(
    (result: string[], cur) =>
      filesToCheck.includes(cur) ? [...result, cur] : result,
    [],
  )

  // new project fail due to conflict
  if (conflictFiles.length) {
    const conflictMsg = getConflictMsg(appName, conflictFiles)
    throw conflictMsg
  }
}

function getConflictMsg(projectName: string, existFiles: string[]) {
  const filesStr = existFiles.map(i => `  ${i}`).join('\n')
  return `
The directory ${chalk.green(projectName)} contains files that could conflict:

${chalk.red(filesStr)}

Either try using a new directory name, or remove the files listed above.
  `
}
