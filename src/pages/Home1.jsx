import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import RestCard from '../components/RestCard'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurent } from '../redux/restaurentSlice';

function Home1() {
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchRestaurent())
  },[])
  const allRestaurent=useSelector((state)=>state.restaurentSlice.allRestaurent.restaurants)
  return (
   <>
   
   <Row>

    {
allRestaurent?.length> 0 ?
allRestaurent.map((restaurant)=>(
  <Col className='px-5 py-3' sm={6} md={4} lg={4}>
<RestCard restaurant={restaurant}/>

</Col>



)):
<p>No restaurents</p>

    }

   </Row>
   </>
  )
}

export default Home1