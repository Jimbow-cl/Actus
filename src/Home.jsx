import Menu from "./controller/Menu"

function Home() {
    return (
        <div className="container-fluid">
            <div className="row empty" id="empty"></div>
            <div className="row marginb menu" id="menu"><Menu /></div>
            <div className="row colorwhite align marginb titls" id="title"><h1>Bienvenue!</h1></div>
            <div className="row backblack body colorwhite align" id="body">
                <div className="row empty" id="empty"></div>
                <p> Vous êtes ici sur votre site d'actus préféré.
                    Vous y retrouverez vos infos du jour, ou encore vos infos par catégorie.
                </p>
                <img src="src/random.jpg" className="img" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus dolor explicabo, dicta dolore nostrum consequuntur,
                    porro ex soluta exercitationem similique cupiditate, in corrupti voluptatem corporis omnis? Quas iusto unde maxime!</p>

            </div>
        </div>
    )
}

export default Home