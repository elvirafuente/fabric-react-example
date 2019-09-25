import React from 'react';
import ListItem from './ListItem'
import ListSectionTitle from './ListSectionTitle'

export default function List() {

	return (
		<ul>
			List
            <ListSectionTitle />
            <ListItem />
            
            <ListSectionTitle />
            <ListItem />
		</ul>
	);
}
