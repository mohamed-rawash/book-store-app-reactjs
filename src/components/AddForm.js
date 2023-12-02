import React, {useRef} from 'react';
import { insertBook } from '../store/bookSlice';
import { useDispatch, useSelector } from 'react-redux';

const Addform = () => {
  const dispatch = useDispatch()
  const {isLogged} = useSelector(state => state.auth)

  const title = useRef(null);
  const price = useRef(null);
  const description = useRef(null);

  const resetForm = () => {
    title.current.value = null;
    price.current.value = null;
    description.current.value = null;
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      title: title.current.value,
      price: price.current.value,
      description: description.current.value,
    }
    dispatch(insertBook(data));
    resetForm();
  }

  

  return (
    <div className='row'>
      <div className='col-6 offset-3 mt-3'>
        <h2>Insert Book</h2>
        <form onSubmit={submitHandler}>
          <div className='form-group'>
            <label htmlFor='title'>Title</label>
            <input type='text' className='form-control' id='title' required  ref={title}/>
          </div>
          <div className='form-group'>
            <label htmlFor='price'>Price</label>
            <input type='number' className='form-control' id='price' required ref={price} />
          </div>
          <div className='form-group'>
            <label htmlFor='Description'>Description</label>
            <textarea
              className='form-control'
              id='Description'
              rows='3'
              required
              ref={description}
            ></textarea>
          </div>
          <button type='submit' className='btn btn-primary' disabled={!isLogged}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addform;
