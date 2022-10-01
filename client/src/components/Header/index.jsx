import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import  { Link } from 'react-router-dom'
import Button from '@mui/material/Button';

import styles from './Header.module.scss';
import Container from '@mui/material/Container';
import { logout, selectIsAuth } from '../../redux/slisces/auth';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);
  const NumberPhone = useSelector( state => state.auth.data) 
  

  const onClickLogout = () => {
    if ( window.confirm('Вы действительно хотите выйти?')){
      dispatch(logout());
      window.localStorage.removeItem('token')
    }
  };

  return (
    <div className={styles.root}>
      <Container maxWidth="lg">
        <div className={styles.inner}>
          <Link className={styles.logo} to="/">
            <div>i MASSAGER</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Button variant="contained">{`+${NumberPhone.phone}`}</Button>
                <Link to="/">
                <Button onClick={onClickLogout} variant="contained" color="error">
                  Выйти
                </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/">
                  <Button variant="outlined">Войти</Button>
                </Link>
                <Link to="/register">
                  <Button variant="contained">Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};