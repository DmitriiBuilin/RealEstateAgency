import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';
import { useRef } from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../server/googleFirebase";

export const SignUp = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({email: '', password: ''})
    const [message, setMessage] = useState("");
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const captchaRef = useRef(null);

    const verifyToken = async (token) => {
        try{
        let response = await axios.post(`http://localhost:4000/verify-token`,{
           
    // secret:process.env.REACT_APP_SECRET_KEY,
    secret:'6Lei1lAkAAAAAEsg2nS6EeyLGbWY9iOCaU_VaDU8',
            token
        },console.log(token));
        return response.data;
        }catch(error){
        console.log("error ",error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setMessage('');

        if(inputs.email && inputs.password){
            let token = captchaRef.current.getValue();
                if(token){
                    let valid_token = await verifyToken(token);
                    if(valid_token.success){
                    setMessage("Hurray!! you have submitted the form");
                    }else{
                    setError("Sorry!! Token invalid");
                    }
                }else{
                    setError("You must confirm you are not a robot");
                }
        } else {
            setError("First name and Last name are required");
        }

        try {
            setError('')
            setLoading(true)
            await signUp(inputs.email, inputs.password)
            navigate('/landlords')
          } catch (error) {
            setError(error)
          } finally {
            setLoading(false)
            setInputs({email: '', password: ''})
          }
    };

    const handleInputs = (e) => {
        setInputs((prev) => ({...prev, [e.target.name]: e.target.value}))
    };



    return (
        <>
            <div className="container-field container-primary">
            <main className="landlords-main">
                <h1 className="signin-signup-header">Регистрация</h1>
                <p className="signin-signup-description">Создайте новую учетную запись</p>
                <form className="form-floating-wrp" onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            name='email' 
                            className="form-control" 
                            id="floatingInput" 
                            placeholder="mail@mail.com" 
                            required 
                            onChange={handleInputs}
                            value={inputs.email ?? ''}
                        />
                        <label htmlFor="floatingInput">E-mail адрес</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input 
                            type="password" 
                            name="password"
                            className="form-control" 
                            id="floatingPassword" 
                            placeholder="Password" 
                            required 
                            onChange={handleInputs}
                            value={inputs.password ?? ''}
                        />
                        <label htmlFor="floatingPassword">Пароль</label>
                    </div>
                    <button type="submit" className="btn btn-primary button-blue login-btn">Зарегистрироваться</button>
                    <div className='formGroup'>                    
                        {/* <ReCAPTCHA sitekey={process.env.REACT_APP_SITE_KEY} ref={captchaRef}  /> */}
                        <ReCAPTCHA sitekey={'6Lei1lAkAAAAAAsM0OCH0XVajpCHwnGvsoAeyK-D'} ref={captchaRef}  />
                    </div>
                </form>
                {loading && <p>Loading.....</p>}
                {error && <p style={{color: 'red'}}>{error.message}</p>}
            </main>
        </div>
        </>
    );
}

export default SignUp;