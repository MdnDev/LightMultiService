import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import { MDBCol, MDBRow, MDBBtn } from 'mdb-react-ui-kit';
;




const SearchBox = () => {
  const [name, setName] = useState('');

  const navigate = useNavigate()

  const submitHandler = (e) => {
      e.preventDefault();
      navigate(`/search/name/${name}`)
  }
  return (
    <MDBCol>
        <MDBRow>
      <form className="search d-flex input-group w-auto py-2" onSubmit={submitHandler}>
        <div className='row'>
            <input 
                type="text" 
                name="q" 
                id="q"
                className='form-control' 
                placeholder='Recherche...' 
                aria-label='Search' 
                onChange={(e) => setName(e.target.value)}>
            </input>
            <MDBBtn color="outline-primary" type='submit'>
                Chercher
            </MDBBtn>
        </div>
      </form>
      </MDBRow>
      </MDBCol>
    )
};

export default SearchBox;
