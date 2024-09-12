import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { boardListState } from "../store/boardList";
import { addBoard, getBoards } from "../api/boards";

const Add = () => {
  const [board, setBoard] = useState({ title: "", content: "" });

  const [boardList, setBoardList] = useRecoilState(boardListState);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBoard({ ...board, [name]: value });
  };

  const addPost = async () => {
    const data = await addBoard({ title: board.title, content: board.content });
    setBoardList(...boardList, data);
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
    <>
      <div>
        <h3>Title</h3>
        <input
          type="text"
          value={board.title}
          name="title"
          onChange={handleInput}
        />
        <h3>content</h3>
        <textarea
          name="content"
          value={board.content}
          onChange={handleInput}
        ></textarea>
        <br />
        <button onClick={addPost}>add</button>
      </div>
      <div>
        <ul>
          {boardList.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/boards/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Add;
