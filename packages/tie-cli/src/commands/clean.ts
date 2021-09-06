import { Command } from '@oclif/command'
import { cleanJsFile } from '../utils/cleanJsFile'

export default class Clean extends Command {
  static description = 'clean js file'
  static examples = [`$ tsnl clean`]

  async run() {
    const cwd = process.cwd()
    cleanJsFile(cwd)
  }
}
