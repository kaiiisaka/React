import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import PostIdPage from "../pages/PostIdPage";
import {routes, publicRoutes} from "../router";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
const {isAuth, isLoading} = useContext(AuthContext)
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        isAuth === true
            ?
            <Routes key={Route.path}>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                {/*<Route path="/" element={<Posts />} />*/}
                <Route  path="/posts/:id" element={<PostIdPage />} />
                <Route
                    path="*"
                    element={<Navigate to = "/posts" replace />}
                />
            </Routes>
            :
            <Routes key={Route.path}>
                <Route path="/login" element={<Login />} />
                <Route
                    path="*"
                    element={<Navigate to = "/login" replace />}
                />
            </Routes>

    );
};

export default AppRouter;