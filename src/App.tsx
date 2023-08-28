import {useEffect} from 'react'
import './App.scss'
import {initializeAOS} from "./AOS/initializeAOS.tsx";
import Header from "./components/Header/Header.tsx";
import Homepage from "./pages/homepage/Homepage.tsx";
import Footer from "./components/Footer/Footer.tsx";

function App() {

    useEffect(() => {
        initializeAOS();
    }, []);
    return (
        <div className={`max-w-[1240px] mx-auto`}>
            <Header />
            <Homepage />
            <Footer />
        </div>
    )
}

export default App
