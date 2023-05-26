import React, { useState, useEffect, useRef } from 'react'
import { Button, Container, Main } from '../stycomp/stycomp'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from "../firebase";

const Form = styled.form``

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  min-height: 250px;
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

const InputDiv = styled.div`
  width: 70%;
  margin-left: 30px;
`

const AddCategory = () => {
  const refTitle = useRef(null);
  const [img, setImg] = useState("")
  const [file, setFile] = useState(null)
  const [error, setError] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
      if(localStorage.getItem("user") === null) {
      navigate("/login")
      }
  })

  async function addCategory(e) {
    e.preventDefault()
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);

    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed', 
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
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
        // Handle unsuccessful uploads
      }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImg(downloadURL);
          // console.log('File available at', downloadURL);
        });
      }
    );

    const postData = {
        title: refTitle.current.value,
        img: img
    };

    try {
        const res = await fetch(`http://localhost:5500/api/categories`, {
            method: "post",
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
                <ImageLabel for="inputTag">
                  Click to<br/>Insert<br/>Photo
                  <ImageInput id="inputTag" type="file" onChange={(e) => setFile(e.target.files[0])}/>
                </ImageLabel>
              </ImageDiv>
              <p style={{marginTop: "4px"}}>{file && file.name}</p>
            </div>
            <InputDiv>
              <div>
                <Label style={{marginTop: "0"}}>Category Title</Label>
                <Input type='text' ref={refTitle}/>
              </div>
            </InputDiv>
          </FormContainer>
          <Button style={{width: "170px", marginTop: "30px", cursor: "pointer"}} onClick={addCategory}>Add New Category</Button>
          </Form>
        </Main>
    </Container>
  )
}

export default AddCategory