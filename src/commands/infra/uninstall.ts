import { CustomCommand, ColorifyConstants } from 'vtex'
import appsInfraUninstall from '../../modules/uninstall'

export default class InfraUninstall extends CustomCommand {
  static description = 'Uninstalls an infra service.'

  static examples = [
    `${ColorifyConstants.COMMAND_OR_VTEX_REF('vtex infra uninstall')} infra-service`,
  ]

  static flags = { ...CustomCommand.globalFlags }

  static args = [
    {
      name: 'serviceId',
      required: true,
      description: `Name of the service ${ColorifyConstants.ID(
        '({vendor}.{servicename})'
      )} to uninstall.`,
    },
  ]

  async run() {
    const { args } = this.parse(InfraUninstall)
    const name = args.serviceId

    await appsInfraUninstall(name)
  }
}
