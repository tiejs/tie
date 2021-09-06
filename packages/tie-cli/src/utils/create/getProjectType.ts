import inquirer from 'inquirer'
import { templates } from './templates'

export async function getProjectType() {
  const answer: any = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: '选择项目模板？',
      choices: Object.keys(templates),
    },
  ])
  return answer.projectType
}
