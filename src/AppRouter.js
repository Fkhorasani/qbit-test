import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Case1 from './case1';
import Case2 from './case2';
import Home from './Home';
import Case3 from './case3';

const AppRouter = () => {
    return(
        <>
            <Routes>
                <Route exact path='/' component={Home} element={<Home />} />
                <Route exact path='/case1' component={Case1} element={<Case1 />} />
                <Route exact path='/case2' component={Case2} element={<Case2 />}/>
                <Route exact path='/case3' component={Case3} element={<Case3 />}/>
            </Routes>
        </>
    )
};

export default AppRouter;