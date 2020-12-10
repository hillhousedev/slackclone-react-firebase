import './App.css';
import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter as Router, Switch, Route } 
from "react-router-dom";

function App() {

    const [user, setUser] = useState(null);

    return ( 

        //BEM naming convention
    <div className = "App" >
        <Router>
            {!user ? (
                <h1>LOGIN page</h1>
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