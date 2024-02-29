import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useMarvelService from "../../services/MarvelService";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

import "./comicsList.scss";

const ComicsList = () => {
    const [comicsList, setComicsList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(359);
    const [comicsEnded, setComicsEnded] = useState(false);

    const { loading, error, getAllComics } = useMarvelService();

    let indexDelayForAnimation = 0;

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onRequest = (offset, initial) => {
        //метод загрузки данных c сервера + Пагинация
        initial ? setNewItemLoading(false) : setNewItemLoading(true);
        getAllComics(offset).then(onComicsListLoad);
    };

    const onComicsListLoad = (newComicsList) => {
        let ended = false;
        if (newComicsList.length < 8) {
            ended = true;
        }

        setComicsList((comicsList) => [...comicsList, ...newComicsList]);
        setNewItemLoading(false);
        setOffset((offset) => offset + 8);
        setComicsEnded(ended);
    };

    const fadeInAnimationVariants = {
        initial: {
            opacity: 0,
        },
        animate: (indexDelayForAnimation) => ({
            opacity: 1,
            transition: {
                delay: 0.3 * indexDelayForAnimation,
            },
        }),
    };

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            if (indexDelayForAnimation >= 8) {
                indexDelayForAnimation = 0;
            }
            indexDelayForAnimation += 1;
            return (
                <motion.li
                    className="comics__item"
                    tabIndex={0}
                    key={i}
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    animate="animate"
                    custom={indexDelayForAnimation}
                >
                    <Link to={`/comics/${item.id}`}>
                        <img
                            src={item.thumbnail}
                            alt={item.title}
                            className="comics__item-img"
                        />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </Link>
                </motion.li>
            );
        });
        return <ul className="comics__grid">{items}</ul>;
    }

    const items = renderItems(comicsList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ display: comicsEnded ? "none" : "block" }}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

export default ComicsList;
