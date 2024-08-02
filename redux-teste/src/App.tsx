import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { connect } from 'react-redux'
import { stateType } from './redux-old-school';

type props = {
  count: number;
  increment: any;
  incrementAmount: any;
}

function App(props:props) {

  function handleOnClick() {
    props.increment();
  }

  function handleOnClickAmount() {
    props.incrementAmount(5);
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleOnClick}>
          count is {props.count}
        </button>
        <button onClick={handleOnClickAmount}>
          count is {props.count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

const mapStateToProps = (state: stateType) => {
  return {
    count: state.counter.value
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: () => dispatch({ type: "increment" }),
    incrementAmount: (amount: number) => dispatch({ type: "incrementAmount", payload: amount })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);