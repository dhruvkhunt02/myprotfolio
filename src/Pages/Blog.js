import React from 'react'
import Blogcard from './Blogcard'
import Blogdata from './Blogdata'

const Blog = () => {
  return (
    <>
      <div className='container pt-lg-5 py-0 pb-5' data-aos="fade-right" data-aos-duration="900" data-aos-delay="100">
        <div className='blog mt-5'>
          <h1 className='d-none d-lg-block'>POSTS</h1>
          <h2 className='d-none d-lg-block'>MY<span> BLOG</span></h2>
          <h3 className='d-bolck d-lg-none'>MY<span> BLOG</span></h3>
        </div>
        <div className='row'>
          {
            Blogdata.map((value , index) => {
              return <Blogcard
              imgsrc= {value.imgsrc}
              title={value.title}
              text={value.text}
              />
            })
          }
        </div>
      </div>
    </>
  )
}

export default Blog