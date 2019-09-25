import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { Dropdown } from 'office-ui-fabric-react/lib/Dropdown';
import List from './components/List'
import SearchNav from './components/SearchNav'

import './App.css';

function App() {
	
	
	  return (
		<div className="App">
			<header>
				<h1>React Fabric</h1>
				<SearchNav />
			</header>
			<main>
				<List />
			</main>
			
		</div>
	);
}

export default App;
