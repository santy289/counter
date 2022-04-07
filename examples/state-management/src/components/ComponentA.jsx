import {useSelector } from 'react-redux';

const CompA = () => {
  const count = useSelector(state => state.count);

  return (
    <h1>
      <p>Count is {count}</p>
    </h1>
  )
}

export default CompA
