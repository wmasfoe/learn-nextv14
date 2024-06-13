'use client';

import { createToDoDirectly } from './actions'
import { useFormStatus } from 'react-dom'

export default function Button() {
  const { pending } = useFormStatus()
  return <div>
    <button aria-disabled={pending} onClick={() => {
      createToDoDirectly('运动')
    }}>{pending ? 'adding 运动' : 'add 运动' }</button>
  </div>
}