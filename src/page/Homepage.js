import { useState } from "react";
import { Link } from "react-router-dom";
import bg from '../images/bg-v2.jpg'

function Homepage() {
  const [datas, setDatas] = useState([
    {
      name: "Buya Yahya",
      place: "Cirebon",
      birthDate: "10 Agustus 1973",
      imageUrl: "https://i.pinimg.com/originals/15/a0/59/15a05953f6fa23f924159903b3da426c.png"
    },
    {
      name: "Gus Baha",
      place: "Yogyakarta",
      birthDate: "29 September 1970",
      imageUrl: "https://uloom.id/wp-content/uploads/2019/12/gus-baha.jpg"
    },
    {
      name: "Ustadz Adi Hidayat",
      place: "Banten",
      birthDate: "11 September 1984",
      imageUrl: "https://www.lyceum.id/wp-content/uploads/uah.webp"
    },    
    {
      name: "Habib Muhammad Luthfi",
      place: "Pekalongan",
      birthDate: "10 November 1947",
      imageUrl: "https://www.radarcirebon.com/wp-content/uploads/2022/01/habib-luthfi2.jpg"
    },    
    {
      name: "Ustadz Hanan Attaki",
      place: "Aceh",
      birthDate: "31 Desember 1981",
      imageUrl: "https://cdn-images-1.listennotes.com/podcasts/recharge-your-iman/bentuk-keluhan-ustadz-hanan-7YB-SR8dLop-hgFYCJG130e.1400x1400.jpg"
    },    
    {
      name: "Habib Jindan",
      place: "Sukabumi",
      birthDate: "21 Desember 1977",
      imageUrl: "https://i.pinimg.com/564x/d9/4a/4a/d94a4a2af22c4db83e68f5d589f0215a.jpg"
    },    
    {
      name: "Habib Novel",
      place: "Surakarta",
      birthDate: "24 Juli 1975",
      imageUrl: "https://yt3.ggpht.com/ytc/AKedOLRFAQvU8kAF6PGtyY9F19_STWheO76QGkpNMXifIA=s900-c-k-c0x00ffffff-no-rj"
    },    
    {
      name: "Ustadz Abdul Somad",
      place: "Asahan",
      birthDate: "18 Mei 1977",
      imageUrl: "https://cdn0-production-images-kly.akamaized.net/nN0_ER4_f5TeIelCMG0imXyHndY=/1200x1200/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2888629/original/055624300_1566386220-20190821-Ustaz-Abdul-Somad-Beri-Klarifikasi-Terkait-Video-Ceramahnya1.jpg"
    },    
    {
      name: "Ustadz Felix Siauw",
      place: "Palembang",
      birthDate: "31 Januari 1984",
      imageUrl: "https://i1.sndcdn.com/artworks-000449455530-mofnar-t500x500.jpg"
    },    
  ]);

  return (
    <>
      <div class="container">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Reels Ulama</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to={{pathname: "/"}}>
                  <a class="nav-link">Beranda</a>
                </Link>              
              </li>
            </ul>
          </div>
        </nav>

        <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="d-block w-100" src={bg} alt="First slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Second slide" />
            </div>
            <div class="carousel-item">
              <img class="d-block w-100" src="..." alt="Third slide" />
            </div>
          </div>
        </div>

        <div class="row mt-4">

          {
            datas.map((e, i) => {
              return (
                <div class="col-md-4">
                  <div class="card m-2">
                      <div class="card-body">
                        <h5 class="card-title">{e.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">{e.place}</h6>
                        <p class="card-text">{e.birthDate}</p>
                        <div>
                          <img style={{width: '100%', height: '100%'}} src={e.imageUrl}></img>
                        </div>
                        <div class="col-md-12 mt-2 text-center">
                          <Link to={{
                            pathname: "/video/"+e.name
                          }}>
                            <button type="button" class="btn btn-success">Lihat Kajian</button>
                          </Link>
                        </div>
                      </div>
                    </div>
                </div>
              );
            })
          }
          
        </div>
      </div>
    </>
  );
}

export default Homepage