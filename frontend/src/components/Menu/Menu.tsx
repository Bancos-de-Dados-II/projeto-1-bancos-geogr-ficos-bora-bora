import React, { useEffect, useState, useRef } from "react";
import './Menu.css';
import Botao from "../Botao/Botao";
import CardEvento from "../CardEvento/CardEvento";
import CriarEvento from "../CriarEvento/CriarEvento";
import api from "../../services/api";

interface Evento {
    imagem?: string;
    title: string;
    description: string;
    horario: string;
    data: string;
    quantPart: string;
    endereco: string;
    geolocalization: string;
    id?: string;
}

const Menu: React.FC = () => {
    const [selecionada, selecionar] = useState<string>("Meus Eventos");
    const [popupCriarOpen, setPopupCriarOpen] = useState(false);
    const [eventos, setEventos] = useState<Evento[]>([]);

    // const handleCriarEvento = (title: string, description: string,
    //     horario: string, data: string, quantPart: string, endereco: string, 
    //     geolocalization: string, id: string) => {

    //     setEventos([...eventos, {title, description, horario, data, quantPart, endereco, geolocalization, id}]);
    // };

    const fetchEventos = async () => {
        const response = await api.get<Evento[]>("/event");
        setEventos(response.data);
        /* console.log(response.data); */
    }

    useEffect(() => {
        fetchEventos();
    }, []);

    return (
        <div className="container-background">
            <nav className="navbar">
                    <div
                        className={`tab ${selecionada === "Meus Eventos" ? "active" : ""}`}
                        onClick={() => selecionar("Meus Eventos")}
                    >Meus Eventos
                    </div>
                        <div
                        className={`tab ${selecionada === "Meus Convites" ? "active" : ""}`}
                        onClick={() => selecionar("Meus Convites")}
                    >Meus Convites
                    </div>
            </nav>

            {selecionada === "Meus Eventos" && (
                <div>
                    <Botao onClick={() => setPopupCriarOpen(true)}/>
                    <CriarEvento
                    isOpen={popupCriarOpen}
                    onClose={() => setPopupCriarOpen(false)}
                    // onCreate={handleCriarEvento}
                    />
                </div>
            )}

            <div className={`menu ${selecionada === "Meus Eventos" ? "background-meus-eventos" : "background-meus-convites"}`}>

            {selecionada === "Meus Eventos" && eventos.map((evento, index) => (
                
                <CardEvento
                    key={index}
                    imagem="./Images/LOGO.png"
                    title={`${evento.title}`}
                    description={`${evento.description}`}
                    horario={`${evento.horario}`}
                    data={`${evento.data}`}
                    quantPart={`${evento.quantPart}`}
                    endereco={`${evento.endereco}`}
                    geolocalization={`${evento.geolocalization}`}
                    id={`${evento.id}`}
                />
                
                ))}
            </div>
        </div>
    );
};

export default Menu;