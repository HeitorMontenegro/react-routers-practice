import "../App.css"
import  { useNavigate } from 'react-router-dom';

const Page2 = () =>{

    const navigate = useNavigate();

    return (
        <div className="page-component page-2">
            2
            <button onClick={()=>navigate(-1)}>Go back</button>
        </div>
    );
}

export default Page2;