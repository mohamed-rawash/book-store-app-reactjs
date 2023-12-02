import React, { Fragment } from "react";

const BookInfo = ({ book }) => {
  return (
    <Fragment>
      <h2>Book Details</h2>
      {!book && (
        <div className="alert alert-secondary" role="alert">
          There is no post selected yet. Please select!
        </div>
      )}
      {book && (
        <div className="alert alert-info">
          <p className="fw-bold text-primary">
            Title: <span style={{ color: "#000" }}>{book.title}</span>
          </p>
          <p className="fw-light text-primary">
            Description:{" "}
            <span style={{ color: "#000" }}>{book.description}</span>
          </p>
          <p className="fst-italic text-primary">
            Price: <span style={{ color: "#000" }}>{book.price}</span>
          </p>
          <p className="fst-italic text-primary">
            Auther: <span style={{ color: "#000" }}>{book.auther}</span>
          </p>
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
