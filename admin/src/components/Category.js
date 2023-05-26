import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { H3 } from '../stycomp/stycomp';
import { Link, useNavigate } from 'react-router-dom';

const CategoryContainer = styled.div`
    padding: 8px 20px 20px 20px;
    border-bottom: 1px solid #D9D9D9;
`

const ProductContainer = styled.div`
    padding: 0px 15px;
`

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
`

const Text = styled.div`
    margin-left: 30px;
`

const TextH3 = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin: 3px 0;
`

const Category = ({_id, title}) => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState([])
    const navigate = useNavigate();

    const fetchProduct = async () => {
        try {
            let response = await fetch(`http://localhost:5500/api/products/?category=${title}`);
            const data = await response.json();
            setProduct(data)
        }
        catch (error){
            setError(error)
        }
        setLoading(true)
    }

    useEffect(() => {
        fetchProduct()
    }, [])

  return (
    <CategoryContainer>
        <H3 style={{marginBottom: "30px"}}>{title}</H3>
        <ProductContainer>
            {product.length > 0 &&
                product.map((item) => 
                <ProductGrid key={item._id} {...item}>
                    <Image src={item.img} />
                    <Link to={`/editproduct/${item._id}`}>
                        <Text style={{color: "black"}}>
                            <TextH3>{item.title}</TextH3>
                        </Text>
                    </Link>
                </ProductGrid>
                )
            }
        </ProductContainer>
    </CategoryContainer>
  )
}

export default Category