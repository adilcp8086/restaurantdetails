import React from 'react'
import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { search } from '../redux/restaurentSlice';

function Header() {
  const dispatch=useDispatch()
  return (
   <>
   <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><Link to={'/'} style={{textDecoration:'none',color:'white'}}>Food Circle</Link></Navbar.Brand>
         <input type="text" className='form-control w-25' onChange={(e)=>dispatch(search(e.target.value))} />
          <img 
          height="50px"
          width="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXPldi9Ww6oMsEmjAKWMSD-1XoKlAAuUk4fFX3EWkVI7YvC3I_VDVb2UDwpol6mSbFFaQ&usqp=CAU" 
          className='rounded'
          alt="" />
    
        </Container>
      </Navbar>

   </>
  )
}

export default Header