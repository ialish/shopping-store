import React from 'react';

import './CollectionPreview'

const CollectionPreview = ({ title, items }) => (
	<div>
		<div className="collection-preview">
			<h1 className="title">{title.toUpperCase()}</h1>
			<div className="preview">
				{items
					.filter((item, index) => index < 4)
					.map(({ id, name }) => <div key={id}>{name}</div>)
				}
			</div>
		</div>
	</div>
);

export default CollectionPreview;
