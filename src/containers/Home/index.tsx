import omar from "../../assets/omar-ariza.png";
import github from "../../assets/github.png";
import mail from "../../assets/mail.png";
import linkedin from "../../assets/linkedin.png";
import design from "../../assets/design.png";
import ui from "../../assets/ui.png";
import developer from "../../assets/developer.png";
import Footer from "../../components/Footer";

import { Container, Content } from '../../styled/Global'

import * as Styled from "./styled";

function Home() {
  return (
    <Container>
      <Content>
        <Styled.Section>
          <Styled.Introduction>
            <Styled.Name>Omar</Styled.Name>
            <Styled.NameSpace>Ariza</Styled.NameSpace>
            <Styled.Description>
              DESARROLLADOR FRONT END, DISEÑADOR Y GAMER
            </Styled.Description>
            <Styled.Social>
              <a href="https://github.com/oariza">
                <img src={github} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/oariza/">
                <img src={linkedin} alt="Linkedin" />
              </a>
              <a href="mailto: arizaomar@gmail.com">
                <img src={mail} alt="Email" />
              </a>
            </Styled.Social>
          </Styled.Introduction>
          <Styled.Photo>
            <img src={omar} alt="Omar Ariza" />
          </Styled.Photo>
        </Styled.Section>
        <Styled.ExperiencieSection>
          <h2>Creo experiencias con<br/> alto impacto</h2>
          <Styled.CardContainer>
            <Styled.Card>
              <h3>Diseño web</h3>
              <img src={design} alt="Design" />
              <p>
                Un diseño profesional e innovador es importante para llamar la
                atención de tus usuarios.
              </p>
            </Styled.Card>
            <Styled.Card>
              <h3>Interfaz de usuario</h3>
              <img src={ui} alt="User Interface" />
              <p>
                Es importante ofrecer la mejor experiencia por medio de
                interfaces adaptables a cada usuario.
              </p>
            </Styled.Card>
            <Styled.Card>
              <h3>Desarrollo web</h3>
              <img src={developer} alt="Design" />
              <p>
                Un desarrollo web óptimo permite alcanzar nuevos límites y mejores
                audiencias.
              </p>
            </Styled.Card>
          </Styled.CardContainer>
          <Footer/>
        </Styled.ExperiencieSection>
      </Content>
    </Container>
  );
}

export default Home;
