import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect } from "react"
import { useState } from "react"
import styled from "styled-components"

const ContainerModal = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  border-radius: 10px;
  position: fixed;
  top: 20px;
  right: 20px;
  left: 20px;
  height: 150px;
  z-index: 2;
  transform:translateX(-1500px);
  animation: roadRunnerIn .3s cubic-bezier(0.165, 0.840, 0.440, 1.000) forwards;
  text-align: center;

  @keyframes roadRunnerIn {
    0% {
      transform:translateX(1500px) skewX(-30deg) scaleX(1.3);
    }
    70% {
      transform:translateX(30px) skewX(0deg) scaleX(.9);
    }
    100% {
      transform:translateX(0px) skewX(0deg) scaleX(1);
    }
  }

  & .Icon-modal-close {
    position: absolute;
    top: 0;
    right: 0;
    font-size: 22px;
    margin: 10px;
    color: #000;
    :hover{
      animation: spin 2s infinite;

      @keyframes spin {
        0%{transform: rotate(0deg);}
        50% {transform: rotate(180deg);}
        100% {transform: rotate(360deg);}
      }
    }
  }

  @media (max-width: 614px) {
    min-height: 300px;
  }
`

const ContainerButtons = styled.section`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: column;

& h1{
  margin: 10px;
}

& ul {
  list-style: none;
  display: flex;
  margin: 10px;

  & li{
    margin: 20px;
    & .btn {
      padding: 10px 20px;
      border: 1px solid black;
      border-radius: 7px;
      box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
      cursor: pointer;
      font-weight: bold;
    }

    & .light {
      background-color: #fff;
      color: #000;
    }

    & .dark{
      background-color: #000;
      color: #fff;
    }

    & .night{
      background-color: #100A32;
      color: #F2FAB4;
    }
  }
}
`

const Modal = ({show, setShow}) => {
  let light = {
    background: '#fff',
    color: '#000',
    foreground: '#DFDFDF'
  }

  let dark = {
    background: '#181A1B',
    color: '#fff',
    foreground: '#2A2E2F'
  }

  let night = {
    background: '#100A32',
    color: '#F2FAB4',
    foreground: '#2B1A48'
  }

  const matchMediaTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useState(matchMediaTheme ? dark : light);
  let root = document.querySelector(':root');

  const themeSwitcher = (color) => {
    switch (color) {
      case 'light':
        localStorage.setItem('theme', JSON.stringify(light))
        setTheme(light)
        break;
      case 'dark':
        localStorage.setItem('theme', JSON.stringify(dark))
        setTheme(dark)
        break;
      case 'night':
        localStorage.setItem('theme', JSON.stringify(night))
        setTheme(night)
        break;
      default:
        setTheme(matchMediaTheme ? dark : light)
    }
  }

  useEffect(() => {
    const themesLS = JSON.parse(localStorage.getItem('theme'))
    root.style.setProperty('--main-bg-color', localStorage.length === 0 ? theme.background : themesLS.background);
    root.style.setProperty('--main-color', localStorage.length === 0 ? theme.color : themesLS.color);
    root.style.setProperty('--main-fg-color', localStorage.length === 0 ? theme.foreground : themesLS.foreground); 
  })


  return(
    <ContainerModal hidden={show}>
    <FontAwesomeIcon data-testid="Xmark" onClick={() => setShow(!show)} className="Icon-modal-close" icon={faXmark} />
      <ContainerButtons>
      <h1>Themes Switcher</h1>
      <ul>
        <li><button onClick={() => {themeSwitcher('light')}} className="btn light">light</button></li>
        <li><button onClick={() => {themeSwitcher('dark')}} className="btn dark">dark</button></li>
        <li><button onClick={() => {themeSwitcher('night')}} className="btn night">night</button></li>
      </ul>
      </ContainerButtons>
    </ContainerModal>
  )
}

export default Modal
