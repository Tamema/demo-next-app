'use client'

import React, { useEffect, useState } from 'react'

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      // const response = await fetch("https://jsonplaceholder.typicode.com/userss");
      const response = await fetch("http://localhost:5001/users/getUsers"); //from express server mongodb collection
      const userData = await response.json();
      console.log("userData", userData);
      setUsers(userData?.users);
      // let noData = [];
      // if (userData.length === 0) {
      //   throw new Error("No Data")
      // }
    }
    fetchUserData();
  }, [])
  return (
    <div>
      <p>Users</p>
      <ul className='list-disc pl-6 mt-4 space-y-2'>
        {
          // the type assertion (users as { email: string }[]) is used to specify that the users array should be treated as an array of objects with an email property of type string. This allows you to access the email property on each user object without TypeScript throwing an error.
          (users as { email: string }[])?.map((user, i) => (
            <li key={i} className='bg-sky-200 my-5'>
              <span className='inline-block h-5'>
                {user?.email}
              </span>
            </li>
          ))
        }
      </ul>
      {/* {
        users?.map((user, index) => (
          <p key={index}>{user?.email}</p>
        ))
      } */}
    </div>
  )
}

export default Users