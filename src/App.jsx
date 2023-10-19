import { Routes, Route, Navigate } from "react-router-dom";
import css from './App.module.css';
import Header from "components/Header";
import { useDispatch } from "react-redux";
import authOperations from "redux/auth/authOperations";
import React, { Suspense, lazy, useEffect } from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import authSelectors from "redux/auth/authSelectors";
import { Hourglass } from 'react-loader-spinner';


export default function App() {
  const dispatch = useDispatch();
  const LazyPersonalPage = lazy(() => import('./PersonalListPage'));
  const LazyRegister = lazy(() => import('./components/Register'));
  const LazyLogin = lazy(() => import('./components/Login'));
  const LazyMainPage = lazy(() => import('./MainPage'));

  useEffect(() => {
    dispatch(authOperations.refreshCurrentUser());
  }, [dispatch])

  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (<><Header />
    <Suspense fallback={<section className={css.loader}><Hourglass
      visible='true'
      position='absolute'
      top='50%'
      left='50%'
      height="40"
      width="40"
      ariaLabel="hourglass-loading"
      wrapperStyle={{}}
      wrapperClass="loader"
      colors={['#bba5cf', '#f588ff']}
    /></section>}>
      <Routes>
        <Route path="/" element={<LazyMainPage />} />
        <Route path='list' element={isLoggedIn ? <LazyPersonalPage /> : <Navigate to='/login' />}>
        </Route>
        <Route path='register' element={!isLoggedIn ? <LazyRegister /> : <Navigate to='/list' />} />
        <Route path='login' element={!isLoggedIn ? <LazyLogin /> : <Navigate to='/list' />} />

      </Routes>
    </Suspense></>
  )
}

