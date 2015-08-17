export default {
  'activity-reporting': {
    port: 5014,
    workers: true
  },
  auth: {
    core: true,
    port: 5000
  },
  api: {
    core: true,
    migrate: true,
    port: 5002,
    workers: true
  },
  feed: {
    port: 5010,
    migrate: true
  },
  inbox: {
    port: 5004
  },
  impersonate: {
    port: 5009
  },
  'pipeline-reporting': {
    port: 5017,
    workers: true
  },
  records: {
    migrate: true,
    port: 5026
  },
  'salesforce-sync': {
    migrate: true,
    port: 5025,
    workers: [
      'inbound_deletes',
      'inbound_updates',
      'outbound',
      'watcher'
    ]
  },
  search: {
    core: true,
    port: 5015
  },
  stagegate: {
    port: 5016,
    migrate: true
  },
  ui: {
    core: true,
    port: 5001
  },
  userdata: {
    port: 5003
  }
}
