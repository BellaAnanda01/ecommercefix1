import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

const AdminDiv = styled.div`
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    margin: 0 10px;
`

const AdminTitle = styled.p`
    margin: 10px 0;
`

const AdminControl = styled.div`
    display: flex;
    gap: 7px;
`

const AdminDetail = ({_id, name, username, password}) => {
    const deleteAdmin = () => {
        if (window.confirm("Apakah Anda yakin ingin menghapus admin ini?")) {
            fetch(`http://localhost:5500/api/users/${_id}`, { method: 'DELETE' })
            .then(() => window.location.reload(false));
        }
    }
  return (
    <div>
            <AdminDiv>
                <AdminTitle>{name}</AdminTitle>
                <AdminControl>
                    <Link to={`/admin/${_id}`}>
                        <p style={{color: "#7F5539", margin: "13px 0"}}>Edit</p>
                    </Link>
                    <p style={{margin: "11px 0 13px"}}>|</p>
                    <p style={{color: "#7F5539", margin: "13px 0", cursor: "pointer"}} onClick={deleteAdmin}>Delete</p>
                </AdminControl>
            </AdminDiv>
    </div>
  )
}

export default AdminDetail