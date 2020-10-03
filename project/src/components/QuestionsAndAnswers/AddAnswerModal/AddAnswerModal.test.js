import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import AddAnswerModal from './AddAnswerModal';

describe('Add Answer Modal Component', () => {

  var props = {}

  beforeEach(() => {

  })

  afterEach(cleanup);

  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<AddAnswerModal/>, div);
  });

});