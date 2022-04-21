import "../App.css"
import  { useNavigate } from 'react-router-dom';

const Page3 = () =>{

    const navigate = useNavigate();

    return (
        <div className="page-component page-3">
            3
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
}

export default Page3;