import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyCake } from '../redux';


const HookCakeContainer = () => {
    const numberOfCakes = useSelector(state => state.Cake.numberOfCakes)
    const dispatch = useDispatch()
    return ( <div>
        <h1>Numbers of Cake - { numberOfCakes }</h1>
        <button onClick={() => dispatch(buyCake())}>buy Cake</button>
    </div> );
}
 
export default HookCakeContainer;