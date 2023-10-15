import { Container,Row,Col } from "react-bootstrap";
import HeroImage from '../assets/img/Hero.png';
import {kelasTerbaru} from "../data/index";

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
            <h1 className="mb-4">Temukan <br /> <span>Bakat Kreatifmu</span> <br /> Bersama Kami</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati voluptatibus esse assumenda distinctio provident qui.</p>
            <button className="btn btn-danger btn-lg rounded-1 me-2 mb-xs-0 mb-2">Lihat Kelas</button>
            <button className="btn btn-outline-danger btn-lg rounded-1 mb-xs-0 mb-2">Lihat Promo</button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
            <img src={HeroImage} alt="Hero-img" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col>
            <h1 className="text-center fw-bold">Kelas Terbaru</h1>
            <p className="text-center fw-bold">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
            </Col>
          </Row>
          <Row>
            {kelasTerbaru.map((kelas) => {
              return(
            <Col key={kelas.id}>
            <img src={kelas.image} alt="unsplash.com" className="mb-5 rounded-top" />
            <div className="star mb-2 px-3"> 
              <i className={kelas.star1}></i>
              <i className={kelas.star2}></i>
              <i className={kelas.star3}></i>
              <i className={kelas.star4}></i>
              <i className={kelas.star5}></i>
            </div>
            <h5 className="mb-5 px-3">{kelas.title}</h5>
            <div className="">
              <p>{kelas.price}</p>
              <button>{kelas.buy}</button>
            </div>
            </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default HomePage