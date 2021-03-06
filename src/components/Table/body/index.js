import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Row from './row';
import './styles.css';

export default class Body extends PureComponent {
    render() {
        const { data, columns } = this.props;
        if (Array.isArray(data) && Array.isArray(columns)) {
            return data.map((item, index) => {
                const key = `row-${index}`;
                return (
                    <Row key={key} data={item} columns={columns} />
                );
            });
        }
        return null;
    }
}

Body.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.array,
};

Body.defaultProps = {
    data: [],
    columns: [],
};
