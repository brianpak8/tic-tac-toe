import React from 'react';
import ReactDOM from 'react-dom';
import Row from './components/row.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      1: {},
      2: {},
      3: {},
      4: {},
      5: {},
      6: {},
      7: {},
      8: {},
      9: {}
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
