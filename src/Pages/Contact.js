import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='container py-lg-5 py-0' data-aos="fade-down" data-aos-duration="900" data-aos-delay="100">
        <div className='contact mt-5'>
          <h1 className='d-none d-lg-block'>CONTACT</h1>
          <h2 className='d-none d-lg-block'>GET IN<span> TOUCH</span></h2>
          <h3 className='d-bolck d-lg-none'>GET IN<span> TOUCH</span></h3>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-12 col-sm-12 col-12 text-white mt-5'>
            <h3 className='fw-bold mb-3'>DON'T BE SHY !</h3>
            <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <div className='contact_1 d-flex mt-4'>
              <h4><i class="fa-solid fa-map me-3 icon"></i></h4>
              <div className='contact_text'>
                <h6 className='text-secondary'>ADDRESS POINT</h6>
                <p className='fw-bold'>Global Computer Classes</p>
              </div>
            </div>
            <div className='contact_1 d-flex mt-2'>
              <h4><i class="fa-solid fa-envelope me-3 icon"></i></h4>
              <div className='contact_text'>
                <h6 className='text-secondary'>MAIL ME</h6>
                <p className='fw-bold'>dhruvkhunt02@gmail.com</p>
              </div>
            </div>
            <div className='contact_1 d-flex mt-2'>
              <h4><i class="fa-solid fa-phone me-3 icon"></i></h4>
              <div className='contact_text'>
                <h6 className='text-secondary'>CALL ME</h6>
                <p className='fw-bold'>+919875297351</p>
              </div>
            </div>
            <div className='contact_icon d-flex'>
              <div className='icon1 me-2'>
                <i class="fa-brands fa-facebook-f"></i>
              </div>
              <div className='icon2 mx-2'>
                <i class="fa-brands fa-twitter"></i>
              </div>
              <div className='icon3 mx-2'>
                <i class="fa-brands fa-instagram"></i>
              </div>
              <div className='icon4 mx-2'>
                <i class="fa-brands fa-dribbble"></i>
              </div>
            </div>
          </div>
          <div className='col-lg-8 col-md-12 col-sm-12 col-12 mt-5 contact_button'>
            <div class="row mb-4">
              <div class="col-lg-6">
                <input type="text" class="form-control p-3" placeholder="YOUR NAME"/>
              </div>
              <div class="col-lg-6 mt-lg-0 mt-md-4 mt-sm-4 mt-4">
                <input type="email" class="form-control p-3" placeholder="YOUR EMAIL"/>
              </div>
            </div>
            <input type="text" class="form-control mb-4 p-3" placeholder="YOUR SUBJECT"/>
            <textarea className='col-12 mb-3 ps-3' placeholder='YOUR MEASSAGE'></textarea>
            <button className='p-3 px-5 text-white fw-bold'>SEND MESSAGE</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact