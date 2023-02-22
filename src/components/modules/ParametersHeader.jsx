import React from "react";
import "../../styles/parameters-header.scss";
import {MdOutlineModeEdit} from 'react-icons/md'
import {HiOutlineTrash, HiOutlineCog} from 'react-icons/hi'
const ParametersHeader = () => {
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
          <button className="active">Add parameter</button>
        </div>
      </div>
      <div className="parameters-header__search">
        <input type="search" name="search" id="search" placeholder="Search" className="parameters-header__search-input"/>
        <button><HiOutlineCog size='24' /></button>
      </div>
    </div>
  );
};

export default ParametersHeader;
