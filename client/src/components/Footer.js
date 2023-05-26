import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 250px;
    background-color: #EDE0D4;
    position: relative;
`

const Logo = styled.h1`
    padding-top: 35px;
    padding-left: 35px;
    font-size: 24px;
    color: #7F5539;
    font-weight: bold;
    margin-bottom: 3px;
`

const Akun = styled.h3`
    color: #7F5539;
    font-weight: normal;
    font-size: 15px;
    padding-left: 35px;
    margin-top: 2px;
`

const Copyright = styled.p`
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: #7F5539;
    font-weight: normal;
    font-size: 6px;
`

const Footer = () => {
  return (
    <Container>
        <Logo>cakeku.co</Logo>
        <Akun>@cakeku.co</Akun>
        <Copyright>Copyright 2010 | All rights reserved.</Copyright>
    </Container>
  )
}

export default Footer