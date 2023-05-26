import React, { useEffect, useState } from 'react'
import { Container, H1, H3, Main } from '../stycomp/stycomp'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Category from '../components/Category';
import { Link, useNavigate } from 'react-router-dom';

const Product = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState([])
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

  if(!loading) {
    return(<H1 style={{marginTop: "30px", textAlign: "center"}}>Loading...</H1>)
  }

  return (
    <Container>
        <Navbar />
        <Sidebar />
        <Main>
            {category &&
              category.map((item) => <Category key={item._id} {...item} />)
            }
            <Link to="/addproduct">
              <H3 style={{marginLeft: "20px", marginTop: "calc(1em + 8px)"}}>+ Add New Product</H3>
            </Link>
            <Link to="/addcategory">
              <H3 style={{marginLeft: "20px", marginTop: "calc(1em + 8px)"}}>+ Add New Category</H3>
            </Link>
        </Main>
    </Container>
  )
}

export default Product