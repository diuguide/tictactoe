import { useSelector, useDispatch } from "react-redux";
import { boardState, userMove, compMove } from "../features/board/boardSlice";
import { useEffect } from "react";

const Board = () => {
  const board = useSelector(boardState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (board.userClicked.length != 0) {
      computerMove();
    }
  }, [board.userClicked]);

  const handleClick = (e) => {
    const { id } = e.target;
    userClick(parseInt(id));
  };

  const userClick = (num) => {
    if (checkClicked(num)) {
      markClicked("green", num);
      dispatch(userMove(num));
    }
  };

  const checkClicked = (num) => {
    if (!board.userClicked.includes(num) && !board.compClicked.includes(num)) {
      return true;
    }
    return false;
  };

  const markClicked = (color, num) => {
    console.log("num inside mark clicked", num);
    let current = document.getElementById(num);
    current.style.backgroundColor = color;
  };

  const computerMove = () => {
    let compChoice = bestMove();
    if (checkClicked(compChoice)) {
      console.log("checkClicked computer move");
      dispatch(compMove(compChoice));
      markClicked("red", compChoice);
    }
  };

  const bestMove = () => {
    let moveCount = board.userClicked.length;
    console.log("moveCount: ", moveCount);
    switch (moveCount) {
      case 1:
        for (let i = 0; i < board.possibleWins.length; i++) {
          if (board.userClicked[0] != board.possibleWins[i][0]) {
            return board.possibleWins[i][0];
          }
        }
        break;
      case 2:
        for (let i = 0; i < board.possibleWins.length; i++) {
          if (board.userClicked[1] != board.possibleWins[i][1]) {
            return board.possibleWins[i][1];
          }
        }
        break;
      case 3:
        for (let i = 0; i < board.possibleWins.length; i++) {
          if (board.userClicked[2] != board.possibleWins[i][2]) {
            return board.possibleWins[i][2];
          }
        }
        break;
      case 4:
        for (let i = 0; i < board.possibleWins.length; i++) {
          if (board.userClicked[0] != board.possibleWins[i][0]) {
            return board.possibleWins[i][0];
          }
        }
        break;
      default:
        break;
    }
  };

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
