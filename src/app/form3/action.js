'use server';
import { revalidatePath } from 'next/cache'
const sleep = (ms) => new Promise(r => setTimeout(r, ms))

const db = {
  todoList: []
}

export async function getTodoList() {
  await sleep(500)

  return {
    data: db.todoList,
    total: db.todoList.length,
    code: 200,
    message: null
  }
}

export async function createTodoItemByForm(prevState, formData) {
  const todo = formData.get('todo')

  db.todoList.push(todo)

  revalidatePath("/form3");

  // 随机 throw 一个 error
  if(Math.random() >= 0.5) {
    // throw 的 error 会展示 error.jsx
    // throw new Error('系统错误')
    // 或者 message 返回具体的错误信息
    return {
      data: [],
      total: 0,
      message: '系统错误',
      code: 0
    }
  }

  return await getTodoList()
}

export async function removeTodoItemByForm(formData) {
  const todo = formData.get('todo')

  db.todoList = db.todoList.filter(v => v !== todo)

  revalidatePath("/form3");
  return await getTodoList()
}
