import React from 'react'

const About = () => {
  return (
    <>
      <div className='container py-lg-5 py-0' data-aos="fade-down" data-aos-duration="900" data-aos-delay="100">
        <div className='resume mt-5'>
          <h1 className='d-none d-lg-block'>RESUME</h1>
          <h2 className='d-none d-lg-block'>ABOUT<span> ME</span></h2>
        </div>
        <div className='row'>
          <div className='col-lg-3 col-md-6 col-sm-6 col-5'>
            <div className='personal mt-lg-5'>
              <h3>PERSONAL INFOS</h3>
              <div className='mt-3'>
                <h6>First Name:<span> Dhruv</span></h6>
                <h6>Age:<span> 18 Years</span></h6>
                <h6>Freelance:<span> Available</span></h6>
                <h6>Phone:<span> 9875297351</span></h6>
                <h6>Skype:<span> Dhruv.khunt</span></h6>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-5'>
            <div className='personal mt-lg-5 pt-lg-5'>
              <div className='mt-lg-0 mt-md-5 mt-sm-5 mt-5 py-4 pt-sm-0'>
                <h6>Last Name:<span> Khunt</span></h6>
                <h6>Country:<span> India</span></h6>
                <h6>Address:<span> Mota varachha</span></h6>
                <h6>Email:<span> dhruvkhunt02@gmail.com</span></h6>
                <h6>Langages:<span> English, Hindi</span></h6>
              </div>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
            <div className='box p-3 ps-5 mt-lg-5 mb-5'>
              <h1>0 <span><sup>+</sup></span></h1>
              <h6><span><i class="fa-solid fa-minus"></i></span> YEARS OF <br></br>EXPERIENCE</h6>
            </div>
            <div className='box p-3 ps-5 mt-lg-5'>
              <h1>0 <span><sup>+</sup></span></h1>
              <h6><span><i class="fa-solid fa-minus"></i></span> HAPPY <br></br>CUSTOMERS</h6>
            </div>
          </div>
          <div className='col-lg-3 col-md-6 col-sm-6 col-6'>
            <div className='box p-3 ps-5 mt-lg-5 mb-5'>
              <h1>0 <span><sup>+</sup></span></h1>
              <h6><span><i class="fa-solid fa-minus"></i></span> COMPLETED <br></br>PROJECTS</h6>
            </div>
            <div className='box p-3 ps-5 mt-lg-5'>
              <h1>0 <span><sup>+</sup></span></h1>
              <h6><span><i class="fa-solid fa-minus"></i></span> AWARDS <br></br>WON</h6>
            </div>
          </div>
        </div>
      </div>

      <div className='container mt-5' data-aos="fade-down" data-aos-duration="900" data-aos-delay="100">
        <h4 className='text-white text-center fw-bold mb-5'>MY SKILLS</h4>
        <div className='row'>
          <div className='col-lg-3 col-md-3 col-sm-6 col-6 text mb-5'>
            <div className='circle1'>
              <h4 className='text-white fw-bold'>100%</h4>
            </div>
            <h5 className='text-white mt-3'>Html</h5>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-6 text mb-5'>
            <div className='circle5'>
              <h4 className='text-white fw-bold'>100%</h4>
            </div>
            <h5 className='text-white mt-3 ps-3'>Css</h5>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-6 text mb-5'>
            <div className='circle5'>
              <h4 className='text-white fw-bold'>100%</h4>
            </div>
            <h5 className='text-white mt-3 ms-4'>Bootstrap</h5>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-6 text mb-5'>
            <div className='circle6'>
              <h4 className='text-white fw-bold'>90%</h4>
            </div>
            <h5 className='text-white mt-3 ps-3'>Scss</h5>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-6 text2 mb-5'>
            <div className='circle2'>
              <h4 className='text-white fw-bold'>80%</h4>
            </div>
            <h5 className='text-white mt-3 ps-2'>Javascript</h5>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-6 text mb-5'>
            <div className='circle3'>
              <h4 className='text-white fw-bold'>85%</h4>
            </div>
            <h5 className='text-white mt-3'>Node</h5>
          </div>
          <div className='col-lg-3 col-md-3 col-sm-6 col-6 text'>
            <div className='circle4'>
              <h4 className='text-white fw-bold'>75%</h4>
            </div>
            <h5 className='text-white mt-3'>React</h5>
          </div>
        </div>
      </div>

      <div className='container' data-aos="fade-down" data-aos-duration="900" data-aos-delay="100">
        <h4 className='text-white text-center mt-3'>EXPERIENCE & EDUCATION</h4>
        <div className='col-lg-10 d-flex mt-4'>
          <h4><i class="fa-solid fa-bag-shopping me-3 text-white bag"></i></h4>
          <div className='present'>
            <h6 className='ps-2 p-1'>2022 - PRESENT</h6>
            <h5 className='text-white'>WEB DEVELOPER<span><i class="fa-solid fa-minus mx-2"></i></span><span1>Global Computer Classes</span1></h5>
            <p className='text-white'>Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About