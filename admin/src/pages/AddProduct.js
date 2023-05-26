import React, { useState, useEffect } from 'react'
import { Button, Container, Main } from '../stycomp/stycomp'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";
import { useRef } from 'react'

const Form = styled.form``

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
`

const ImageDiv = styled.div`
  height: 100px;
  width: 100px;
  border: 1px dashed #7F5539;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ImageLabel = styled.label`
  cursor:pointer;
  text-align: center;
  width: 55px;
`

const ImageInput = styled.input`
  display: none;
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

const AddProduct = () => {
  const refTitle = useRef(null);
  const refDesc = useRef(null);
  const refCategory = useRef(null);
  const refPrice = useRef(null);
  const [img, setImg] = useState("")
  const [file, setFile] = useState(null)
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [optioncategory, setCategory] = useState([])
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

  useEffect(() => {
      if(localStorage.getItem("user") === null) {
      navigate("/login")
      }
      fetchCategory([])
  }, [])

  async function addProduct(e) {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', 
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
      }, 
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL);
        });
      }
    );

    const postData = {
        title: refTitle.current.value,
        desc: refDesc.current.value,
        price: refPrice.current.value,
        categories: refCategory.current.value,
        img: img
    };

    try {
        const res = await fetch(`http://localhost:5500/api/products`, {
            method: "post",
            headers: {
            "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(postData),
        });

        if(!res.ok) {
            setError("Please fill in all the questions above");
            throw new Error(`An error has occured: ${res.status} - ${res.statusText}`);
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
                <ImageLabel htmlFor="inputTag">
                  Click to<br/>Insert<br/>Photo
                  <ImageInput id="inputTag" type="file" onChange={(e) => setFile(e.target.files[0])}/>
                </ImageLabel>
              </ImageDiv>
              <p style={{marginTop: "4px"}}>{file && file.name}</p>
            </div>
            <InputDiv>
              <div>
                <Label style={{marginTop: "0"}}>Product Name</Label>
                <Input type='text' ref={refTitle}/>
              </div>
              <div>
                <Label>Insert Description</Label>
                <TextAreaInput type='textarea' rows={5} ref={refDesc}/>
              </div>
              <div>
                <Label style={{marginTop: "0"}}>Category</Label>
                <Select name='category' id='category' ref={refCategory}>
                  {optioncategory &&
                    optioncategory.map((item) => <option value={item.title}>{item.title}</option>)
                  }
                </Select>
              </div>
              <div>
                <Label style={{marginTop: "0"}}>Price</Label>
                <Input type='number' ref={refPrice}/>
              </div>
            </InputDiv>
          </FormContainer>
          <Button style={{width: "170px", marginTop: "30px", cursor: "pointer"}} onClick={addProduct}>Add New Product</Button>
          </Form>
        </Main>
    </Container>
  )
}

export default AddProduct