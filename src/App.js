import './App.css';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const username = useSelector(state => state)
  console.log(username)
  return (
    <div>
      <h1>username: {username.one.username}</h1>
      <h1>username: {username.two.username}</h1>
    </div>
  );
}

export default App;
