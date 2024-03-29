import React, {useEffect, useMemo, useRef, useState} from 'react';
import {usePosts} from "../components/hooks/usePosts";
import {useFetching} from "../components/hooks/useFetching";
import PostService from "../API/PostService";
import {getPageCount} from "../utils/pages";
import MyButton from "../components/UI/Button/MyButton";
import MyModal from "../components/UI/MyModal/MyModal";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../components/PostList";
import Pagination from "../components/UI/pagination/Pagination";
import Loader from "../components/UI/Loader/Loader";

function Posts() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)
    const [totalPages, setTotalPages] = useState(0)
    const [limit, setLimit] = useState(10)
    const [page, setPage] = useState(1)


    const [fetchPosts, isPostsLoading, postError] = useFetching( async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit))
    })

    useEffect(() => {
        fetchPosts()
    }, [page])

    const createPost = (newPost) => {
        setPosts ([...posts, newPost])
        setModal(false)
    }

    const changePage = (page) => {
        setPage(page)
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
            {postError &&
                <h1>произошла ошибка ${postError}</h1>
            }
            {isPostsLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
                :<PostList remove={removePost} posts={sortedAndSearchedPosts} title="Посты про Js"/>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;