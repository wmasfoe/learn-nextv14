import { getNote } from '@lib/redis'

export default async function Page({ params }) {
  const noteId = params.id
  const noteContent = await getNote(noteId)
  return <>
    <h1>{noteContent.title}</h1>
    <br/>
    <hr/>

    <div>
      {noteContent.content}
    </div>
    <br/>
    <hr/>

    <p>{noteContent.updateTime}</p>
  </>
}