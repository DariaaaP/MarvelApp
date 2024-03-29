import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/App";
import "./style/style.scss";

const root = createRoot(document.getElementById("root"));
root.render(
    <Router>
        <App />
    </Router>
);
