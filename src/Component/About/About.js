import './About.scss';
import image from  '../../images/about-img.jpeg';

function About() {
    return (
        <div className="container">
            <h1 className="heading"><span>About</span> us</h1>
            <div className="row align-items-center justify-content-center about-item">
                <div className="col-md-6">
                    <img src={image} alt="" className="image-fluid" />
                </div>
                <div className="col-md-6">
                    <h3 className="fw-bold">What Makes Our Coffee Special?</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem dignissimos, eaque itaque inventore iusto facilis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsam impedit rem quo consequatur laudantium.</p>
                    <button className="btn-main">Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default About
