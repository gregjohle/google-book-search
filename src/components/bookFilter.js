import React from "react";

class BookFilter extends React.Component {
  render() {
    return (
      <form className='bookFilter'>
        <label for='printTypeSelect'>
          Print Type:
          <select name='printTypeSelect'></select>
        </label>
        <label for='bookTypeSelect'>
          Book Type:
          <select name='bookTypeSelect'></select>
        </label>
      </form>
    );
  }
}

export default BookFilter;
