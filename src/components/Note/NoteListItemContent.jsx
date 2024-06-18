'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'

export default function Content({ id, expandedDate, children }) {
  
  const router = useRouter()
  const handleNoteContent = () => {
    router.push(`/demo/note/${id}`)
  }

  const [isShowContent, setIsShowContent] = useState(false)
  function handleClick(event) {
    setIsShowContent(!isShowContent)
    event.preventDefault()
    return false
  }

  return <div
      className="
        my-3
        p-3
        cursor-pointer
        bg-gray-700
        rounded-lg
        flex
        flex-row
        hover:outline
        hover:outline-1
        hover:outline-slate-500
        active:bg-gray-600
        gap-2
        group/item
        group-hover/item:visible
        has-[*:hover]:bg-gray-700
        transition-all
        duration-1000
      "
      onClick={handleNoteContent}
    >
      <div className="flex flex-1 flex-col" >
        {children}
        {
          isShowContent ? expandedDate : <></>
        }
      </div>
      {/* 箭头 */}
      <div
        className="w-4 h-4 rounded-full bg-slate-400 p-3 hidden group-hover/item:block hover:bg-slate-300"
        onClick={handleClick}
      >
        <svg className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M972.8 716.8a51.2 51.2 0 0 0-14.848-36.352l-409.6-409.6a51.2 51.2 0 0 0-72.192 0l-409.6 409.6a51.2 51.2 0 1 0 72.192 72.192L512 379.392l373.248 373.248A51.2 51.2 0 0 0 972.8 716.8z" fill="#333"></path>
        </svg>
      </div>
    </div>
}