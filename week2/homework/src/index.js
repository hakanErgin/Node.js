'use strict';

const funcs = require("./funcs");

// TODO: Write the homework code in this file
const usableArgs = process.argv.slice(2)
const command = usableArgs[0];
const firstParam = usableArgs[1]
const secondParam = usableArgs[2]


switch (command) {
    case 'help':
        funcs.showHelp();
        break;
    case 'list':
        funcs.showList();
        break;
    case 'add':
        funcs.add(firstParam);
        break;
    case 'remove':
        funcs.remove(firstParam);
        break;
    case 'update':
        funcs.update(firstParam, secondParam);
        break;
    case 'reset':
        funcs.resetList();
        break;
    default:
        funcs.showHelp();
    // throw new Error('Command not supported');
}