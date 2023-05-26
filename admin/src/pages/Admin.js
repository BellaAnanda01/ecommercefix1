import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Container, H1, H2, H3, Main } from '../stycomp/stycomp'
import { Link, useNavigate } from 'react-router-dom';
import AdminDetail from '../components/AdminDetail';

const AdminContainer = styled.div`
    margin: 20px;
`

const Admin = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [admin, setAdmin] = useState([])
    const navigate = useNavigate();

    const fetchAdmin = async () => {
        try {
            let response = await fetch(`http://localhost:5500/api/users/`);
            const data = await response.json();
            setAdmin(data)
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
        fetchAdmin()
    }, [])

    if(!loading) {
      return(<H1 style={{marginTop: "30px", textAlign: "center"}}>Loading...</H1>)
    }

  return (
    <Container>
      <Navbar />
      <Sidebar />
      <Main>
        <H2 style={{color: "#7F5539", textAlign: "center", paddingTop: "10px", marginBottom: "15px"}}>You have {admin.length} Admins now.</H2>
        <p style={{textAlign: "center", marginTop: "5px"}}>Admin helps you to manage the shop.</p>
        <AdminContainer>
            {admin &&
                admin.map((item) => <AdminDetail key={item._id} {...item} />)
            }
            <Link to={"/addadmin"}><H3 style={{marginLeft: "15px", marginTop: "calc(1em + 8px)", fontSize: "16px"}}>+ Add New Admin</H3></Link>
        </AdminContainer>
      </Main>
    </Container>  
  )
}

export default Admin