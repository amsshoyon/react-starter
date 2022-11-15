import "styles/App.css";
import { BrowserRouter } from "react-router-dom";
import RoutePages from "routes";

function App() {
    return (
        <BrowserRouter>
            <RoutePages />
        </BrowserRouter>
    );
}

export default App;
