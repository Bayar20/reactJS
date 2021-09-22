import React from 'react';

export const FormInput = (props) => {
    let { className, label, ...others } = props;

    return (
        <div>
            <div className='font-ubuntu ph-4 fs-12 lh-18 mt-2'>{label}</div>
            <input className={`input mt-2 ${className}`} {...others}  />
        </div>
    );
};