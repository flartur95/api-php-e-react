import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  state = {
    userData: []
  };
  componentDidMount() {
    fetch("http://localhost/crud/my-app/public/api/read.php")
      .then(response => response.json())
      .then(result =>
        this.setState({
          userData: result
        })
      );
  }
  render() {
    return (
      <div className="App">
        <table>
          <tbody>
            {this.state.userData.map((data, key) => {
              return (
                <tr key={key}>
                  <td>{data.id}</td>
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.telephone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
