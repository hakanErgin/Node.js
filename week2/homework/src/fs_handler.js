'use strict'
const fs = require('fs')

const readFromFile = function (path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
  })
}

function writeToFile(path, firstParam) {
  fs.appendFile(path, firstParam, (err) => {
    if (err) throw err
  })
}

const readIfNotEmpty = function (path, func) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    else if (data.split('').length < 1) console.log("nothing to show")
    else (readFromFile(path))
  })
}

function removeFromFile() {
}

module.exports = {
  readFromFile,
  writeToFile,
  readIfNotEmpty
}
