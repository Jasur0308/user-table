import apiInstance from '../api/axios'
import '../home/Home.css'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        apiInstance('/users?page=2')
            .then(response => setUsers(response.data.data))
    }, [])

    return (
        <div className='users'>
          <div className='users__list'>
                <table className='users__table'>
                    <thead className='table__heading'>
                        <tr>
                            <th><span className="table__title">Avatar</span></th>
                            <th><span className="table__title">First name</span></th>
                            <th><span className="table__title">Last name</span></th>
                            <th><span className="table__title">Email</span></th>
                            <th><span className="table__title">Id</span></th>
                        </tr>
                    </thead>
                    <tbody className='table__main'>
                        {users.map(user => (
                            <tr key={user.id} className='table__row'>
                                <td><img className='avatar' src={user.avatar} alt=""/></td>
                                <td><Link to={`/profile/${user.id}`}><h3 className='name'>{user.first_name}</h3></Link></td>
                                <td><Link to={`/profile/${user.id}`}><h3 className='name'>{user.last_name}</h3></Link></td>
                                <td><p className='email'>{user.email}</p></td>
                                <td><p className='id'>{user.id}</p></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home