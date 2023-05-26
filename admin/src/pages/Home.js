import React, {useEffect, useState} from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Container, H1, H2, H3, Main } from '../stycomp/stycomp'
import '../App.css';
import OrderDetail from '../components/OrderDetail';
import { useNavigate } from 'react-router-dom';

const SortDiv = styled.div`
  display: flex;
  padding: 50px 20px 15px;
  align-items: center;
  border-bottom: 1px solid #D9D9D9;
`

const OrderDetailDiv =  styled.div`
  margin: 10px;
`

const Home = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([])
  const navigate = useNavigate()

  const fetchOrder = async () => {
      try {
          let response = await fetch(`http://localhost:5500/api/orders/`);
          const data = await response.json();
          setOrder(data)
      }
      catch (error){
          setError(error)
      }
      setLoading(true)
  }

  useEffect(() => {
    // if(localStorage.getItem("user") === null) {
    //   navigate("/login")
    // }
    fetchOrder()
  }, [])

  if(!loading) {
    return(<H1 style={{marginTop: "30px", textAlign: "center"}}>Loading...</H1>)
  }

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Main>
        <H2 style={{color: "#7F5539", textAlign: "center", paddingTop: "10px"}}>Welcome back! You have {order.length} new orders.</H2>
        <OrderDetailDiv>
          {order &&
            order.map((item) => <OrderDetail key={item._id} {...item}/> )
          }
        </OrderDetailDiv>
      </Main>
    </Container>
  )
}

export default Home
