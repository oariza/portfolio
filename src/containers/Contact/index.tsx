import Footer from "../../components/Footer";

import ContactForm from "../../components/ContactForm";

import { Container, Content } from "../../styled/Global";

import * as Styled from "./styled";

function Contact() {
  return (
    <Container>
      <Content>
        <h1>Contacto</h1>
        <Styled.Section>
          <div>
            <h2>Hagamos algo juntos</h2>
            <p>Contáctame, me comunicaré contigo muy pronto. 😀</p>
          </div>
          <ContactForm />
        </Styled.Section>
        <Footer />
      </Content>
    </Container>
  );
}

export default Contact;
