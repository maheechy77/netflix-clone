import React from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Nav from "./components/Nav/Nav";
import Row from "./components/Row/Row";
import requests from "./request";

function App() {
	return (
		<div className="App">
			<Nav />
			<Banner />
			<Row
				title="Netflix Originals"
				fetchUrl={requests.fetchNetflixOriginals}
				isLargeRow
			/>
			<Row title="Trending Now" fetchUrl={requests.fetchTranding} />
			<Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title="Action Movie" fetchUrl={requests.fetchActionMovies} />
			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
			<Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
		</div>
	);
}

export default App;
