import React from 'react'
import styled from "styled-components";
import './OrderDetail.css';
import OrderProduct from './OrderProduct';

const Container = styled.div`
    padding: 10px 20px;
    
`

const OrderDetail = ({_id, noTelepon, metodePengiriman, alamat, RT, RW, kecamatan, kota, provinsi, kodePos, namaDepan, namaBelakang}) => {
  return (
    <Container>
        <div className="faq-drawer">
            <input className="faq-drawer__trigger" id="faq-drawer" type="checkbox" />
            <label className="faq-drawer__title" htmlFor="faq-drawer">{namaDepan} {namaBelakang}</label>
            <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content-alamat">
                <p>{noTelepon} | {metodePengiriman}</p>
                <p>{alamat}</p>
                <p>RT. {RT}/RW. {RW}</p>
                <p>{kecamatan}, {kota}</p>
                <p>{provinsi}, {kodePos}</p>
                </div>
                <OrderProduct />
            </div>
            <div className='hr'></div>
        </div>
    </Container>
  )
}

export default OrderDetail
