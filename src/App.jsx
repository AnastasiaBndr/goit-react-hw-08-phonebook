import { Routes, Route } from "react-router-dom";
import './App.module.css';
import Filter from './components/Filter';
import ContactList from "./components/ContactList";
import ContactForm from "./components/ContactForm";
import Header from "components/Header";


export default function App() {

  return (<><Header />
    <Routes>
      <Route path="/" element={<ContactForm />}>
        <Route path='list' element={<><Filter /><ContactList /></>}>
        </Route>

      </Route>

    </Routes></>
  )
}

