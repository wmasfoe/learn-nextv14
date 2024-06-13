import { NextResponse } from 'next/server'
const db = {
  todoList: []
}

function getRespData() {
  return {
    code: 200,
    data: db.todoList,
    total: db.todoList.length
  }
}

export async function POST(request) {
  const formData = await request.formData()
  const todo = formData.get('todo')

  db.todoList.push(todo)
  return NextResponse.json(getRespData())
}

export async function GET(request) {
  return NextResponse.json(getRespData())
}
