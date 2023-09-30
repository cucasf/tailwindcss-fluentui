"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const picocolors_1 = __importDefault(require("picocolors"));
let alreadyShown = new Set();
function log(type, messages, key) {
    if (typeof process !== 'undefined' && (!(process.argv.indexOf('--verbose') > -1) || process.env.JEST_WORKER_ID))
        return;
    if (key && alreadyShown.has(key))
        return;
    if (key)
        alreadyShown.add(key);
    messages.forEach((message) => console.warn(type, '-', message));
}
module.exports = {
    info(messages, key) {
        log(picocolors_1.default.bold(picocolors_1.default.cyan('info')), Array.isArray(messages) ? messages : [messages], key);
    },
    warn(messages, key) {
        log(picocolors_1.default.bold(picocolors_1.default.yellow('warn')), Array.isArray(messages) ? messages : [messages], key);
    },
    risk(messages, key) {
        log(picocolors_1.default.bold(picocolors_1.default.magenta('risk')), Array.isArray(messages) ? messages : [messages], key);
    },
};
