'use client';

import SubmitButton from "./SubmitButton"
import { createTodoItemByForm } from './action'
import { useFormState } from 'react-dom'

const initState = {
  message: null,
}

export default function ActionForm() {

  const [state, formAction] = useFormState(createTodoItemByForm, initState)

  return <>
    {
      state.message ? 
      <p>{state.message}</p> :
      <form action={formAction}>
        <input type="input" name="todo"></input>
        <SubmitButton/>
      </form>
    }
  </>
}