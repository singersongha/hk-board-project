/* eslint-disable no-unused-vars */
import { Link, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { boardListState } from "../store/boardList";
import { useEffect, useState } from "react";
import { getBoardById, updateBoard } from "../api/boards";

const Post = () => {
  const [postBoard, setPostBoard] = useState({
    title: "",
    content: "",
    id: 1,
  });
  // const [board, setBoard] = useState([]);
  // const [boardList, setBoardList] = useRecoilState(boardListState);

  // const [editPost, setEditPost] = useState(false);

  const { id } = useParams();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPostBoard({ ...postBoard, [name]: value });
  };

  const getPostsId = async () => {
    const data = await getBoardById(id);
    setPostBoard(data);
  };

  useEffect(() => {
    getPostsId();
  }, []);

  const updatePost = async () => {
    const data = await updateBoard(id, {
      title: postBoard.title,
      content: postBoard.content,
    });
    setPostBoard(data);
  };

  return (
    <div>
      <h3>Title</h3>
      <input
        type="text"
        value={postBoard.title}
        name="title"
        onChange={handleInput}
      />
      <h3>content</h3>
      <textarea
        name="content"
        value={postBoard.content}
        onChange={handleInput}
      ></textarea>
      <br />

      <button onClick={updatePost}>
        <Link to="/">수정</Link>
      </button>
      <button>
        <Link to="/">삭제</Link>
      </button>
    </div>
  );
};

export default Post;
