import styled from "styled-components"
import HeaderContainer from "../components/Header/Header"

const Title = styled.h1`
  color: var(--main-color);
`
const Text = styled.p`
  color: var(--main-color);
  & a {
    text-decoration: underline;
    font-size: 17px;
    color: var(--main-color);
  }
`

const Projects = () => {
  return(
    <>
      <HeaderContainer />
      <Title>Under Construction</Title>
      <Text>- Puedes vistitar mis projectos en <a target="_blank" href="https://github.com/hxst1" rel="noreferrer">GitHub</a></Text>
    </>
  )
}

export default Projects
