import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import AppHeader from "../appHeader/AppHeader";
import Spinner from "../spinner/Spinner";

const Page404 = lazy(() => import("../pages/404"));
const MainPage = lazy(() => import("../pages/MainPage"));
const ComicsPage = lazy(() => import("../pages/ComicsPage"));
const SingleComicLayout = lazy(() =>
    import("../pages/singleComicLayout/SingleComicLayout")
);
const SingleCharacterLayout = lazy(() =>
    import("../pages/singleCharacterLayout/SingleCharacterLayout")
);
const SinglePage = lazy(() => import("../pages/SinglePage"));

const App = () => {
    const location = useLocation();
    return (
        <div className="app">
            <AppHeader />
            <main>
                <Suspense fallback={<Spinner />}>
                    <AnimatePresence mode="wait">
                        <Routes key={location.pathname} location={location}>
                            <Route path="/" element={<MainPage />} />
                            <Route path="/comics" element={<ComicsPage />} />
                            <Route
                                path="/comics/:id"
                                element={
                                    <SinglePage
                                        Component={SingleComicLayout}
                                        dataType="comic"
                                    />
                                }
                            />
                            <Route
                                path="/characters/:id"
                                element={
                                    <SinglePage
                                        Component={SingleCharacterLayout}
                                        dataType="character"
                                    />
                                }
                            />

                            <Route path="*" element={<Page404 />} />
                        </Routes>
                    </AnimatePresence>
                </Suspense>
            </main>
        </div>
    );
};

export default App;
