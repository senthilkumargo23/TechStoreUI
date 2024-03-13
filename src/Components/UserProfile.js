import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'

const UserProfile = () => {

    // const [userid, setUserid] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getUserProfile();
    }, [])

    const getUserProfile = async () => {
        let result = await fetch(`http://localhost:8001/api/getuserprofile/${params.userid}`);
        result = await result.json();
        setName(result.name);
        setEmail(result.email);
        setPassword(result.password)
    }

    const updateUserProfile = async () => {
        console.warn(name, email, password)
        let result = await fetch(`http://localhost:8001/api/updateuserprofile/${params.userid}`, {
            method: 'Put',
            body: JSON.stringify({ name, email, password }),
            headers: {
                'Content-Type': 'Application/json'
            }
        });
        result = await result.json();
        if (result) {
            // navigate('/')
            alert("User Profile updated successfully")
        }

    }

  return (
    <div>
      <h2>Welcome User </h2>
      <input type="text" placeholder='Enter name' className='inputBox'
                value={name} onChange={(e) => { setName(e.target.value) }}
            />

            <input type="text" placeholder='Enter email' className='inputBox'
                value={email} onChange={(e) => { setEmail(e.target.value) }}
            />

            <input type="text" placeholder='Enter password' className='inputBox'
                value={password} onChange={(e) => { setPassword(e.target.value) }}
            />
            
            <button onClick={updateUserProfile} className='appButton'>Update Profile</button>
    </div>
  );
};

export default UserProfile;