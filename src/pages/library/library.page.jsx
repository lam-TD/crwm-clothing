import React from "react";
import { connect } from "react-redux";
import { fetchProductsError } from "../../redux/library/library.action";
import { libraryTypes } from "../../redux/library/library.types";

import "./library.styles.scss";

class LibraryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  componentDidMount() {
    const { fetchBooks } = this.props;
    console.log(this.props);
    fetchBooks();
  }
  render() {
    console.log(this.state.books);
    return (
      <table>
        <thead>
          <tr>
            <th>Company</th>
            <th>Contact</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
          </tr>
          <tr>
            <td>Centro comercial Moctezuma</td>
            <td>Francisco Chang</td>
            <td>Mexico</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Roland Mendel</td>
            <td>Austria</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Helen Bennett</td>
            <td>UK</td>
          </tr>
          <tr>
            <td>Laughing Bacchus Winecellars</td>
            <td>Yoshi Tannamuri</td>
            <td>Canada</td>
          </tr>
          <tr>
            <td>Magazzini Alimentari Riuniti</td>
            <td>Giovanni Rovelli</td>
            <td>Italy</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

const fetchBooks = () => {
  return (dispatch) =>
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: libraryTypes.FETCH_BOOKS_SUCCESS,
          payload: data,
        })
      )
      .catch((error) => {
        dispatch({
          type: libraryTypes.FETCH_BOOKS_ERROR,
          payload: error,
        });
      });
};

const mapStasteToProps = (state) => ({
  books: state.library,
});

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
});

export default connect(mapStasteToProps, mapDispatchToProps)(LibraryPage);
