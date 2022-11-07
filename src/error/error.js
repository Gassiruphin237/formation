import React from 'react'
import { useRouteError } from "react-router-dom";
function Error() {
    
  const error = useRouteError();
  return (
    <div>Erreur survenue!!</div>
  )
}

export default Error