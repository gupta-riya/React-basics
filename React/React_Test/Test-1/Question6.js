ReactDOM.render(
  <Router>
    <div>
      <Route path="/" render={Home} />
      <Route path="/login" render={Login} />
    </div>
  </Router>,
  document.getElementById("root")
);


// output will be the home as well as login component

// solution: use switch and exact both