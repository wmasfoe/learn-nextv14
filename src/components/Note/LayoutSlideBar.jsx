import SlideBarSearchField from "./SlideBarSearchField"
import { getAllNotes } from '@lib/redis'
import { Suspense } from 'react'
import NoteListItem from "./NoteListItem"

export default function LayoutSlideBar() {
  return <>
    {/* slide-bar */}
    <div className="bg-gray-800 w-fit h-full">
      {/* title */}
      <div className="flex justify-center items-center h-16 text-3xl">slider bar</div>
      {/* header */}
      <div className="bg-gray-700 flex justify-between items-center px-5 h-16 text-xl gap-3 border-solid border-gray-300">
        <SlideBarSearchField />
        <EditButton />
      </div>
      <Suspense fallback={<>loading list....</>}>
        <NoteList />
      </Suspense>
    </div>
  </>
}

function EditButton() {
  return <>
    <div className="
        bg-gray-500
        w-32
        h-10
        leading-10
        rounded-3xl
        text-center
        cursor-pointer
        uppercase
        hover:bg-gray-600
        hover:outline-dashed
        hover:outline-1
        hover:outline-slate-400
        active:bg-slate-700
        active:outline-dotted
      ">
      new
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

