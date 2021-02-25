import React from 'react'
import {Link} from 'react-router-dom'

const AgentDetails = () => {
    return (
        <div className="main">
            <div className="main-content">
                <div className="col-md-12">
                    <div className="card mt-4">
                        <div className="card-header">
                            <div className="row py-2">
                                <div className="col-md-6 mt-1">
                                    <span className="font-weight-light h3">Details de l'agent</span>
                                </div>

                                <div className="col-md-6 text-right mt-1">
                                    <Link className="btn btn-primary" to="/admin/agents"><i className="fa fa-list"></i> &nbsp;Liste des agents</Link>
                                </div>
                            </div>
                        </div>
                        <div className="card-body">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AgentDetails