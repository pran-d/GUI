import React from "react";
import { ServerReceive } from "./ServerReceive.js";
import { ServerSend } from "./ServerSend.js";
import { Route, BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <ServerReceive />
      </Route>
      <Route exact path="/send">
        <ServerSend />
      </Route>
    </BrowserRouter>
  );
};

export default App;
