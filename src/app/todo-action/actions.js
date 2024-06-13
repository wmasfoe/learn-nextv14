'use server';
import { revalidatePath } from "next/cache";

const sleep = (ms) => new Promise(r => setTimeout(r, ms))

const db = {
  todoList: []
}

export async function findToDos() {
  return db.todoList
}
export async function createToDo(formData) {
  const todo = formData.get('todo')

  db.todoList.push(todo)
  await sleep(1000)

  revalidatePath("/todo-action");
  return db.todoList
}
export async function createToDoDirectly(value) {
  const formData = new FormData()
  formData.append('todo', value)
  
  return createToDo(formData)
}
