import React, {useState, useRef} from "react";
import ReactModal from "react-modal";
import './CriarEvento.css';
import api from "../../services/api";
import MyMap from "../Map/Map";

interface CriarEventoProps {
    isOpen: boolean;
    onClose: () => void;
    // onCreate?: (title: string, drescription: string, horario: string, data: string, quantPart:string, endereco:string, geolocalization: string, id?: any) => void;
    evento:object;
}

const CriarEvento: React.FC<CriarEventoProps> = ({isOpen, onClose,evento}) => {
   
    

    // const [evento,setEvento] = useState<unknown>(null);
    
    //Gambiarra null!
    const inputNome = useRef<HTMLInputElement>(null!);
    const inputHorario = useRef<HTMLInputElement>(null!);
    const inputParticipantes = useRef<HTMLInputElement>(null!);
    const inputLocal = useRef<HTMLInputElement>(null!);
    const inputDescricao = useRef<HTMLInputElement>(null!);
    const inputData = useRef<HTMLInputElement>(null!);
    const inputEndereco = useRef<HTMLInputElement>(null!)
    const [imagemEvento, setImagemEvento] = useState<File | null>(null);
    const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

    async function search(pesquisa: string) {
        try {
            const url = await fetch(`https://nominatim.openstreetmap.org/search?q=${pesquisa}&format=json`);
            const data = await url.json();
            if (data.length > 0) {
                const { lat, lon } = data[0];
                setCoordinates([parseFloat(lat), parseFloat(lon)]);
            } else {
                alert("Nenhum resultado encontrado para o endereço.");
            }
        } catch (error) {
            console.error("Erro ao buscar coordenadas:", error);
        }
    }

    const submit = (e: React.FormEvent) => {
        e.preventDefault();

        const nomeEvento = inputNome.current?.value.trim();
        const horarioEvento = inputHorario.current?.value.trim();
        const participantesEvento = inputParticipantes.current?.value.trim();
        const localEvento = inputLocal.current?.value.trim();
        const descricaoEvento = inputDescricao.current?.value.trim();
        const dataEvento = inputData.current?.value.trim();
        const enderecoEvento = inputEndereco.current?.value.trim();

        if (nomeEvento && horarioEvento && participantesEvento && localEvento && descricaoEvento && dataEvento && enderecoEvento) {
            // onCreate(nomeEvento, horarioEvento, participantesEvento, localEvento, descricaoEvento, dataEvento, enderecoEvento);
      
            if (inputNome.current) inputNome.current.value = "";
            if (inputHorario.current) inputHorario.current.value = "";
            if (inputParticipantes.current) inputParticipantes.current.value = "";
            if (inputLocal.current) inputLocal.current.value = "";
            
      
            onClose();
          }
    };

    async function createEventos (){
        await api.post('/event', {
            imagem: "",
            title: inputNome.current.value,
            description: inputDescricao.current.value,
            horario: inputHorario.current.value,
            data: inputData.current.value,
            quantPart: parseInt(inputParticipantes.current.value),
            endereco: inputEndereco.current.value,
            geolocalization: {
                "type":"Point",
                "coordinates":[coordinates[0], coordinates[1]]
            }
        })
    }

    async function putEvento (id:string){
        await api.put(`/event/${id}`, {
            imagem: "",
            title: inputNome.current.value,
            description: inputDescricao.current.value,
            horario: inputHorario.current.value,
            data: inputData.current.value,
            quantPart:parseInt(inputParticipantes.current.value),
            endereco: inputEndereco.current.value,
            geolocalization: {
                "type":"Point",
                "coordinates":[coordinates[0], coordinates[1]]
            }
    })
}


    
    if(evento){

        console.log(evento.title);
        

     

        return (
            <ReactModal isOpen={isOpen} onRequestClose={onClose} className="popup-criar-evento" overlayClassName="popup-overlay">
                <h2>Editar Evento</h2>
                <form onSubmit={submit}>
                    <label>
                        Como vai se chamar seu evento?
                        <input type="text" ref={inputNome}  placeholder={evento.title} />
                    </label>
    
                    <label>
                        Descreva seu evento
                        <input type="text" ref={inputDescricao}  placeholder={evento.description}/>
                    </label>
    
                    <label>
                        Que horas seu evento começa?
                        <input type="time" ref={inputHorario}  />
                    </label>
    
                    <label>
                        Quando será seu evento?
                        <input type="date" ref={inputData}  placeholder={evento.data}/>
                    </label>
    
                    <label>
                        Quantas pessoas serão convidadas ?
                        <input type="text" ref={inputParticipantes}  placeholder={evento.quantPart}/>
                    </label>
    
                    <label>
                        Onde será seu evento?
                        <input type="text" ref={inputEndereco}    placeholder={evento.endereco}/>
                        <button className="pesquisar" onClick={() => search(inputEndereco.current.value)}>Pesquisar</button>
                    </label>
                    <div>
                        <MyMap coordinates={coordinates}/>
                    </div>
    
                    <div className="buttons-create">
                        <button type="submit" onClick={()=>putEvento(evento.id)}>Atualizar</button>
                        <button type="button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </ReactModal>
        );
    }

    
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onClose} className="popup-criar-evento" overlayClassName="popup-overlay">
            <h2>Criar Evento</h2>
            <form onSubmit={submit}>
                <label>
                    Como vai se chamar seu evento?
                    <input type="text" ref={inputNome} required />
                </label>

                <label>
                    Descreva seu evento
                    <input type="text" ref={inputDescricao} required />
                </label>

                <label>
                    Que horas seu evento começa?
                    <input type="time" ref={inputHorario} required />
                </label>

                <label>
                    Quando será seu evento?
                    <input type="date" ref={inputData} required />
                </label>

                <label>
                    Quantas pessoas serão convidadas ?
                    <input type="text" ref={inputParticipantes} required />
                </label>

                <label>
                    Onde será seu evento?
                    <input type="text" ref={inputEndereco} required/>
                    <button className="pesquisar" onClick={() => search(inputEndereco.current.value)}>Pesquisar</button>
                </label>
                <div>
                    <MyMap coordinates={coordinates}/>
                </div>

                <div className="buttons-create">
                    <button type="submit" onClick={createEventos}>Criar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </div>
            </form>
        </ReactModal>
    );


};

export default CriarEvento;