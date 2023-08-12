import React, { useEffect, useState } from 'react';
import styles from './index.module.css';
import { useForm } from '../../contexts/FormContext';
import { useAuth } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Form() {
  const { formType, setFormType, formActive, setFormActive } = useForm();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isSignIn = formType === 'signin';
  const isSignUp = formType === 'signup';

  const { signup, login } = useAuth()

  const navigate = useNavigate()

  const toggleForm = () => {
    if (isSignIn) {
      setFormType('signup');
    } else if (isSignUp) {
      setFormType('signin');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formType === "signup") {
      if (password === confirmPassword) {
        await signup({
          "first_name": firstName,
          "last_name": lastName,
          "email": email,
          "password": password
        })
        
        setFormType('signin');
      }
    } else if (formType === "signin") {
      await login({
        "email": email,
        "password": password
      })
      navigate("/dashboard")
    }

    resetForm()
  };

  const resetForm = () => {
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setFormActive(false)
  }

  useEffect(() => {
    document.body.style.overflow = formActive ? 'hidden' : 'auto';
  }, [formActive]);

  return formActive ? (
    <div className={styles['overlay']}>
      <div className={styles['form']}>
        <div className={styles['main-form']}>
          <form onSubmit={handleSubmit}>
            <button type='button' onClick={() => setFormActive(false)} className={styles['close-btn']}>
              &times;
            </button>
            <div className={styles['input-section']}>
              <h1 className={styles['title']}>{isSignIn ? 'sign in' : 'sign up'}</h1>
            </div>
            {isSignUp && (
              <>
                <div className={styles['input-section']}>
                  <input type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                  <span>First name</span>
                </div>
                <div className={styles['input-section']}>
                  <input type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                  <span>Last name</span>
                </div>
              </>
            )}
            <div className={styles['input-section']}>
              <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} required />
              <span>Email</span>
            </div>
            <div className={styles['input-section']}>
              <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} required />
              <span>Password</span>
            </div>
            {isSignUp && (
              <div className={styles['input-section']}>
                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <span>Confirm password</span>
              </div>
            )}
            <span>
              {isSignIn ? "Don't have an account? " : 'Already have an account? '}
              <button type='button' className={styles['redirect-btn']} onClick={toggleForm}>
                {isSignIn ? 'sign up' : 'sign in'}
              </button>
            </span>
            <div className={styles['input-section']}>
              <button type='submit'>Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : null;
}
