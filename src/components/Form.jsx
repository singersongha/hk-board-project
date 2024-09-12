const Form = (board, handleInput) => {
  return (
    <>
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
    </>
  );
};

export default Form;
