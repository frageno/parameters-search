import React, {useState} from "react";
import "../../styles/parameters-header.scss";
import {MdOutlineModeEdit} from 'react-icons/md'
import {HiOutlineTrash, HiOutlineCog, HiOutlineSearch} from 'react-icons/hi'
import Modal from "../elements/Modal";
const ParametersHeader = () => {

  const [isActive, setIsActive] = useState(false);

  const addParametrHandler = (e) => {
    setIsActive(true);;
  }


  return (
    <div className="parameters-header">
      <div className="parameters-header__nav">
        <button className="parameters-header__btn active">My Parameters</button>
        <button className="parameters-header__btn">Public</button>
        <button className="parameters-header__btn">Configurations</button>
      </div>
      <div className="parameters-header__actions">
        <h4 className="parameters-header__headline">My Parameters</h4>
        <div className="parameters-header__actions-buttons">
          <button><MdOutlineModeEdit size='20' /> <span className="pl-1">Edit</span></button>
          <button><HiOutlineTrash size='20' /> <span className="pl-1">Delete</span></button>
          <button className="active" onClick={addParametrHandler}>Add parameter</button>
        </div>
      </div>
      <div className="parameters-header__search">
        <label className="w-full relative mr-5">
          <input type="search" name="search" id="search" placeholder="Search" className="parameters-header__search-input"/>
          <button className="parameters-header__search-icon"><HiOutlineSearch size='24' /></button>
        </label>
        <button><HiOutlineCog size='24' /></button>
      </div>

      <div className="parameters-body py-5">
        <ul>
          <li className="font-medium border-b border-border py-3 hover:bg-border">#1 First parametr</li>
          <li className="font-medium border-b border-border py-3">#1 First parametr</li>
          <li className="font-medium border-b border-border py-3">#1 First parametr</li>
          <li className="font-medium border-b border-border py-3">#1 First parametr</li>
          <li className="font-medium border-b border-border py-3">#1 First parametr</li>
          <li className="font-medium border-b border-border py-3">#1 First parametr</li>
          <li className="font-medium border-b border-border py-3">#1 First parametr</li>
        </ul>
      </div>
      <div className={`${isActive ? 'block w-full h-full transition-all duration-300' : 'hidden'}`}>
        <Modal/>
      </div>
    </div>

  );
};

export default ParametersHeader;
