const log = (message) => console.log(message);

const testCountShips = (board) => {
  const width = board.length;
  const height = board[0].length;

  log(`Board is ${width} by ${height}`);

  const countShips = (x, y, total) => {
    if (x > width - 1 && y < height) {
      x = 0;
      y++;
    }
// hello 
    if (y > height - 1) {
      return total;
    }

    if (board[x][y] == 1) {
      board[x][y] = 0;
      total++;

      for (let i = x + 1; i < width; i++) {
        if (board[i][y] == 0) {
          x = i - 1; // Skip ahead?
          break;
        }

        board[i][y] = 0;
      }

      for (let i = y + 1; i < height; i++) {
        if (board[x][i] == 0) {
          break;
        }
        board[x][i] = 0;
      }
    }
//code hard
  async notify() {
    // * Exception Handling
    try {
      var msg = `Happy ${this.age}th b-day!`;
      return Promise.resolve(msg);
    }
    catch (ex) { throw ex; }
    finally { }
