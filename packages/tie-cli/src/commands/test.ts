import { Command } from '@oclif/command'
import jest from 'jest'

export default class Test extends Command {
  static description = 'Runs the test watcher in an interactive mode'

  static examples = [`$ tie test`]

  async run() {
    const cwd = process.cwd()
    const argv = process.argv.slice(3)

    const config = [
      ...argv,
      '--config',
      JSON.stringify({
        preset: 'ts-jest',
        testEnvironment: 'node',
        rootDir: cwd,
        collectCoverageFrom: ['src/**/*.{ts,tsx}'],
        moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
        testPathIgnorePatterns: ['/node_modules/', '/dist/', '/src/'],
      }),
    ]

    await jest.run(config)
  }
}
