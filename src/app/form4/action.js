'use server';
import { revalidatePath } from 'next/cache'

const db = {
  msgList: [],
}

export async function createToDo(prevState, formData) {
  const msg = formData.get('todo')

  db.msgList.push(msg)
  await new Promise(resolve => setTimeout(resolve, 1000))

  revalidatePath('/form4')

  return {
    data: db.msgList,
    code: 200,
    message: `add ${msg} success!`,
  }
}

export async function findToDos() {
  await new Promise(resolve => setTimeout(resolve, 1000))

  return db.msgList
}
