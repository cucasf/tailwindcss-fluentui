import colors from 'picocolors'

let alreadyShown = new Set()

function log(type:string, messages:string[], key?:string) {
  if (typeof process !== 'undefined' && (!(process.argv.indexOf('--verbose') > -1) || process.env.JEST_WORKER_ID)) return
  if (key && alreadyShown.has(key)) return
  if (key) alreadyShown.add(key)
  messages.forEach((message) => console.warn(type, '-', message))
}

export = {
  info(messages:string | string[], key?:string) {
    log(colors.bold(colors.cyan('info')), Array.isArray(messages) ? messages : [messages], key)
  },
  warn(messages:string | string[], key?:string) {
    log(colors.bold(colors.yellow('warn')), Array.isArray(messages) ? messages : [messages], key)
  },
  risk(messages:string | string[], key?:string) {
    log(colors.bold(colors.magenta('risk')), Array.isArray(messages) ? messages : [messages], key)
  },
}