import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";

import "./charList.scss";

const CharList = (props) => {
    const [charList, setCharList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [newItemLoading, setNewItemLoading] = useState(false);
    const [offset, setOffset] = useState(210);
    const [charEnded, setCharEnded] = useState(false);

    const marvelService = new MarvelService();

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onRequest = (offset) => {
        //метод загрузки данных c сервера + Пагинация
        onCharListLoading(); //не влияет на первоначальную загрузку, но необходим для дальнейшей работы
        marvelService
            .getAllCharacters(offset)
            .then(onCharListLoad)
            .catch(onError);
    };

    const onCharListLoading = () => {
        setNewItemLoading(true);
    };

    const onCharListLoad = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        setCharList((charList) => [...charList, ...newCharList]);
        setLoading(false);
        setNewItemLoading(false);
        setOffset((offset) => offset + 9);
        setCharEnded((charEnded) => ended);
    };

    const onError = () => {
        setLoading(false);
        setError(true);
    };

    const itemRefs = useRef([]);

    const focusOnItem = (id) => {
        itemRefs.current.forEach((item) =>
            item.classList.remove("char__item_selected")
        );
        itemRefs.current[id].classList.add("char__item_selected");
        itemRefs.current[id].focus();
    };

    function renderItems(arr) {
        const items = arr.map((item, i) => {
            let imgStyle = { objectFit: "cover" };

            if (
                item.thumbnail ===
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg" ||
                item.thumbnail ===
                    "http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif"
            ) {
                imgStyle = { objectFit: "unset" };
            }

            return (
                <li
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
                </li>
            );
        });
        return <ul className="char__grid">{items}</ul>;
    }

    const items = renderItems(charList);

    const errorMessage = error ? <ErrorMessage /> : null;
    const spinner = loading || newItemLoading ? <Spinner /> : null;
    const content = !(loading || error) ? items : null;

    return (
        <div className="char__list">
            {errorMessage}
            {content}
            {spinner}
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
