import './Review.scss';
import { reviewData } from '../../data';
import quote from '../../images/quote-img.png'

function Review() {
    return (
        <div className="container">
            <h3 className="heading">CUSTOMER'S <span>REVIEW</span></h3>
            <div className="row align-items-center justify-content-center">
                {
                    reviewData.map((item)=>(
                        <div className="col-md-4" key={item.id}>
                            <div className="reviewCart">
                                <img src={quote} alt="" />
                                <p>{item.dec}</p>
                                <img src={item.image} alt="" className="user" />
                                <h3>{item.title}</h3>
                                <div class="stars">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star-half-alt"></i>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Review
