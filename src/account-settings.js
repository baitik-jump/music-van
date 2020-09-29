import React from 'react';
export const AccountSettings = () => {
  return (
    <div className= 'account-settings'>
     <div className= 'account-settings-window'>
     <div className= 'account-settings-photo'></div>
     <h5 className= 'account-settings-letter'>Настройки профиля</h5>
     <h5 className= 'nickname-letter'>Nickname</h5>
      <input className= 'nickname' />
      <h5 className= 'address-letter'>Адрес</h5>
      <input className= 'address' />
      <h5 className= 'role-letter'>Роль</h5>
      <input className= 'role' />
      <h5 className= 'contacts-letter'>Контакты</h5>
      <input className= 'contacts' />
      <h5 className= 'information-letter'>Информация</h5>
      <input className= 'information' />

     </div>
    </div>
  )
}
