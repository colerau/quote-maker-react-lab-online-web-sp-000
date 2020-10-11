import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { addQuote } from '../actions/quotes';
import QuoteForm from '../components/QuoteForm';

class Quotes extends Component {

  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/*
                TODO:

                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */}

            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = () => {
  return null;
}

const mapDispatchToProps = dispatch => {
  return {newQuote: quoteObj => { return dispatch(addQuote(quoteObj))}}
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
