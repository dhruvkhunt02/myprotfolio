import React from 'react'
import logo from '../img/image2.jpg'
import Typical from 'react-typical'
import About from './About'
import Protoflio from './Protoflio'
import Contact from './Contact'
import Blog from './Blog'
// import Nav from './Nav'

const Home = () => {

  return (
    <>
      {/* <div className='yellow d-none d-lg-block'></div> */}
  
      <div className='container-fluid' data-aos="fade-down" data-aos-duration="900" data-aos-delay="00">
        <div className='row'>
          <div className='col-lg-4 col-md-8 col-sm-10 col-10 m-auto m-lg-0'>
            <div className='image ms-3 mt-5'>
              <img src={logo} alt='logo' className='img-fluid' />
            </div>
          </div>
          <div className='col-lg-6 mt-5 pt-lg-5 text-lg-start m-auto main'>
            <div className='home_text mt-lg-5'>
              <h1 className='fw-bold h1'><span><i class="fa-solid fa-minus me-2"></i></span>I'M DHRUV KHUNT.</h1>
              <h2 className='fw-bold ms-5' id='words'>
              <Typical
                loop={Infinity}
                wrapper='b'
                steps={[
                  'FRONT-END DEVELOPER',
                  2000,
                  'BACK-END DEVELOPER',
                  2000
                ]}
              /></h2>
              <p className='text-white mb-lg-4 ms-5'>I'm a back-end developer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
              <button className='p-3 d-lg-block d-none'>
                <a className='text-white fw-bold' data-bs-toggle="modal" data-bs-target="#myModal">MORE ABOUT ME</a>
              </button>
              <button className='d-lg-none d-block p-3'>
                <a className='text-white fw-bold'>MORE ABOUT ME</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      <About />
      <Protoflio />
      <Contact />
      <Blog />

      <div class="modal" id="myModal">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close btn-dark" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <div className='container'>
                <div className='resume mt-5'>
                  <h1 className='d-none d-lg-block'>SKILLS</h1>
                </div>
              </div>
              <div className='container my-5 pt-5' data-aos="fade-down" data-aos-duration="900" data-aos-delay="100">
                <div className='row'>
                  <div className='col-lg-4 col-md-3 col-sm-6 col-6 text mb-5'>
                    <div className='circle1'>
                      <h4 className='text-white fw-bold'>100%</h4>
                    </div>
                    <h5 className='text-white mt-3'>Html</h5>
                  </div>
                  <div className='col-lg-4 col-md-3 col-sm-6 col-6 text mb-5'>
                    <div className='circle5'>
                      <h4 className='text-white fw-bold'>100%</h4>
                    </div>
                    <h5 className='text-white mt-3 ps-3'>Css</h5>
                  </div>
                  <div className='col-lg-4 col-md-3 col-sm-6 col-6 text mb-5'>
                    <div className='circle5'>
                      <h4 className='text-white fw-bold'>100%</h4>
                    </div>
                    <h5 className='text-white mt-3 ms-4'>Bootstrap</h5>
                  </div>
                  <div className='col-lg-4 col-md-3 col-sm-6 col-6 text mb-5'>
                    <div className='circle6'>
                      <h4 className='text-white fw-bold'>90%</h4>
                    </div>
                    <h5 className='text-white mt-3 ps-3'>Scss</h5>
                  </div>
                  <div className='col-lg-4 col-md-3 col-sm-6 col-6 text2 mb-5'>
                    <div className='circle2'>
                      <h4 className='text-white fw-bold'>80%</h4>
                    </div>
                    <h5 className='text-white mt-3 ps-2'>Javascript</h5>
                  </div>
                  <div className='col-lg-4 col-md-3 col-sm-6 col-6 text mb-5'>
                    <div className='circle3'>
                      <h4 className='text-white fw-bold'>85%</h4>
                    </div>
                    <h5 className='text-white mt-3'>Node</h5>
                  </div>
                  <div className='col-lg-4 col-md-3 col-sm-6 col-6 text'>
                    <div className='circle4'>
                      <h4 className='text-white fw-bold'>75%</h4>
                    </div>
                    <h5 className='text-white mt-3'>React</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home