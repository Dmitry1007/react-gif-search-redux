import React     from 'react';
import ReactDOM  from 'react-dom';
import SearchBar from './components/SearchBar';
import GifList   from './components/GifList';
import request   from 'superagent';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gifs: []
    }
  }

  handleTermChange(term) {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=dc6zaTOxFJmzC`;

    request.get(url, function(err, res) {
      console.log(res.body.data[0]);
    });
  }

  render() {
    return (
      <div className="greeting">
        <SearchBar onTermChange={this.handleTermChange} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
