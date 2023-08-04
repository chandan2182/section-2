import React from 'react'

const Home = () => {

  let name='chandan';

  let num1 = 40;
  let num2 = 60;

  const addnums = (a,b) => {
    return a+b;
  }
  return (
    <div>
        <h1>Welcome to Home Page</h1>
        <h1 style={{ color : 'red', backgroundColor:'yellow', fontsize: 20 }}>Using Inline css</h1>
        {name}

        <h3>product of {num1} and {num2}  is { num1*num2 }</h3>
        <h1>{addnums(24,26)}</h1>

        <p className= 'myclass'> className is used instead of class in JSX </p>
        <input type ="text"/>
        <br />

        <img src="/logo192.png" alt="" />
        <img src="/backgrund.jpg" alt="" />

    </div>
  )
}

export default Home;