import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "../router/error-page";;

const Routeur = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
    )
}

export default Routeur;
