import './App.css';
import './style/style.scss'
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Routes, Route} from "react-router-dom";
import Contact from "./page/home/contact/contact";
import Front from "./page/front/front";
import Backend from "./page/backend/backend";
import Ux from "./page/ux/ux";
import Flutter from "./page/flutter/flutter";
import Home from "./page/home/home";
import {IntlProvider} from "react-intl";
import {MESSAGES} from "./react-intl/messages";
import {useSelector} from "react-redux";




function App() {
    const locale = useSelector(state => state.main.locale)

    return (
      <>
          <IntlProvider locale={locale} messages={MESSAGES[locale]}>

          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/front" element={<Front/>}/>
            <Route path="/backend" element={<Backend/>}/>
            <Route path="/ux" element={<Ux/>}/>
            <Route path="/flutter" element={<Flutter/>}/>
          </Routes>
          <Contact/>
          <Footer/>
          </IntlProvider>
      </>
  );
}

export default App;
