#!/usr/bin/env node
import {default as encodeStr, requestInput} from './index.js';

if (process.argv.length > 2) {

    for (let i = 2; i < process.argv.length; i++) {
        console.log( encodeStr(process.argv[i] ?? '', 2) );
    }

} else requestInput();