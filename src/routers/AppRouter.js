import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import EditExpensePage from '../components/EditExpense';
import AddExpensePage from '../components/AddExpense';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import LoginPage from '../components/LoginPage';


const AppRouter = () => (

    <BrowserRouter>
        {true && <Header/>}
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