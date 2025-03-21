import { useNavigate } from 'react-router-dom';

function BackButton() {
    const navigate = useNavigate();

    return (
        <button 
            onClick={() => navigate(-1)} 
            className="px-4 py-2 bg-yellow-200 hover:bg-yellow-300 rounded-md transition"
        >
            Go Back
        </button>
    );
}

export default BackButton;
