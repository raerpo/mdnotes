/**
 * @description Take the content of a note and returns a substring as a title
 * @param  {} content
 * @param  {} titleLimit
 * @param  {} defaultTitle
 */
export const getNoteTitle = (content = '', titleLimit = 20, defaultTitle = 'Unnamed note') => {
  const trimmedContent = content.trim().split('\n')[0];
  const needsEllipsis = trimmedContent.length > titleLimit;
  return trimmedContent.length > 0 ? 
    `${trimmedContent.substring(0, titleLimit)}${needsEllipsis ? '...' : ''}` : 
    defaultTitle;
}
/**
 * @description Firebase sends note as 
 *  {noteId: {content: String, timestamp: Number}, noteId: {content: String, timestamp: Number}}
 *  The idea is to get an array that is easier to iterate
 *  [{id: noteId, timestamp: Number, content: String}, {id: noteId, timestamp: Number, content: String}, {id: noteId, timestamp: Number, content: String}]
 * @param  {} noteListData
 */
export const firebaseObjectToArray = (noteListData = {}) => {
  const keys = Object.keys(noteListData);
  if (keys.length === 0) return [];
  return keys.map(key => {
    return {
      id: key,
      ...noteListData[key]
    }
  }).sort((a, b) => b.lastModified - a.lastModified)
}