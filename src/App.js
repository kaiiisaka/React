import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
      {id: 1, title: 'Javascript', body: 'Description'},
      {id: 2, title: 'Javascript 2', body: 'Description'},
      {id: 3, title: 'Javascript 3', body: 'Description'},
    ])
    //получаем пост из дочернего компонента
    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

    const createPost = (newPost) => {
      setPosts ([...posts, newPost])
    }

    return (
    <div className = "App">
        <PostForm create ={createPost}/>
        {posts.length
          ?
          <PostList remove={removePost} posts={posts} title="Посты про Js"/>
          :
          <h1 style={{textAlign: 'center'}}>
            Посты не найдены!
            </h1>
        } 
    </div>
    );
}

export default App;