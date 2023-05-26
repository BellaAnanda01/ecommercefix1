import styled from "styled-components";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
    top: 0px;
    width: calc(100vw - 40px);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    border-bottom: solid black 1px;
    position: fixed;
    z-index: 200;
    background: white;
`

const Logo = styled.h1`
    font-size: 18px;
    color: #7F5539;
    font-weight: bold;
`

const User = styled.h3`
    font-size: 16px;
    color: black;
    font-weight: 500;
`

const Icon = styled.div`
  font-size: small;
  cursor: pointer;
  margin-right: 9px;
  color: rgb(176, 137, 104);
`

const Navbar = () => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login")
  }

  const user = JSON.parse(localStorage.getItem("user"))
  const name = user.name

  return (
    <Container>
        <Logo>cakeku.co</Logo>
        <div style={{display: "flex", gap: "15px", alignItems: "center"}}>
          <User>{name}</User>
          <Icon>
            <LogoutIcon onClick={logout} />
          </Icon>
        </div>
    </Container>
  )
}

export default Navbar