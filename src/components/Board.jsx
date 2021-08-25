import { useSelector, useDispatch } from "react-redux";
import { boardState, userMove, compMove } from "../features/board/boardSlice";
import { useEffect } from "react";

const Board = ({double}) => {
  const board = useSelector(boardState);

  const dispatch = useDispatch();

  useEffect(() => {
    if (board.userClicked.length != 0) {
      // computerMove();

      checkWin();
    }
  }, [board.userClicked]);

  const handleClick = (e) => {
    const { id } = e.target;
    userClick(parseInt(id));
  };

  const userClick = (num) => {
    if (checkClicked(num)) {
      markClicked("green", num);
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
    if (color == "green") {
      dispatch(userMove(num));
      double();
      computerMove();
      console.log("user dispatch");
      
    } else if (color == "red") {
      dispatch(compMove(num));
      console.log("computer dispatch");
    }
  };

  const computerMove = () => {
    console.log("state inside computer move: ", board);
    checkSync();
    // let compChoice = 1;
    // if (checkClicked(compChoice)) {
    //   markClicked("red", compChoice);
    // }
  };

  const checkSync = () => {
    console.log("check sync", board);
  }

  const bestMove = () => {
    let moveCount = board.userClicked.length;

    switch (moveCount) {
      case 1:
        // for (let i = 0; i < board.possibleWins.length; i++) {
        //   if (board.userClicked[0] != board.possibleWins[i][0]) {
        //     return board.possibleWins[i][generateRandom(3)];
        //   }
        // }

        break;
      case 2:
        for (let i = 0; i < board.possibleWins.length; i++) {
          if (board.userClicked[1] != board.possibleWins[i][1]) {
            return board.possibleWins[i][generateRandom(3)];
          }
        }
        break;
      case 3:
        for (let i = 0; i < board.possibleWins.length; i++) {
          if (board.userClicked[2] != board.possibleWins[i][2]) {
            return board.possibleWins[i][generateRandom(3)];
          }
        }
        break;
      case 4:
        for (let i = 0; i < board.possibleWins.length; i++) {
          if (board.userClicked[0] != board.possibleWins[i][0]) {
            return board.possibleWins[i][generateRandom(3)];
          }
        }
        break;
      default:
        break;
    }
  };

  const generateRandom = (len) => {
    return Math.floor(Math.random() * len);
  };

  const checkWin = () => {
    let possible = board.possibleWins;
    if (board.userClicked.length >= 3) {
      for (let i = 0; i < possible.length; i++) {
        if (
          board.userClicked.includes(possible[i][0]) &&
          board.userClicked.includes(possible[i][1]) &&
          board.userClicked.includes(possible[i][2])
        ) {
          console.log(" User Wins");
        }
      }
    } else if (board.compClicked.length >= 3) {
      for (let i = 0; i < possible.length; i++) {
        if (
          board.compClicked.includes(possible[i][0]) &&
          board.compClicked.includes(possible[i][1]) &&
          board.compClicked.includes(possible[i][2])
        ) {
          console.log("Comp Wins");
        }
      }
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
