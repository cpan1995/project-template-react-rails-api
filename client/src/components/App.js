import Main from "./Main";
import HomePage from "./HomePage";
import React, { useState, useEffect } from "react";
import Tabs from "./Tabs"
import { Switch, Route } from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'


function App() {
  const [isLoggedIn, setLogin] = useState(true)
  

  return (
    <div>
      {/* {isLoggedIn ? <HomePage /> : <><Tabs/><Main /></>}  */}
      <HomePage />
    </div>
  );
}

export default App;
