import "./InfoTwo.css";

export function InfoTwo({title,subtitle,contentText,link}){
    return(
        <section class="Info">
          <div class="Info-content contenedor">
                <div class="Info-content-img">
                    <div class="Info-content-img-cuatro">
                        <img src="square-1.jpg" alt="imagen"/>
                        <img src="square-2.jpg" alt="imagen"/>
                        <img src="square-3.jpg" alt="imagen"/>
                        <img src="square-4.jpg" alt="imagen"/>

                    </div>
                </div>

                <div class="Info-content-text">
                  <h2>{title}</h2>
                  <h3>{subtitle}</h3>
                  <p  class="Info-content-parrafo"> {contentText}</p>
                  <a href="#">{link}</a>
              </div>
          </div>
          
    </section>
    )
}
