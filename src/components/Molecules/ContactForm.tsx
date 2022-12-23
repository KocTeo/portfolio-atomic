import React, { useState } from "react";
import Button from "../Atoms/Button";
import Input from "../Atoms/Input";
import Title from "../Atoms/Title";

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    console.log("Enviar para meu email");
    setEmail("");
    setName("");
    setSubject("");
  };

  return (
    <form action="" className="w-3/4 flex justify-center flex-col items-center">
      <Title>Vamos Trabalhar juntos?</Title>
      <div className="w-3/4 flex mt-10 mb-9 justify-between">
        <Input
          placeholder="Nome"
          type="text"
          value={name}
          onchange={({ target }: any) => setName(target.value)}
        />
        <Input
          placeholder="Email"
          type="text"
          value={email}
          onchange={({ target }: any) => setEmail(target.value)}
        />
      </div>
      <div className="content-center w-3/4">
        <Input
          placeholder="Assunto"
          type="area"
          value={subject}
          onchange={({ target }: any) => setSubject(target.value)}
        />
      </div>
      <Button onclick={handleSubmit}>Enviar</Button>
    </form>
  );
};

export default ContactForm;
