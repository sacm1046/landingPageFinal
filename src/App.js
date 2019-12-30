import React from 'react';
// No se agrega reactDOM ya que solo se carga en index.js
import "./App.css";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Card from "./components/Card";
import Footer from "./components/Footer";


const App = (props) => {
    return (
        <>
            <div className="container-fluid p-0">
                <div className="row bg-dark">
                    <div className="col-md-1"></div>
                    <div className="col-md-10 p-0">
                        <Navbar logoButton={"Start Bootstrap"} firstButton={"Home"} secondButton={"Service"} thirdButton={"Contact"} />
                    </div>
                    <div className="col-md-1"></div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <Jumbotron titleJumbotron={"Hello, world!"} textJumbotron={"aa"} buttonJumbotron={"bb"} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-3">
                        <Card titleCard={"Hello, world!"} imgCard="https://placehold.it/500x325" textCard={"aa"} buttonCard={"bb"} />
                    </div>
                    <div className="col-md-3">
                        <Card titleCard={"Hello, world!"} imgCard="https://placehold.it/500x325" textCard={"aa"} buttonCard={"bb"} />
                    </div>
                    <div className="col-md-3">
                        <Card titleCard={"Hello, world!"} imgCard="https://placehold.it/500x325" textCard={"aa"} buttonCard={"bb"} />
                    </div>
                    <div className="col-md-3">
                        <Card titleCard={"Hello, world!"} imgCard="https://placehold.it/500x325" textCard={"aa"} buttonCard={"bb"} />
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark mt-5 pt-4">
                <div className="row pt-4 pb-4">
                    <div className="col-md-12">
                        <Footer footer={"Copyright © Your Website 2019"} />
                    </div>
                </div>
            </div>

        </>
    );
};

export default App;