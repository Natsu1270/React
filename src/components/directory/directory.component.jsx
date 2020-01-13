import React, { useState, useEffect } from "react";
import './directory.style.scss'
import MenuItem from "../menu-item/menu-item.component";


const Directory = () => {
    const directories = [
        {
            title: 'hats',
            imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
            id: 1,
            linkUrl: 'hats'
        },
        {
            title: 'jackets',
            imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
            id: 2,
            linkUrl: ''
        },
        {
            title: 'sneakers',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: ''
        },
        {
            title: 'womens',
            imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
            size: 'large',
            id: 4,
            linkUrl: ''
        },
        {
            title: 'mens',
            imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
            size: 'large',
            id: 5,
            linkUrl: ''
        }
    ]
    const [sections, setSections] = useState(directories)

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
