import dayjs from "dayjs"
import NoteListContent from './NoteListItemContent'

export default function NoteListItem({itemData}) {

  function formatUpdateTime() {
    return dayjs(itemData.updateTime).format('YYYY-MM-DD hh:mm:ss')
  }

  const formatItemData = {
    ...itemData,
    updateTime: formatUpdateTime()
  }

  return <>
    <div className="
      my-3
      cursor-pointer
      bg-gray-700
      p-3
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
    ">
      <NoteListContent itemData={formatItemData}/>
      {/* <div className="flex flex-1 flex-col">
        <p className="text-xl text-teal-100">{itemData.title}</p>
        <p className="text-sm text-teal-100">{formatUpdateTime(itemData.updateTime)}</p>
      </div>
      <div className="w-4 h-4 rounded-full bg-slate-400 p-3 hidden group-hover/item:block hover:bg-slate-300">
        <svg className="icon text-gray-800" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <path d="M972.8 716.8a51.2 51.2 0 0 0-14.848-36.352l-409.6-409.6a51.2 51.2 0 0 0-72.192 0l-409.6 409.6a51.2 51.2 0 1 0 72.192 72.192L512 379.392l373.248 373.248A51.2 51.2 0 0 0 972.8 716.8z" fill="#3E4055"></path>
        </svg>
      </div> */}
    </div>
  </>
}