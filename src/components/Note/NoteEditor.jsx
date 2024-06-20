'use client'
import { useState } from 'react'
import SubmitButton from './SubmitButton'
import ActionButton from './ActionButton'
import { saveNote, deleteNote } from '@noteAction'

export default function NoteEditor({
  note,
  initTitle,
  initBody,
}) {

  const [title, setTitle] = useState(initTitle)
  const [body, setBody] = useState(initBody)

  const isNew = note === null
  const btnText = isNew ? 'cancel' : 'delete'

  const handleClick = () => {
    if(isNew) {
      setTitle('')
      setBody('')
    } else {
      deleteNote(note)
    }
    return true
  }

  const handleSaveNote = () => {}

  return <>
    <form className='flex flex-row h-full items-start gap-2' action={saveNote}>
      <div className='flex flex-1 flex-col h-full'>
        <input
          value={title}
          onChange={e => setTitle(e.target.value)}
          name="title"
          className='focus:outline-dotted focus:outline-teal-900 px-3 py-2 focus:outline-2 outline-0 rounded-b-none rounded-md text-2xl font-bold w-full text-teal-400 bg-slate-800'
        ></input>
        <textarea
          value={body}
          onChange={e => setBody(e.target.value)}
          name="content"
          className='focus:outline-dotted focus:outline-teal-900 px-3 py-2 focus:outline-2 outline-0 rounded-l-none rounded-md text-lg w-full flex-1 text-cyan-500 bg-slate-800 mt-0.5'
        ></textarea>
      </div>
      <div className='flex flex-row gap-1'>
        <SubmitButton>done</SubmitButton>
        <ActionButton onClick={handleClick}>{ btnText }</ActionButton>
      </div>
    </form>
  </>
}