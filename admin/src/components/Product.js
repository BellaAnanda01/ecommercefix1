import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ProductGrid = styled.div`
    cursor: pointer;
    display: grid;
    grid-template-columns: auto 1fr;
    margin: 20px 0;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
    object-fit: cover;
`

const Text = styled.div`
    margin-left: 30px;
`

const TextH3 = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin: 3px 0;
`

const Product = (_id, title, img) => {
  return (
    <ProductGrid>
        <Image src={img} />
        <Link to={`/editproduct/${_id}`}>
            <Text style={{color: "black"}}>
                <TextH3>{title}</TextH3>
            </Text>
        </Link>
    </ProductGrid>
  )
}

export default Product