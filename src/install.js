#!/usr/bin/env node
import { execSync } from 'child_process'
import nvmExec from './nvm-exec'
import registry from './registry'

for (let name of Object.keys(registry)) {
  execSync(
    `${nvmExec} npm install`,
    { cwd: name, env: process.env, stdio: 'inherit' }
  )
}
