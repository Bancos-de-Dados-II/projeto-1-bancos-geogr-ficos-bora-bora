import React, {useState,useRef} from 'react';
import './CardEvento.css';
import api from '../../services/api';
import CriarEvento from '../CriarEvento/CriarEvento';

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

const formatarData = (date: string) => {
    const data = new Date(date);
    const dataFormatada = data.toLocaleDateString("pt-BR");
    
    return `${dataFormatada}`;
};

async function deletarEvento (id: string){
    await api.delete<CardEventoProps[]>(`/event/${id}`)
}





const CardEvento: React.FC<CardEventoProps> = ({imagem, title, description, 
    horario, data, quantPart, endereco, geolocalization, id}) => {
        
    const [evento, setEvento] = useState<object>({})

    async function getEvento(id:string) {
        const resultado = await api.get(`/event/${id}`);
        setEvento(resultado.data);
    }

    const [popupCriarOpen, setPopupCriarOpen] = useState(false);

    // const carregaPopUp = ()=>{
    //     console.log("entrou no popup");
    //     return(

    //         <CriarEvento isOpen={popupCriarOpen} onClose={() => setPopupCriarOpen(false)} />
    //     )
    // }


   
        return (
            <div className='evento'>
                <div className='informacoes'>
                    <img src={imagem} alt={title} />
                    <div className='infos'>
                        <p className='titulo'>{title}</p>
                        <p className='descricao'>{description}</p>
                        <div className='data-time'>
                            <p className='data'>{formatarData(data)}</p>
                            <p className='horario'>às {horario}</p>
                        </div>
                    </div>
                    <i className="bi bi-geo-alt"><p className='endereco'>{endereco}</p></i>
                    
                    
                    <p id='participantes'>Participantes: /{quantPart}</p>
                </div>
                <div className='acoes'>
                    <i className='bi bi-person-fill-add'></i>
                    <i className='bi bi-pencil-square' onClick={() =>{ setPopupCriarOpen(true)
                        getEvento(id)
                    }
                    }></i>
                    <CriarEvento
                    isOpen={popupCriarOpen}
                    onClose={() => setPopupCriarOpen(false)}
                    evento = {evento}
                    // onCreate={handleCriarEvento}
                    />
                    <i className='bi bi-trash' onClick={() => deletarEvento(id)}></i>
                </div>
            </div>
        );  
    };

export default CardEvento;