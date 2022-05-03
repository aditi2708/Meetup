import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./Pages/AllMeetups";
import FavroitesPage from "./Pages/Favroites";
import NewMeetupsPage from "./Pages/NewMeetups";
import Layout from "./Components/layout/Layout";

function App() {
  //path: mypage.com/path
  //localhost:3000/path
  return (
    <Layout>
      
      <Switch>
      <Route path="/" exact>
        <AllMeetupsPage />
      </Route>
      <Route path="/new-meetups">
        <NewMeetupsPage />
      </Route>
      <Route path="/favroites">
        <FavroitesPage />
      </Route>
      </Switch>
    </Layout>
  );
}

export default App;
