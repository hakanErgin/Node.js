'use strict'
const fs = require('fs')

const readFromFile = function (path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
  })
}

const readMakeArrayRewrite = function (path, param) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    const splitData = data.split('\n')
    splitData.splice(0, param)



  })
}

const appendToFile = function (path, firstParam) {
  fs.appendFile(path, firstParam, (err) => {
    if (err) throw err
  })
}

const readIfNotEmpty = function (path, func) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    else if (data.split('').length < 1) console.log("nothing to show")
    else (func(path))
  })
}

const writeNewLineIfNotEmpty = function (path, param, func) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    else if (data.split('').length < 1) (func(path, param))
    else (func(path, "\n" + param))
  })
}

function removeFromFile() {
}

module.exports = {
  readFromFile,
  appendToFile,
  readIfNotEmpty,
  writeNewLineIfNotEmpty,
  readMakeArrayRewrite
}
