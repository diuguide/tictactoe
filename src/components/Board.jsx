import { useSelector } from "react-redux";
import { boardState } from "../features/board/boardSlice";
import { useRef } from "react";

const Board = () => {
  const board = useSelector(boardState);
  const notClicked = useRef([0, 1, 2, 3, 4, 5, 6, 7, 8]);
  const userClicked = useRef([]);
  const compClicked = useRef([]);
  const gameOver = useRef(false);

  const handleClick = (e) => {
    const { id } = e.target;
    userClick(parseInt(id));
  };

  const userClick = (num) => {
    if (notClicked.current.includes(num)) {
      markClicked("green", num);
    }
  };

  const markClicked = (color, num) => {
    let current = document.getElementById(num);
    current.style.backgroundColor = color;
    notClicked.current = notClicked.current.filter((choice) => choice !== num);
    if (color === "green") {
      let current = userClicked.current;
      current.push(num);
      current.sort();
      userClicked.current = current;
      checkWin();
      if (!gameOver.current) {
        computerMove();
      }
    } else if (color === "red") {
      let current = compClicked.current;
      current.push(num);
      current.sort();
      compClicked.current = current;
      checkWin();
    }
  };

  const computerMove = () => {
    let compChoice =
      notClicked.current[generateRandom(notClicked.current.length - 1)];
    markClicked("red", compChoice);
  };
  
  const generateRandom = (len) => {
    return Math.floor(Math.random() * len);
  };

  const checkWin = () => {
    let possible = board.possibleWins;
    if (userClicked.current.length >= 3) {
      for (let i = 0; i < possible.length; i++) {
        if (
          userClicked.current.includes(possible[i][0]) &&
          userClicked.current.includes(possible[i][1]) &&
          userClicked.current.includes(possible[i][2])
        ) {
          console.log(" User Wins");
          gameOver.current = true;
        } else if (
          compClicked.current.includes(possible[i][0]) &&
          compClicked.current.includes(possible[i][1]) &&
          compClicked.current.includes(possible[i][2])
        ) {
          console.log("Comp Wins");
          gameOver.current = true;
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
