import {useNavigate} from "react-router-dom";
import Display from "./display"
import Bootbutton from "./button"


function NexttPage(){
    const navigate = useNavigate();

    const handlesub=()=>{
        return navigate('/');
    };
    return(
        <div>
            <Display content="Suuuiiiiiiii"/>
            <Display content="Welcome"/>
            <Bootbutton content="Logout" color="danger" fun={handlesub}/>
        </div>
    );
}

export default NexttPage;