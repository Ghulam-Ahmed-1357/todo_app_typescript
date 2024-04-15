#! /usr/bin/env node
import inquirer from "inquirer";
let todos_list = [];
let new_todo_list = []; // list after delete process
let updated_list = [];
let updated_list2 = []; // for copying process
let update_condition = true;
let add_condition = true;
let delete_condition = true;
// A D D
console.log("Welcome to Todo App");
console.log("\n Add todos");
while (add_condition) {
    let add_tasks = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "Enter your todo, you want to add: ",
        },
        {
            name: "addmore",
            type: "confirm",
            message: "Do you want to add more todo?",
            default: "false",
        },
    ]);
    if (add_tasks.todo != '') {
        todos_list.push(add_tasks.todo);
    }
    add_condition = add_tasks.addmore;
    console.log("Todos list = ", todos_list);
}
// U P D A T E
console.log("\n \n Update todos");
while (update_condition) {
    let update_tasks = await inquirer.prompt([
        {
            name: "update",
            type: "number",
            message: "Enter your todo's position, you want to update: ",
        },
        {
            name: "updatemore",
            type: "confirm",
            message: "Do you want to update more todo?",
            default: "false",
        },
    ]);
    for (let m = 0; m < todos_list.length; m++) {
        if (m + 1 == update_tasks.update) {
            let update_and_add_tasks = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Update your todo, you want to update: ",
            });
            if (update_and_add_tasks.todo != '') {
                updated_list.push(update_and_add_tasks.todo);
            }
        }
        else {
            if (todos_list[m] != '') {
                updated_list.push(todos_list[m]);
            }
        }
    }
    update_condition = update_tasks.updatemore;
    updated_list2 = updated_list;
    updated_list = [];
    todos_list = updated_list2;
    console.log("Todos updated list = ", updated_list2);
}
// D E l E T E
console.log("\n \n Delete todos");
while (delete_condition) {
    let delete_tasks = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: "Enter your todo's position, you want to delete: ",
        },
        {
            name: "deletemore",
            type: "confirm",
            message: "Do you want to delete more todo?",
            default: "false",
        },
    ]);
    for (let i = 0; i < updated_list2.length; i++) {
        if (i + 1 != delete_tasks.index) {
            new_todo_list.push(updated_list2[i]);
        }
    }
    delete_condition = delete_tasks.deletemore;
    todos_list = new_todo_list;
    new_todo_list = [];
    updated_list2 = todos_list;
    console.log("Todos list after deletion = ", todos_list);
}
// R E A D
console.log("\n \n Read todos");
console.log("\n Final todos list: ");
for (let j = 0; j < todos_list.length; j++) {
    console.log(todos_list[j]);
}
