export default {
  auth: {
    core: true
  },
  api: {
    core: true,
    migrate: 'bin/migrate up'
  },
  records: {
    migrate: true
  },
  search: {
    core: true
  },
  ui: {
    core: true
  }
}
