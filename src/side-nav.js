import React from 'react';
export const SideNav = (props) => {
  return (
    <div className= 'side-nav' onClick={() => props.onclick(4)}>
     <h5 className= 'side-nav-letter1'>Вперед!</h5>
      <h5 className= 'side-nav-meetings'>Приходи на встречу</h5>
    </div>
  )
}
