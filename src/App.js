import React from "react"
import ReactDOM from "react-dom"
import './App.css'
import Navbar from "../src/components/Navbar"
import Main from "../src/components/Main"

export default function App() {
    return (
        <div className="container">
            <Navbar />
            <Main />
        </div>
    )
}