/* eslint-disable no-unused-vars */
import { Link, useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { boardListState } from "../store/boardList";
import { useEffect, useState } from "react";
import { deleteBoard, getBoardById, updateBoard } from "../api/boards";

const Post = () => {
  const navigate = useNavigate();

  const [postBoard, setPostBoard] = useState({
    title: "",
    content: "",
  });

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
  }, [id]);

  const updatePost = async () => {
    const data = await updateBoard(id, {
      title: postBoard.title,
      content: postBoard.content,
    });
    setPostBoard(data);
    navigate("/boards");
  };

  if (!postBoard.title && !postBoard.content) {
    return <div>Loading...</div>;
  }

  const deletePost = async () => {
    await deleteBoard(id);
    navigate("/boards");
  };

  return (
    <div>
      <h3>Title</h3>
      <input
        type="text"
        value={postBoard.title || ""}
        name="title"
        onChange={handleInput}
      />
      <h3>content</h3>
      <textarea
        name="content"
        value={postBoard.content || ""}
        onChange={handleInput}
      ></textarea>
      <br />

      <button onClick={updatePost}>수정</button>
      <button onClick={deletePost}>삭제</button>
    </div>
  );
};

export default Post;
