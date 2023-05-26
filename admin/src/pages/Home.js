import React, {useEffect} from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Container, H2, H3, Main } from '../stycomp/stycomp'
import '../App.css';
import OrderDetail from '../components/OrderDetail';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

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
  const navigate = useNavigate()
  const user = localStorage.getItem("user")
  
  console.log(user)
  useEffect(() => {
    if(!user) {
      navigate("/login")
    }
  }, [user])

  if(!user){
    return <>Redirect To Login...</>
  }

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Main>
        <H2 style={{color: "#7F5539", textAlign: "center", paddingTop: "10px"}}>Welcome back! You have 3 new orders.</H2>
        <SortDiv>
          <H3 style={{color: "#7F5539"}}>Sort by</H3>
          <details className="custom-select">
            <summary className="radios">
              <input type="radio" name="item" id="newest" title="Newest"/>
              <input type="radio" name="item" id="oldest" title="Oldest"/>
              <input type="radio" name="item" id="highestPrice" title="Highest Price"/>
            </summary>
            <ul className="list">
              <li>
                <label htmlFor="newest">Newest</label>
              </li>
              <li>
                <label htmlFor="oldest">Oldest</label>
              </li>
              <li>
                <label htmlFor="highestPrice">Highest Price</label>
              </li>
            </ul>
          </details> 
        </SortDiv>
        <OrderDetailDiv>
          <OrderDetail/>
        </OrderDetailDiv>
      </Main>
    </Container>
  )
}

export default Home