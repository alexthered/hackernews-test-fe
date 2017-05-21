import React from 'react';
import './Story.css'

const Story = ( { title, score, descendants, url, by, lifetime }) => {
	const ref = url || "#";

	return (
		<div>
			<p className="title"><a href={ref} target="_blank">{title}</a></p>
			<span className="story-status">{score} points | {descendants} comments |
				<span className="author"> by: {by}</span> | {lifetime} ago</span>
		</div>
	);
};

export default Story;