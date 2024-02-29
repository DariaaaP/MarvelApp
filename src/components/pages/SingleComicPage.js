import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AnimationPage from "../animation/AnimatedPage";
import useMarvelService from "../../services/MarvelService";
import Spinner from "../spinner/Spinner";
import Page404 from "./404";

import "./singleComicPage.scss";

const SingleComicPage = () => {
    const { comicId } = useParams();
    const [comic, setComic] = useState(null);
    const { loading, error, getComic, clearError } = useMarvelService();

    useEffect(() => {
        updateComic();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [comicId]);

    function updateComic() {
        clearError();
        getComic(comicId).then(onComicLoaded);
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    };

    const page404 = error ? <Page404 /> : null;
    const spinner = loading ? <Spinner /> : null;
    const content = !(error || loading || !comic) ? (
        <View comic={comic} />
    ) : null;
    return (
        <AnimationPage>
            {page404}
            {spinner}
            {content}
        </AnimationPage>
    );
};

const View = ({ comic }) => {
    const { title, description, pageCount, thumbnail, language, price } = comic;
    return (
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img" />
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">
                Back to all
            </Link>
        </div>
    );
};

export default SingleComicPage;
