import React, { useState, useEffect } from "react";
import BlogsPage from "./components/BlogsPage";
import FrontPage from "./components/FrontPage";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <h1 className="text-ls text-center">Welcome to your Blog</h1>
        <Navbar />
        <div className="flex justify-center items-center">
          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/blogs">
              <BlogsPage />
            </Route>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
