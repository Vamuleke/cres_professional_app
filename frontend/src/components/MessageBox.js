import React from 'react'

const MessageBox = ({ type, children }) => {
    return (
        // <div className={`alert alert-${type || 'warning'} fade show`} role="alert">
        //     {children || 'Pas de message flash.'}
        //     Houraaa
        //     <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        //         <span aria-hidden="true">&times;</span>
        //     </button>
        // </div>
        <div className={`alert alert-${type || 'warning'}`} role="alert">
            {children || 'Pas de message flash.'}
        </div>
        
    )
}

export default MessageBox