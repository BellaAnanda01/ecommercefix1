import styled from "styled-components";
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from "react-router-dom";

const Container = styled.div`
    top: 0px;
    width: calc(100vw - 40px);
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 20px;
    border-bottom: solid black 1px;
`

const Logo = styled.h1`
    font-size: 18px;
    color: #7F5539;
    font-weight: bold;
`

const CartIcon = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-right: 9px;
`

const Navbar = () => {
    let number = 0
    if(localStorage.getItem("carts") === null) {
        number = 0
    } else {
        let carts = JSON.parse(localStorage.getItem("carts"))
        carts.forEach(function(item) {
            number += item.quant
        })
    }

  return (
    <Container>
        <Logo>cakeku.co</Logo>
        <CartIcon>
            <Badge badgeContent={number} color="error">
                <Link to="/cart">
                    <ShoppingCartOutlinedIcon />
                </Link>
            </Badge>
        </CartIcon>
    </Container>
  )
}

export default Navbar