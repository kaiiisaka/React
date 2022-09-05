import React, {useEffect, useMemo, useRef, useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/input/MyInput';
import Myselect from './components/UI/select/Myselect';
import './styles/App.css';
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import {usePosts} from "./components/hooks/usePosts";
import axios from "axios";
import PostService from "./API/PostService";

function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [isPostsLoading, setIspostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts()
    }, [])

    const createPost = (newPost) => {
      setPosts ([...posts, newPost])
        setModal(false)
    }

    async function fetchPosts() {
        setIspostsLoading(true);
        const posts = await PostService.getAll();
        setPosts(posts)
        setIspostsLoading(false);
    }

    //получаем пост из дочернего компонента
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    return (
    <div className = "App">
        {/*<button onClick={fetchPosts}>get posts</button>*/}
        <MyButton style = {{marginTop: 30}} onClick={() => setModal(true)}>
            Создать пост
        </MyButton>
        <MyModal visible={modal} setVisible={setModal}>
            <PostForm create ={createPost}/>
        </MyModal>
        <hr style={{margin: '15px 0'}}/>
        <PostFilter
            filter={filter}
            setFilter={setFilter}
        />
        {isPostsLoading
        ?<h1>идет загрузка...</h1>
        :<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про Js"/>
        }
    </div>
    );
}

export default App;