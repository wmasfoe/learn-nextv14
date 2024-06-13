'use client'
import { useRef } from 'react'
import { useFormStatus } from 'react-dom'

export default function SubmitButton() {

  const {pending} = useFormStatus()
  return <>
    <button type="submit">{pending ? 'Adding..' : 'Add'}</button>
    <input hidden type="reset" value="Reset"></input>
  </>
}