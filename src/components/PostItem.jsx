import React, {useState, component} from "react";
import ReactDOM from 'react-dom';
import MyButton from "./UI/Button/MyButton";

class editPost extends React.Component{
    constructor(props) { // поменять под себя
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }
}

const PostItem = (props) => {

    return (
            <div className = "post">
        <div className ="post__content">
          <strong> {props.number}. {props.post.title} </strong>
          <div>
          {props.post.body}
          </div>
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