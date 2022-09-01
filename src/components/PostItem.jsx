import React, {useState} from "react";
import MyButton from "./UI/Button/MyButton";



const PostItem = (props) => {

    const [edit, setEdit] = useState(props.post)

    const editPost = () => {

    }

    return (
            <div className = "post">
        <div className ="post__content">
          <strong> {props.number}. {props.post.title} </strong>
          <div>
          {props.post.body}
          </div>
        </div>

                <div className='post__btns'>
                    <MyButton onClick= {editPost}>
                        Редактировать
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