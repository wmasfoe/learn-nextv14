import { findToDos, createToDo } from './actions';
import Button from './Button';
import SubmitButton from './SubmitButton';

export default async function Page() {
  const todos = await findToDos();

  return (
    <>
      <form action={createToDo}>
        <input type="text" name="todo" />
        <SubmitButton/>
      </form>
      <Button/>
      <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    </>
  )
}
