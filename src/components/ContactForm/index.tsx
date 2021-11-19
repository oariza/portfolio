import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

import * as Styled from "./styled";

function ContactForm() {
  const [contactFields, setContactFields] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("xgergdpb");

  const MINUMUM_ANSWER_LENGTH = 1;

  if (state.succeeded) {
    return (
      <p>Mensaje enviado, me pondré en contacto contigo a la brevedad. 😄</p>
    );
  }

  return (
    <Styled.ContactForm onSubmit={handleSubmit}>

        <Styled.Field>
          <label htmlFor="name">Nombre</label>
          <Styled.ContactInput
            $width="100%"
            id="name"
            type="text"
            name="name"
            onChange={(e) =>
              setContactFields({ ...contactFields, name: e.target.value })
            }
            value={contactFields.name}
            placeholder="Escribe aquí tu nombre"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </Styled.Field>

        <Styled.Field>
          <label htmlFor="email">Correo electrónico</label>
          <Styled.ContactInput
            $width="100%"
            id="email"
            type="email"
            name="email"
            onChange={(e) =>
              setContactFields({ ...contactFields, email: e.target.value })
            }
            value={contactFields.email}
            placeholder="Escribe aquí tu email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </Styled.Field>


      <Styled.Field>
        <label htmlFor="subject">Asunto</label>
        <Styled.ContactInput
          $width="100%"
          id="subject"
          type="text"
          name="subject"
          onChange={(e) =>
            setContactFields({ ...contactFields, subject: e.target.value })
          }
          value={contactFields.subject}
          placeholder="Escribe aquí tu asunto"
        />
        <ValidationError
          prefix="Subject"
          field="subject"
          errors={state.errors}
        />
      </Styled.Field>

      <Styled.Field>
        <label htmlFor="message">Mensaje</label>
        <Styled.ContactTextArea
          id="message"
          name="message"
          onChange={(e) =>
            setContactFields({ ...contactFields, message: e.target.value })
          }
          value={contactFields.message}
          rows={5}
          placeholder="Escribe aquí tu mensaje"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </Styled.Field>

      <Styled.ContactButton
        type="submit"
        disabled={
          contactFields.name.length < MINUMUM_ANSWER_LENGTH ||
          contactFields.email.length < MINUMUM_ANSWER_LENGTH ||
          contactFields.subject.length < MINUMUM_ANSWER_LENGTH ||
          contactFields.message.length < MINUMUM_ANSWER_LENGTH ||
          state.submitting
        }
      >
        Enviar
      </Styled.ContactButton>
    </Styled.ContactForm>
  );
}

export default ContactForm;
