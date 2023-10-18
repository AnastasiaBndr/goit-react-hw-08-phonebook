import { Routes, Route } from "react-router-dom";
import './App.module.css';
import Filter from './components/Filter';
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Header from "components/Header";
import Register from "components/Register";
import Login from "components/Login";

export default function App() {

  return (<><Header />
    <Routes>
      <Route path="/" element={<>WELCOMEEEEE</>} />
      <Route path='list' element={<><ContactForm /><Filter /><ContactList /></>} />
      <Route path='register' element={<Register />} />
      <Route path='login' element={<Login />} />

    </Routes></>
  )
}

