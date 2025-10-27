import chalk from 'chalk'
import ora from 'ora'
import { createRouterClient, logger, promptConfirm } from 'vtex'

const router = createRouterClient()
const { uninstallService } = router

const promptUninstall = (service: string) => 
  Promise.resolve(promptConfirm(`Are you sure you want to uninstall ${service}?`))

export default async (name: string) => {
  const spinner = ora('Uninstalling service').start()

  try {
    // Confirm the uninstallation
    const confirmed = await promptUninstall(name)
    if (!confirmed) {
      spinner.stop()
      logger.info('Uninstallation cancelled')
      return
    }

    spinner.text = 'Uninstalling'
    spinner.start()

    await uninstallService(name)
    
    spinner.stop()
    console.log(`${name}  ${chalk.red('uninstalled')}`)
    logger.info('Uninstallation complete')
  } catch (err) {
    spinner.stop()
    throw err
  }
}
