'use client'
export default function MsgList({list}) {
  
  return <ul>
    {
      list?.data?.map(msg =>
        <li key={msg}>{msg}</li>
      )
    }
  </ul>
}