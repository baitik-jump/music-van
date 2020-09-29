import React from 'react';
export const Header = (props) => {


  return (
   <div className= 'header'>
    <div className= 'blocksha'>


     <div className= 'AboutUsButton' onClick={() => props.onclick(2)}>
       Контакты
     </div>
     </div>
     <div className= 'blocksha'>
     <div className= 'MainButton' onClick={() => props.onclick(1)}>
       <h5>ХОЧУМУЗЫКУ!</h5>
     </div>
     </div>
     <div className= 'blocksha'>
     <div className= 'LoginButton' onClick={() => props.onclick(3)}>
       Войти
     </div>
     </div>
<hr className='header-line'/>
   </div>
  );
}
