#!/usr/bin/env node
import { execSync } from 'child_process'
import registry from './registry'

const repoNames = Object.keys(registry)

for (let repoName of repoNames) {
  execSync(
    `if [ ! -d "${repoName}" ]; then git clone git@github.com:lanetix/${repoName}.git; else echo "skipping ${repoName}"; fi;`,
    { stdio: 'inherit', env: process.env }
  )
}
