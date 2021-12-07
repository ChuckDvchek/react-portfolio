import React, {useState,useEffect} from "react";
import Header from "./Components/Header";
import Work from "./Components/Work";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import About from "./Components/About";
import Footer from "./Components/Footer";

function App() {
    const [page,setPage] = useState('home');
    const [pageContent,setPageContent] = useState(<Home/>)

    useEffect(()=>{
        switch(page){
            default:
                setPageContent(<Home/>);
            break;
            case "work":
                setPageContent(<Work/>);
            break;
            case "contact":
                setPageContent(<Contact/>);
            break;
            case "resume":
                setPageContent(<Resume/>);
            break;
            case "about":
                setPageContent(<About/>);
            break;
        }
    },[page])

    return (
        <div className="App">
            <Header page={page} setPage={setPage}/>
            {pageContent}
            <Footer/>
        </div>
    );
}

export default App;
