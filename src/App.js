import './App.css';
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } 

from "react-router-dom";

import { useStateValue } from "./StateProvider";


function App() {

    // const [user, setUser] = useState(null);
    const [{user}, dispatch] = useStateValue();
    return ( 

        //BEM naming convention
    <div className = "App" >
        <Router>
            {!user ? (
                <Login />
            ): (
                 <>
                    <Header />
                        <div className="app_body">
                            <Sidebar />
                            <Switch>
                                <Route path="/room/:roomId">

                                    <Chat />
                                </Route>
                                <Route path="/">
                                    <h1>Welcome</h1>
                                </Route>
                            </Switch>

                            {/** React-Router  => Chat Screen */}
                        </div>
                        </>
                    )}
            </Router>
    </div>
    );
}

export default App;