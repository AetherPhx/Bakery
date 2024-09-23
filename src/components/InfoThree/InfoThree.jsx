import "./InfoThree.css";

export function InfoThree({title,subtitle,contentText,link}){
    return(
        <section class="Info">
            <div class="Info-content contenedor">
                <div class="Info-content-text">
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p  class="Info-content-parrafo">{contentText}</p>
                    <a href="#">{link}</a>
                </div>
                <div class="Info-content-image">
                    <div class="Info-content-img-dos">
                        <img src="bakers-delight-1.jpg" alt="img"/>
                        <img src="bakers-delight-2.jpg" alt="img"/>
                        
                    </div>
                </div>
            </div>
        </section>


    )
}