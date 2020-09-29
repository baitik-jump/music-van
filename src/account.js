import React from 'react';
export const Account = (props) => {
  return (
    <div className= 'account'>
     <div className= 'account-information' onClick={() => props.onclick(6)}>
     <div className= 'account-letters'>


     <h5 className= 'nickname-letter'>Nickname</h5>
<br/><br/>
      <h5 className= 'address-letter'>Адрес</h5>
<br/><br/>

      <h5 className= 'role-letter'>Роль</h5>
<br/><br/>
      <h5 className= 'contacts-letter'>Контакты</h5>
    <br/><br/>

      <h5 className= 'information-letter'>Информация</h5>
       </div>
     </div>
    </div>
  )
}
