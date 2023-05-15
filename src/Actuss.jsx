import Menu from "./controller/Menu"
import { useState } from "react";
import { useEffect } from "react";
import KitchenSink from "./Carousel/aujourdhui";

function Actuss() {
    const [tableau, setTableau] = useState([]);
    const [subject, setSubject] = useState("France");

    async function Nice() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=${subject}&from=2023-04-14&sortBy=publishedAt&apiKey=87bfe6214f0444278f5dfc33e9ec6651`)
        console.log('reponse', response);
        let donnees = await response.json();
        console.log('données', donnees);
        setTableau(donnees.articles);
        console.log('tableau', tableau);
    };
    const search = (e) => {
        setSubject(e.target.value);
    };

    useEffect(() => { }, [tableau]);

    const RenderMyArray = () => {
        return tableau.map((item, id) => {
            if (item.urlToImage == null) {
                item.urlToImage = "src/random.jpg"
            }
            return (
                <div>
                    <KitchenSink key={id} id={item.index} author={item.author} title={item.title} description={item.description} content={item.content} url={item.url} urlToImage={item.urlToImage} />
                </div>
            );
        }
        );
    };
    return (

        <div className="container-fluid">
            <div className="row empty" id="empty2"></div>
            <div className="row marginb menu" id="menu2"><Menu /></div>
            <div className="row colorwhite align marginb title" id="title2 "><h1>Actualité de votre choix</h1></div>
            <div className="row backblack body" id="body2">
                <div class="hstack gap-3">
                    <div className="row empty"></div>
                    <input class="form-control me-auto" onChange={search} type="text" placeholder="Ici, le sujet de votre choix" />
                    <button type="button" onClick={Nice} class="btn btn-secondary">Rechercher</button>
                    <div class="vr"></div>

                </div>
                <div>
                    <div className="row empty colorwhite"> <h3>Votre Recherche : <span class="badge rounded-pill text-bg-success">{subject}</span></h3></div>

                    <div className="kitchen">{RenderMyArray()}</div>
                </div>
            </div>
        </div>
    );

};

export default Actuss