import { setNoteTitle } from './notes';

describe('setNoteTitle', () => {
  it('returns "Unnamed note" when no content is pass', () => {
    expect(setNoteTitle()).toBe('Unnamed note');
  });
  it('returns a custom defaultTitle', () => {
    expect(setNoteTitle(undefined, undefined, 'Default Title')).toBe('Default Title');
  });
  it('returns the first 20 letters when we a pass a more than 20 letter content', () => {
    const largeContent = 'This is a large large large large large large content';
    expect(setNoteTitle(largeContent)).toBe('This is a large larg...');
  });
  it('returns the number of letter especified in the titleLimit paramater', () => {
    const largeContent = 'This is a large large large large large large content';
    expect(setNoteTitle(largeContent, 10)).toBe('This is a ...');
  });
  it('remove the spaces at the beginning and at the end of the content', () => {
    const largeContent = '           This is a large large large large large large content      ';
    expect(setNoteTitle(largeContent)).toBe('This is a large larg...');
  });
  it('only take in count the first line of the note', () => {
    const largeContent = 'short content\nthis is a new line with a much more content';
    expect(setNoteTitle(largeContent)).toBe('short content');
  });
  it('does not put "..." if the first line of the content is shorter than 20', () => {
    const largeContent = 'short content\nthis is a new line with a much more content';
    expect(setNoteTitle(largeContent)).toBe('short content');
  });
});