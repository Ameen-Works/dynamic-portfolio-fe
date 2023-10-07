import React from 'react'
import "./Experience.css"
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experiences = () => {
    return (
        <section id='experiences'>
            <h5>Skills I Have</h5>
            <h2>My Experiences</h2>
            <div className="container experience__container">
                <div className="experience__frontend">
                    <h3>Front-End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>HTML</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>CSS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JavaScript</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>ReactJS</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>Bootstrap</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
                {/* END OF FRONT-END */}
                <div className="experience__backend">
                    <h3>Back-End Development</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>NodeJS</h4>
                                <small className='text-light'>Experienced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MongoDB</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>JAVA</h4>
                                <small className='text-light'>Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BsFillPatchCheckFill className='experience__details-icon' />
                            <div>
                                <h4>MySQL</h4>
                                <small className='text-light'>Basic</small>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experiences