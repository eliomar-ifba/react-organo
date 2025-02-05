import './Banner.css';

const urlBanner = '/assets/imagens/banner.png';


function Banner() {


    return (
        <header className="banner">
            <img src={urlBanner} alt="" />
        </header>
    )


}
export default Banner;