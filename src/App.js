// https://www.youtube.com/watch?v=kxz5vDOtgzI
// Redux-consult-1
//

import './App.css';

import {useSelector, useDispatch} from "react-redux";

import {
    incCustomAction,
    incAction,
    decAction,
    resetAction,
} from './redux/action-creators'

export default function App() {
    // const store = useSelector((store) => {
    //     console.log('app store',store);
    //     return store;
    // })

    // const counter = useSelector(({counter}) => {
    //      return counter;
    //  })

    // const store = useSelector((store) => store);
    // console.log('app store',store);

    // const counter = useSelector(({counter}) => counter);
    // const dispatch = useDispatch();

    // const counter1 = useSelector(({counter1: {counter}}) => counter);
    // const counter2 = useSelector(({counter2: {counter}}) => counter);
    const {counter1,counter2} = useSelector(({counter1,counter2}) => ({
        counter1: counter1.counter,
        counter2: counter2.counter,
    }))

    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>{counter1} - 1</h1>
            <h1>{counter2} - 2</h1>
            {/*<button onClick={() => dispatch({type: INC_CUSTOM, payload: 102})}>inc custom</button>*/}
            {/*<button onClick={() => dispatch({type: INC})}>inc</button>*/}
            {/*<button onClick={() => dispatch({type: DEC})}>dec</button>*/}
            {/*<button onClick={() => dispatch({type: RESET})}>reset</button>*/}

            <button onClick={() => dispatch(incCustomAction(102))}>inc custom</button>
            <button onClick={() => dispatch(incAction())}>inc</button>
            <button onClick={() => dispatch(decAction())}>dec</button>
            <button onClick={() => dispatch(resetAction())}>reset</button>
        </div>
    );
}
//action-creators: --> to ./redux/action-creators
// const incCustomAction = (payload) => ({type: INC_CUSTOM, payload})
// const incAction = () => ({type: INC})
// const decAction = () => ({type: DEC})
// const resetAction = () => ({type: RESET})


// import {connect} from "react-redux";
//
// // function App({counter, ...rest}) {
// //     console.log(rest);
// function App({counter, inc, dec, reset}) {
//
//     return (
//         <div className="App">
//             <h1>{counter}</h1>
//             <button onClick={inc}>inc</button>
//             <button onClick={dec}>dec</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );
// }
// const mapStateToProps = (state) => ({
//     counter: state.counter
// })
// const mapDispatchToProps = (dispatch) => ({
//     inc: () => dispatch({type: 'INC'}),
//     dec: () => dispatch({type: 'DEC'}),
//     reset: () => dispatch({type: 'RESET'}),
// })
// export default connect(mapStateToProps,mapDispatchToProps)(App);