import { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";

function App() {
  const showAuth = useSelector((state) => state.authentication.isAuthenticated);

  return (
    <Fragment>
      {showAuth && <Header />}
      {!showAuth && <Auth />}
      {showAuth && <UserProfile />}
      {showAuth && <Counter />}
    </Fragment>
  );
}

export default App;
