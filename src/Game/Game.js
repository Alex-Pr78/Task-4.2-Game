import { GameLayout } from './GameLayout';
import { useState } from 'react';

// содержит один из вариантов побед
const WIN_PATTERNS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

// массив игрового поля 9 клток
const array = ['', '', '', '', '', '', '', '', ''];

export const Game = () => {
	const [currentPlayer, setCurrentPlayer] = useState('X'); // кто ходит в данный момент
	const [isGameEnded, setIsGameEnded] = useState(false); // завершена игра
	const [isDraw, setIsDraw] = useState(false); // была ли ничья
	const [field, setField] = useState(array); // игровое поле

	return (
		<GameLayout
			currentPlayer={currentPlayer}
			isGameEnded={isGameEnded}
			isDraw={isDraw}
			field={field}
		/>
	);
};
