import './App.css'
import { useDispatch, useSelector } from 'react-redux';
// import { stateType } from './redux-old-school';
// import { CounterState } from './features/counter/counter-slice';
import { increment, decrement, incrementAmount } from "./features/counter/counter-slice";
import { TypeReducer } from './store';

function App() {

  const count = useSelector((state: TypeReducer) => state.counter.value);

  const dispatch = useDispatch();

  function handleOnClick() {
    // dispatch({ type: "counter/increment" });
    dispatch(increment());
  }

  function handleOnClickAmount() {
    // dispatch({ type: "counter/incrementAmount", payload: 5 });
    dispatch(incrementAmount(5));
  }

  function handleDecrement() {
    // dispatch({ type: "counter/decrement" });
    dispatch(decrement());
  }

  return (
    <div className={`
      flex
      justify-center
      items-center
      w-full
      h-screen
    `}>
      <div className='bg-zinc-700 p-5 max-w-[300px] w-full rounded-md'>
        <div className='flex pb-2 gap-2 justify-end'>
          <span className='bg-green-600 rounded-full p-1'></span>
          <span className='bg-yellow-400 rounded-full p-1'></span>
          <span className='bg-red-600 rounded-full p-1'></span>
        </div>
        <div className={`
            w-full flex justify-center border bg-slate-200 rounded-md p-5
            text-4xl
          `}>
          {count}
        </div>
        <div className='w-full flex justify-around pt-3 gap-2 text-white font-semibold uppercase'>
          <span onClick={handleOnClick} className='bg-blue-700 w-full text-center rounded-md cursor-pointer'>Increment</span>
          <span onClick={handleDecrement} className='bg-blue-700 w-full text-center rounded-md cursor-pointer'>Decrement</span>
        </div>
        <div className='w-full flex pt-3 gap-2 text-white font-semibold uppercase'>
          <span onClick={handleOnClickAmount} className='bg-blue-700 w-full text-center rounded-md cursor-pointer'>Increment + 5</span>
        </div>
      </div>
    </div>
  )
}

export default App;
// const mapStateToProps = (state: stateType) => {
//   return {
//     count: state.counter.value
//   }
// }

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     incrementAmount: (amount: number) => dispatch({ type: "incrementAmount", payload: amount })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(App);