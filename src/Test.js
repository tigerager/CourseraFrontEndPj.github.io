import React, { useEffect, useState } from 'react'

const Test = () => {
  const [mess, setMessage] = useState([]);
  const [mess1, setMess] = useState([]);
  const login = {
    username : "user2",
    password : "password2"
  };
  useEffect(() => {
    fetch("http://localhost:5000/login/" ,{
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(login)
    }).then(response => response.json())
    .then(data => setMessage(data.message));
  }, []);


  return (
    <div>
      {mess}
    </div>
  )
}

export default Test