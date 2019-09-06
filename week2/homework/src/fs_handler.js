'use strict'
const fs = require('fs')
const EMPTY_ARRAY = []

function readFromFile(path) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    console.log(JSON.parse(data))
  })
}

const addToFile = function (path, param) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    const parsed = JSON.parse(data)
    parsed.push(param)
    const stringified = JSON.stringify(parsed)
    fs.writeFile(path, stringified, (err) => {
      if (err) throw err
      console.log("The file was saved!")
    })
  })
}

const readIfNotEmpty = function (path, func) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    const parsed = JSON.parse(data)
    if (parsed.length < 1) {
      throw new Error('File Empty')
    }
    else { func(path) }
  })
}


const removeFromFile = function (path, param) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    const parsed = JSON.parse(data)
    if (param < 0 || param > parsed.length) {
      throw new Error('Not in range')
    }
    else {
      param--
      parsed.splice(param, 1)
      const stringified = JSON.stringify(parsed)
      fs.writeFile(path, stringified, (err, data) => {
        if (err) throw err
        console.log("The file was saved!")
      })
    }
  })
}

const resetFile = function (path, param) {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) throw err
    let parsed = JSON.parse(data)
    parsed = EMPTY_ARRAY
    const stringified = JSON.stringify(parsed)
    fs.writeFile(path, stringified, (err, data) => {
      if (err) throw err
      console.log("The file was saved!")
    })
  })
}


module.exports = {
  readFromFile,
  addToFile,
  readIfNotEmpty,
  removeFromFile,
  resetFile

}
