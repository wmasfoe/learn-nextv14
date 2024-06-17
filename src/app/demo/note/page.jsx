export default function Page() {
  return <div>
    <Note />
  </div>
}

function Note() {
  return <>
    <NotePreview />
  </>
}

function NoteEditor() {
  return <>note editor</>
}
function NotePreview() {
  return <>note preview</>
}
