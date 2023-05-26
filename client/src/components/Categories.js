import styled from "styled-components";

const Category = styled.div`
    display: inline-block;
    margin: 10vw 30px;
    height: 400px;
    width: 300px;
    border-radius: 50px;
    border: 1px solid black;
    box-shadow: 0px 3px 10px 3px rgba(0, 0, 0, 0.33);
    background-image: url(${(props) => props.url});
    background-position: center;
    background-size: 400px;
    background-repeat: no-repeat;
`

const CatTitle = styled.p`
    position: relative;
    height: 30px;
    padding-top: 20px;
    top: 320px;
    text-align: center;
    border-top: solid black 1px;
    color: white;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Categories = ({_id, img, title}) => {
  return (
    <Category url={img}>
        <CatTitle>{title}</CatTitle>
    </Category>
  )
}

export default Categories 