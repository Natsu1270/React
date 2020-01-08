import React from 'react'

import './custom-button.style.scss'

const CustomButton = ({ children,isGoogle, ...otherProps }) => (

    <button className={`custom-button ${isGoogle ? 'google-btn': ''}`}  {...otherProps}>
        {children}
        {console.log(isGoogle)}
    </button>
)

export default CustomButton