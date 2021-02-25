import React from 'react'

export const MessageBox=(props)=> {
    return (
      <div className={ `alert alert-${props.variant} alert-dismissible`} role="alert">

  <i className="fa fa-check-circle"> </i> {props.children}
</div>

    )
}