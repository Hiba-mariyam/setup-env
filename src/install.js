import { execSync } from 'child_process'
import registry from './registry'

for (let name of Object.keys(registry)) {
  execSync(
    `source $(brew --prefix nvm)/nvm.sh && nvm exec npm install`,
    { cwd: name, stdio: 'inherit' }
  )
}
