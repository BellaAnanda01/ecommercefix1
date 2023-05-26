import React from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Container = styled.div`
    border: 0px;
    padding: 0px;
    width: 100vw;
`

const Main = styled.div`
    margin: 20px;
`

const H1 = styled.h1`
    color: #7F5539;
    text-align: center;
    margin: 50px 0;
`

const H4 = styled.h4`
    color: #7F5539;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 30px;
`

const Form = styled.div`
    max-width: 1000px;
`

const Grid1Col = styled.div`
    width: 80%;
`

const Label = styled.p`
    font-size: 16px;
    margin: 7px 0;
`

const Input = styled.input`
    width: 100%;
    background-color: #E6CCB2;
    border: none;
    font-size: 16px;
    padding: 5px;
    margin-bottom: 12px;
`

const InputContainer = styled.div`
    background: white;
    /* display: inline-flex; */
    border-radius: 0.5rem;
    justify-content: center;
    padding-left: 1rem;
    padding-right: 1rem;
    flex-direction: column;
    margin-bottom: 43px;
`

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

const RadioParagraph = styled.p`
  color: black;
  font-size: 16px;
  line-height: 4px;
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

const PaymentButton = styled.button`
    width: 30%;
    max-width: 500px;
    padding: 10px 2px;
    background-color: #B08968;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    display: block;
    margin: 3rem auto;
    font-size: 15px;
`

const Payment = () => {
  return (
    <Container>
        <Navbar />
        <Main>
            <H1>You have to pay Rp 81.000,00</H1>
            <H4 style={{marginBottom: "15px"}}>What kind of payment do you choose?</H4>
            <InputContainer>
                <RadioLabel id="Oreo">
                    <RadioInput type="radio" name="topping" id="Oreo" value="Oreo"/>
                    <RadioBox></RadioBox>
                    <RadioParagraph>BCA a/n Poppy 877755568</RadioParagraph>
                </RadioLabel>

                <RadioLabel id="Chocochips">
                    <RadioInput type="radio" name="topping" id="Chocochips" value="Chocochips"/>
                    <RadioBox></RadioBox>
                    <RadioParagraph>Gopay a/n Poppy 08977777777777</RadioParagraph>
                </RadioLabel>
            </InputContainer>
            <H4>Please fill your payment information</H4>
            <Form>
                <Grid1Col>
                    <Label>Sender name</Label>
                    <Input type='text' />
                </Grid1Col>
                <Grid1Col>
                    <Label>Sender Bank’s name</Label>
                    <Input type='text' />
                </Grid1Col>
                <Grid1Col>
                    <Label>Upload your payment proof here</Label>
                    <Input type='file' />
                </Grid1Col>
            </Form>
            <PaymentButton>Done</PaymentButton>
        </Main>
        <Footer />
    </Container>
  )
}

export default Payment