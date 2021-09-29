import React from 'react';

const PrivateLayout = props => {
    const {
        children
    } = props;

    return (
        <>
            {children}
        </>
    );
};

export default PrivateLayout;