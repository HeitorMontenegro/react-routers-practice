import "../App.css"
import  { useNavigate } from 'react-router-dom';

const Page1 = () =>{

    const navigate = useNavigate();

    return (
        <div className="page-component page-1">
            1
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
}

export default Page1;