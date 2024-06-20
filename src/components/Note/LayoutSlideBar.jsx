import SlideBarSearchField from "./SlideBarSearchField"
import { getAllNotes } from '@lib/redis'
import { Suspense } from 'react'
import NoteListItem from "./NoteListItem"
import EditButton from "./EditButton"

export default function LayoutSlideBar() {
  return <>
    {/* slide-bar */}
    <div className="bg-gray-800 w-fit h-full flex flex-col items-start">
      {/* title */}
      <div className="flex justify-center items-center h-16 text-3xl">ABC</div>
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
    <div className="flex-1 overflow-y-auto overflow-x-hidden w-full">
      <div className="px-3 h-fit">
        {
          notes.map(note => <>
            <NoteListItem key={note.key} itemData={note.data} />
          </>)
        }
      </div>
    </div>
  </>
}

