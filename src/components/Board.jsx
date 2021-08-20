import { useSelector, useDispatch } from "react-redux";
import { boardState, userMove, compMove } from "../features/board/boardSlice";

const Board = () => {
  const board = useSelector(boardState);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    const { id } = e.target;
    userClick(parseInt(id));
  };

  const userClick = (num) => {
    if (checkClicked(num)) {
        dispatch(userMove(num));
        markClicked('green', num);
    }
  };

  const checkClicked = (num) => {
    if (!board.userClicked.includes(num) && !board.compClicked.includes(num)) {
      return true;
    }
    return false;
  };

  const markClicked = (color, num) => {
    let current = document.getElementById(num);
    current.style.backgroundColor = color;    
  }


  return (
    <div className="fullGrid">
      {board.grid.map((grid, index) => {
        return (
          <div
            className="gridBlock"
            onClick={handleClick}
            key={index}
            id={index}
          ></div>
        );
      })}
    </div>
  );
};

export default Board;
