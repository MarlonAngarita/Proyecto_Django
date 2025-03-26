import axios from 'axios';

const UsuariosPost = async (dataToSend) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/usuarios/', dataToSend);
            console.log(response.data);
            return response.data;
    } catch (error) {
        console.error('ERROR:', error);
    }

};

export default UsuariosPost;


