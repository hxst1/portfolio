import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import Modal from "../Modal/Modal"

const ContainerHeader = styled.div`
  min-height: 150px;
  margin-bottom: 20px;
  background-color: var(--main-bg-color);
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  & .Icon-modal-open {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 20px;
    margin: 10px;
    color: var(--main-color);
    
    :hover{
      animation: spin 2s infinite;

      @keyframes spin {
        0%{transform: rotate(0deg);}
        50% {transform: rotate(180deg);}
        100% {transform: rotate(360deg);}
      }
    }
  }


  & .imagePFP{
    height: 120px;
    width: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 614px) {
    min-height: 300px;
    flex-direction: column;
  }

`
const ContainerHeaderLeft = styled.div`
  display: flex;
  align-items: center;

  & .image-container{
    margin-right: 7px;
  }

  & .text-container{
    color: var(--main-color)
  }

   @media (max-width: 370px) {
    flex-direction: column;

    & .image-container{
      margin: 20px;
    }

    & .text-container{
      text-align: center;
    }
  }

`

const ContainerHeaderRight = styled.div`
  & .links {
    margin: 20px;
    padding: 10px;
    color: var(--main-color);
    font-size: 20px;
    text-decoration: underline #0000;
    transition: 0.2s;
    display: inline-block;
    position: relative;
    font-weight: bold;
  }

  @media (max-width: 370px) {
    & .links {
      text-decoration: underline;
    }
  }
`

const HeaderContainer = () => { 
  const [show, setShow] = useState(true);

  return(
    <ContainerHeader>
      <FontAwesomeIcon onClick={() => setShow(!show)} className="Icon-modal-open" icon={faGear} />
      <Modal setShow={setShow} show={show}/>
      <ContainerHeaderLeft>
        <section className="image-container">     
          <img className="imagePFP" src="images/EduRuizPFP.jpg" alt="profile pfp" />
        </section>
        <section className="text-container">
          <h1>Edu Ruiz</h1>
          <p>FullStack Developer</p>
        </section>
      </ContainerHeaderLeft>
      <ContainerHeaderRight>
        <Link className="links" to="/">Home</Link>
        <Link className="links" to="/projects">Projects</Link>
      </ContainerHeaderRight>
    </ContainerHeader>
  )
}

export default HeaderContainer
