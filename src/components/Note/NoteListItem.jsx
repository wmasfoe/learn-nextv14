import dayjs from "dayjs";
import NoteListContent from "./NoteListItemContent";

export default function NoteListItem({ itemData }) {
  function formatUpdateTime() {
    return dayjs(itemData.updateTime).format("YYYY-MM-DD hh:mm:ss");
  }

  const formatItemData = {
    ...itemData,
    updateTime: formatUpdateTime(),
  };

  return (
    <>
      <NoteListContent
        id={itemData.key}
        expandedDate={
          <p className="text-sm text-teal-100 text-ellipsis">
            {formatItemData.content}
          </p>
        }
      >
        <p className="text-xl text-teal-100">{formatItemData.title}</p>
        <p className="text-sm text-teal-100">{formatItemData.updateTime}</p>
      </NoteListContent>
    </>
  );
}
