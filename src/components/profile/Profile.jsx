import { useParams } from 'react-router-dom'
import apiInstance from '../api/axios';
import './Profile.css'
import { useEffect, useState } from 'react';

const Profile = () => {
  const [user, setUser] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    apiInstance(`/users/${id}`)
            .then(response => setUser(response.data.data))
    }, [])

  return (
    <div>
      {
        user && <div className="user-profile">
        <div className="profile-header">
            <img className="profile-avatar" src={user.avatar} alt="User Avatar"/>
            <div className="profile-info">
                <h1 className="profile-name">{user.first_name} {user.last_name}</h1>
                <p className="profile-email">{user.email}</p>
                <p className="profile-id">User ID: {user.id}</p>
            </div>
        </div>
        <div className="profile-details">
            <h2>Details</h2>
            <p><strong>First Name:</strong> {user.first_name}</p>
            <p><strong>Last Name:</strong> {user.last_name}</p>
            <p><strong>Email:</strong> {user.email}</p>
        </div>
    </div>
    
      }
    </div>
  )
}

export default Profile