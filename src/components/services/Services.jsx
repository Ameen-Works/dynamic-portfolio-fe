import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                User-centered design approach to create intuitive and engaging
                user interfaces.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Responsive design for seamless user experiences across devices.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Wireframing and prototyping for visualizing concepts and
                interactions
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Visual design with a focus on branding and aesthetics.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Accessibility considerations for an inclusive user experience.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX DESIGN */}

        <article className="service">
          <div className="service__head">
            <h3>API</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Creation of custom APIs to enable data sharing and
                functionality.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                RESTful API design principles for simplicity and scalability.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                Authentication and authorization mechanisms for secure access.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Documentation and API reference for developers.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data validation and error handling for robustness.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Real-time APIs for live data updates.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>API testing and monitoring for reliability.</p>
            </li>
          </ul>
        </article>
        {/* END OF API */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Full-stack web development using modern technologies.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Front-end development with HTML, CSS, and JavaScript.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Database design and implementation (SQL or NoSQL).</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>RESTful API development for data retrieval and interaction.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Integration of third-party APIs and services.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Performance optimization for faster loading times.</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
      </div>
    </section>
  );
};

export default Services;
