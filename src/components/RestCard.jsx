import React from 'react'

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({restaurant}) {
  return (
   <>
   <Link to={`/restaurent-view/${restaurant.id}`} style={{textDecoration:'none'}}>
   <div className='ms-3 mt-3'> 
      <Card style={{ width: '18rem' }}>
      <Card.Img 
      height={'250px'}
      width={'100%'}
      variant="top" src={restaurant.photograph} />
      <Card.Body>
        <Card.Title>{restaurant.name}</Card.Title>
        <Card.Text>
          Neighborhood:{restaurant.neighborhood}
        </Card.Text>
        
      </Card.Body>
    </Card>
     </div>
   
   </Link>

  
   
   </>
  )
}

export default RestCard