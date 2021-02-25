import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const ProfileHome = () => {
  const userSignin = useSelector(state => state.userSignin)
  const { userInfo } = userSignin
  return (
    <div className='main'>
      <div className='main-content'>
        <div className='col-md-3 bg-dark'></div>

        <div className='text-center col-md-6' style={{ marginTop: '30px' }}>
          <img
            src={userInfo.photo}
            className='rounded'
            style={{ border: '2px solid white', borderRadius: '500px' }}
            width='150'
            height='150'
          />
          <div className='h3'>{userInfo.name}</div>
          <div className='h4'>{userInfo.email}</div>
          <div className='h4'>
            {userInfo.isAdmin ? 'Administatreur' : 'Utilisateur'}
          </div>

          {/* <button className="btn btn-primary btn-block">Modifier mon profil</button> */}
          <Link
            to={`/admin/profile/create/${userInfo._id}`}
            className='btn btn-primary btn-block'
          >
            Modifier mon profil
          </Link>
        </div>

        <div className='col-md-3'></div>
      </div>
    </div>
  )
}

export default ProfileHome
