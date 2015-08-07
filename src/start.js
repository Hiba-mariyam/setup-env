import { execSync } from 'child_process'
import nvmExec from './nvm-exec'
import registry from './registry'

for (let name of Object.keys(registry)) {
  if (registry[name].core) {
    execSync(
      `${nvmExec} npm start`,
      { cwd: name, stdio: 'inherit' }
    )
  }
}
