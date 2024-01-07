import './App.css';

import { Header } from './layout/header/Header';
import { Main } from './layout/sections/main/Main';
import { Skils } from './layout/sections/skils/Skils';
import { Works } from './layout/sections/works/Works';
import { Testimony } from './layout/sections/testimony/Testimony';
import { Contacts } from './layout/sections/contacts/contacts';
import { Slogan } from './layout/sections/slogan/slogan';
import { Footer } from './layout/footer/footer';
import { Block } from './layout/footer/block';


function App() {
    return (
        <div className="App">
           <Header/>
           <Main/>
           <Skils/>
           <Works/>
           <Testimony/>
           <Contacts/>
           <Slogan/>
           <Footer/>
           <Block/>
        </div>
    );
}

export default App;


