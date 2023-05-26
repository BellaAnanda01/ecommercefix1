import React, {useRef, useState} from 'react'
import styled from "styled-components";
import { H2, Button } from '../stycomp/stycomp';
import { useNavigate } from "react-router-dom"

const Container = styled.div`
    border: 0px;
    padding: 0px;
    width: 100vw;
    height: calc(100vh + 200px);
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const Body = styled.div`
    margin: 20px;
    height: calc(100vh - 260px);
    position: relative;
`

const Main = styled.div`
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

const LoginContainer = styled.div`
    width: 80vw;
    padding: 50px 60px;
    background-color: #7F5539;
    border-radius: 40px;
    max-width: 450px;
`

const LoginForm = styled.div`
    display: grid;
    grid-template-columns: auto 1fr;
    row-gap: 10px;
    column-gap: 20px;
    align-items: center;
`

const Label = styled.p`
    font-size: 16px;
    color: white;
`

const Input = styled.input`
    width: max-width;
    background-color: #EDE0D4;
    border: none;
    font-size: 16px;
    padding: 5px;
    height: 30px;

`

const Login = () => {
    const refUsername = useRef(null)
    const refPassword = useRef(null)
    const [error, setError] = useState("")
    const navigate = useNavigate();

    async function login() {
        const postData = {
            username: refUsername.current.value,
            password: refPassword.current.value,
        };

        try {
            const res = await fetch(`http://localhost:5500/api/users/login`, {
                method: "post",
                headers: {
                "Content-Type": "application/json; charset=UTF-8",
                },
                body: JSON.stringify(postData),
            });

            if(!res.ok) {
                setError("Incorrect username or password");
                throw new Error("Incorrect username or password");
            };

            const data = await res.json();
            const result = JSON.stringify(data)
            localStorage.setItem("user", result)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <Container>
        <Body>
            <Main>
                <H2 style={{textAlign: "center"}}>Login</H2>
                <LoginContainer>
                    <LoginForm>
                        <Label>Username:</Label>
                        <Input type='text' ref={refUsername}/>
                        <Label>Password:</Label>
                        <Input type='password' ref={refPassword}/>
                    </LoginForm>
                    <Button style={{cursor: "pointer"}} onClick={login}>Login</Button>
                    <p style={{color: "white"}}>{error}</p>
                </LoginContainer>
            </Main>
        </Body>
    </Container>
  )
}

export default Login