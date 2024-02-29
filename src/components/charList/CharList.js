import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import useMarvelService from "../../services/MarvelService";

import "./charList.scss";

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const { loading, error, getAllCharacters } = useMarvelService();

    let indexDelayForAnimation = 0;

    useEffect(() => {
        onRequest(offset, true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onRequest = (offset, initial) => {
        //метод загрузки данных c сервера + Пагинация
        initial ? setNewItemLoading(false) : setNewItemLoading(true); //не влияет на первоначальную загрузку, но необходим для дальнейшей работы
        getAllCharacters(offset).then(onCharListLoad);
    };

    const onCharListLoad = async (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList((charList) => [...charList, ...newCharList]);
        setNewItemLoading(false);
        setOffset((offset) => offset + 9);
        setCharEnded((charEnded) => ended);
    };

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach((item) =>
            item.classList.remove("char__item_selected")
        );
        itemRefs.current[id].classList.add("char__item_selected");
        itemRefs.current[id].focus();
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
            let imgStyle = { objectFit: "cover" };
            if (indexDelayForAnimation >= 9) {
                indexDelayForAnimation = 0;
            }
            indexDelayForAnimation += 1;

            if (
                item.thumbnail ===
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ||
                item.thumbnail ===
                    "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"
            ) {
                imgStyle = { objectFit: "unset" };
            }

            return (
                <motion.li
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    animate="animate"
                    custom={indexDelayForAnimation}
                    ref={(el) => (itemRefs.current[i] = el)}
                    className="char__item"
                    tabIndex={0}
                    key={item.id}
                    onClick={() => {
                        props.onCharSelected(item.id);
                        focusOnItem(i);
                    }}
                    onKeyPress={(e) => {
                        e.preventDefault();
                        if (e.key === " " || e.key === "Enter") {
                            props.onCharSelected(item.id);
                            focusOnItem(i);
                        }
                    }}
                >
                    <img
                        src={item.thumbnail}
                        alt={item.name}
                        style={imgStyle}
                    />
                    <div className="char__name">{item.name}</div>
                </motion.li>
            );
        });
        return <ul className="char__grid">{items}</ul>;
    }

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading && !newItemLoading ? <Spinner /> : null;

    return (
        <div className="char__list">
            {errorMessage}
            {spinner}
            {items}
            <button
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{ display: charEnded ? "none" : "block" }}
                onClick={() => onRequest(offset)}
            >
                <div className="inner">load more</div>
            </button>
        </div>
    );
};

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired,
};

export default CharList;
