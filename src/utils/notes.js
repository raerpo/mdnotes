export const setNoteTitle = (content = '') => {
  const defaultTitle = 'Unnamed note';
  const trimmedContent = content.trim();
  return trimmedContent.length > 0 ? `${content.substring(0, 20)}...` : defaultTitle;
}