import React, { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';

import NoteCard from '../components/NoteCard';
import Masonry from 'react-masonry-css';



const Notes = (props) => {
    const [notes, setNotes] = useState(props.notes)

    // const notes = props.notes;
  

  const handelDelete = (title) => {
    const newnotes = notes.filter(note => note.title!=title);
    setNotes(newnotes);
    props.delete(title);
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
        <div item key={Math.random()}> 
          <NoteCard note={note} handelDelete={handelDelete} />
        </div>

      ))}
     </Masonry>
    </Container>
  );
}
 

const mapStateToProps = (state) =>{
  return {
      notes: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    delete : (notes) =>{
      dispatch({type:"EDIT_DATA", notes})
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Notes);

// export default Notes;