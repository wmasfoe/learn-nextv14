'use client'
import { useState } from 'react'

export default function NoteEditor({
  note,
  initTitle,
  initBody,
  action
}) {

  const [title, setTitle] = useState(initTitle)
  const [body, setBody] = useState(initBody)

  const isNew = note === null

  return <>
    <div className='flex flex-1 flex-col h-full'>
      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
        className='focus:outline-dotted focus:outline-teal-900 px-3 py-2 focus:outline-2 outline-0 rounded-b-none rounded-md text-2xl font-bold w-full text-teal-400 bg-slate-800'
      ></input>
      <textarea
        value={body}
        onChange={e => setBody(e.target.value)}
        className='focus:outline-dotted focus:outline-teal-900 px-3 py-2 focus:outline-2 outline-0 rounded-l-none rounded-md text-lg w-full flex-1 text-cyan-500 bg-slate-800 mt-0.5'
      ></textarea>
    </div>
    <div>
      {action}
    </div>
  </>
}