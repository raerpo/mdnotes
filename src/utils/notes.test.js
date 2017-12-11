import { getNoteTitle, firebaseObjectToArray } from './notes';

describe('getNoteTitle', () => {
  it('returns "Unnamed note" when no content is pass', () => {
    expect(getNoteTitle()).toBe('Unnamed note');
  });
  it('returns a custom defaultTitle', () => {
    expect(getNoteTitle(undefined, undefined, 'Default Title')).toBe('Default Title');
  });
  it('returns the first 20 letters when we a pass a more than 20 letter content', () => {
    const largeContent = 'This is a large large large large large large content';
    expect(getNoteTitle(largeContent)).toBe('This is a large larg...');
  });
  it('returns the number of letter especified in the titleLimit paramater', () => {
    const largeContent = 'This is a large large large large large large content';
    expect(getNoteTitle(largeContent, 10)).toBe('This is a ...');
  });
  it('remove the spaces at the beginning and at the end of the content', () => {
    const largeContent = '           This is a large large large large large large content      ';
    expect(getNoteTitle(largeContent)).toBe('This is a large larg...');
  });
  it('only take in count the first line of the note', () => {
    const largeContent = 'short content\nthis is a new line with a much more content';
    expect(getNoteTitle(largeContent)).toBe('short content');
  });
  it('does not put "..." if the first line of the content is shorter than 20', () => {
    const largeContent = 'short content\nthis is a new line with a much more content';
    expect(getNoteTitle(largeContent)).toBe('short content');
  });
});

describe('firebaseObjectToArray', () => {
  it('transform firebase object to array', () => {
    const firebaseObject = { 'noteId1': { content: "", lastModified: 10, title: "Unnamed note" }, 'noteId2': { content: "", lastModified: 5, title: "Unnamed note" }, 'noteId3': { content: "", lastModified: 20, title: "Unnamed note" }, 'noteId4': { content: "", lastModified: 2, title: "Unnamed note" } };
    const mdNoteArray = [{id: 'noteId3', content: "", lastModified: 20, title: "Unnamed note"}, {id: 'noteId1', content: "", lastModified: 10, title: "Unnamed note"}, {id: 'noteId2', content: "", lastModified: 5, title: "Unnamed note" }, {id: 'noteId4', content: "", lastModified: 2, title: "Unnamed note"}];
    expect(firebaseObjectToArray(firebaseObject)).toEqual(mdNoteArray);
  });
  it('return empty array when the firebase data is null', () => {
    const firebaseObject = null;
    const mdNoteArray = [];
    expect(firebaseObjectToArray(firebaseObject)).toEqual(mdNoteArray);
  });
});