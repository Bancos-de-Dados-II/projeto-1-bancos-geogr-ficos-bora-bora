import './EditarEvento.css'
import React, {useState, useRef} from "react";
import ReactModal from "react-modal";
import api from "../../services/api";

interface EditarEventoProps {
    isOpen: boolean;
    onClose: () => void;
    onCreate: (title: string, drescription: string, horario: string, data: string, quantPart:string, endereco:string, geolocalization: string, id?: any) => void;
}

const CriarEvento: React.FC<EditarEventoProps> = ({isOpen, onClose, onCreate}) => {
    
    //Gambiarra null!
    const inputNome = useRef<HTMLInputElement>(null!);
    const inputHorario = useRef<HTMLInputElement>(null!);
    const inputParticipantes = useRef<HTMLInputElement>(null!);
    const inputLocal = useRef<HTMLInputElement>(null!);
    const inputDescricao = useRef<HTMLInputElement>(null!);
    const inputData = useRef<HTMLInputElement>(null!);
    const inputEndereco = useRef<HTMLInputElement>(null!)
    const [imagemEvento, setImagemEvento] = useState<File | null>(null);

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
            onCreate(nomeEvento, horarioEvento, participantesEvento, localEvento, descricaoEvento, dataEvento, enderecoEvento);
      
            if (inputNome.current) inputNome.current.value = "";
            if (inputHorario.current) inputHorario.current.value = "";
            if (inputParticipantes.current) inputParticipantes.current.value = "";
            if (inputLocal.current) inputLocal.current.value = "";
            
      
            onClose();
          }
    };

    async function createEventos (){
        console.log({title: inputNome.current.value,
            description: inputDescricao.current.value,
            horario: inputHorario.current.value,
            data: inputData.current.value,
            quantPart: inputParticipantes.current.value,
            endereco: inputEndereco.current.value,
            geolocalization: {
                "type":"Point",
                "coordinates":[]
            }})
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
                "coordinates":[]
            }
        })
        /* console.log(inputNome); */
    }

    return (
        <ReactModal isOpen={isOpen} onRequestClose={onClose} className="popup-criar-evento" overlayClassName="popup-overlay">
            <h2>Criar Evento</h2>
            <form onSubmit={submit}>
                <label>
                    Como vai se chamar seu evento?
                    <input type="text" ref={inputNome} required/>
                </label>

                <label>
                    Descreva seu evento
                    <input type="text" ref={inputDescricao} required/>
                </label>

                <label>
                    Que horas seu evento começa?
                    <input type="time" ref={inputHorario} required/>
                </label>

                <label>
                    Quando será seu evento?
                    <input type="date" ref={inputData} required/>
                </label>

                <label>
                    Quantas pessoas serão convidadas ?
                    <input type="text" ref={inputParticipantes} required/>
                </label>

                <label>
                    Onde será seu evento?
                    <input type="text" ref={inputEndereco} required/>
                </label>

                <div className="buttons-create">
                    <button type="submit" onClick={createEventos}>Criar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </div>
            </form>
        </ReactModal>
    );
};

export default CriarEvento;