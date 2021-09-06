import { Command } from '@oclif/command'
import { join } from 'path'
import spawn from 'cross-spawn'
import { existsSync } from 'fs'
import ora from 'ora'
import { cleanJsFile } from '../utils/cleanJsFile'
import { genApp } from '../generators/app'
import { genConfig } from '../generators/config'
import { genControllers } from '../generators/controllers'
import { genResolvers } from '../generators/resolvers'
import { genSchedules } from '../generators/schedules'
import { genEvents } from '../generators/events'

function getCommand() {
  const cwd = process.cwd()
  const baseDir = join(__dirname, '..', '..')
  const command = join(cwd, 'node_modules', '.bin', 'tsc')
  if (existsSync(command)) {
    return command
  } else {
    return join(baseDir, 'node_modules', '.bin', 'tsc')
  }
}

export default class Build extends Command {
  static description = 'Build the project'

  static examples = [`$ tsnl build`]

  async run() {
    const cwd = process.cwd()
    const command = getCommand()
    const tsconfigPath = join(cwd, 'tsconfig.json')
    const startArgs: string[] = ['--project', tsconfigPath]

    const spinner = ora('Tie building...').start()

    cleanJsFile(cwd)
    await Promise.all([
      genControllers(),
      genResolvers(),
      genSchedules(),
      genEvents(),
      genApp(),
    ])
    await genConfig()

    spawn.sync(command, startArgs, { stdio: 'inherit' })
    spinner.succeed('Tie build successfully')
  }
}
