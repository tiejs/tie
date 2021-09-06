import fs from 'fs'
import path from 'path'

export const appDir = path.resolve(fs.realpathSync(process.cwd()))

export const appPath = `${appDir}/generated/app.ts`
