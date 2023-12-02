import React from "react";
import style from './MyModal.module.css';

const MyModal = function({children, visible, setVisible}) {    
  const modalClasses = [style.myModal];
  if (visible) {
    modalClasses.push(style.active);
  }

  return(
    <div className={modalClasses.join(' ')} onClick={ () => {setVisible(false)} }>
      <div className={style.myModalContent} onClick={ (e) => {e.stopPropagation()} }>
        {children}
      </div>
    </div>
  )
}

export default MyModal