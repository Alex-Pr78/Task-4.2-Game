import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

export const FieldContainer = ({field}) => {
	return <FieldLayout field={field} />;
};

FieldContainer.propTypes = {
	field: PropTypes.arrayOf(PropTypes.string).isRequired
};

