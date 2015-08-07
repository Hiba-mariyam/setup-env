import { execSync } from 'child_process'
import nvmExec from './nvm-exec'
import registry from './registry'

for (let name of Object.keys(registry)) {
  let migrate = registry[name].migrate
  if (migrate) {
    let command = typeof migrate === 'string' ?
      migrate : 'npm run migrate'
    execSync(
      `${nvmExec} ${command}`,
      { cwd: name, stdio: 'inherit' }
    )
  }
}
