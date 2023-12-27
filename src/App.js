import { useEffect, useState } from 'react';
import "./App.css"
import LiveOrders from './pages/Seller/LiveOrders';
import Home from './components/Neutopia/Home/Home';

function App() {

  const [count, setCount] = useState(0)
  const [userName, setUserName] = useState("John Doe")

  useEffect(()=>{
    console.log("Loading")
  })
  
  useEffect(()=>{
    console.log("one time")
  },[])

  useEffect(()=>{
    console.log("name changed")
  },[userName])

  return (
    <div> 
      {/* <LiveOrders></LiveOrders> */}

      {/* <RVCard></RVCard> */}
      <Home></Home>
      {/* <CreateNotice></CreateNotice> */}
      {/* <NavBar></NavBar>
      <Banner></Banner>
      <RowPoster></RowPoster> */}
      {/* <Todo/> */}
      {/* <Header/>
      <h1 className="hello">Hello {userName}</h1>
      <h1 className="Counter value:">{count}</h1>
      <Product productName="iPhone"></Product>
      {
        employee.map((obj,index)=>{
          return <h1>Emp Name = {obj.name}</h1>

        })
      }
      <button onClick={counter}>ADD</button>
      <button onClick={updateName}>UPDATE NAME</button> */}
      </div>
  );
}

export default App;
