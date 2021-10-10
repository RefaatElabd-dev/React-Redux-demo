import { React, useState } from 'react';
import { connect } from 'react-redux'
import { buyCake } from '../redux';

function NewCakeContainer(props) {
    const [amountToBuy, setAmountToBuy] = useState(1)

    function buyAmount(e){
        setAmountToBuy(e.target.value)
    }

    return ( <div>
        <h1>Number of Cakes - { props.numberOfCakes }</h1>
        <input type="number" value={amountToBuy} onChange={ e => buyAmount(e) }/>
        <button onClick={() => props.buyCake(amountToBuy) }>Buy {amountToBuy} Cake</button>
    </div> );
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.Cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch => {
    return {
        buyCake: (num) => dispatch(buyCake(num))
    }
}
 
export default connect(
    mapStateToProps,
     mapDispatchToProps
     )(NewCakeContainer)