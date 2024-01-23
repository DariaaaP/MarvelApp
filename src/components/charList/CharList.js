import { Component } from "react";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import MarvelService from "../../services/MarvelService";

import "./charList.scss";

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
    };

    marvelService = new MarvelService();

    componentDidMount() {
        this.marvelService
            .getAllCharacters()
            .then(this.onCharListLoad)
            .catch(this.onError);
    }

    onCharListLoad = (charList) => {
        this.setState({ charList, loading: false });
    };

    onError = () => {
        this.setState({ loading: false, error: true });
    };

    render() {
        const { charList, loading, error } = this.state;

        const items = <View chars={charList} />;

        const errorMessage = error ? <ErrorMessage /> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(error || loading) ? items : null;
        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        );
    }
}

const View = ({ chars }) => {
    const items = chars.map((item) => {
        const { id, name, thumbnail } = item;

        let imgStyle = { objectFit: "cover" };
        if (
            thumbnail ===
            "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg"
        ) {
            imgStyle = { objectFit: "unset" };
        }

        return (
            <li className="char__item" key={id}>
                <img src={thumbnail} alt={name} style={imgStyle} />
                <div className="char__name">{name}</div>
            </li>
        );
    });
    // А эта конструкция вынесена для центровки спиннера/ошибки
    return <ul className="char__grid">{items}</ul>;
};

export default CharList;
