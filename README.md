
<h1 align="center">Bora Bora Festas e Eventos</h1>

<p align="center">
    <img src="./frontend/Images/LOGO.png" width="200px"/>
</p>

# Descrição do Projeto

<p>O projeto trata-se de um site de agendamentos de eventos em que um usuário poderá criar seus eventos e enviar solicitações para outros usuários participarem de sua festa/evento. 

# Ferramentas utilizadas

<table>
    <tr>
        <td align="center">
            <a href="https://react.dev/" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/1126/1126012.png" alt="React" width="40" height="40"/> </a>
        </td>
           <td align="center">
            <a href="https://www.typescriptlang.org/" target="_blank"> <img src="https://static-00.iconduck.com/assets.00/typescript-icon-icon-1024x1024-vh3pfez8.png" alt="TypeScript" width="40" height="40"/> </a>
        </td>
           <td align="center">
            <a href="https://expressjs.com/pt-br/" target="_blank"> <img src="https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png" alt="Express" height="40"/> </a>
        </td>
        <td align="center">
            <a href="https://www.postgresql.org/" target="_blank"> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png" alt="Postgresql" width="40" height="40"/> </a> 
        </td>
         <td align="center">
            <a href="https://www.figma.com/" target="_blank"> <img src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png" alt="Figma" width="40" height="40"/> </a> 
        </td>
    </tr>
</table>

# Desenvolvedores

<table>
    <tr>
        <td align="center">
            <a href="https://github.com/RainanJorge">
                <img src="https://avatars.githubusercontent.com/u/131698631?v=4" width="100px;" alt="Foto de Rainan no GitHub"/><br>
                <sub>
                    <b>Rainan</b>
                    </br>
                    <b>Dev</b>
                </sub>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/MarcoslViana">
                <img src="https://avatars.githubusercontent.com/u/122543368?v=4" width="100px;" alt="Foto de Marcos no GitHub"/><br>
                <sub>
                    <b>Marcos</b>
                    </br>
                    <b>Dev</b>
                </sub>
            </a>
        </td>
        <td align="center">
            <a href="https://github.com/GabrielSilva15">
                <img src="https://avatars.githubusercontent.com/u/113948429?v=4" width="100px;" alt="Foto de Gabriel no GitHub"/><br>
                <sub>
                    <b>Gabriel</b>
                    </br>
                    <b>Dev</b>
                </sub>
            </a>
        </td>
</table>

## Getting Started

OBS: Necessary install Docker(Linux) or Docker Setup(Windows)

```bash
Replace the locations where it is: NAME-DB, PASSWORD, USER and DATABASE with the values ​​defined in your .env file
```

To create container:

Execute this comand in terminal(Linux) or Terminal Docker Setup(Windows):


```bash
docker run -d --name NAME-DB -e POSTGRES_PASSWORD= POSTGRES_PASSWORD -e POSTGRES_USER= POSTGRES_USER -e POSTGRES_DB= POSTGRES_DB -p 5432:5432 postgres
```

# Example .env file

```bash
POSTGRES_USER = usuario
POSTGRES_PASSWORD = senha
POSTGRES_HOST = localhost
POSTGRES_PORT = 5432
POSTGRES_DB = banco
```

# Start
cd ./backend

To install dependencies:

```bash
npm install
```

To run:

```bash
npm run dev
```
