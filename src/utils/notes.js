export const setNoteTitle = (content = '', titleLimit = 20, defaultTitle = 'Unnamed note') => {
  const trimmedContent = content.trim().split('\n')[0];
  const needsEllipsis = trimmedContent.length > titleLimit;
  return trimmedContent.length > 0 ? 
    `${trimmedContent.substring(0, titleLimit)}${needsEllipsis ? '...' : ''}` : 
    defaultTitle;
}