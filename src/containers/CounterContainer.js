import { bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter number = {number} onIncrease={increase} onDecrease={decrease} />
    );
};

export default connect(
    state => ({
        number: state.counter.number,
    }),
    {
        increase,
        decrease,
    }

    // dispatch => 
    // //({
    //     // increase: () => dispatch(increase()),
    //     // decrease: () => dispatch(decrease()),
    //     bindActionCreators(
    //         {
    //             increase,
    //             decrease,
    //         },
    //         dispatch,
    //     ),
    //}),
)(CounterContainer);

// const mapStateProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     //임시 함수
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

// export default connect(
//     mapStateProps,
//     mapDispatchToProps,
// )(CounterContainer);