import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook } from "../../store/bookSlice";

const BooksList = ({ isLoading, books, getBook }) => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector((state) => state.auth);
  const booksList =
    books.length > 0
      ? books.map((item) => (
          <li
            className="list-group-item d-flex  justify-content-between align-items-center"
            key={item.id}
          >
            <div>{item.title}</div>
            <div className="btn-group" role="group">
              <button
                type="button"
                className="btn btn-primary"
              disabled={!isLogged}
              onClick={()=>getBook(item.id)}
              >
                Read
              </button>
              <button
                type="button"
                className="btn btn-danger"
                disabled={!isLogged}
                onClick={() =>
                  dispatch(deleteBook(item))
                    .unwrap()
                    .then((originalPromiseResult) => {
                      console.log(originalPromiseResult);
                    })
                    .catch((rejectedValueOrSerializedError) => {
                      // handle error here
                    })
                }
              >
                Delete
              </button>
            </div>
          </li>
        ))
      : "Thire is no books";

  return (
    <div>
      <h2>Books List</h2>
      <div style={{ height: "300px", overflow: "auto" }}>
        {isLoading ? (
          "Loading..."
        ) : (
          <ul className="list-group mb-3">{booksList}</ul>
        )}
      </div>
    </div>
  );
};

export default BooksList;
