import { execSync } from 'child_process'
import nvmExec from './nvm-exec'
import registry from './registry'
import yargs from 'yargs'

require('yargonaut')
  .help('3D-ASCII')
  .errors('Calvin S')

const args = yargs
  .usage('Usage: $0 [name] [options]')
  .example('$0', 'start the core lanetix services')
  .example('$0 *', 'start all lanetix services')
  .example('$0 -w', 'start the core lanetix services and their worker processes')
  .example('$0 inbox', 'start the core lanetix services and the inbox service')
  .help('h')
  .alias('h', 'help')
  .boolean('workers')
  .alias('w')
  .describe('start worker processes')
  .boolean('no-core')
  .alias('nc')
  .describe('don\'t automatically start the core services')
  .argv

const pattern = args._[1]
const names = Object.keys(registry).filter((name) =>
  pattern === '*' ||
  name === pattern ||
  (!args['no-core'] && registry[name].core)
)

for (let name of names) {
  execSync(
    `${nvmExec} npm start`,
    { cwd: name, stdio: 'inherit' }
  )
  if (args.workers && registry[name].workers) {
    const workers = registry[name].workers
    if (Array.isArray(workers)) {
      for (let worker of workers) {
        execSync(
          `${nvmExec} npm run ${worker}`,
          { cwd: name, stdio: 'inherit' }
        )
      }
    } else if (typeof workers === 'string') {
      execSync(
        `${nvmExec} npm run ${workers}`,
        { cwd: name, stdio: 'inherit' }
      )
    } else {
      execSync(
        `${nvmExec} npm run workers`,
        { cwd: name, stdio: 'inherit' }
      )
    }
  }
}
