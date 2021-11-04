import React from 'react';

export const Alert = props => (
    <div>
        <div className={`alert alert-${props.alerts.type} alert-dismissible fade show`} role="alert">
            {props.alerts.message} <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => props.reset()}></button>
        </div>
    </div>
)