import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { UpdateProfil } from '../../actions/userActions.js'
import profil from '../../image/essaie.jpg'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
const ProfileCreate = () => {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  const [id, setId] = useState(userInfo._id)
  const [email, setEmail] = useState(userInfo.email)
  const [name, setName] = useState(userInfo.name)
  const [errorM, setError] = useState(userInfo.photo)
  const [photo, setPhoto] = useState(userInfo.photo)
  const dispatch = useDispatch()
  const updateProfil = useSelector(state => state.updateProfil)
  const { error, loading, success } = updateProfil

  const submitHandler = e => {
    e.preventDefault()
    dispatch(UpdateProfil({ _id: id, name, email,photo }))
    if (error) {
      toast.error(errorM, { position: toast.POSITION.TOP_RIGHT })
    } else {
      toast.success('Profil modifier avec success !', {
        position: toast.POSITION.TOP_RIGHT
      })
    }

  }

  const imageHandler = e => {
    e.preventDefault()
    const selected = e.target.files[0]
    const ALLOWER_TYPE = ['image/png', 'image/jpeg', 'image/jpg']
    if (selected && ALLOWER_TYPE.includes(selected.type)) {
      let reader = new FileReader()
      reader.onloadend = () => {
        setPhoto(reader.result)
      }
      reader.readAsDataURL(selected)
    } else {
      toast.error("erreur de format veuillez verifier si c'est une photo ", {
        position: toast.POSITION.TOP_RIGHT
    })
  }
  }
  return (
    <>
      <div className='main'>
        <div className='main-content'>
          <div className='container'>
            <div className='card col-md-6'>
              <div className='card-header h2 text-center'>
                Mettre à jour mon profil
              </div>
              <div className='card-body'>
                <form onSubmit={submitHandler}>
                  <div className='form-group'>
                    <label htmlFor='name'>Nom (s)</label>
                    <input
                      value={name}
                      onChange={e => setName(e.target.value)}
                      type='text'
                      id='name'
                      className='form-control'
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='email'>Adresse email</label>
                    <input
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      type='email'
                      id='email'
                      className='form-control'
                    />
                  </div>

                  <div className='form-group'>
                    <label htmlFor='photo'>Photo</label>
                    <input
                      onChange={imageHandler}
                      type='file'
                      id='photo'
                      className='form-control'
                    />
                  </div>

                  <button type='submit' className='btn btn-primary btn-block'>
                    Valider
                  </button>
                </form>
              </div>
            </div>

            <div className='col-md-6 text-right'>
              <div className='card-body text-right'>
                <div className='col-md-3'></div>
                <div
                  className='text-right col-md-6'
                  style={{ marginTop: '30px' }}
                >
                  <img
                    src={photo}
                    className='rounded'
                    style={{ border: '2px solid white', borderRadius: '500px' }}
                    width='250'
                  />
                </div>
                <div className='col-md-3'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProfileCreate
