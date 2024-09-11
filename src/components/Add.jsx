import { useState } from "react";
import { Link } from "react-router-dom";

const Add = () => {
  const [board, setBoard] = useState({ title: "", content: "", id: 0 });
  //const board = { id, title, content };
  const [boardList, setBoardList] = useState([]);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setBoard({ ...board, [name]: value });
  };

  // add 버튼을 눌렀을 때
  const onClick = (e) => {
    e.preventDefault();
    if (board.title && board.content) {
      setBoardList([...boardList, { ...board, id: boardList.length + 1 }]);
      setBoard({ title: "", content: "", id: board.id + 1 });
    }
  };

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
        <button onClick={onClick}>add</button>
      </div>
      <div>
        <ul>
          {boardList.map((board) => (
            <li key={board.id}>
              <Link to={`/boards/${board.id}`}>{board.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Add;
