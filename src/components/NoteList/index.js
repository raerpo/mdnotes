import React from 'react';
import distanceInWordsToNow from 'date-fns/distance_in_words_to_now';

const NoteList = () => {
  const noteListData = [
    {
      id: '1',
      title: 'Hello world',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fugit, impedit maiores quos, excepturi necessitatibus facere officiis quas fugiat labore eveniet, iusto laborum! Veniam quibusdam nihil incidunt, illo voluptatem deserunt?',
      lastModified: new Date().toString()
    },
    {
      id: '2',
      title: 'Hello world 2',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fugit, impedit maiores quos, excepturi necessitatibus facere officiis quas fugiat labore eveniet, iusto laborum! Veniam quibusdam nihil incidunt, illo voluptatem deserunt?',
      lastModified: new Date().toString()
    },
    {
      id: '3',
      title: 'Hello world',
      content: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis fugit, impedit maiores quos, excepturi necessitatibus facere officiis quas fugiat labore eveniet, iusto laborum! Veniam quibusdam nihil incidunt, illo voluptatem deserunt?',
      lastModified: new Date().toString()
    }
  ];
  const renderNodeList = (noteListData) => {
    return noteListData.map(note => (
      <div className="item" key={note.id}>
        <div className="content">
          <a className="header">{note.title}</a>
          This is an note example
          <small className="description">Last modification: {distanceInWordsToNow(note.lastModified)}</small>
        </div>
      </div>
    ));
  }
  return (
    <div className="ui celled big list">
      {renderNodeList(noteListData)}
    </div>
  )
}

export default NoteList;