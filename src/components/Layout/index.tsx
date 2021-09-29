import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import PublicLayout from './PublicLayout'

class Layout extends React.Component<any, any>{
    static propTypes = {
        children: PropTypes.node.isRequired,
    }
    componentWillMount() {
        console.log('Layout Component WILL MOUNT!')
    }
    componentDidMount() {
        console.log('Layout Component DID MOUNT!')
    }
    componentWillReceiveProps(newProps: any) {
        console.log('Layout Component WILL RECIEVE PROPS!')
    }
    shouldComponentUpdate(newProps: any, newState: any) {
        return true;
    }
    componentWillUpdate(nextProps: any, nextState: any) {
        console.log('Layout Component WILL UPDATE!');
    }
    componentDidUpdate(prevProps: any, prevState: any) {
        console.log('Layout Component DID UPDATE!')
    }
    componentWillUnmount() {
        console.log('Layout Component WILL UNMOUNT!')
    }
    render() {
        const { children, ...props } = this.props
        return <PublicLayout {...props}>{children}</PublicLayout>
    }
}

const mapStateToProps = (state: any) => {
    return {
        auth: state.auth,
    }
}

export default connect(mapStateToProps)(Layout);