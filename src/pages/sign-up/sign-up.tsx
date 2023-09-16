import { useNavigate } from "react-router-dom";
import { Button2, ButtonsContainer, Container, ContentContainer, FontsContainer, FooterContainer, IdiomsSelect, Logo, Text } from "../login/login-style";
import { useContext, useState, useRef } from "react";
import { EmailContext } from "../../contexts/emailContext";
import { Input, InputEmpty, MessageContainer, NameInputContainer, SecNameInputContainer } from "./sign-up-style";

function SignUp() {
   const navigate = useNavigate()
   const {name, setName} = useContext(EmailContext)

   const [userNameValid, setUserNameValid] = useState(true)
   const nameRef = useRef<HTMLInputElement>(null)

   const next = () => {
    if(name.trim() !== '') {
        setUserNameValid(true)
    }
    if(name.trim() === '') {
        setUserNameValid(false)
        if(nameRef.current) {
            nameRef.current.focus()
        }
    }
    else{
        navigate('/sign-up2')
    }
   }

   return (
      <>
        <Container>
            <ContentContainer>
                <FontsContainer>
                    <Logo src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'}/>
                    <span>Criar uma Conta do Google</span>
                    Insira seu nome
                </FontsContainer>
                <NameInputContainer valid={userNameValid}>
                    <Input
                    ref={nameRef}
                    type="text"  
                    placeholder="Nome" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}/>
                </NameInputContainer>
                <MessageContainer>
                    <InputEmpty valid={userNameValid}>
                        Digite o seu nome
                    </InputEmpty>
                </MessageContainer>
                <SecNameInputContainer>
                    <Input type="text"  placeholder="Sobrenome (opcional)" />
                </SecNameInputContainer>
                <ButtonsContainer style={{display: 'flex', justifyContent: 'end'}}>
                    <Button2 onClick={next}>Próxima</Button2>
                </ButtonsContainer>
            </ContentContainer>
        </Container>
        <FooterContainer>
            <IdiomsSelect>
                <option value="Portugues">Português (Brasil)</option>
            </IdiomsSelect>
            <span>Ajuda</span>
            <span>Privacidade</span>
            <span>termos</span>
        </FooterContainer>
     </>
   );
  }
  
  export default SignUp;
  