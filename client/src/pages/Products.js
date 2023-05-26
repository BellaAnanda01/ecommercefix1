import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
import ProductComponent from '../components/ProductComponent'
import { useEffect } from 'react';
import { useState } from 'react';

const Container = styled.div`
    border: 0px;
    padding: 0px;
    width: 100vw;
`

const Bagian1 = styled.div`
    /* background-color: #E6CCB2; */
    justify-items: center;
    text-align: center;
    padding: 20px 0;
`

const Bagian1H1 = styled.h1`
    color: #7F5539;
    font-weight: bold;
    font-size: 48px;
    margin-bottom: 10px;
`

const Bagian1H3 = styled.h3`
    color: #7F5539;
    font-weight: normal;
    font-size: 24px;
    margin: 0;
    margin-bottom: 40px;
`

const Products = () => {
    const [products, setProducts] = useState([])
    const [error, setError] = useState(null)

    const URL = "http://localhost:5500/api/products"
    const fetchProducts = async () => {
        try {
            let response = await fetch(`${URL}`)
            const data = await response.json()
            setProducts(data)
            console.log(products)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);

  return (
    <Container>
        <Navbar />
        <Bagian1>
            <Bagian1H1>Our Products</Bagian1H1>
        </Bagian1>
        {products &&
            products.map((item) => <ProductComponent key={item._id} {...item}/>
            )
        }
        <Footer />
    </Container>
  )
}

export default Products