import { React } from 'react';
import { connect } from 'react-redux'
import { buyIceCream } from '../redux';

function IceCreameContainer(props) {
    return ( <div>
        <h1>Number of IceCreams - { props.numberOfIceCreams }</h1>
        <button onClick={ props.buyIceCream }>Buy IceCreams</button>
    </div> );
}

const mapStateToProps = state => {
    return {
        numberOfIceCreams: state.IceCream.numberOfIceCreams
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyIceCream: () => dispatch(buyIceCream())
    }
}
 
export default connect(
    mapStateToProps,
     mapDispatchToProps
     )(IceCreameContainer)