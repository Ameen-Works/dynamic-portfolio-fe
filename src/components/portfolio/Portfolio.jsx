import React from "react";
import "./Portfolio.css";
import Loading from "./Loading";

const Portfolio = ({ data, loading }) => {
  // const url = "https://myportfolio-r9dm.onrender.com/myPortfolio/";
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // const fetchInfo = async () => {
  //   const res = await fetch(url);
  //   const d = await res.json();
  //   setLoading(false);
  //   return setData(d);
  // };

  // useEffect(() => {
  //   fetchInfo();
  // }, []);
  return (
    <section id="portfolio">
      <h5>My Works</h5>
      <h2>Portfolio</h2>
      {loading ? (
        <Loading />
      ) : (
        <div className="container portfolio__container">
          {data
            .filter((dataObj) => {
              return dataObj.portfolio;
            })
            .map((dataObj) => {
              return (
                <article className="portfolio__item" key={dataObj._id}>
                  <div className="portfolio__item-image">
                    <img src={dataObj.portfolio.portfolio_image} alt="Test1" />
                  </div>
                  <h3>{dataObj.portfolio.title}</h3>
                  <div className="portfolio__item-cta">
                    <a
                      href={dataObj.portfolio.GitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn"
                    >
                      GitHub
                    </a>
                    <a
                      href={dataObj.portfolio.DemoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  </div>
                </article>
              );
            })}
        </div>
      )}
    </section>
  );
};

export default Portfolio;
