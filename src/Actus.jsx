import Menu from "./controller/Menu"
import { useState } from "react";
import KitchenSink from "./Carousel/aujourdhui";
import { useEffect } from "react";
import moment from "moment";
import 'moment/dist/locale/fr';
import 'moment/locale/fr';




function Actus() {
    const [tableau, setTableau] = useState([])
    let d = new Date();
    let french = moment()
    moment.updateLocale('fr')
    let date1 = d.getFullYear() + '-' + (d.getMonth()) + '-' + d.getDate();
    let date2 = d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate();

    async function Nice() {
        let response = await fetch(`https://newsapi.org/v2/everything?q=general&from=${date1}&to=${date2}&sortBy=popularity?country=fr&apiKey=87bfe6214f0444278f5dfc33e9ec6651`)
        console.log('reponse', response);
        let donnees = await response.json();
        console.log('données', donnees);
        setTableau(donnees.articles);
        console.log('tableau', tableau);


    };
    useEffect(() => { }, [tableau]);
    useEffect(() => { Nice() }, []);
    const RenderMyArray = () => {
        return tableau.map((item, id) => {
            if (item.urlToImage == null) {
                item.urlToImage = "src/random.jpg"
            }

            return (
                <div>
                    <KitchenSink key={id} id={item.index} publishedAt={moment(item.publishedAt).format("LL")} author={item.author} title={item.title} description={item.description} content={item.content} url={item.url} urlToImage={item.urlToImage} />
                </div>
            );
        }
        );
    };

    return (



        <div className="container-fluid">
            <div className="row empty" id="empty3"></div>
            <div className="row marginb menu" id="menu3"><Menu /></div>
            <div className="row colorwhite align marginb title" id="title3"><h1>Actualité Mondial</h1></div>

            <div className="row backblack body" id="body3">
                <div className="row empty"></div>
                <div className="row empty colorwhite align"><h1> Voici l'actualité du  <span class="badge rounded-pill text-bg-warning">{french.format('LL')}</span></h1>
                </div>
                <div className="row empty"></div>
                <div className="kitchen">{RenderMyArray()}</div>
            </div>
        </div>
    )

}

export default Actus