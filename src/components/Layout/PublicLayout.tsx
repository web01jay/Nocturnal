import React from 'react';
import { connect } from 'react-redux';

const PublicLayout = (props:any) => {

    const {
        children
    } = props;
    return (
        <>
            {children}
        </>
    );
};

const mapStateToProps = (state:any) => {
    return  {}
}

export default connect(mapStateToProps)(PublicLayout);