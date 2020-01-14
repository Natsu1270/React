import React, { useState, useEffect } from "react";
import './directory.style.scss'
import MenuItem from "../menu-item/menu-item.component";

import { useSelector } from 'react-redux'

import { selectDirectorySections } from '../../redux/directory/directory.selector'


const Directory = () => {
    const sections = useSelector(state => selectDirectorySections(state))
    return (
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherProps }) => (
                    <MenuItem key={id} {...otherProps} />
                ))
            }
        </div>
    )
}

export default Directory
