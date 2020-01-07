import React, { PureComponent } from 'react';
import './form-input.style.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
    <div className="form-group">
        {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
        <input onChange={handleChange} {...otherProps} className="form-input" />
    </div>
)


export default FormInput