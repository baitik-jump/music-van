import React from 'react';
export const Footer = (props) => {
  return (
   <div className= 'footer' >
    <div className= 'footer-panel'>
     <div className= 'footer-navbar'>
      <div className= 'footer-navbar1'>
       <h5 className='footer-nickname'>Nickname/ФИО</h5>
    
      </div>
      <div className= 'footer-navbar2'>
       <h5 className='footer-date'>Дата</h5>

      </div>
      <div className= 'footer-navbar3'>
       <h5 className='footer-messages'>Уведомления</h5>

      </div>
      <div className= 'footer-navbar4'>
       <h5 className='footer-meetings'>Встречи</h5>

      </div>

     </div>
     <div className= 'footer-button' onClick={() => props.onclick(5)}>
     <h5  className='know-more'>Узнать больше</h5>
     </div>
    </div>
   </div>
  )
}
