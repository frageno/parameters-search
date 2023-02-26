import React, {useState} from 'react'
import {MdClose} from 'react-icons/md'

const Modal = ({isActive, addParametrHandler}) => {

  const [isActiveModal, setIsActiveModal] = useState(false);
  const closeModalHandler = () => {
    setIsActiveModal(true);
    addParametrHandler(false);
  }
  console.log(!!isActiveModal);
  console.log(isActive);

  return (
    <div className={`${isActive && !isActiveModal  ? 'block w-full h-full transition-all duration-300' : 'hidden'}`}>
      <div className="px-4 w-full h-full transition-all duration-300 fixed top-0 left-0 flex items-center justify-center bg-[#0000002f]">
          <div className="modal__box w-[500px] p-4 py-8 md:p-8 rounded-[32px] h-auto bg-white">
            <div className="modal__header flex items-center justify-between">
              <h3 className="parameters-header__headline">Create new parameter</h3>  
              <button onClick={closeModalHandler}><MdClose size="22" /></button>
            </div>
            <input type="search" name="search" id="search" placeholder="Parameter name" className="input"/>
            <button className="btn">Add parameter</button>

          </div>
      </div>
    </div>
  )
}

export default Modal