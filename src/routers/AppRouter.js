import React from 'react';
import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';
import { createBrowserHistory } from "history";

import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import EditExpensePage from '../components/EditExpense';
import AddExpensePage from '../components/AddExpense';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import LoginPage from '../components/LoginPage';


const AppRouter = () => (

    <BrowserRouter>
        {!(window.location.pathname === '/') && <Header/>}
        <Routes>
            <Route path='/' element={<LoginPage/>}/>
            <Route path='/dashboard' element={<ExpenseDashboardPage/>}/>
            <Route path='/create' element={<AddExpensePage/>}/>
            <Route path='/edit/:id' element={<EditExpensePage/>}/>
            <Route path='/help' element={<HelpPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        
        </Routes>
    </BrowserRouter>

);

export default AppRouter;