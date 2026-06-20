Tic-Tac-Toe Game

A modern and interactive Tic-Tac-Toe game built with React. Players take turns placing X and O on a 3×3 board until one player wins or the game ends in a draw.

Features
🎮 Classic Tic-Tac-Toe gameplay
🔄 Alternating turns between X and O
🏆 Automatic winner detection
🤝 Draw detection
🔒 Prevents moves after the game ends
♻️ Reset game functionality
🎨 Responsive and modern UI

Technologies Used
React
JavaScript (ES6+)
JSX
CSS3
Installation

Clone the repository:

git clone https://github.com/Yasser514/tic-tac-toe.git

Navigate to the project directory:

cd tic-tac-toe

Install dependencies:

npm install

Start the development server:

npm start

The application will be available at:

http://localhost:3000
How to Play
Player X starts the game.
Players take turns clicking an empty square.
The first player to align three symbols horizontally, vertically, or diagonally wins.
If all squares are filled and no player has won, the game ends in a draw.
Click the Reset Game button to start a new match.
Project Structure
src/
├── components/
│   └── Board.jsx
├── App.jsx
├── index.js
└── styles.css
Game Rules

Winning combinations:

0 | 1 | 2
---------
3 | 4 | 5
---------
6 | 7 | 8

Possible winning lines:

Rows: [0,1,2], [3,4,5], [6,7,8]
Columns: [0,3,6], [1,4,7], [2,5,8]
Diagonals: [0,4,8], [2,4,6]
Future Improvements
🤖 Single-player mode with AI
📊 Score tracking
🌙 Dark mode
🎉 Winning animations
🔊 Sound effects
📱 Enhanced mobile experience
Contributing

Contributions are welcome.

Fork the repository
Create a feature branch
Commit your changes
Push to your branch
Open a Pull Request
License

This project is licensed under the MIT License.

Author

Developed by Yasser Alsatum.
