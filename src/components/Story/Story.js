import React from 'react';
import styles from './Story.css'

const Story = ( { title, score, descendants, url, by, lifetime }) => {
	const ref = url || "#";

	return (
		<li className={styles.story}>
			<p className={styles.title}><a href={ref} target="_blank">{title}</a></p>
			<span className={styles.story-status}>{score} points | {descendants} comments | by: {by} | {lifetime} ago</span>
		</li>
	);
};

export default Story;