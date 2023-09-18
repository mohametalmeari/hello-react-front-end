import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreeting } from '../redux/greetings/greetingSlice';

const Greeting = () => {
  const { greetingMsg, isLoading } = useSelector((state) => state.greetings);
  const dispatch = useDispatch();
  useEffect(() => {
    if (greetingMsg === undefined) {
      dispatch(getGreeting());
    }
  }, [greetingMsg, dispatch]);

  return (
    <div className="greeting-container">
      {isLoading && <p>Loading...</p>}
      {!isLoading && greetingMsg}
    </div>
  );
};
export default Greeting;
