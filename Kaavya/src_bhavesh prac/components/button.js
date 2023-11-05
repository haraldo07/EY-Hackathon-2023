import 'bootstrap/dist/css/bootstrap.min.css';
import Button  from "react-bootstrap/Button";

function BootButton(props){
    return(
        <Button color={props.colour} onClick={props.fun}>{props.content}</Button>
    )
}

export default BootButton;
