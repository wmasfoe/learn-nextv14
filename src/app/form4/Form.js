'use client';
import SubmitButton from './SubmitButton';
import { createToDo } from './action'
import { useOptimistic } from 'react'
import { useFormState } from 'react-dom'

function mergeHandler(state, newTodo) {
  return  [
    ...state,
    {
      text: newTodo,
      ing: true
    }
  ]
}

export default function Form({list}) {

  // [表单state, 提交表单的action函数] = f(action, action return的初始值)
  const [state, sendFormAction] = useFormState(createToDo, { message: '' })

  const [optimistiToDos, addOptimisticTodo] = useOptimistic(
    list.map((i) => ({text: i})),
    // handler 用来处理要显示乐观更新的数据，接口数据返回后，这个就没用了
    mergeHandler
  );

  async function formAction(formData) {
    addOptimisticTodo(formData.get("todo"));
    await sendFormAction(formData);
  }

  return <>
    <form action={formAction}>
      <input type="input" name="todo"></input>
      <SubmitButton />
      <p aria-live="polite" className="sr-only">
        {state?.message}
      </p>
    </form>

    <br/>
    <hr/>
    <br/>

    <ul>
      {optimistiToDos?.map(({text, ing}, i) =>
        <li key={i}>{text}{!!ing && <small> (Sending...)</small>}</li>)}
    </ul>
  </>
}