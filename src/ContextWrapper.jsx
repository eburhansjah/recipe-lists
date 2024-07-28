import{BrowserRouter, Route, Routes} from "react-router-dom";
import AppContext from "./contexts/AppContext";
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";

function ContextWrapper() {
    return (
        <AppContext>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Categories />} />
                    <Route path="/recipes/:categoryId" element={<Recipes />} />
                </Routes>
            </BrowserRouter>
        </AppContext>
    );
}

export default ContextWrapper;