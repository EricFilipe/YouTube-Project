import { useContext, useState, useRef } from "react";
import { UserContext } from "../../contexts/userContext";
import { AuxiliarTextContainer, Button1, Button2, ButtonsContainer, CheckBoxContainer, Container, ContentContainer, EmailContainer, FontsContainer, FooterContainer, IdiomsSelect, Input, Logo, PasswordInputContainer, Text } from "./login-style";
import { EmailContext } from "../../contexts/emailContext";
import { useNavigate } from "react-router-dom";


function Login2() {
    const { handleLogin } = useContext(UserContext)

    const navigate = useNavigate()
    const {email} = useContext(EmailContext)
    const [password, setPassword] = useState('')
    const [passwordValid, setPasswordValid] = useState(true)
    const passwordRef = useRef<HTMLInputElement>(null)

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }


    const login = () => {
        if(password.trim() !== '') {
            setPasswordValid(true)
        }
        if(password.trim() === '') {
            setPasswordValid(false)
            if(passwordRef.current) {
                passwordRef.current.focus()
            }
        }
        else {
            handleLogin(email, password)
        }
    }
   
    return (
        <>
        <Container>
            <ContentContainer>
                <FontsContainer>
                    <Logo src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'}/>
                    <span>Olá!</span>
                    <EmailContainer>
                        {email}
                    </EmailContainer>
                </FontsContainer>
                <PasswordInputContainer valid={passwordValid}>
                    <Input 
                    ref={passwordRef}
                    type={showPassword? 'text' : 'password'}
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="Digite sua senha"
                    onKeyDown={(e) => {
                        if(e.key === '') {
                            e.preventDefault()
                        }
                        if(e.key === 'Enter') {
                            login()
                        }
                    }}
                    />
                </PasswordInputContainer>
                <AuxiliarTextContainer>
                    <CheckBoxContainer>
                        <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                        <label htmlFor="show-password">Mostrar Senha</label>
                    </CheckBoxContainer>
                    <ButtonsContainer>
                    <Button1>Esqueceu a senha?</Button1>
                    <Button2 onClick={login}>Próxima</Button2>
                </ButtonsContainer>
                </AuxiliarTextContainer>
                
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
  
  export default Login2;
  