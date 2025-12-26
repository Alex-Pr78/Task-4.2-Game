import { InformationContainer } from './Components/Information/InformationContainer';
import { FieldContainer } from './Components/Field/FieldContainer';
import styles from './GameLayout.module.css';

export const GameLayout = ({field, currentPlayer, isGameEnded, isDraw}) => {
	return (
		<div className={styles.game}>
			<InformationContainer />
			<FieldContainer field={field} isGameEnded={isGameEnded}/>
			<button className={styles.restartBtn}>Начать заново</button>
		</div>
	);
};
