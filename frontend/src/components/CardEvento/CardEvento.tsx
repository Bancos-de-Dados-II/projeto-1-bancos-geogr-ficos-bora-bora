import React, {useRef} from 'react';
import './CardEvento.css';
import api from '../../services/api';

interface CardEventoProps {
    imagem: string;
    title: string;
    description: string;
    horario: string;
    data: string;
    quantPart: string;
    endereco: string;
    geolocalization: string;
    id: string;
}

async function deletarEvento (id: string){
    await api.delete<CardEventoProps[]>(`/event/${id}`)
}
const CardEvento: React.FC<CardEventoProps> = ({imagem, title, description, 
    horario, data, quantPart, endereco, geolocalization, id}) => {
    console.log(id)
    return (
        <div className='evento'>
            <div className='informacoes'>
                <img src={imagem} alt={title} />
                <p className='descricao'>{description}</p>
                <button className='event-button'>{title}</button>
                <p className='horario'>{horario}</p>
                <p className='data'>{data}</p>
                <p>Participantes: /{quantPart}</p>
                <p className='endereco'>{endereco}</p>
                <i className="bi bi-geo-alt"></i>
                <p></p>
            </div>
            <div className='acoes'>
                <i className='bi bi-person-fill-add'></i>
                <i className='bi bi-pencil-square'></i>
                <i className='bi bi-trash' onClick={() => deletarEvento(id)}></i>
            </div>
        </div>
    );
};

export default CardEvento;