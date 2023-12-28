import { jsx as _jsx } from "react/jsx-runtime";
import { clsx } from "clsx";
import { cardStyles } from "./Card.css";
function Card(props) {
    return _jsx("div", { className: clsx(cardStyles, props.styleName), children: props.question });
}
export default Card;
