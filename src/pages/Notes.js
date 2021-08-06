import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';



const Notes = (props) => {
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
  );
}
 

// const mapStateToProps = (state) =>{
//   return {
//       count: state.count
//   }
// }

// const mapDispatchToProps = (dispatch) =>{
//   return{
//       increment : () =>{
//           dispatch({type:"INCREMENT"})
//       },
//       zero : () =>{
//           dispatch({type:"ZERO"})
//       }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Notes);

export default Notes;