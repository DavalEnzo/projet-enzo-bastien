import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "../router/error-page";
import Home from "../pages/Home";

const Routeur = () => {
    return (
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/*<Route path="/equipage" element={<CrewList />} >*/}
                    {/*    <Route path=":id" element={<Crew />} />*/}
                    {/*</Route>*/}
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
