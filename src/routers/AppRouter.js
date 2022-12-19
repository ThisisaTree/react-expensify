import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboardPage from '../components/ExpenseDashboard';
import EditExpensePage from '../components/EditExpense';
import AddExpensePage from '../components/AddExpense';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';


const AppRouter = () => (

    <BrowserRouter>
        <Header/>
        <Routes>
            <Route path='/' element={<ExpenseDashboardPage/>}/>
            <Route path='/create' element={<AddExpensePage/>}/>
            <Route path='/edit/:id' element={<EditExpensePage/>}/>
            <Route path='/help' element={<HelpPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        
        </Routes>
    </BrowserRouter>

);

export default AppRouter;