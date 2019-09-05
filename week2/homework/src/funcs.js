'use strict';

const avaliableCmds = require("./cmdlist")
const todoListFile = require("./todolist")
const todoList = todoListFile.todoList

function showHelp() {
    console.log(avaliableCmds);
}

function showList() {
    console.log(todoListFile);
}

function add(param) {
    console.log(param, "line18");
    todoList.push(param);
    console.log(todoList);
}

function remove(param) {
    todoList.splice(0, param)
    console.log(todoList);
    console.log(param);
}

function update(prmOne, prmTwo) {
    prmOne--;
    todoList.splice(prmOne, 1, prmTwo)
    console.log(todoList);
    console.log(prmOne + " and " + prmTwo);
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