import React from 'react';
import PropTypes from 'prop-types';

function TestProps(props) {
    const { name } = props;
    return (
        <div>
            {name}
        </div>
    );
}

export default TestProps;