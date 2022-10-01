import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Container from "@mui/material/Container";

import { Header } from "./components";
import { Registration, SendMassage, Login, Success} from "./pages";
import React from 'react';
import { fetchAuthMe, selectIsAuth } from './redux/slisces/auth';


function App() {
  const dispatch = useDispatch();
  const isAuth = useSelector(selectIsAuth);

  React.useEffect(() => {
    dispatch(fetchAuthMe());
  }, []);

  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/register" element={<Registration />}/> 
        <Route path="/sendMassage" element={<SendMassage />}/>
        </Routes>
      </Container>
    </>
  );
}

export default App;
