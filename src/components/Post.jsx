/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
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
    return (
      <div className="w-full p-[300px] bg-[#2A2B37]">
        <div className="flex justify-center text-[#FCECAF]">Loading...</div>
      </div>
    );
  }

  const deletePost = async () => {
    await deleteBoard(id);
    navigate("/boards");
  };

  return (
    <div className="w-full h-screen px-[200px] py-[50px] bg-[#2A2B37]">
      <div className="flex flex-col align-center">
        <input
          className="min-h-[20px] px-[10px] rounded text-white bg-[#1F2028]"
          type="text"
          value={postBoard.title || ""}
          name="title"
          onChange={handleInput}
        />
        <br />
        <textarea
          className="min-h-[100px] bg-[#1F2028] px-[10px] rounded text-white"
          name="content"
          value={postBoard.content || ""}
          onChange={handleInput}
        ></textarea>
        <br />
        <div className="flex justify-center">
          <button
            className="text-[#1F2028] bg-[#FCECAF] rounded w-[70px] h-[35px] mr-[10px]"
            onClick={updatePost}
          >
            수정
          </button>
          <button
            className="text-[#1F2028] bg-[#FCECAF] rounded w-[70px] h-[35px]"
            onClick={deletePost}
          >
            삭제
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
