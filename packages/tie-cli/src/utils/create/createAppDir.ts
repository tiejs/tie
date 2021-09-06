import fs from 'fs-extra'

export function createAppDir(root: string) {
  fs.ensureDirSync(root)
}
