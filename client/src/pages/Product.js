import React, { useEffect, useState, useContext } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link, useParams } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DataContext } from '../DataProvider.js';


const Container = styled.div`
    border: 0px;
    padding: 0px;
    width: 100vw;
`

const Detail = styled.div`
    display: grid;
    grid-template-columns: 30% 70%;
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

const InputContainer = styled.div`
    background: white;
    /* display: inline-flex; */
    border-radius: 0.5rem;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    display: flex;
    margin: 20px;
    margin-bottom: 50px;
    align-items: flex-end;
`

const InputTitle = styled.h4`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
`

const Label = styled.label`
  display: flex;
  align-items: center;
`;

const RadioParagraph = styled.p`
  color: black;
  font-size: 12px;
  line-height: 8px;
  font-weight: 400;
  margin-left: 0.2rem;
`;

const RadioBox = styled.div`
  height: 0.75rem;
  width: 0.75rem;
  border: 1px solid #b9bdcf;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: 0.4rem;
  transition: background 0.15s, border-color 0.15s;
  /* padding: 2px; */

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    display: block;
    background: #B08968;
    border-radius: 50%;
    cursor: pointer;
    transform: scale(0);
  }
`;

const RadioInput = styled.input`
  display: none;
  &:checked + ${RadioBox} {
      &::after {
        transform: scale(1);
      }
    }
`;

const TextAreaInput = styled.textarea`
    border: 1px solid black;
`

const BackButton = styled.button`
    padding: 10px 20px;
    background-color: #B08968;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    display: block;
    margin-left: 30px;
    margin-top: 20px;
    font-size: 15px;
`

const Amount = styled.div`
    display: flex;
    align-items: flex-end;
`

const Add = styled.button`
    background-color: #EDE0D4;
    border-radius: 10px;
    height: 30px;
    width: 90px;
    color: black;
    border: 0;
`

const Other = styled.button`
    background-color: #EDE0D4;
    height: 30px;
    width: 30px;
    color: black;
    color: black;
    border: 0;
`


const Product = () => {
    const { cart, setCart, localCart } = useContext(DataContext);
    const [product, setProduct] = useState([])
    const [error, setError] = useState(null)
    const [quantity, setQuantity] = useState(0);
    const { id } = useParams();

    const URL = `http://localhost:5500/api/products/find/${id}`
    const fetchProduct = async () => {
        try {
            let response = await fetch(`${URL}`)
            const data = await response.json()
            const productName = data.title
            const existCart = JSON.parse(localCart)
            if(localCart){
                setQuantity(existCart[productName]?existCart[productName]: 0)
                setCart(existCart)
            }
            setProduct(data)
        } catch (err) {
            setError(err)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, []);

    useEffect(() => {
        handleCart()
    }, [quantity])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    })

    const handleQuantity =  (type) => {
        type === "dec"? setQuantity(quantity-1) : setQuantity(quantity+1)
    }

    const handleCart = () => {
        const productName = product.title
        if(quantity === 0){
            delete cart[productName]
        }
        if(quantity === 1){
            setCart(cart =>({
                ...cart,
                [productName] : 1
                
            }))
        }
        if(cart[productName]){
            setCart(cart =>({
                ...cart,
                [productName] : quantity
            }))
        }
    };

    console.log(localCart)
  return (
    <Container>
        <Navbar />
        <Link to="/products">
            <BackButton  style={{cursor: "pointer"}}>
                <ArrowBackIcon/>
            </BackButton>
        </Link>
        <Detail>
            <Image src={product.img} />
            <Text>
                <TextH3>{product.title}</TextH3>
                <Textp>{product.desc}</Textp>
            </Text>
        </Detail>
        <InputContainer>
            {quantity === 0 &&
                <Amount>
                    <Add onClick={() => handleQuantity("inc")}>Add</Add>
                </Amount>
            }
            {quantity > 0 && 
                <Amount>
                <Other onClick={() => handleQuantity("dec")} >-</Other>
                <Other>{quantity}</Other>
                <Other onClick={() => handleQuantity("inc")} >+</Other>
                </Amount>
            }
        </InputContainer>
        <Footer />
    </Container>
  )
}

export default Product