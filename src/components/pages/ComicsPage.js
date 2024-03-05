import { Helmet } from "react-helmet";
import AnimationPage from "../animation/AnimatedPage";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {
    return (
        <AnimationPage>
            <Helmet>
                <meta
                    name="description"
                    content="Page with list of our comics"
                />
                <title>Comics Page</title>
            </Helmet>
            <AppBanner />
            <ComicsList />
        </AnimationPage>
    );
};

export default ComicsPage;
