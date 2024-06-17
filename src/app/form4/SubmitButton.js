'use client'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {
  const { pending } = useFormStatus()
  return <button type="submit">{ pending ? '提交中' : '提交' }</button>
}
