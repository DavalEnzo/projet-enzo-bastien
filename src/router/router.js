import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "../router/error-page";
import Home from "../pages/Home";
import Crew from '../pages/Crew'

const Routeur = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/equipage" element={<Crew />} />
                    <Route path="/equipage/:id" element={<Crew />} />
                    {/*<Route path="/historique" element={<HistoryList />} >*/}
                    {/*    <Route path=":id" element={<History />} />*/}
                    {/*</Route>*/}
                    {/*<Route path="/about" element={<InfoList />} >*/}
                    {/*    <Route path=":id" element={<Info />} />*/}
                    {/*</Route>*/}
                    {/*<Route path="/rockets" element={<RocketList />} >*/}
                    {/*    <Route path=":id" element={<Rocket />} />*/}
                    {/*</Route>*/}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
    )
}

export default Routeur;
