import { connect } from 'react-redux';
import counterSlice from '../redux/counterSlice';
import { counterSelector } from '../redux/counterSelectors';
import { useState } from 'react';

const Counter = ({
  count,
  increment,
  incrementAsync,
}) => {
  const [step, setStep] = useState(1);
  return (
    <>
      <p>
        Count is :{' '}
        <span>{count}</span>
      </p>
      <p>
        <label htmlFor="increment_amount">Increment amount</label>
        <input
          id="increment_amount"
          type="number"
          value={step}
          onInput={(e) => setStep(Number(e.target.value))}
        />
      </p>
      <p>
        <button onClick={() => increment(step)}>+</button>
        <button onClick={() => incrementAsync(step)}>+ async</button>
        <br />
        <button onClick={() => increment(-step)}>-</button>
        <button onClick={() => incrementAsync(-step)}>- async</button>
        <br />
      </p>
    </>
  );
};

const mapStateToProps = (state) => ({
  ...counterSelector(state),
});

const mapDispatchToProps = {
  ...counterSlice.actions,
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
