import "./Menu.scss";
import { menuData } from '../../data'

function Menu() {
    return (
        <div className="container">
            <h3 className="heading">OUR <span>MENU</span></h3>
            <div className="row align-items-center justify-content-center">
                
                    {
                        menuData.map((item)=>(
                            <div className="col-md-4" key={item.id}>
                                <div className="card my-2 align-items-center justify-content-center">
                                    <div className="face face1">
                                        <img src={item.image} alt="" />
                                        <h3>{item.title}</h3>
                                        <div className="price">${item.price}<span>{item.beforePrice}</span></div>
                                        <button className="btn-main">Add To Cart</button>
                                    </div>
                                    <div className="face face2">
                                        
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                
            </div>
        </div>
    )
}

export default Menu
