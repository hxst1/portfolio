import styled from "styled-components"

const ContainerMain = styled.div`  
  height: 76vh;
  display: flex;
  justify-content: space-around;
  @media (max-width: 800px) {
    flex-direction: column;
    height: 100%;
  }
`

const ContainerMainLeft = styled.div`
  width: 50%;
  margin-right: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: var(--main-bg-color);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  padding-top: 20px;
  padding-bottom: 20px;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 16px;
    border-radius: 10px;
    background-color: var(--main-bg-color);
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: var(--main-bg-color);

  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    border: 4px solid var(--main-bg-color);
    background-color: #888;
  }

  ::-webkit-scrollbar-button {
    border-radius: 10px;
    display:none;
  }

  & h1 {
    color: var(--main-color);
    margin-top: 20px;
    margin-left: 20px;
    text-align: left;
    text-decoration: underline;
    font-size: 20px;
  }
  
  & p {
    color: var(--main-color);
    margin: 20px;
    margin-bottom: 20px;
    text-align: left;
  }

  & .social-media {
    display: flex;
    flex-direction: column;
    margin: 10px;

    & h1 {
      color: var(--main-color);
      margin: 15px;
      text-align: left;
      text-decoration: underline;
      font-size: 20px;
    }

    & a {
      margin: 10px;
      padding: 5px;
      border: 2px solid var(--main-color);
      border-radius: 10px;
      text-decoration: none;
      text-align: center;
      color: var(--main-color);
    }
  }

 @media (max-width: 800px) {
    width: 100%;
    height: 100%;
    margin-bottom: 0;
  }
`

const ContainerMainRight = styled.div`
  width: 50%;
  margin-left: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  
  @media (max-width: 800px) {
    width: 100%;
    height: 600px;
    margin: 0;
  }

  & .top{
    height: 50%;
    margin-bottom: 10px;
    border-radius: 10px;
    background-color: var(--main-bg-color);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 800px) {
      margin-top: 20px;
      justify-content: center;
      align-items: flex-start;
    }

    & h1 {
      color: var(--main-color);
      margin: 10px;
      text-align: left;
      text-decoration: underline;
      font-size: 20px;
    }

    & p {
      color: var(--main-color);
      margin: 5px;
      margin-left: 10px;
    }
  }

  & .bottom{
    height: 50%;
    margin-top: 10px;
    border-radius: 10px;
    background-color: var(--main-bg-color);
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    & h1 {
      color: var(--main-color);
      margin: 15px;
      font-size: 20px;
      text-align: left;
      text-decoration: underline;
    }

    & .pdf-button {
      border: 2px solid var(--main-color);
      border-radius: 10px;
      padding: 10px;
      color: var(--main-color);
    }
  }
`

const MainContainer = () => {
  return(
    <ContainerMain>
      <ContainerMainLeft>
        <h1>About Me</h1>
        <p>Me llamo Edu y desde que tengo memoria he sido un apasionado de la inform??tica y la ciberseguridad. A los 16 a??os comenc?? a estudiar ciberseguridad de forma autodidacta. </p>
        <p>Estuve practicando mucho en plataformas controladas como HackTheBox y qued??ndome hasta la madrugada sin parar de practicar, hasta que decid?? dar un paso al mundo real y llegu?? a reportar una vulnerabilidad de Lliurex a la Comunidad Valenciana.</p>
        <p>Poco a poco se me fue despertando una gran pasi??n por la programaci??n y empec?? a crear scripts con bash y python. Despu??s de mucha investigaci??n, curs?? un Bootcamp Fullstack para poder desarrollarme profesionalmente como programador. En ISDI Coders realic?? proyectos diarios donde aprend?? las habilidades necesarias para poder afrontar los proyectos frontend y backend semanales. Finalmente, realic?? un proyecto final utilizando como tecnolog??as Next.js, TypeScript, StyledComponents, Node.js, Express y MongoDB, por supuesto siempre aplicando los principios SOLID, c??digo limpio y escalable. </p>
        <p>Gracias a las m??s de 1000 horas de programaci??n en el Bootcamp y a todas las habilidades adquiridas en los ??ltimos a??os, me siento totalmente capacitado para poder seguir desarroll??ndome tanto personal como profesionalmente.</p>
        <section className="social-media">
          <h1>Social Media</h1>
          <a href="https://www.linkedin.com/in/edu-ruiz-cantos/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/hxst1" target="_blank" rel="noreferrer">GitHub</a>        
          <a href="https://twitter.com/_hxst" target="_blank" rel="noreferrer">Twitter</a>
          <a href="https://app.hackthebox.com/profile/240822" target="_blank" rel="noreferrer">HackTheBox</a>
        </section>   
      </ContainerMainLeft>
      <ContainerMainRight>
        <div className="top">
              <h1>Skills</h1>
              <p>&#9819; React, NextJS, Redux</p>
              <p>&#9818; TypeScript, JavaScript, HTML</p>
              <p>&#9822; SASS, CSS, Bootstrap</p>
              <p>&#9820; MongoDB, Node.js, Mongoose, Express</p>
              <p>&#9821; Unit Testing, Jest</p>
              <p>&#9823; Figma</p>
        </div>
        <div className="bottom">
              <h1>Curriculum Vitae</h1>
              <a className="pdf-button" href="files/EduRuiz_CV.pdf" download="EduRuiz_CV">Download CV</a>
        </div>
      </ContainerMainRight>
    </ContainerMain>
  )
}

export default MainContainer
