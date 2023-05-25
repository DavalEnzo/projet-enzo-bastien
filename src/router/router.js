import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "../router/error-page";
import Home from "../pages/Home";
import HistoryList from "../pages/HistoryList";
import History from "../pages/History";
import InfoList from "../pages/InfoList";
import Info from "../pages/Info";
import Crew from '../pages/Crew'

const Routeur = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/historique" element={<HistoryList />} ></Route>
                    <Route path="/historique/:id" element={<History />} />
                    <Route path="/about" element={<InfoList />} ></Route>
                    <Route path="/about/:id" element={<Info />} />
                    <Route path="/equipage" element={<Crew />} />
                    <Route path="/equipage/:id" element={<Crew />} />
                    {/*<Route path="/rockets" element={<RocketList />} >*/}
                    {/*    <Route path=":id" element={<Rocket />} />*/}
                    {/*</Route>*/}
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
    )
}

export default Routeur;
