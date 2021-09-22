import React from 'react';

export const Input = (props) => {
    let { className, value, onChange, ...others } = props;

    return (
        <div>
            <input className={`input ${className}`} value={ value } onChange={ (e) => { onChange(e.target.value) } } {...others} />
        </div>
    );
};