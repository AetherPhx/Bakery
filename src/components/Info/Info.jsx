import "./Info.css";

export function Info({title,subtitle,contentText,link}){
    return(
        <section class="Info">
          <div class="Info-content contenedor">
              <div class="Info-content-text">
                  <h2>{title}</h2>
                  <h3>{subtitle}</h3>
                  <p  class="Info-content-parrafo"> {contentText}</p>
                  <a href="#">{link}</a>
              </div>
              <div class="Info-content-img">
                  <div class="Info-content-img_uno">
                   <img src="story-img.jpg" alt="imagen"/>
                  </div>
              </div>
          </div>
        </section>
    )
}
