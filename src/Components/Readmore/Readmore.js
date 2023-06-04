import { useEffect, useState } from "react";
import "./Readmore.scss";

function Readmore({ text }) {
    const [trimText, settrimText] = useState("");
    const [toggleMoreState, settoggleMoreState] = useState(false);
    const [showToggle, setShowToggle] = useState(true);

    useEffect(() => {

        settrimText(text);
        if (text.length > 70) {
            settrimText(text.substring(0, 70))
        } else {
            setShowToggle(false);
        }

        if (toggleMoreState) {
            settrimText(text)
        } else {
            settrimText(text.substring(0, 70))
        }

    }, [trimText, text, toggleMoreState])

    function showMore() {
        settoggleMoreState(!toggleMoreState)
    }

    return (
        <span>
            {trimText}
            {(()=>{
                if(showToggle){
                    return(
                        <span
                            className="morelessButton"
                            onClick={showMore}>
                            {toggleMoreState ? "...hide" : "...more"}
                        </span>
                    )
                }
            })()}
        </span>
    );
}

export default Readmore;