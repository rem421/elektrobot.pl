import "./ShopHeroSection.css"
import "./ShopTypeSwitchButton.css"
import ShopTypeSwitchButton from "./ShopTypeSwitchButton"

function ShopHeroSection(){
    return(
        <div className='shop-hero-container'>
            <h2>
                <span className="parent">
                    <span className="highlight">ELEKTRO</span>
                    <span className="bot">BOT</span>
                    <span className="highlight">PL</span>
                </span>
            </h2>
            {/* <ShopTypeSwitchButton></ShopTypeSwitchButton> */}
        </div>
    )
}
export default ShopHeroSection;
