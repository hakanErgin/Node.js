'use strict'

const pathToList = "./todolist.txt"
const pathToCmds = "./cmdlist.txt"
const todoListFile = require("./fs_handler")
const readFromFile = todoListFile.readFromFile
const writeToFile = todoListFile.writeToFile
const readIfNotEmpty = todoListFile.readIfNotEmpty

function showHelp() {
    readFromFile(pathToCmds)
}

function showList() {
readIfNotEmpty(pathToList, readFromFile)
}

function add(param) {
    param = "\n" + param
    writeToFile(pathToList, param)
}

function remove(param) {
    todoList.splice(0, param)
    console.log(todoList)
    console.log(param)
}

function update(prmOne, prmTwo) {
    prmOne--
    todoList.splice(prmOne, 1, prmTwo)
    console.log(todoList)
    console.log(prmOne + " and " + prmTwo)
}

function resetList() {

}

module.exports = {
    showHelp,
    showList,
    add,
    remove,
    update,
    resetList
}