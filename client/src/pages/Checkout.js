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
    margin: 20px 20px;
`

const H4 = styled.h4`
    color: #7F5539;
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 10px;
`

const Form = styled.div`
    max-width: 1000px;
`

const Grid1Col = styled.div`
    width: 90%;
`

const Grid2Col = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 7%;
`

const Grid4Col = styled.div`
    width: 90%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 7%;
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
    margin-bottom: 50px;
`

const RadioLabel = styled.label`
  display: flex;
  align-items: center;
`;

const RadioParagraph = styled.p`
  color: black;
  font-size: 14px;
  line-height: 4px;
  font-weight: 400;
  margin-left: 0.2rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
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

const Hr = styled.hr`
    width: 100%;
    height: 1px;
    background-color: #E5D8D8;
    border: none;
    margin: 30px 0;
`

const Detail = styled.div`
    display: grid;
    grid-template-columns: auto 1fr auto;
    margin: 30px 30px;
`

const Image = styled.img`
    width: 10rem;
    height: 100%;
    max-width: 250px;
    max-height: 250px;
    display: block;
    margin: 0 auto;
`

const Text = styled.div`
    margin: 10px;
    margin-left: 30px;
`

const TextH3 = styled.h3`
    font-size: 18px;
    font-weight: 500;
    margin: 3px 0;
`
const TextH4 = styled.h4`
    font-size: 18px;
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

const Detail2 = styled.div`
    margin: 0 30px;
    display: grid;
    grid-template-columns: 70% 30%;
    align-items: center;
`

const CheckoutButton = styled.button`
    width: 80%;
    max-width: 500px;
    padding: 10px 2px;
    background-color: #B08968;
    color: white;
    font-weight: bold;
    border-radius: 12px;
    border: none;
    display: block;
    margin: 0;
    margin-left: auto;
    font-size: 15px;
`

const Checkout = () => {
  return (
    <Container>
        <Navbar />
        <Main>
            <H4>Please insert your identity</H4>
            <Form>
                <Grid2Col>
                    <div>
                        <Label>Nama Depan</Label>
                        <Input type='text'/>
                    </div>
                    <div>
                        <Label>Nama Belakang</Label>
                        <Input type='text'/>
                    </div>
                </Grid2Col>
                <Grid2Col>
                    <div>
                        <Label>Nomor Telepon</Label>
                        <Input type='text'/>
                    </div>
                    <div>
                    </div>
                </Grid2Col>
                <Grid1Col>
                    <div>
                        <Label>Alamat</Label>
                        <Input type='text' />
                    </div>
                </Grid1Col>
                <Grid4Col>
                    <div>
                        <Label>RT</Label>
                        <Input type='text' />
                    </div>
                    <div>
                        <Label>RW</Label>
                        <Input type='text' />
                    </div>
                    <div></div>
                    <div></div>
                </Grid4Col>
                <Grid2Col>
                    <div>
                        <Label>Kelurahan</Label>
                        <Input type='text' />
                    </div>
                    <div>
                        <Label>Kecamatan</Label>
                        <Input type='text' />
                    </div>
                </Grid2Col>
                <Grid2Col>
                    <div>
                        <Label>Kota</Label>
                        <Input type='text' />
                    </div>
                    <div>
                        <Label>Provinsi</Label>
                        <Input type='text' />
                    </div>
                </Grid2Col>
                <Grid4Col>
                    <div>
                        <Label>Kode Pos</Label>
                        <Input type='text' />
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                </Grid4Col>
            </Form>
            <H4>Please choose your preference for the shipping method.</H4>
            <InputContainer>
                <RadioLabel id="Oreo">
                    <RadioInput type="radio" name="topping" id="Oreo" value="Oreo"/>
                    <RadioBox></RadioBox>
                    <RadioParagraph>
                        <p style={{margin: "0"}}>I prefer to take it at the office.</p>
                        <p style={{margin: "0"}}>Free</p>
                    </RadioParagraph>
                </RadioLabel>

                <RadioLabel id="Chocochips">
                    <RadioInput type="radio" name="topping" id="Chocochips" value="Chocochips"/>
                    <RadioBox></RadioBox>
                    <RadioParagraph>
                        <p style={{margin: "0"}}>Gosend / Grabsend</p>
                        <p style={{margin: "0"}}>+ Rp 20.000,00</p>
                    </RadioParagraph>
                </RadioLabel>

                <RadioLabel id="Extra Cheese">
                    <RadioInput type="radio" name="topping" id="Extra Cheese" value="Extra Cheese"/>
                    <RadioBox></RadioBox>
                    <RadioParagraph>
                        <p style={{margin: "0"}}>JNE/JNT/SiCepat</p>
                        <p style={{margin: "0"}}>+ Rp 10.000,00</p>
                    </RadioParagraph>
                </RadioLabel>
            </InputContainer>
            <Hr/>
            <H4>Order Summary</H4>
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
            <Detail2>
                <Label>Biaya Pengiriman (Gosend)</Label>
                <Label style={{textAlign: 'right'}}>Rp 20.000,00</Label>
            </Detail2>
            <Detail2>
                <Label>Biaya Packaging</Label>
                <Label style={{textAlign: 'right'}}>Rp 1.000,00</Label>
            </Detail2>
            <Detail2>
                <div>
                    <Label style={{textAlign: 'right'}}>Total</Label>
                    <Label style={{textAlign: 'right', fontWeight: 600}}>Rp 81.000,00</Label>
                </div>
                <CheckoutButton>Checkout</CheckoutButton>
            </Detail2>
        </Main>
        <Footer />
    </Container>
  )
}

export default Checkout