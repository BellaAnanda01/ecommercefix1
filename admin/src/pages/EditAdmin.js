import React, { useRef, useState, useEffect } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Container, H2, Button, Main } from '../stycomp/stycomp'
import { useNavigate, useParams } from 'react-router-dom';

const FormContainer = styled.form``

const FormDiv = styled.div`
    margin: 70px 40px 50px;
    width: 100%;
    display: grid;
    grid-template-columns: max-content auto;
    row-gap: 25px;
    align-items: center;
`

const Label = styled.p`
    font-size: 16px;
    margin: 0 10px;
    font-weight: 600;
    padding-right: 10px;
`

const Input = styled.input`
    width: 80%;
    background-color: #E6CCB2;
    border: none;
    font-size: 16px;
    padding: 5px;
    /* margin-bottom: 12px; */
    max-width: 300px;
    height: 20px;
`

const EditAdmin = () => {
    const refName = useRef(null);
    const refUsername = useRef(null);
    const [adminData, setAdminData] = useState([])
    const [error, setError] = useState("")
    const { id } = useParams();
    const navigate = useNavigate();

    const fetchAdminData = async () => {
        try {
            let response = await fetch(`http://localhost:5500/api/users/find/${id}`);
            const data = await response.json();
            console.log(data)
            setAdminData(data)
        }
        catch (error){
            setError(error)
        }
    }

    useEffect(() => {
        if(localStorage.getItem("user") === null) {
        navigate("/login")
        }
        fetchAdminData([])
    }, [])

    async function register(e) {
        e.preventDefault()
        const postData = {
            name: refName.current.value,
            username: refUsername.current.value
        };

        try {
            const res = await fetch(`http://localhost:5500/api/users/${adminData._id}`, {
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

            navigate("/admin")
        } catch (err) { 
            console.log(err)
        }
    }

  return (
    <Container>
        <Navbar/>
        <Sidebar/>
        <Main>
            <H2 style={{color: "#7F5539", textAlign: "center", paddingTop: "10px", marginBottom: "15px"}}>Add Admin</H2>
            <FormContainer>
                <FormDiv>
                    <Label>Name:</Label>
                    <Input type='text' ref={refName} defaultValue={adminData.name}/>
                    <Label>Username:</Label>
                    <Input type='text' ref={refUsername} defaultValue={adminData.username}/>
                </FormDiv>
                <Button style={{width: "170px", marginTop: "25px", marginRight: "30px", cursor: "pointer"}} onClick={register}>Edit Admin</Button>
                <p>{error}</p>
            </FormContainer>
        </Main>
    </Container>
  )
}

export default EditAdmin