'use strict'

const pathToList = "./todolist.json"
const pathToCmds = "./cmdlist.json"
const todoListFile = require("./fs_handler")
const readFromFile = todoListFile.readFromFile
const addToFile = todoListFile.addToFile
const readIfNotEmpty = todoListFile.readIfNotEmpty
const removeFromFile = todoListFile.removeFromFile
const resetFile = todoListFile.resetFile

function showHelp() {
    readFromFile(pathToCmds)
}

function showList() {
    readIfNotEmpty(pathToList, readFromFile)
}

function add(param) {
    addToFile(pathToList, param)
}

function remove(param) {
    removeFromFile(pathToList, param)
}

function resetList() {
    resetFile(pathToList)
}

// function update(prmOne, prmTwo) {
//     prmOne--
//     todoList.splice(prmOne, 1, prmTwo)
//     console.log(todoList)
//     console.log(prmOne + " and " + prmTwo)
// }

module.exports = {
    showHelp,
    showList,
    add,
    remove,
    // update,
    resetList
}