import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/counter';
import PostForm from './components/PostForm';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/Button/MyButton';
import MyInput from './components/UI/input/MyInput';
import Myselect from './components/UI/select/Myselect';
import './styles/App.css';

function App() {
    const [posts, setPosts] = useState([
      {id: 1, title: 'первый', body: 'а описание'},
      {id: 2, title: 'второй 2', body: 'б описание'},
      {id: 3, title: 'третий 3', body: 'в описание'},
    ])
    //получаем пост из дочернего компонента
    const removePost = (post) => {
      setPosts(posts.filter(p => p.id !== post.id))
    }

    const [selectedSort, setSelectedSort] = useState('')

    const createPost = (newPost) => {
      setPosts ([...posts, newPost])
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) =>a[sort].localeCompare(b[sort])))
    }

    return (
    <div className = "App">
        <PostForm create ={createPost}/>
        <hr style={{margin: '15px 0'}}/>
        <div>
          <Myselect
              value={selectedSort}
              onChange={sortPosts}
            defaultValue="Сортировка"
            options={[
                {value: 'title', name: 'По названию'},
                {value: 'body', name: 'По описанию'}
            ]}
          />
        </div>
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