

export default function Home(){

    return(
       <div className="mainContainer"> 
        <article className="country-card">
            {/* <div className="main-image-container"> */}
                <img 
                    src="../design/desktop-design-detail-light.jpg" 
                    alt="country flag" 
                />
            {/* </div> */}
            <div className="info-container">
                <span className="country"><h2 className="country-name">Country Name</h2></span>
                <li className="entry-text">Population:</li>
                <li className="entry-text">Region:</li>
                <li className="entry-text">Capital:</li>
            </div>
        </article>
                <article className="country-card">
            {/* <div className="main-image-container"> */}
                <img 
                    src="../design/desktop-design-detail-dark.jpg" 
                    alt="country flag" 
                />
            {/* </div> */}
            <div className="info-container">
                <span className="country"><h2 className="country-name">Country Name</h2></span>
                <li className="entry-text">Population:</li>
                <li className="entry-text">Region:</li>
                <li className="entry-text">Capital:</li>
            </div>
        </article>
        </div>
    )
}