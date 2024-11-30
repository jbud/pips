import Sys from "./classes/sys";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Sys />
                <div>&nbsp;</div>
                <div>2-1-3: ENG ENG WEP WEP WEP SYS SYS</div>
                <div>1-2-3: SYS SYS WEP WEP WEP ENG ENG</div>
                <div>0-2-4: ENG ENG WEP WEP WEP</div>
                <div className="small-note">try arrow keys</div>
            </header>
        </div>
    );
}

export default App;
