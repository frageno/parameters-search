import React from 'react'

const Modal = () => {

  return (
    <div className="px-4 w-full h-full transition-all duration-300 fixed top-0 left-0 flex items-center justify-center bg-[#0000002f]">
        <div className="modal__box w-[500px] p-4 py-8 md:p-8 rounded-[32px] h-auto bg-white">
           <h3 className="parameters-header__headline">Create new parameter</h3>  
           <input type="search" name="search" id="search" placeholder="Parameter name" className="input"/>
           <button className="btn">Add parameter</button>

        </div>
    </div>
  )
}

export default Modal