import './Error.css'

import React from 'react'

export default function Error() {
    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <h4 className="text-danger text-center">⚠️{"Something went wrong. Please try again later."}</h4>
        </div>
    );
}