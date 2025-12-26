import styles from './FieldLayout.module.css'

export const FieldLayout = ({field}) => {
	return (
		<div className={styles.field}>
			{field.map((cell, index) => (
				<button
					key={index}
					className={styles.cell}
					disabled={cell !== ''}
					type='button'
				>
					{cell}
				</button>
			))}
		</div>
	)
}
