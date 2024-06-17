import { findToDos } from './action'
import Form from './Form'

export default async function Page() {

  const msgList = await findToDos()

  return <>
    <h2>乐观更新</h2>
    <Form list={msgList} />

  </>
}