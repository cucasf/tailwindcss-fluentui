"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
Object.byString = (o, s, d) => {
    s = s.replace(/\[(\w+)\]/g, '.$1'); // convert indexes to properties
    s = s.replace(/^\./, ''); // strip a leading dot
    const a = s.split('.');
    for (let i = 0, n = a.length; i < n; ++i) {
        const k = a[i];
        if (k in o) {
            o = o[k];
        }
        else {
            return d;
        }
    }
    return o;
};
