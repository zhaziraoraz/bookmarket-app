import { FC, useState } from "react";
import Card from "../Card";
import { booksAction } from "../../store/actions/booksAction";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getPendingSelector,
  getBooksSelector,
  getErrorSelector,
} from "../../store/selectors/booksSelector";
import Spinner from "../Spinner";
import "./index.css";

const New: FC = () => {
  const dispatch = useDispatch();
  const pending = useSelector(getPendingSelector);
  const books = useSelector(getBooksSelector);
  const errors = useSelector(getErrorSelector);

  const chunks = books.reduce(
    (r, e, i) => (i % 3 ? r[r.length - 1].push(e) : r.push([e])) && r,
    []
  );

  useEffect(() => {
    dispatch(booksAction());
  }, []);

  return (
    <section className="new">
      <div className="container mx-auto">
        <div className="row">
          <div className="col">
            <div className="intro d-flex justify-content-between align-items-end m-0">
              <div className="intro-content">
                <h3 className="mt-3 mb-0">New</h3>
              </div>
              <div className="intro-btn">
                <a className="btn content-btn" href="/auctions">
                  View All
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          {pending ? (
            <Spinner />
          ) : errors ? (
            <div>Error</div>
          ) : (
            <div
              id="carouselExampleControls"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                {!!chunks &&
                  chunks.map((chunk, i) => (
                    <div
                      className={`carousel-item ${i === 0 ? "active" : ""}`}
                      data-interval="2000"
                      key={`item${i}`}
                    >
                      <div className="d-flex justify-content-center">
                        {chunk.map((c, idx) => (
                          <div
                            className="col-lg-4 col-md-6 col-12 d-flex justify-content-center"
                            key={`new${idx}`}
                          >
                            <Card
                              idx={i}
                              image={c.image}
                              title={c.title}
                              price={c.price}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default New;
