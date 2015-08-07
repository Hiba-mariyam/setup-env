import { execSync } from 'child_process'
import nvmExec from './nvm-exec'
import registry from './registry'

for (let name of Object.keys(registry)) {
  let migrate = registry[name].migrate
  if (migrate) {
    execSync(
      `${nvmExec} npm run migrate-up`,
      { cwd: name, stdio: 'inherit' }
    )
  }
}
