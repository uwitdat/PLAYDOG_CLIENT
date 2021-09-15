import "./Loader.scss";
import { useState, useEffect } from "react";
import Logo from "assets/images/walki-logo.png";

const Loader = () => {
    const [fadeout, setFadeout] = useState(false);

    useEffect(() => {
        setTimeout(function () {
            setFadeout(true);
        }, 2400);
    }, []);

    return (
        <div className={fadeout ? "Loader fadeout" : "Loader"}>
            <img
                alt="#"
                src={Logo}
                className="Loader__logo"
                style={{ height: "10rem" }}
            />
            <div className="Loader__row">
                <p>Loading </p>
                <div className="lds-ellipsis">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
};

export default Loader;