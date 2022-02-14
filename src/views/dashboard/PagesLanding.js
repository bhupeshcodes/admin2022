import React, { useEffect } from 'react'
import useAuth from '../../hooks/useAuth';

const PagesLanding = () => {
 const Context = useAuth()
 console.log(Context)
  useEffect(() => {
    
  }, []);
  return (
    <div>PagesLanding</div>
  )
}

export default PagesLanding