import React, { useState } from "react";
import bee_0_0 from "../assets/bee_0_0.jpg";
import bee_1_0 from "../assets/bee_1_0.jpg";
import bee_2_0 from "../assets/bee_2_0.jpg";
import bee_0_1 from "../assets/bee_0_1.jpg";
import bee_1_1 from "../assets/bee_1_1.jpg";
import bee_2_1 from "../assets/bee_2_1.jpg";
import bee_0_2 from "../assets/bee_0_2.jpg";
import bee_1_2 from "../assets/bee_1_2.jpg";
import bee_2_2 from "../assets/bee_2_2.jpg";

const gameGrid = [
  [bee_0_0, bee_1_0, bee_2_0],
  [bee_0_1, bee_1_1, bee_2_1],
  [bee_0_2, bee_1_2, bee_2_2],
];

const blankSpace = [gameGrid[0].length - 1, 0];

const blankUrl = "https://i.imgur.com/IGnmVTp.png";

const gridWithBlank = gameGrid.map((subArray, ind) => {
  if (ind === blankSpace[0]) {
    const sub = subArray.map((x) => x);

    return sub.map((val, i) => {
      if (i === blankSpace[1]) {
        return blankUrl;
      }
      return val;
    });
  }
  return subArray.map((x) => x);
});

const Winner = (props) => {
  return <h1>You won! It took you {props.moves} moves!</h1>;
};

const GameBoard = (props) => {
  return (
    <section id="gameBoard">
      {props.grid.map((arr, arrInd) => {
        return arr.map((val, valInd) => {
          return (
            <div
              className="gameSquare"
              onClick={() => {
                return props.onMove(arrInd, valInd);
              }}
            >
              <img src={val} alt={`Tile ${valInd + 1}`} id={val} />
            </div>
          );
        });
      })}
    </section>
  );
};

const PuzzleGame = () => {
  const [grid, setGrid] = useState([...gridWithBlank].map((x) => [...x]));
  const [isWin, setIsWin] = React.useState(false);
  const [moveCount, setMoveCount] = React.useState(0);

  const blankSubArr = grid.findIndex((x) => x.includes(blankUrl));
  const blankIndex = grid[blankSubArr].indexOf(blankUrl);

  const checkWin = (original, current) => {
    const flatOriginal = original.flat();
    const flatCurrent = current.flat();
    for (let i = 0; i < flatOriginal.length; i++) {
      if (flatOriginal[i] !== flatCurrent[i]) {
        return;
      }
    }
    setIsWin(true);
  };

  const moveBlankLeft = (curGrid, blankChar) => {
    if (blankIndex <= 0) {
      console.error("Space is as far to the left as it can go");
      return;
    }
    const temp = curGrid[blankIndex - 1];
    curGrid[blankIndex - 1] = blankChar;
    curGrid[blankIndex] = temp;

    return curGrid;
  };

  const moveBlankRight = (curGrid, blankChar) => {
    if (blankIndex === curGrid.length - 1) {
      console.error("Space is as far to the left as it can go");
      return;
    }
    const temp = curGrid[blankIndex + 1];
    curGrid[blankIndex + 1] = blankChar;
    curGrid[blankIndex] = temp;

    return curGrid;
  };

  const moveBlankUp = (curGrid, blankChar) => {
    const blankSubArr = grid.findIndex((x) => x.includes(blankUrl));
    const blankIndex = grid[blankSubArr].indexOf(blankUrl);

    if (blankSubArr <= 0) {
      console.error("Space is as high up as it can go");
      return;
    }
    const temp = curGrid[blankSubArr - 1][blankIndex];
    curGrid[blankSubArr - 1][blankIndex] = blankChar;
    curGrid[blankSubArr][blankIndex] = temp;

    checkWin(gridWithBlank, curGrid);
    return curGrid;
  };

  const moveBlankDown = (curGrid, blankChar) => {
    const blankSubArr = grid.findIndex((x) => x.includes(blankUrl));
    const blankIndex = grid[blankSubArr].indexOf(blankUrl);

    if (blankSubArr === curGrid.length - 1) {
      console.error("Space is as far down as it can go");
      return;
    }
    const temp = curGrid[blankSubArr + 1][blankIndex];
    curGrid[blankSubArr + 1][blankIndex] = blankChar;
    curGrid[blankSubArr][blankIndex] = temp;

    checkWin(gridWithBlank, curGrid);
    return curGrid;
  };

  /* Randomize array in-place using Durstenfeld shuffle algorithm */
  const shuffleGrid = () => {
    setIsWin(false);
    const tempFlatGrid = [...grid].map((x) => [...x]).flat();

    for (let i = tempFlatGrid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = tempFlatGrid[i];
      tempFlatGrid[i] = tempFlatGrid[j];
      tempFlatGrid[j] = temp;
    }

    const tempGrid = [];
    while (tempFlatGrid.length) {
      tempGrid.push(tempFlatGrid.splice(0, 3));
    }

    setGrid(tempGrid);
  };

  const resetGame = () => {
    setGrid([...gridWithBlank].map((x) => [...x]));
    setIsWin(false);
    setMoveCount(0);
  };

  const handleMove = (arrInd, valInd) => {
    const newGrid = [...grid].map((x) => [...x]);

    if (arrInd === blankSubArr) {
      const gridDimension = newGrid.length;
      if (valInd - blankIndex === 1) {
        // move right
        const modifiedArr = [];
        for (let i = 0; i < newGrid.length; i++) {
          if (i === blankSubArr) {
            modifiedArr.push(moveBlankRight(newGrid[i], blankUrl));
          } else {
            modifiedArr.push(newGrid[i]);
          }
        }

        checkWin(gridWithBlank, modifiedArr);
        setGrid([...modifiedArr].map((x) => x));
        setMoveCount(moveCount + 1);
      } else if (valInd - blankIndex === -1 && blankIndex % gridDimension) {
        // move left
        const modifiedArr = [];
        for (let i = 0; i < newGrid.length; i++) {
          if (i === blankSubArr) {
            modifiedArr.push(moveBlankLeft(newGrid[i], blankUrl));
          } else {
            modifiedArr.push(newGrid[i]);
          }
        }

        checkWin(gridWithBlank, modifiedArr);
        setGrid([...modifiedArr].map((x) => x));
        setMoveCount(moveCount + 1);
      }
    } else if (arrInd !== blankSubArr && valInd === blankIndex) {
      if (arrInd - blankSubArr === 1) {
        // move down
        setGrid([...moveBlankDown(newGrid, blankUrl)].map((x) => x));
        setMoveCount(moveCount + 1);
      } else if (arrInd - blankSubArr === -1) {
        // move up
        setGrid([...moveBlankUp(newGrid, blankUrl)].map((x) => x));
        setMoveCount(moveCount + 1);
      }
    }
  };

  return (
    <div className="game-container">
      {isWin ? (
        <>
          <Winner moves={moveCount} />
          <button onClick={() => resetGame()}>Play again?</button>
        </>
      ) : (
        <>
          <div>
          <button onClick={() => shuffleGrid()}>Shuffle</button>
          <button onClick={() => resetGame()}>New Game</button>
          </div>
          
          <GameBoard
            onMove={(arrInd, valInd) => handleMove(arrInd, valInd)}
            grid={grid}
          />
        </>
      )}
    </div>
  );
};

export default PuzzleGame;
