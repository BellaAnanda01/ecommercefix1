import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`
    border: 0px;
    padding: 0px;
    width: 100vw;
    height: calc(100vh + 200px);
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const Body = styled.div`
    margin: 20px;
    height: calc(100vh - 260px);
    position: relative;
`

const Main = styled.div`
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const H1 = styled.h1`
    color: #7F5539;
    text-align: center;
    margin: 30px 0;
`

const P = styled.p`
    font-size: 16px;
    margin: 7px 0;
    text-align: center;
`

const Img = styled.img`
    width: 10rem;
    object-fit: cover;
    margin: 0 auto;
    display: block;
`

const Success = () => {
  return (
    <Container>
        <Navbar />
        <Body>
            <Main>
                <Img src="https://i.ibb.co/wSsqDHh/2381035.png" width="500px" alt="lalala" />
                <H1>Your order has been succeeded!</H1>
                <P>Please wait for us to (sebagian teks hilang)</P>
            </Main>
        </Body>
        <Footer />
    </Container>
  )
}

export default Success