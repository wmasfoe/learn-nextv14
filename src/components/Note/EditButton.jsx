'use client'
import { useRouter } from 'next/navigation'
import ActionButton from './ActionButton'
export default function EditButton({noteId, children}) {
  const router = useRouter()

  const handleClick = () => {
    let path = '/demo/note/edit'
    if(noteId) {
      path += `/${noteId}`
    }
    router.push(path)
    return false
  }
  
  return <ActionButton
    onClick={handleClick}
  >
    { children }
  </ActionButton>
}