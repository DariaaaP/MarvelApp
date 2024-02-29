import AnimationPage from "../animation/AnimatedPage";
import AppBanner from "../appBanner/AppBanner";
import ComicsList from "../comicsList/ComicsList";

const ComicsPage = () => {
    return (
        <AnimationPage>
            <AppBanner />
            <ComicsList />
        </AnimationPage>
    );
};

export default ComicsPage;
