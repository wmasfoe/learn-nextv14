'use server'
import { delNote, addNote, updateNote } from '@lib/redis'
import { redirect } from 'next/navigation'

export async function saveNote(formData) {
  const title = formData.get('title')
  const content = formData.get('content')
  const noteId = formData.get('noteId')
  let redirectNoteId = noteId
  try {
    if(noteId) {
      await updateNote(noteId, JSON.stringify({title, content}))
    } else {
      const res = await addNote(JSON.stringify({title, content}))
      redirectNoteId = res
    }
  } catch(e) {
    console.log('error', e?.message)
  }

  redirect(`/demo/note/${redirectNoteId}`)
}

export async function deleteNote(noteId) {
  const res = await delNote(noteId)
  redirect('/demo/note')
  return res
}
