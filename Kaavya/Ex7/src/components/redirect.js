import { useNavigate } from 'react-router-dom';
import Bootbutton from './buttons';

function RedirectPage(props)
{
    const navigate = useNavigate();
    const handleLogout = () => {
        return navigate('/');
    };

    return (
        <div>
            <h1>Hello... You have successfully wasted your timeee</h1>
            <h1> Better sit and watch Anime</h1>
            &nbsp;<Bootbutton content = "Logout" color="danger" fun={handleLogout} />
        </div>
    );
}

export default RedirectPage;