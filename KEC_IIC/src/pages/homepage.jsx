import React from 'react'
import {Link} from 'react-router-dom'
function Homepage(){
    return(

<>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
    rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
    crossOrigin="anonymous"
  />
  <title>Document</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.3.0/css/all.min.css"
    integrity="sha512-SzlrxWUlpfuzQ+pcUCosxcglQRNAq/DZjVsC0lE40xsADsfeQoEypE+enwcOiGjk/bSuGGKHEyjSoQ1zVisanQ=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />

  <style
    dangerouslySetInnerHTML={{
      __html:
        "\n    .d5{\n    display: flex;\n    flex-direction: row;\n    height: 40vh; \n    /* width: 100vh; */\n    width: 100%;\n    gap:2rem;\n    justify-content: center;\n   \n\n\n}\n.d6,.d7,.d8,.d9{\n    display: flex; \n    gap: 2rem;\n    justify-content: center;\n    background-color: rgb(227, 168, 168);\n    width: 70rem;\n    text-align: center;\n    color: white;\n\n  \n}\n.p2>div{\n    flex-direction: row;\n    align-items: start;\n    text-align: justify;\n\n\n}\n.p3{\n    margin-top: 70px;\n    margin-right: 90px;\n    text-align: justify;\n    height: 20vh;\n}\n   \n    #card:hover{\n      box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px;\n      transition: top ease 0.5s;\n      top: -10px;\n    }\n\n  "
    }}
  />
    <style
    dangerouslySetInnerHTML={{
      __html:
        "\n.d1{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    width: 100%;\n    background-color: #f6f9ff;\n    height: 100vh;\n    align-items:center;\n}\n.d2,.d3{\n    display: flex;\n    justify-content: center;\n    margin: 12px;\n    font-size: larger;\n}\n.d4{\n    display: flex;\n    gap: 10px;\n    justify-content: center;\n    margin: 50px;\n}\n.p1{\n    height: 15rem;\n    width: 15rem;\n    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n\n}\n.p1>img\n{\n    width: 100%;\n    height: 70%;\n}\n.p1>div{\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    color: white;\n    height: 30%;\n\n}\n.d5{\n    display: flex;\n    flex-direction: row;\n    height: 40vh; \n    /* width: 100vh; */\n    width: 100%;\n    gap:2rem;\n    justify-content: center;\n   \n\n\n}\n.d6,.d7,.d8,.d9{\n    display: flex; \n    gap: 2rem;\n    justify-content: center;\n    background-color: rgb(227, 168, 168);\n    width: 70rem;\n   flex-direction: column;\n   align-items: center;\n    color: white;\n}\n\n.p3{\n    margin-top: 70px;\n    margin-right: 90px;\n    text-align: justify;\n    height: 20vh;\n}\n"
    }}
  />
  <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">
    <div className="container">
      <a href="#" className="navbar-brand md-0 h1 text-decoration-none">
        KEC IIC
      </a>
      <button className="navbar-toggler">
        <div
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          navbar-controls="navbarNav"
          area-expand="false"
          area-lable="toggle-navigation"
          className="collapse navbar-collapse"
          id="navbar-Nav"
        >
          <span className="navbar-toggler-icon" />
        </div>
      </button>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a href="#" className="nav-link active">
            HOME
          </a>
        </li>
        <li className="nav-item">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              ABOUT US
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  ABOUT MOE’S INNOVATION CELL
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  MESSAGE FROM CIO
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  LEADERSHIP TEAM
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  CONTACT US
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div className="dropdown" style={{ marginLeft: 10 }}>
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              INNOVATION COUNCIL
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  INSTITUTION’S INNOVATION COUNCIL(HEIS)
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  SCHOOL INNOVAITON COUNCIL(SIC)
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="nav-item active">
          <a href="#" className="nav-link">
            INNOVATION RANKING
          </a>
        </li>
        <li>
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              HACATHON
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  SMART INDIA HACKATHON
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  SINGAPORE INDIA HACKATHON
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  DRUG DISCOVERY HACKATHON
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  UNESCO-INDIA-AFRICA HACKATHON
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>
  <div
    id="carouselExampleCaptions"
    className="carousel slide"
    data-bs-ride="false"
  >
    <div className="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={0}
        className="active"
        aria-current="true"
        aria-label="Slide 1"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={1}
        aria-label="Slide 2"
      />
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to={2}
        aria-label="Slide 3"
      />
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <img
          src="https://api.mic.gov.in/uploads/images/banners/267333_banner.jpg"
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          {/* <h5>First slide label</h5> */}
          {/* <p>Some representative placeholder content for the first slide.</p> */}
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://api.mic.gov.in/uploads/images/banners/693510_banner.jpg"
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          {/* <h5>Second slide label</h5> */}
          {/* <p>Some representative placeholder content for the second slide.</p> */}
        </div>
      </div>
      <div className="carousel-item">
        <img
          src="https://api.mic.gov.in/uploads/images/banners/341298_banner.png"
          className="d-block w-100"
          alt="..."
        />
        <div className="carousel-caption d-none d-md-block">
          {/* <h5>Third slide label</h5> */}
          {/* <p>Some representative placeholder content for the third slide.</p> */}
        </div>
      </div>
    </div>
    <button
      className="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span className="carousel-control-prev-icon" aria-hidden="true" />
      <span className="visually-hidden">Previous</span>
    </button>
    <button
      className="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span className="carousel-control-next-icon" aria-hidden="true" />
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  <div className="container-fluid bg-2 text-center">
    <h1> INITIATIVES </h1>
    <h3>Opening up to new possibilities</h3>
    <p>
      Ministry of Education, Govt. of India has established an ‘Innovation cell’
      with a purpose of systematically fostering the culture of Innovation in
      all Higher Education Institutions (HEIs) across the country.
    </p>
  </div>
  <div className="row g-5 m-5 ">
    <div className="col">
      {" "}
      <div className="card" style={{ height: 500 }} id="card">
        <img
          className="card-img-top"
          src="https://mic.gov.in/assets/img/sih-new-logo.jpg"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            Smart India Hackathon (SIH)
          </h5>
          <p className="card-text text-center">
            Innovation and entrepreneurship are at the peak in India. In order
            to make development a comprehensive mass movement and innovate on
            all fronts, MoE, AICTE, i4C,
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center container mb-5">
          <a href="#" className="btn btn-danger">
            show more
          </a>
        </div>
      </div>
    </div>
    <div className="col">
      {" "}
      <div className="card" style={{ height: 500 }} id="card">
        <img
          className="card-img-top"
          src="https://mic.gov.in/assets/img/ariia-logo.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            Atal Ranking of Institutions on Innovation Achievements(ARIIA)
          </h5>
          <p className="card-text text-center">
            The buzzword across the globe for the 21st century is ‘Innovation’.
            In the simplest term, Innovation could be defined as converting
            ideas into new or improved products, processes and
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center container mb-5">
          <a href="#" className="btn btn-danger">
            READ MORE
          </a>
        </div>
      </div>
    </div>
    <div className="col">
      {" "}
      <div className="card" style={{ height: 500 }} id="card">
        <img
          className="card-img-top"
          src="https://mic.gov.in/assets/img/iic-logo.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            Institution’s Innovation Council (IIC)
          </h5>
          <p className="card-text text-center">
            Ministry of Education (MoE), Govt. of India has established ‘MoE’s
            Innovation Cell (MIC)’ to systematically foster the culture of
            Innovation amongst all Higher Education.
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center container mb-5">
          <a href="#" className="btn btn-danger">
            READ MORE
          </a>
        </div>
      </div>
    </div>
    <div className="col">
      {" "}
      <div className="card" style={{ height: 500 }} id="card">
        <img
          className="card-img-top"
          src="https://mic.gov.in/assets/img/sic-logo.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">School Innovation Council</h5>
          <p className="card-text text-center">
            The Programme aims at fostering the culture of Innovation, Ideation,
            Creativity, Design Thinking and Entrepreneurship in Schools. SIC
            will promote out of box thinking in school
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center container mb-5">
          <a href="#" className="btn btn-danger">
            READ MORE
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="row g-5 m-5 ">
    <div className="col">
      {" "}
      <div className="card" style={{ height: 500 }} id="card">
        <img
          className="card-img-top"
          src="https://mic.gov.in/assets/img/kapila-logo.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            Kalam Program for IP Literacy and Awareness
          </h5>
          <p className="card-text text-center">
            To overcome the current limitations in our innovation ecosystem
            especially in our HEIs, a systematic holistic effort ‘KAPILA: Kalam
            Program for IP Literacy and...
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center container mb-5">
          <a href="#" className="btn btn-danger">
            READ MORE
          </a>
        </div>
      </div>
    </div>
    <div className="col">
      {" "}
      <div className="card" style={{ height: 500 }} id="card">
        <img
          className="card-img-top"
          src="https://mic.gov.in/assets/img/yukti-logo.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">YUKTI</h5>
          <p className="card-text text-center">
            YUKTI 2.0 is an initiative of MoE's innovation cell and All India
            Council for Technical Education. It is focused on creating a
            national database of technologies and innovations....
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center container mb-5">
          <a href="#" className="btn btn-danger">
            READ MORE
          </a>
        </div>
      </div>
    </div>
    <div className="col">
      {" "}
      <div className="card" style={{ height: 500 }} id="card">
        <img
          className="card-img-top"
          src="https://mic.gov.in/assets/img/mic-innovation-contest-logo.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">
            National Innovation and Startup Policy
          </h5>
          <p className="card-text text-center">
            Indian higher education system is considered as one of the largest
            in the world in terms of numbers of higher educational institutions
            (HEIs)...
          </p>
        </div>
        <div className="d-flex align-items-center justify-content-center container mb-5">
          <a href="#" className="btn btn-danger">
            READ MORE
          </a>
        </div>
      </div>
    </div>
    <div className="d1">
    <div
      className="d2"
      style={{ fontWeight: 900, color: "#5555", fontSize: "5rem" }}
    >
      LATEST NEWS
    </div>
    <div className="d3" style={{ fontSize: 30 }}>
      A window to innovation
    </div>
    <div className="d4">
      <div className="p1">
        <img src="https://mic.gov.in/assets/img/sic.jpg" alt="" />
        <div style={{ backgroundColor: "rgba(142, 142, 243, 0.793)" }}>
          School Innovation Council
        </div>
      </div>
      <div className="p1">
        <img src="https://mic.gov.in/assets/img/ariia.jpg" alt="" />
        <div style={{ backgroundColor: "rgba(142, 142, 243, 0.793)" }}>
          ARIIA
        </div>
      </div>{" "}
      <div className="p1">
        <img src="https://mic.gov.in/assets/img/SIH-2022-2-thumb.png" alt="" />
        <div style={{ backgroundColor: "rgba(142, 142, 243, 0.793)" }}>
          Smart India Hacathon
        </div>
      </div>{" "}
      <div className="p1">
        <img src="https://mic.gov.in/assets/img/iic/1.png" alt="" />
        <div style={{ backgroundColor: "rgba(142, 142, 243, 0.793)" }}>
          Institution’s Innovation Council (IIC)
        </div>
      </div>
    </div>
  </div>
  <div className="d5" style={{ width: "100%" }}>
    <div className="d6">
      QUICK LINKS
      <div className="p3">
        <div className="p2">Innovation Council</div>
        <div className="p2">Smart India Hackathon</div>
        <div className="p2">ARIIA</div>
        <div className="p2">Yukti 2.0</div>
        <div className="p2">KAPILA</div>
        <div className="p2">School Innovation Council</div>
        <div className="p2">DDH</div>
      </div>
    </div>
    <div className="d7">
      RELATED LINKS
      <div className="p3">
        <div className="p2">All India Council for Technical Education</div>
        <div className="p2">Ministry of Education</div>
      </div>
    </div>
    <div className="d8">
      SOCIAL MEDIA LINKS
      <div className="p3">
        <div className="p2">Twitter</div>
        <div className="p2">Facebook</div>
        <div className="p2"> Youtube</div>
        <div className="p2"> Instagram</div>
      </div>
    </div>
    <div className="d9">
      CONTACT
      <div className="p2">MoE's Innovation Cell</div>
      <div className="p2">
        {" "}
        All India Council for Technical Education (AICTE), Nelson Mandela Marg,
        VasantKunj, New Delhi-110070.
      </div>
      <div className="p2"> 011-29581316</div>
      <div className="p2"> mic-mhrd@gov.in</div>
    </div>
  </div>
  </div>
  {/*  */}
</>
    )
}
export default Homepage;