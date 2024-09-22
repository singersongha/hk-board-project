import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addBoard, getBoards } from "../api/boards";

const Add = () => {
  const [board, setBoard] = useState({ title: "", content: "" });

  const [boardList, setBoardList] = useState([]);

  const [userPostId, setUserPostId] = useState(null);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBoard({ ...board, [name]: value });
  };

  const addPost = async () => {
    const data = await addBoard({ title: board.title, content: board.content });
    setUserPostId(data.id);
    console.log(data);
    const newBoardList = await getBoards();
    setBoardList(newBoardList);
    setBoard({ title: "", content: "" });
  };

  const getPosts = async () => {
    const data = await getBoards();
    setBoardList(data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="w-full px-[200px] py-[50px] bg-[#2A2B37]">
      <div className="flex flex-col align-center">
        <input
          className="min-h-[25px] px-[10px] rounded text-white bg-[#1F2028] "
          type="text"
          value={board.title}
          name="title"
          onChange={handleInput}
          placeholder="TITLE"
        />
        <br />
        <textarea
          className="min-h-[100px] bg-[#1F2028] px-[10px] rounded text-white"
          name="content"
          value={board.content}
          onChange={handleInput}
          placeholder="CONTENT"
        ></textarea>
        <br />
        <div className="flex justify-center">
          <button
            className="text-[#1F2028] bg-[#FCECAF] rounded-sm w-[100px] h-[35px] font-semibold"
            onClick={addPost}
          >
            ADD
          </button>
        </div>
      </div>
      <div className="mt-[30px]">
        <ul className="text-white">
          {boardList.map(({ title, id }) => (
            <li
              className={`border-b-[1px] border-[#FCECAF] mb-[10px] px-[10px] ${
                id === userPostId ? "text-[#FCECAF] font-bold" : ""
              }`}
              key={id}
            >
              <Link to={`/boards/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Add;
