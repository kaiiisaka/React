import React, {useState, component} from "react";
import ReactDOM from 'react-dom';
import MyButton from "./UI/Button/MyButton";
import {useNavigate, useParams} from 'react-router-dom'

class editPost extends React.Component{
    constructor(props) { // поменять под себя
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
}

const PostItem = (props) => {

    const navigate = useNavigate()
    console.log(navigate)
    const {id} = useParams();

    return (
            <div className = "post">
        <div className ="post__content">
          <strong> {props.post.id}. {props.post.title} </strong>
          <div>
          {props.post.body}
          </div>
        </div>
                <div className='post__btns'>
                    <MyButton onClick= {() => navigate(`${props.post.id}`)}>
                        Открыть
                    </MyButton>
                </div>
                <div className='post__btns'>
                    <MyButton onClick= {() => props.remove(props.post)}>
                        Удалить
                    </MyButton>
                </div>
      </div>
    );
};

export default PostItem;