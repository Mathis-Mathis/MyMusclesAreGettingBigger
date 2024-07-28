import './App.css';
import NavigationBar from "./components/navbar/navbar";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Exercices from "./components/exercices/exercices";

function Home() {
    return (
        <div className="centered-container">
            <h1>Exercices</h1>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <NavigationBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/exercices" element={<Exercices/>} />
                </Routes>
            </BrowserRouter>
      </div>
  );
}



export default App;
