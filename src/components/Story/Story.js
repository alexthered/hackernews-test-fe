import React from 'react';
import './Story.css'

const Story = ( { title, score, descendants, url, by, lifetime }) => {
	const ref = url || "#";

	return (
		<li>
			<p className="title"><a href={ref} target="_blank">{title}</a></p>
			<span className="story-status">{score} points | {descendants} comments | by: {by} | {lifetime} ago</span>
		</li>
	);
};

export default Story;