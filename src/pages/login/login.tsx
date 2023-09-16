import { useContext, useState, useRef } from "react";
import { AuxiliarTextContainer, Button1, Button2, ButtonsContainer, Container, ContentContainer, EmailInputContainer, FontsContainer, FooterContainer, IdiomsSelect, Input, Logo, Text } from "./login-style";
import { useNavigate } from "react-router-dom";
import { EmailContext } from "../../contexts/emailContext";
import { InputEmpty, MessageContainer } from "../sign-up/sign-up-style";


function Login() {
    const {email, setEmail} = useContext(EmailContext)
    const [userEmailValid, setUserEmailValid] = useState(true)
    const [formatEmailValid, setFormatEmailValid] = useState(true)
    const emailRef = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    
    const next = () => {
        if(email.trim() !== '') {
            setUserEmailValid(true)
        }
        if(email.trim() === '') {
            setUserEmailValid(false)
            if(emailRef.current) {
                emailRef.current.focus()
            }
        }
        else if(!/\S+@\S+\.\S+/.test(email)) {
            setFormatEmailValid(false)
            setUserEmailValid(false)
            if(emailRef.current) {
                emailRef.current.focus()
            }
        }
        else {
            navigate('/login/password')
        }
    }

    return (
        <>
        <Container>
            <ContentContainer>
                <FontsContainer>
                    <Logo src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'}/>
                    <span>Fazer Login</span>
                    Prosseguir no YouTube
                </FontsContainer>
                <EmailInputContainer valid={userEmailValid}>
                    <Input 
                    ref={emailRef}
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="E-mail ou telefone"
                    onKeyDown={(e) => {
                        if(e.key === '') {
                            e.preventDefault()
                        }
                        if(e.key === 'Enter') {
                            next()
                        }
                    }}
                    />
                </EmailInputContainer>
                <MessageContainer>
                    <InputEmpty valid={userEmailValid}>
                    {formatEmailValid? 'Digite seu e-mail' : 'O formato desse e-mail é inválido. Digite um e-mail válido.'}
                    </InputEmpty>
                </MessageContainer>
                <AuxiliarTextContainer>
                    <span>Esqueceu seu email?</span>
                    <Text>Não está no seu computador? Use uma janela de navegação privada para fazer login. <span>Saiba mais</span></Text>
                </AuxiliarTextContainer>
                <ButtonsContainer>
                    <Button1 onClick={()=> navigate('/sign-up')}>Criar Conta</Button1>
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
  
  export default Login;
  