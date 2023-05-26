import React, { useState } from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';

const ProductContainer = styled.div`
    margin: 50px 0;
`

const ProductDiv = styled.div`
    display: grid;
    grid-template-columns: 30% 50% 20%;
    margin: 30px 30px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    display: block;
    margin: 0 auto;
`

const Text = styled.div`
    margin: 10px;
`

const TextH3 = styled.h3`
    font-size: 24px;
    font-weight: medium;
`

const Textp = styled.p`
    font-size: 12px;
    font-weight: normal;
`

const ProductComponent = ({_id, img, title, desc}) => {
    return (
        <ProductContainer>
            <Link to={`/product/${_id}`}>
                <ProductDiv>
                    <Image src={img} />
                    <Text>
                        <TextH3>{title}</TextH3>
                        <Textp>{desc}</Textp>
                    </Text>
                </ProductDiv>
            </Link>
        </ProductContainer>
    )
}

export default ProductComponent 