import React from 'react'
import works1 from '../img/works-1.jpg'
import works2 from '../img/works-2.jpg'
import works3 from '../img/works-3.jpg'
import works4 from '../img/works-4.jpg'
import works5 from '../img/works-5.jpg'
import works6 from '../img/works-6.jpg'
import works7 from '../img/works-7.jpg'
import works8 from '../img/works-8.jpg'
import works9 from '../img/works-9.jpg'

const Protoflio = () => {
  return (
    <>
      <div className='container py-lg-5 py-0' data-aos="fade-right" data-aos-duration="900" data-aos-delay="100">
        <div className='works mt-5'>
          <h1 className='d-none d-lg-block'>WORKS</h1>
          <h2 className='d-none d-lg-block'>MY<span> PORTFOLIO</span></h2>
          <h3 className='d-bolck d-lg-none'>MY<span> PORTFOLIO</span></h3>
        </div>
        {/* <div className='d-flex mt-5 justify-content-center'>
          <h6 className='mx-2 all'>ALL</h6>
          <h6 className='mx-3 text-white all1'>LOGO</h6>
          <h6 className='mx-3 text-white all1'>VIDEO</h6>
          <h6 className='mx-3 text-white all1'>GRAPHIC DESIGN</h6>
          <h6 className='mx-3 text-white all1'>MOCKUP</h6>
        </div> */}
      </div>
      <div className='container' data-aos="fade-right" data-aos-duration="900" data-aos-delay="100">
        <div className='row mb-4'>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='works_img mt-4'>
              <img src={works1} alt='logo' />
              <div class="overlay">
                <h5 class="text-white">mockup project</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='works_img mt-4'>
              <img src={works2} alt='logo' />
              <div class="overlay">
                <h5 class="text-white">youtube project</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='works_img mt-4'>
              <img src={works3} alt='logo' />
              <div class="overlay">
                <h5 class="text-white">slider project</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='works_img mt-4'>
              <img src={works4} alt='logo' />
              <div class="overlay">
                <h5 class="text-white">local project</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='works_img mt-4'>
              <img src={works5} alt='logo' />
              <div class="overlay">
                <h5 class="text-white">saas project</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='works_img mt-4'>
              <img src={works6} alt='logo' />
              <div class="overlay">
                <h5 class="text-white">mockup project</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='works_img mt-4'>
              <img src={works7} alt='logo' />
              <div class="overlay">
                <h5 class="text-white">facebook project</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='works_img mt-4'>
              <img src={works8} alt='logo' />
              <div class="overlay">
                <h5 class="text-white">dribble project</h5>
              </div>
            </div>
          </div>
          <div className='col-lg-4 col-md-6 col-sm-12 col-12'>
            <div className='works_img mt-4'>
              <img src={works9} alt='logo' />
              <div class="overlay">
                <h5 class="text-white">behence project</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Protoflio