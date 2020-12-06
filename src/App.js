import './App.css';
import Header from "./Header"
import Sidebar from "./Sidebar"

function App() {
    return ( 

        //BEM naming convention
    <div className = "App" >
    <Header />
    <div className="app_body">
        <Sidebar />
                {/** Sidebar */}
                {/** React-Router  => Chat Screen */}
    </div>
        
    </div>

    );
}

export default App;