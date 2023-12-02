import React, { Fragment, useEffect, useState } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../store/bookSlice";

import "./book.css";

const PostContainer = () => {
  const dispatch = useDispatch();
  const { isLoading, books } = useSelector((state) => state.books);
  const [selectedBook, setSelectedBook] = useState();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const getBook = (id) => {
    const book = books.find((item) => item.id === id);
    setSelectedBook((prev) => {return {...prev, ...book}});
    console.log(selectedBook);
  }
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList isLoading={isLoading} books={books} getBook={ getBook } />
        </div>
        <div className="col side-line">
          <BookInfo book={ selectedBook } />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
