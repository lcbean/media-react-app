import './App.css';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet'></link>
      <nav class="navbar background">
        <ul class="nav-list">
          <div class="logo">
            <img src="https://i0.wp.com/www.centenarycentre.com/wp-content/uploads/2015/07/movie-film-clip-art-movies.gif?fit=386%2C365&ssl=1"></img>
          </div>
          <li>
            <a href="#login">Login</a>
          </li>
          <li>
            <a href="#ratings">My Ratings</a>
          </li>
          <li>
            <a href="#tbd">Want to See</a>
          </li>
        </ul>

        <div class="rightNav">
          <input
            type="text"
            name="search"
            id="search"
          />
          <button class="btn btn-search">
            Search
          </button>
        </div>
      </nav>

      
    </div>
  );
}

export default App;
