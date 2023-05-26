import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useEffect, useState } from 'react';
import Categories from '../components/Categories'
import { Link } from 'react-router-dom';

const Container = styled.div`
    border: 0px;
    padding: 0px;
    width: 100vw;
`

const Bagian1 = styled.div`
     display: grid;
     width: calc(100vw - 40px);
     margin: 0 20px;
     grid-template-columns: 50% 50%;
     height: calc(100vh - 60px);
`

const Bagian1Left = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
`

const Bagian1LeftH1 = styled.h1`
    color: #7F5539;
    font-weight: bold;
    font-size: 48px;
    margin-bottom: 10px;
`

const Bagian1LeftH3 = styled.h3`
    color: #B08968;
    font-weight: medium;
    font-size: 24px;
    margin: 0;
`

const Bagian1Right = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Bagian1RightImg = styled.img`
    width: 70%;
    max-width: 450px;
    padding: 20px;
`

const Bagian2 = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    background-color: #E6CCB2;
    justify-items: center;
`

const Bagian2Left = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
`

const Bagian2LeftImg = styled.img`
    max-width: 400px;
    width: 28vw;
    padding-top: 40px;
    padding-bottom: 10px;
`

const Bagian2Right = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
    margin-left: 20px;
    margin-right: 20px;
`

const Bagian2RightH1 = styled.h1`
    color: #7F5539;
    font-weight: bold;
    font-size: 48px;
    margin-bottom: 10px;
`

const Bagian2RightH3 = styled.h3`
    color: #7F5539;
    font-weight: normal;
    font-size: 24px;
    margin: 0;
    margin-bottom: 40px;
`

const Bagian3 = styled.div`
    margin-top: 10vh;
    margin-bottom: 10vh;
`

const Bagian3H1 = styled.h1`
    color: #7F5539;
    font-weight: bold;
    font-size: 48px;
    margin-bottom: 10px;
    text-align: center;
`

const Bagian3H3 = styled.h3`
    color: #B08968;
    font-weight: normal;
    font-size: 24px;
    margin: 0;
    text-align: center;
`

const Bagian3Button = styled.button`
    padding: 10px 20px;
    background-color: #B08968;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    display: block;
    margin: 0 auto;
    font-size: 15px;
`

const CategoryContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    padding: 0 30px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
    &::-webkit-scrollbar{
        display: none;
    }
    text-align: center;
`

const Home = () => {
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)

    const URL = "http://localhost:5500/api/categories"
    const fetchCategories = async () => {
        try {
            let response = await fetch(`${URL}`)
            const data = await response.json()
            setCategories(data)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, []);
    
  return (
    <Container>
        <Navbar />
        <Bagian1>
            <Bagian1Left>
                <Bagian1LeftH1>Having a bad day?</Bagian1LeftH1>
                <Bagian1LeftH3>Don’t worry. Try our cake.</Bagian1LeftH3>
            </Bagian1Left>
            <Bagian1Right>
                <Bagian1RightImg src="https://i.ibb.co/QDmt9zC/Picture12.png"/>
            </Bagian1Right>
        </Bagian1>
        <Bagian2>
            <Bagian2Left>
                <Bagian2LeftImg src='https://i.ibb.co/vLD2Qkh/Picture14.png'/>
            </Bagian2Left>
            <Bagian2Right>
                <Bagian2RightH1>A great day starts with our chocolate cake.</Bagian2RightH1>
                <Bagian2RightH3>This is not an ordinary chocolate cake. The chocolate filling in our chocolate cake can boost up your mood.</Bagian2RightH3>
            </Bagian2Right>
        </Bagian2>
        <Bagian3>
            <Bagian3H1>Slice cake is not enough?</Bagian3H1>
            <Bagian3H3>We have another sweets too.</Bagian3H3>
            <CategoryContainer>
                {categories &&
                    categories.map((item) => <Categories key={item._id} {...item} />)}
            </CategoryContainer>
            <Link to="/products" style={{textDecoration: "none"}}><Bagian3Button style={{cursor: "pointer"}}><p style={{margin: "0", textDecoration: "none"}}>Order now</p></Bagian3Button></Link>
        </Bagian3>
        <Footer />
    </Container>
  )
}

export default Home