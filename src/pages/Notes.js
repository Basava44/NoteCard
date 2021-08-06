import React, { useEffect, useState } from 'react'
import  Grid  from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';


export default function Notes() {
  const [notes, setNotes] = useState([]);
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(json => setNotes(json))
  },[])

  const handelDelete = (id) => {

    const newnotes = notes.filter(note => note.id!=id);
    setNotes(newnotes);
    
  }

  const breakpoints ={
    default : 3,
    1100 : 2,
    700 : 1
  }

  return (
    <Container>
      <Masonry
        breakpointCols = {breakpoints}
        className = "my-masonry-grid"
        columnClassName = "my-masonry-grid_column"
      >
      {notes.map(note => (
        <div item key={note.id}> 
          <NoteCard note={note} handelDelete={handelDelete} />
        </div>

      ))}
     </Masonry>
    </Container>
  )
}