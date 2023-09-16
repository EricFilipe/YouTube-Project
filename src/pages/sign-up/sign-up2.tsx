import { useContext, useState, useRef } from "react";
import { Button1, Button2, ButtonsContainer, CheckBoxContainer, Container, ContentContainer, FontsContainer, FooterContainer, IdiomsSelect, Logo, Text } from "../login/login-style";
import { EmailContext } from "../../contexts/emailContext";
import { UserContext } from "../../contexts/userContext";
import { EmailInputContainer, Input, InputEmpty, MessageContainer, PasswordInputContainer, PasswordsContainer } from "./sign-up-style";

function SignUp2() {
    const {name} = useContext(EmailContext)
    const {handleSignUp} = useContext(UserContext)
    const {email, setEmail} = useContext(EmailContext)
    
    const [password, setPassword] = useState('')
    const [comparePassword, setComparePassword] = useState('')
    const [userEmailValid, setUserEmailValid] = useState(true)
    const [userPasswordValid, setUserPasswordValid] = useState(true)
    const [formatEmailValid, setFormatEmailValid] = useState(true)
    const [samePassword, setSamePassword] = useState(true)

    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const conmparePasswordRef = useRef<HTMLInputElement>(null)

    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const createUser = () => {
        if(email.trim() !== '') {
            setUserEmailValid(true)
        }
        if(password.trim() !== '' && comparePassword.trim() !== '') {
            setUserPasswordValid(true)
        }
        if(email.trim() === '' && password.trim() === '') {
            setUserEmailValid(false)
            setUserPasswordValid(false)
            if(emailRef.current) {
                emailRef.current.focus()
            }
        }
        else if(email.trim() === '') {
            setUserEmailValid(false)
            setFormatEmailValid(true)
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
        else if(comparePassword.trim() === '') {
            setUserPasswordValid(false)
            if(conmparePasswordRef.current) {
                conmparePasswordRef.current.focus()
            }
        }
        else if(password !== comparePassword) {
            setUserPasswordValid(false)
            setSamePassword(false)
            if(conmparePasswordRef.current) {
                conmparePasswordRef.current.focus()
            }
        }
        else {
            handleSignUp(name, email, password)
        }
    }


   return (
      <>
        <Container>
            <ContentContainer>
                <FontsContainer>
                    <Logo src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png'}/>
                    <span>Usar seu e-mail atual</span>
                    <div style={{textAlign: 'center'}}>Digite o endereço de e-mail que você quer usar na sua Conta do Google</div>
                </FontsContainer>

                <EmailInputContainer valid={userEmailValid}>
                    <Input 
                    ref={emailRef}
                    type="email"  
                    placeholder="Endereço de e-mail" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </EmailInputContainer>
                <MessageContainer>
                    <InputEmpty valid={userEmailValid}>
                        {formatEmailValid? 'Digite seu e-mail' : 'O formato desse e-mail é inválido. Digite um e-mail válido.'}
                    </InputEmpty>
                </MessageContainer>

                <PasswordsContainer>
                    <PasswordInputContainer valid={userPasswordValid}>
                        <Input 
                        ref={passwordRef}
                        type={showPassword? 'text' : 'password'}  
                        placeholder="Senha" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === '') {
                                e.preventDefault()
                            }
                            if(e.key === 'Enter') {
                                createUser()
                            }
                        }}
                        />
                    </PasswordInputContainer>
                    <PasswordInputContainer valid={userPasswordValid}>
                        <Input 
                        ref={conmparePasswordRef}
                        type={showPassword? 'text' : 'password'}  
                        placeholder="Confirmar" 
                        value={comparePassword} 
                        onChange={(e) => setComparePassword(e.target.value)}
                        onKeyDown={(e) => {
                            if(e.key === '') {
                                e.preventDefault()
                            }
                            if(e.key === 'Enter') {
                                createUser()
                            }
                        }}
                        />
                    </PasswordInputContainer>
                </PasswordsContainer>
                <MessageContainer>
                    <InputEmpty valid={userPasswordValid}>
                        {userPasswordValid? '' : 'Preencha os campos vazios'}
                    </InputEmpty>
                </MessageContainer>
                <MessageContainer>
                    <InputEmpty valid={userPasswordValid}>
                        {samePassword? '' : 'Senha inválida. Verifique se estão iguais.'}
                    </InputEmpty>
                </MessageContainer>
                
                <CheckBoxContainer>
                    <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                    <label htmlFor="show-password">Mostrar Senha</label>
                </CheckBoxContainer>

                <ButtonsContainer>
                    <Button1>Criar um endereço do Gmail</Button1>
                    <Button2 onClick={createUser}>Criar conta</Button2>
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
  
  export default SignUp2;
  