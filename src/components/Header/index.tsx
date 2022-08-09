import "./index.css";
import { FC, useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { searchBookAction } from "../../store/actions/searchBooksAction";

type SearchValues = {
  search: string;
  terms: string;
};

const Header: FC = () => {
  const terms = [
    {
      title: "By title",
      type: "intitle",
    },
    {
      title: "By author",
      type: "inauthor",
    },
    {
      title: "By publisher",
      type: "inpublisher",
    },
    {
      title: "By subject",
      type: "subject",
    },
  ];
  const [value, setValue] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SearchValues>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<SearchValues> = (data) => {
    dispatch(searchBookAction(data.search, data.terms));
  };

  return (
    <nav className="navbar navbar-expand-lg py-2">
      <div className="container mx-auto">
        <a className="navbar-brand" href="#">
          BookMarket
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                New
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Market
              </a>
            </li>
          </ul>
          <div className="d-flex">
            <form
              className="d-flex"
              role="search"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="row g-2">
                <div className="col-md">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInputGrid"
                      placeholder="Flowers for Algernon"
                      value={search}
                      {...register("search")}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <label defaultValue="floatingInputGrid">Search</label>
                  </div>
                </div>
                <div className="col-md">
                  <div className="form-floating">
                    <select
                      className="form-select"
                      id="floatingSelectGrid"
                      onChange={(e) => setValue(e.target.value)}
                      {...register("terms")}
                    >
                      {terms.map((term, i) => (
                        <option value={term.type} key={i}>
                          {term.title}
                        </option>
                      ))}
                    </select>
                    <label defaultValue="floatingSelectGrid">
                      Select terms
                    </label>
                  </div>
                </div>
              </div>
              <button className="btn btn-outline-success mx-2" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="d-flex p-2">
            <i className="bi bi-cart"></i>
          </div>
          <div className="d-flex p-2 ">
            <a className="btn btn-primary" href="/auth">
              Login
            </a>
            {/* <a
              className="nav-link dropdown-toggle"
              href="#"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="true"
            >
              <i className="bi bi-person-circle"></i>
            </a>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
