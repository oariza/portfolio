import { Container, Content } from "../../styled/Global";

import Footer from "../../components/Footer";

import * as Styled from "./styled";

import omar from "../../assets/omar2.jpg";

function AboutMe() {
  return (
    <Container>
      <Content>
        <h1>Acerca de mi</h1>
        <Styled.Section>
          <Styled.AboutMe>
            <div>
              <img src={omar} alt="Omar Ariza" />
            </div>
            <p>
              Mi nombre es Omar, soy desarrollador web Front End. Tengo gusto
              por un buen café, los gatos, el cine y los videojuegos. Me gusta
              participar en trabajos en los que pueda cooperar con distintas
              áreas y lograr nuevas experiencias para todos.
            </p>
          </Styled.AboutMe>
          <h2>¿Qué puedo hacer?</h2>
          <Styled.WhatCanIDo>
            <div>
              <h3>Aplicaciones Front End</h3>
              <p>
                Construyo aplicaciones web con funcionalidades modernas y las
                mejores prácticas, Utilizando tecnología moderna como HTML5,
                CSS, Javascript, React Js y Bootstrap.
              </p>
            </div>
            <div>
              <h3>Aplicaciones Nativas</h3>
              <p>
                Utilizo React Native para crear aplicaciones móviles nativas
                sencillas. React Native es moderno, rápido, multiplataforma y
                popular.
              </p>
            </div>
          </Styled.WhatCanIDo>
        </Styled.Section>
        <Footer />
      </Content>
    </Container>
  );
}

export default AboutMe;
