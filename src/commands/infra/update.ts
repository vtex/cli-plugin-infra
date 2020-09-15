import { CustomCommand } from 'vtex'
import workspaceInfraUpdate from '../../modules/update'

export default class InfraUpdateCommand extends CustomCommand {
  static description = 'Update all installed infra services'

  static examples = ['vtex infra update']

  static flags = {
    ...CustomCommand.globalFlags,
  }

  static args = []

  async run() {
    this.parse(InfraUpdateCommand)

    await workspaceInfraUpdate()
  }
}
