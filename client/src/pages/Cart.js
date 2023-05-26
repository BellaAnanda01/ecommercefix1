import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Body = styled.div`
    width: 100%;
    height: 100%;
`

const Container = styled.div`
    min-height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
`

const ItemsInCart = styled.div`
    margin-bottom: 30px;
`

const CategoryContainer = styled.div`
    margin: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
`

const CategoryTitle = styled.h2`
    margin-top: 0px;
`

const ProductContainer = styled.div`
    display: grid;
    grid-template-columns: 2rem 1fr 15rem;
    margin-bottom: 50px;
`

const ProductDotContainer = styled.div`
    position: relative;
    height: 100%;
`

const ProductDot = styled.div`
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 50%;
    margin-left: 0.4rem;
    margin-right: 0.4rem;
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: #B08968;
    border-radius: 50%;
    cursor: pointer;
`

const Detail = styled.div`
    display: grid;
    grid-template-columns: 30% 1fr;
`

const Image = styled.img`
    width: 10rem;
    height: auto;
    object-fit: cover;
    max-width: 250px;
    max-height: 250px;
    display: block;
    margin: 0 auto;
`

const Text = styled.div`
    margin: 0 10px;
`

const TextH3 = styled.h3`
    font-size: 24px;
    font-weight: medium;
    margin: 10px 5px;
`

const Textp = styled.p`
    margin-left: 7px;
    font-size: 12px;
    font-weight: normal;
`

const Detail2 = styled.div`
    margin-left: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Amount = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
`

const Other = styled.button`
    background-color: #EDE0D4;
    height: 30px;
    width: 30px;
    color: black;
    color: black;
    border: 0;
`

const Conclusion = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: auto 1fr auto;
    margin: 0 20px;
    margin-bottom: 50px;
`

const CheckoutButton = styled.button`
    padding: 10px 20px;
    background-color: #B08968;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    display: block;
    margin-left: auto;
    width: max-content;
    height: max-content;
    font-size: 15px;
`

const TextJenis1 = styled.h2`
    margin: 0;
`

const TextJenis2 = styled.h3`
    margin: 0;
    font-weight: 400;
`

const Cart = () => {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if (type === "dec") {
          quantity > 1 && setQuantity(quantity - 1);
        } else {
          setQuantity(quantity + 1);
        }
    };
  return (
    <Body>
        <Container>
            <Navbar />
            <ItemsInCart>
                <CategoryContainer>
                    <CategoryTitle>Cupcake</CategoryTitle>
                    <ProductContainer>
                        <ProductDotContainer>
                            <ProductDot />
                        </ProductDotContainer>
                        <Detail>
                            <Image src="https://i.ibb.co/QC1rsmW/product1.png" />
                            <Text>
                                <TextH3>Cheese Cupcake</TextH3>
                                <Textp>No Whipped Cream<br/>Topping Chocochips</Textp>
                            </Text>
                        </Detail>
                        <Detail2>
                            <TextH3>Rp20.000,00</TextH3>
                            <Amount>
                                <Other onClick={() => handleQuantity("dec")} >-</Other>
                                <Other>{quantity}</Other>
                                <Other onClick={() => handleQuantity("inc")} >+</Other>
                            </Amount>
                        </Detail2>
                    </ProductContainer>
                    <ProductContainer>
                        <ProductDotContainer>
                            <ProductDot />
                        </ProductDotContainer>
                        <Detail>
                            <Image src="https://i.ibb.co/zVhmgkZ/cat4.png" />
                            <Text>
                                <TextH3>Strawberry Cupcake</TextH3>
                                <Textp>No Whipped Cream<br/>Topping Chocochips</Textp>
                            </Text>
                        </Detail>
                        <Detail2>
                            <TextH3>Rp20.000,00</TextH3>
                            <Amount>
                                <Other onClick={() => handleQuantity("dec")} >-</Other>
                                <Other>{quantity}</Other>
                                <Other onClick={() => handleQuantity("inc")} >+</Other>
                            </Amount>
                        </Detail2>
                    </ProductContainer>
                </CategoryContainer>
                <CategoryContainer>
                    <CategoryTitle>Cinnamon Roll</CategoryTitle>
                    <ProductContainer>
                        <ProductDotContainer>
                            <ProductDot />
                        </ProductDotContainer>
                        <Detail>
                            <Image src="https://i.ibb.co/7RjtgZV/cat2.png" />
                            <Text>
                                <TextH3>Cinnamon Roll</TextH3>
                                <Textp>No Whipped Cream<br/>Topping Chocochips</Textp>
                            </Text>
                        </Detail>
                        <Detail2>
                            <TextH3>Rp20.000,00</TextH3>
                            <Amount>
                                <Other onClick={() => handleQuantity("dec")} >-</Other>
                                <Other>{quantity}</Other>
                                <Other onClick={() => handleQuantity("inc")} >+</Other>
                            </Amount>
                        </Detail2>
                    </ProductContainer>
                </CategoryContainer>
            </ItemsInCart>
            <Conclusion>
                <TextJenis1>3 items selected</TextJenis1>
                <div style={{textAlign: 'right', marginRight: "20px"}}>
                    <TextJenis2>Total</TextJenis2>
                    <TextJenis1>Rp50.000,00</TextJenis1>
                </div>
                <CheckoutButton>Checkout</CheckoutButton>
            </Conclusion>
            <Footer />
        </Container>
    </Body>
  )
}

export default Cart