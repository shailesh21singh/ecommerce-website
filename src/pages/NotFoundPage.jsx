import React from 'react'
import Header from '../components/Header'

function NotFoundPage() {
  return (
    <>
      <Header />
      <div style={{display:'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px'}}>
        <p style={{fontSize: "25px", fontWeight: 700, color: "rgb(8, 79, 45)"}}>404 Page Not Found..!</p>
      </div>
      
    </>
  )
}

export default NotFoundPage
