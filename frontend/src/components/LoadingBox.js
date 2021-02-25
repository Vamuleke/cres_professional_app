import React from 'react'

const LoadingBox = () => {
    return (

        <div className="text-center mt-3">
            <div className="spinner-border" role="status">
                <span className="sr-only">Chargement...</span>
            </div>
        </div>
    )
}

export default LoadingBox