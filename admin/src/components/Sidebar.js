import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    height: 100%;
    width: 110px;
    z-index: 100;
    background-color: white;
    border-right: 1px solid black;
    top: 70px;
    margin: 20px 20px 0;
    padding-top: 15px;
`

const LiSidebar = styled.p`
    color: #D9D9D9;
    font-weight: 600;
    line-height: 20px;
`

const Sidebar = () => {
  const location = useLocation();

  return (
    <Container>
      <Link to={"/"}>{location.pathname === "/" ? <LiSidebar style={{color: "black"}}>Order</LiSidebar> : <LiSidebar>Order</LiSidebar>}</Link>
      <Link to={"/product"}>{location.pathname === "/product" || location.pathname === "/addproduct" ? <LiSidebar style={{color: "black"}}>Product</LiSidebar> : <LiSidebar>Product</LiSidebar>}</Link>
      <Link to={"/admin"}>{location.pathname === "/admin" || location.pathname === "/addadmin" || location.pathname === "/editadmin" ? <LiSidebar style={{color: "black"}}>Admin</LiSidebar> : <LiSidebar>Admin</LiSidebar>}</Link>
    </Container>
  )
}

export default Sidebar