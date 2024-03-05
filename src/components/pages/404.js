import ErrorMessage from "../errorMessage/ErrorMessage";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Page404 = () => {
    return (
        <div>
            <Helmet>
                <meta name="description" content="This page is not found" />
                <title>This page is not found</title>
            </Helmet>
            <ErrorMessage />
            <p
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "24px",
                }}
            >
                Page doesn't exist
            </p>
            <p
                style={{
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "24px",
                    marginTop: "30px",
                }}
            >
                Back to
            </p>
            <Link
                style={{
                    display: "block",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "24px",
                    color: "#9f0013",
                    textDecoration: "underline",
                }}
                to="/"
            >
                main page
            </Link>
        </div>
    );
};

export default Page404;
