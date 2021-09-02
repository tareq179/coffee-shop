import './Hero.scss';

function Hero() {
    return (
        <div className="hero-banner">
            <div className="container ">
                <div className="row align-items-center justify-content-start content">
                    <div className="col-md-6  order-2 order-md-1">
                        <h2 className="fw-bold fs-1">
                            FRESH COFFEE IN <br /> THE MORNING
                        </h2>
                        <p className="fs-5">Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Placeat Labore, Sint Cupiditate Distinctio Tempora Reiciendis.</p>
                        <button className="btn btn-main">Get Yours Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
