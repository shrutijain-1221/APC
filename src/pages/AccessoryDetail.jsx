import React from 'react'
import { useParams } from 'react-router-dom';

const AccessoryDetail = () => {
     const { type } = useParams();
  return (
   <>
   <div className='mt-32'>
    type: {type}
   </div>
   
   </>
  )
}

export default AccessoryDetail