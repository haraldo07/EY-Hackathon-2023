import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
function Cbut(props){
    return(<Button variant={props.color} onClick={props.fun} disabled={props.con}>{props.content}</Button>
)
}
export default Cbut;
