import styled from "styled-components"

const ContainerMain = styled.div`
  height: 72.5vh;
  margin: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
  }
`

const ContainerMainLeft = styled.section`
  background-color: #fff;
  height: 72.5vh;
  width: 49%;
  border-radius: 10px;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
  overflow: scroll;
   ::-webkit-scrollbar {
      background-color: #fff;

    }

    ::-webkit-scrollbar-track {
      background-color: #fff;
    }

    ::-webkit-scrollbar-thumb {
      background-color: #888;
      border-radius: 16px;
      border: 4px solid #fff;
    }

     ::-webkit-scrollbar-button {
      display:none;
    }

  & .overflow-container{
    border-radius: 20px;
  
  & h1 {
    margin-top: 5px;
    margin-left: 10px;
    text-align: left;
    text-decoration: underline;
  }
  
  & p {
    margin: 10px;
    margin-bottom: 20px;
    text-align: left;
  }

  & .social-media {
    display: flex;
    flex-direction: column;
    & a {
      margin: 10px;
      color: black;
      text-decoration: none;
      padding: 5px;
      border: 2px solid #000;
      border-radius: 10px;
      text-align: center;

    }
  }
  
}
  @media (max-width: 800px) {
    width: 100%;
    height: 100%;
  
  }
`

const ContainerMainRight = styled.section`
  height: 72.5vh;
  width: 49%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
 
  @media (max-width: 800px) {
    width: 100%;
  }

  & .horizontal-container--top {
    background-color: #fff;
    margin-bottom: 10px;
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);

    & h1 {
      margin: 10px;
      text-align: left;
      text-decoration: underline;
    }

    & p {
      margin: 5px;
      margin-left: 10px;
    }

    @media (max-width: 800px) {
      margin-top: 20px;
      justify-content: center;
      align-items: flex-start;
    }
  }

   & .horizontal-container--bottom {
    background-color: #fff;
    margin-top: 10px;
    height: 50%;
    width: 100%;
    border-radius: 10px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.24);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h1 {
      margin: 15px;
      text-align: left;
      text-decoration: underline;
    }
    
    & .pdf-button {
      border: 2px solid #000;
      border-radius: 10px;
      padding: 10px;
      color: #000;
    }
  }
`

const MainContainer = () => {
  return(
    <ContainerMain>
      <ContainerMainLeft>
        <section className="overflow-container">
              <h1>About Me</h1>
              <p>Me llamo Edu y desde que tengo memoria he sido un apasionado de la informática y la ciberseguridad. A los 16 años comencé a estudiar ciberseguridad de forma autodidacta. </p>
              <p>Estuve practicando mucho en plataformas controladas como HackTheBox y quedándome hasta la madrugada sin parar de practicar, hasta que decidí dar un paso al mundo real y llegue a reportar una vulnerabilidad de Lliurex a la Comunidad Valenciana.</p>
              <p>Poco a poco se me fue despertando una gran pasión por la programación y empecé a crear scripts con bash y python. Después de mucha investigación, conocí un Bootcamp Fullstack para poder desarrollarme profesionalmente como programador. En ISDI Coders estuve realizando proyectos diarios donde aprendí las habilidades necesarias para poder afrontar los proyectos frontend y backend semanales. Finalmente, realicé un proyecto final utilizando como tecnologías Next.js, TypeScript, StyledComponents, Node.js, Express y MongoDB, por supuesto siempre aplicando los principios SOLID, código limpio y escalable. </p>
              <p>Gracias a las más de 1000 horas de programación en el Bootcamp y a todas las habilidades adquiridas en los últimos años, me siento totalmente capacitado para poder seguir desarrollándome tanto personal como profesionalmente.</p>
              <section className="social-media">
                <h1>Social Media</h1>
                <a href="https://www.linkedin.com/in/edu-ruiz-cantos/" target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="https://github.com/hxst1" target="_blank" rel="noreferrer">GitHub</a>        
                <a href="https://discord.com/users/398174691027714059" target="_blank" rel="noreferrer">Discord</a>
                <a href="https://www.instagram.com/hxst1/" target="_blank" rel="noreferrer">Instagram</a>
                <a href="https://twitter.com/_hxst" target="_blank" rel="noreferrer">Twitter</a>
                <a href="https://app.hackthebox.com/profile/240822" target="_blank" rel="noreferrer">HackTheBox</a>
              </section>
        </section>
      </ContainerMainLeft>
      <ContainerMainRight>
        <section className="horizontal-container--top">
              <h1>Skills</h1>
              <p>&#9819; React, NextJS, Redux</p>
              <p>&#9818; TypeScript, JavaScript, HTML</p>
              <p>&#9822; SASS, CSS, Bootstrap</p>
              <p>&#9820; MongoDB, Node.js, Mongoose, Express</p>
              <p>&#9821; Unit Testing, Jest</p>
              <p>&#9823; Figma</p>
        </section>
        <section className="horizontal-container--bottom">
              <h1>Curriculum Vitae</h1>
              <a className="pdf-button" href="files/EduRuiz_CV.pdf" download="EduRuiz_CV">Download CV</a>
        </section>
      </ContainerMainRight>
    </ContainerMain>
  )
}

export default MainContainer
