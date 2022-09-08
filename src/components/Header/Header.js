import { Link } from "react-router-dom"
import styled from "styled-components"

const ContainerHeader = styled.div`
  background-color: #fff;
  height: 150px;
  margin: 20px;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  display: flex;
  justify-content: space-around;
  align-items: center;

  & .imagePFP{
    height: 120px;
    width: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  }

  @media (max-width: 614px) {
    height: 300px;
    flex-direction: column;
  }
`
const ContainerHeaderLeft = styled.section`
  display: flex;
  align-items: flex-start;
  align-items: center;

  & .image-container{
    margin-right: 7px;
  }
`

const ContainerHeaderRight = styled.section`
  & .links {
    margin: 20px;
    padding: 10px;
    color: #000;
    font-size: 20px;
    text-decoration: underline #0000;
    transition: 0.2s;
    display: inline-block;
    position: relative;
    font-weight: bold;
  }

`

const HeaderContainer = () => { 
  return(
    <ContainerHeader>  
      <ContainerHeaderLeft>
        <section className="image-container">
          <img className="imagePFP" src="images/pfp.gif" alt="profile pfp" />
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
