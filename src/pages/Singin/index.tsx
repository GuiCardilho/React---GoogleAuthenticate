import { useState } from 'react';
import './styles.scss'
import {GoogleLogo} from 'phosphor-react'
import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth'
import { auth } from '../../services/firebase';


export function SingIn(){
    const [user, setUser] = useState<User>({} as User);

    function handleGoogleSingin(){
        const provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
        .then((result) => {
            setUser(result.user);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <div className='user'>
                {user.photoURL &&
                <img src={user.photoURL} alt="Foto do usuario"  referrerPolicy='no-referrer' />}

                <strong>
                    {user.displayName}
                </strong>
                <small>
                    {user.email}
                </small>
            </div>

            <h1>Acesse sua conta</h1>

            <span>
                Faça seu login utilizando a autenticação google e acesse de forma rapida <br /> sem a necessidade de realizar um cadastro
            </span>

            <button type="button" className="button" onClick={handleGoogleSingin}>
                <GoogleLogo />
                Entrar com Google
            </button>
        </div>
        

    )
}