import React, { useEffect } from 'react';
import styles from './index.module.css';
import { useForm } from '../../contexts/FormContext';

export default function Form() {
  const { formType, setFormType, formActive, setFormActive } = useForm();

  const isSignIn = formType === 'signin';
  const isSignUp = formType === 'signup';

  const toggleForm = () => {
    if (isSignIn) {
      setFormType('signup');
    } else if (isSignUp) {
      setFormType('signin');
    }
  };

  useEffect(() => {
    document.body.style.overflow = formActive ? 'hidden' : 'auto';
  }, [formActive]);

  return formActive ? (
    <div className={styles['overlay']}>
      <div className={styles['form']}>
        <div className={styles['main-form']}>
          <form>
            <button type='button' onClick={() => setFormActive(false)} className={styles['close-btn']}>
              &times;
            </button>
            <div className={styles['input-section']}>
              <h1 className={styles['title']}>{isSignIn ? 'sign in' : 'sign up'}</h1>
            </div>
            {isSignUp && (
              <>
                <div className={styles['input-section']}>
                  <input type='text' required />
                  <span>First name</span>
                </div>
                <div className={styles['input-section']}>
                  <input type='text' required />
                  <span>Last name</span>
                </div>
              </>
            )}
            <div className={styles['input-section']}>
              <input type='text' required />
              <span>Email</span>
            </div>
            <div className={styles['input-section']}>
              <input type='password' required />
              <span>Password</span>
            </div>
            {isSignUp && (
              <div className={styles['input-section']}>
                <input type='password' required />
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
