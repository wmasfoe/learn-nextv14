import ActionForm from "./ActionForm"
import { getTodoList } from './action'

export default async function Page() {

  const todoList = await getTodoList()

  return <>
    <ActionForm/>
    <ul>
      {
        todoList.data.map(item => (
          <li key={item}>{item}</li>
        ))
      }
    </ul>
  </>
}