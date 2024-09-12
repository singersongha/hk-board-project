import { Link, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { boardListState } from "../store/boardList";
import { useEffect, useState } from "react";

const Post = () => {
  const [postBoard, setPostBoard] = useState({ title: "", content: "", id: 0 });

  const [boardList, setBoardList] = useRecoilState(boardListState);

  const [editPost, setEditPost] = useState({
    title: postBoard.title,
    content: postBoard.title,
    id: postBoard.id,
  });

  const { id } = useParams();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setPostBoard({ ...postBoard, [name]: value });
  };

  useEffect(() => {
    const data = boardList.find((post) => post.id === parseInt(id));
    setPostBoard(data);
    // console.log("dldi");
  }, []);

  const editBoard = (e) => {
    const { name, value } = e.target;
    setEditPost({ ...editPost, [name]: value });
  };

  const deleteBoard = () => {};

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
      {/* {board ? <Add board={board} /> : "not found"} <br /> */}
      <button onClick={editBoard}>
        <Link to="/">수정</Link>
      </button>
      <button onClick={deleteBoard}>
        <Link to="/">삭제</Link>
      </button>
    </div>
  );
};

export default Post;
