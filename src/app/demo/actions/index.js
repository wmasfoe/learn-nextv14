'use server'
import { delNote, addNote, updateNote } from '@lib/redis'
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'

export async function saveNote(prevFormData, formData) {
  const title = formData.get('title')
  const content = formData.get('content')
  const noteId = formData.get('noteId')
  if(noteId) {
    try {
      await updateNote(noteId, JSON.stringify({title, content}))
      return {
        message: 'update success.'
      }
    } catch(e) {
      return {
        message: 'save failed.'
      }
    }
  } else {
    let noteId = null
    try {
      noteId = await addNote(JSON.stringify({title, content}))
    } catch(e) {
      return {
        message: 'save failed.'
      }
    }
    redirect(`/demo/note/${noteId}`)
  }
}

export async function layoutDeleteNote(noteId) {
  const res = await delNote(noteId)
  revalidatePath('/', 'layout')
  return {
    message: 'delete success.'
  }
}
export async function deleteNote(noteId) {
  const res = await delNote(noteId)
  redirect('/demo/note')
  return res
}
