import React from 'react'
import {Link} from 'react-router-dom'

const AgentCreate = () => {
  return (
    <>
      <div className="main">
        <div className="main-content">
          <div className="col-md-12">
            <div className="card mt-4">
              <div className="card-header">
                <div className="row py-2">
                  <div className="col-md-6 mt-1">
                    <span className="font-weight-light h3">Créer un nouvel agent</span>
                  </div>

                  <div className="col-md-6 text-right mt-1">
                    <Link className="btn btn-primary" to="/admin/agents"><i className="fa fa-list"></i> &nbsp;Liste des agents</Link>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="name">Nom (s)</label>
                    <input type="text" id="name" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Adresse email</label>
                    <input type="email" id="email" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="brithday">Date de naissance</label>
                    <input type="date" id="brithday" className="form-control" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="sex">Sexe</label>
                    <select id="sex" className="form-control">
                      <option>M</option>
                      <option>F</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="brithday">Photo</label>
                    <input type="file" id="brithday" className="form-control" />
                  </div>

                  <button className="btn btn-primary btn-block">Valider</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AgentCreate