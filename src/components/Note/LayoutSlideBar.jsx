import SlideBarSearchField from "./SlideBarSearchField"
import { getAllNotes } from '@lib/redis'
import { Suspense } from 'react'
import NoteListItem from "./NoteListItem"
import EditButton from "./EditButton"

export default function LayoutSlideBar() {
  return <>
    {/* slide-bar */}
    <div className="bg-gray-800 w-fit h-full">
      {/* title */}
      <div className="flex justify-center items-center h-16 text-3xl">slider bar</div>
      {/* header */}
      <div className="bg-gray-700 flex justify-between items-center px-5 h-16 text-xl gap-3 border-solid border-gray-300">
        <SlideBarSearchField />
        <EditButton>new</EditButton>
      </div>
      <Suspense fallback={<>loading list....</>}>
        <NoteList />
      </Suspense>
    </div>
  </>
}

async function NoteList() {

  const notes = await getAllNotes()
  
  return <>
    <div className="px-3">
      {
        notes.map(note => <>
          <NoteListItem key={note.key} itemData={note.data} />
        </>)
      }
    </div>
  </>
}

