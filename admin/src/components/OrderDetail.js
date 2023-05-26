import React from 'react'
import styled from "styled-components";
import './OrderDetail.css';
import OrderProduct from './OrderProduct';

const Container = styled.div`
    padding: 10px 20px;
    
`

const OrderDetail = () => {
  return (
    <Container>
        <div className="faq-drawer">
            <input className="faq-drawer__trigger" id="faq-drawer" type="checkbox" />
            <label className="faq-drawer__title" htmlFor="faq-drawer">Bella</label>
            <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content-alamat">
                <p>+62811456789 | Gosend</p>
                <p>Jalan Green Lake City no. 98</p>
                <p>RT. 05/RW. 13</p>
                <p>Kembangan, Jakarta Barat</p>
                <p>DKI Jakarta 15681</p>
                </div>
                <OrderProduct />
            </div>
            <div className='hr'></div>
        </div>
            
        <div className="faq-drawer">
            <input className="faq-drawer__trigger" id="faq-drawer-2" type="checkbox" />
            <label className="faq-drawer__title" htmlFor="faq-drawer-2">Sutashia</label>
            <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content-alamat">
                <p>+62811456789 | Gosend</p>
                <p>Jalan Green Lake City no. 98</p>
                <p>RT. 05/RW. 13</p>
                <p>Kembangan, Jakarta Barat</p>
                <p>DKI Jakarta 15681</p>
                </div>
                <OrderProduct />
            </div>
            <div className='hr'></div>
        </div>

        <div className="faq-drawer">
            <input className="faq-drawer__trigger" id="faq-drawer-3" type="checkbox" />
            <label className="faq-drawer__title" htmlFor="faq-drawer-3">michaelananta03</label>
            <div className="faq-drawer__content-wrapper">
                <div className="faq-drawer__content-alamat">
                <p>+62811456789 | Gosend</p>
                <p>Jalan Green Lake City no. 98</p>
                <p>RT. 05/RW. 13</p>
                <p>Kembangan, Jakarta Barat</p>
                <p>DKI Jakarta 15681</p>
                </div>
                <OrderProduct />
            </div>
            <div className='hr'></div>
        </div>
    </Container>
  )
}

export default OrderDetail