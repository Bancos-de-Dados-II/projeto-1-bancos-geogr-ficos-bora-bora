import React, {useState, useEffect} from "react"
import MyMap from "../Map/Map";
import ReactModal from "react-modal";
import api from "../../services/api";

interface Map {
    isOpen: boolean;
    onClose: () => void;
    //coordinates: [number, number] | null;
    id: string;
}

const PopMap: React.FC<Map> = ({isOpen, onClose, id}) => {

    const [coordenadas,setCordenadas] = useState<[number,number]>([])

    useEffect(() => {
        async function receberId() {
            try {
                const evento = await api.get(`/event/${id}`);
                const geolocalizacao = evento.data.geolocalization;
                setCordenadas(geolocalizacao.coordinates);
                console.log(evento.data);
                console.log(geolocalizacao);
            } catch (error) {
                console.error("Erro ao buscar dados do evento:", error);
            }
        }

        if (id) {
            receberId();
        }
    }, [id]); // Executa somente quando `id` muda.

    return(
        <ReactModal isOpen={isOpen} onRequestClose={onClose}>
            <section className="PopMap">
                <div className="PopUP">
                    <p>Local do evento</p>
                    <MyMap coordinates={coordenadas}/>
                </div>
            </section>
        </ReactModal>
    )
}

export default PopMap;