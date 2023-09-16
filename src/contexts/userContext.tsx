import { createContext, useEffect, useState } from 'react';
import api from '../api';
import { useNavigate } from 'react-router-dom';


export const UserContext = createContext({} as any);

export const UserStorage = ({children}: any) => {
    const navigate = useNavigate()
    const [login, setLogin] = useState(false)
    const [user, setUser] = useState({})
    const [token, setToken] = useState(localStorage.getItem('token') as string)
    const [videos, setVideo] = useState({})
    const [userVideos, setUserVideos] = useState({})


    const getUser = (token: string) => {
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
            getVideos(token, data.user.id)
        }).catch((error) => {
            console.log('Usuário não encontrado', error)
        })
    }

    useEffect(() =>{
        getUser(token);
    },[token])

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string) => {
        api.post('/user/sign-in', {email, password}).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);
            setToken(data.token);
            getUser(data.token);
            navigate('/')
        }).catch((error) => {
            console.log('Não foi possível fazer o login', error)
        })
    }

    const handleSignUp = (name: string, email: string, password: string) => {
        api.post('/user/sign-up', {name, email, password}).then(() => {
            alert('Usuário cadastrado com sucesso')
            handleLogin(email, password);
            navigate('/')
        }).catch((error) => {
            console.log('Não foi possível fazer o cadastro', error)
            if(error.response.status === 409) { // 409 é o status de conflito para email já existente 
                alert('Este e-mail já está em uso. Por favor tente outro.')
            } else {
                alert('Não foi possível criar o usuário. Verifique os dados e tente novamente.')
            }
        })
    }

    const createVideo = (token: string, user_id: string, title: string, description: string, thumbnail: string, publicationDate: Date) => {
        api.post('/videos/create-video', {user_id, title, description, thumbnail, publicationDate}, {headers: {Authorization: token}}).then(({data}) => {
            setVideo(data);
            alert('Video criado com sucesso');
            getUser(token)
        }).catch((error) => {
            return alert(error)
        })
    }

    const getVideos = (token: string, user_id: string) => {
        api.get('/videos/get-videos', {params: {user_id}, headers: {Authorization: token}}).then(({data}) => {
            setUserVideos(data.videos)
        }).catch((error) => {
            return error
        })
    }


    return (
        <UserContext.Provider value={{ login, user, handleLogin, logOut, handleSignUp, createVideo, getVideos, token, userVideos }}>
            {children}
        </UserContext.Provider>
    )
}