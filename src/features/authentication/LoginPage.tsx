
import React, { FormEvent } from 'react';
import useInput from '../../shared/hooks/useInput';
import { Input } from '../../shared/components/input/Input';
import { Form } from '../../shared/components/Form';
import { User } from './types';
import { login } from './LoginService';

import './Login.css';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks/hooks';
import { setUser } from '../../app/slices/userSlice';
import { getTranslations } from '../../shared/locales';


export const Login: React.FC =()=>{
  const t = getTranslations(useAppSelector((state) => state.language.currentLang));

       const passwordInput = useInput('', [
  { rule: 'required', message: t.passwordRules.required },
  { rule: 'minLength', value: 8, message:  t.passwordRules.minLength },
  { rule: 'number', message: t.passwordRules.mustContainNumber },
 {
  rule: 'regex',
  value: /[!@#$%^&*(),.?":{}|<>]/,
  message: t.passwordRules.mustContainSpecialChar,
},
{
  rule: 'regex',
  value: /[A-Z]/,
  message: t.passwordRules.mustContainUppercase,
},
{
  rule: 'regex',
  value: /[0-9]/,
  message: t.passwordRules.mustContainDigit,
}
])
       const nameInput = useInput('',[
  { rule: 'required', message: t.formValidation.nameRequired },
] )


const navigate =useNavigate();
 const dispatch = useAppDispatch(); 
 
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();

  const isPasswordValid = passwordInput.validate();
  const isUsernameValid = nameInput.validate();

 
  if (isUsernameValid && isPasswordValid) {
    const authUser: User = {
      username: nameInput.value,
      password: passwordInput.value,
    };

    login(authUser,t.errors.invalidLogin)
      .then(() => {
       

        dispatch(setUser({ ...authUser}))
        
         navigate('/products');
      })
      .catch((err) => {
        passwordInput.setError(err.message); 
      });

      
  }
};
    return(
        <div className='app-login'>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          label={t.login.username}
          name="name"
          placeholder={t.login.enterNamePlaceholder}
           {...nameInput}
        />
         <Input
          type="password"
          label={t.login.password}
          name="password"
          placeholder={t.login.enterPassword}
          {...passwordInput}
        />
         <button className="costumed-btn btn-default-margin">{t.login.submit}</button>
      </Form >
    </div>
    );
};