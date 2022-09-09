import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {routes, publicRoutes} from "../router";
import Login from "../pages/Login";

const AppRouter = () => {

     const isAuth = true;

    return (
        isAuth === true
            ?
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/" element={<Posts />} />
                <Route  path="/posts/:id" element={<PostIdPage />} />
                <Route path="/login" element={<Login />} />
                <Route
                    path="*"
                    element={<Navigate to = "/" replace />}
                />
            </Routes>
            :
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route
                    path="*"
                    element={<Navigate to = "/login" replace />}
                />
            </Routes>

    );
};

export default AppRouter;