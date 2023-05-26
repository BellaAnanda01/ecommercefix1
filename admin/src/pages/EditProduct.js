import React, { useState, useEffect } from 'react'
import { Button, Container, Main } from '../stycomp/stycomp'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
import { useRef } from 'react'

const Form = styled.form``

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

const ImageDiv = styled.div`
  height: 100px;
  width: 100px;
`

const Image = styled.img`
    width: 100%;
    height: 100%;
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 0;
`

const Label = styled.p`
    font-size: 16px;
    margin: 7px 0;
`

const Input = styled.input`
    width: 80%;
    background-color: #E6CCB2;
    border: none;
    font-size: 16px;
    padding: 5px;
    margin-bottom: 12px;
    max-width: 300px;
`

const Select = styled.select`
    width: 80%;
    background-color: #E6CCB2;
    border: none;
    font-size: 16px;
    padding: 5px;
    margin-bottom: 12px;
    max-width: 300px;
`

const InputDiv = styled.div`
  width: 70%;
  margin-left: 30px;
`

const TextAreaInput = styled.textarea`
  width: 80%;
  background-color: #E6CCB2;
  border: none;
  font-size: 16px;
  padding: 5px;
  margin-bottom: 12px;
  max-width: 300px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;;
`

const EditProduct = () => {
  const refTitle = useRef(null);
  const refDesc = useRef(null);
  const refCategory = useRef(null);
  const refPrice = useRef(null);
  const [productData, setProductData] = useState([])
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [optioncategory, setCategory] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchCategory = async () => {
    try {
        let response = await fetch(`http://localhost:5500/api/categories/`);
        const data = await response.json();
        setCategory(data)
    }
    catch (error){
        setError(error)
    }
    setLoading(true)
  }

  const fetchProductData = async () => {
    try {
        let response = await fetch(`http://localhost:5500/api/products/find/${id}`);
        const data = await response.json();
        console.log(data)
        setProductData(data)
    }
    catch (error){
        setError(error)
    }
    }

  useEffect(() => {
      if(localStorage.getItem("user") === null) {
      navigate("/login")
      }
      fetchCategory([])
      fetchProductData([])
  }, [])

  async function editProduct(e) {
    e.preventDefault()
    const postData = {
        title: refTitle.current.value,
        desc: refDesc.current.value,
        price: refPrice.current.value,
    };

    try {
        const res = await fetch(`http://localhost:5500/api/products/${productData._id}`, {
            method: "put",
            headers: {
            "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(postData),
        });

        if(!res.ok) {
            setError("Please fill in all the questions above");
            throw new Error("Please fill in all the questions above");
        };

        navigate("/product")
    } catch (err) { 
        console.log(err)
    }
  }

  return (
    <Container>
        <Navbar/>
        <Sidebar/>
        <Main style={{padding: "calc(8px + 1em) 20px", width: "calc(100vw - 180px"}}>
          <Form>
          <FormContainer>
            <div>
              <ImageDiv>
                <Image src={productData.img} />
              </ImageDiv>
            </div>
            <InputDiv>
              <div>
                <Label style={{marginTop: "0"}}>Product Name</Label>
                <Input type='text' ref={refTitle} defaultValue={productData.title}/>
              </div>
              <div>
                <Label>Insert Description</Label>
                <TextAreaInput type='textarea' rows={5} ref={refDesc} defaultValue={productData.desc}/>
              </div>
              <div>
                <Label style={{marginTop: "0"}}>Price</Label>
                <Input type='number' ref={refPrice} defaultValue={productData.price}/>
              </div>
            </InputDiv>
          </FormContainer>
          <Button style={{width: "170px", marginTop: "30px", cursor: "pointer"}} onClick={editProduct}>Edit Product</Button>
          </Form>
        </Main>
    </Container>
  )
}

export default EditProduct