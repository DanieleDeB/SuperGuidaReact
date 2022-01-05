import React from 'react'
import App from '../App'
import Recipe from './Recipe/Recipe'
import {BrowserRouter, Routes, Route} from 'react-router-dom'


const  Router = () =>(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App/>} />
            <Route exact path="/recipe/:id" element={<Recipe/>}/>
        </Routes>      
    </BrowserRouter>
)

export default Router
