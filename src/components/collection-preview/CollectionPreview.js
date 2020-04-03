import React from 'react';

import './CollectionPreview.scss'
import CollectionItem from '../../components/collection-item/CollectionItem'

const CollectionPreview = ({ title, items }) => (
	<div className="collection-preview">
		<h1 className="title">{title.toUpperCase()}</h1>
		<div className="preview">
			{items
				.filter((item, index) => index < 4)
				.map(({ id, ...restItemProps }) => (
					<CollectionItem key={id} { ...restItemProps } />
				))
			}
		</div>
	</div>
);

export default CollectionPreview;
