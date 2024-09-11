import { useParams } from "react-router-dom";
import Add from "./Add";

const Post = () => {
  const boardList = <Add boardList={boardList} />;
  const { id } = useParams();
  const board = boardList.find((post) => post.id === id);

  return (
    <div>
      {board ? <Add board={board} /> : "not found"} <br />
      <button>완료</button>
    </div>
  );
};

export default Post;
