import React from 'react'

const Blogcard = (props) => {
    return (
        <>
            <div className='col-lg-4 col-md-6 col-sm-12'>
                <div class="card text-white border-0 mt-5">
                    <img src={props.imgsrc} class="card-img-top h-100" alt="logo" />
                    <div class="card-body">
                        <h5 class="card-title fw-bold">{props.title}</h5>
                        <p class="card-text mt-3">{[props.text]}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blogcard