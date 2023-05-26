import React from 'react'
import styled from "styled-components";

const OrderProductContainer = styled.div``

const Detail = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    margin: 15px 30px 30px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    max-width: 100px;
    max-height: 100px;
    display: block;
    margin: 0 auto;
`

const Text = styled.div`
    margin-left: 30px;
`

const TextH3 = styled.h3`
    font-size: 16px;
    font-weight: 600;
    margin: 3px 0;
`
const TextH4 = styled.h4`
    font-size: 12px;
    font-weight: 400;
    margin: 3px 0;
`

const Textp = styled.p`
    font-size: 14px;
    font-weight: normal;
    font-style: italic;
`

const Text2 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
    margin: 10px 0;
`

const OrderProduct = () => {
  return (
    <OrderProductContainer>
        <Detail>
            <Image src='https://i.ibb.co/QC1rsmW/product1.png' />
            <Text>
                <TextH3>Cheese Cupcake</TextH3>
                <Textp>No Whipped Cream<br/>Topping: Chocochips</Textp>
            </Text>
            <Text2>
                <TextH4>x1</TextH4>
                <TextH4>Rp 20.000,00</TextH4>
            </Text2>
        </Detail>
        {/* <Detail>
            <Image src='https://i.ibb.co/QC1rsmW/product1.png' />
            <Text>
                <TextH3>Cheese Cupcake</TextH3>
                <Textp>No Whipped Cream<br/>Topping: Chocochips</Textp>
            </Text>
            <Text2>
                <TextH4>x1</TextH4>
                <TextH4>Rp 20.000,00</TextH4>
            </Text2>
        </Detail> */}
    </OrderProductContainer>
  )
}

export default OrderProduct