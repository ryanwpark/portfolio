import React, { useState } from 'react';
import { players } from '../mockData/players';
// import type { PlayerStats } from '../mockData/players';
import '../App.css';

const LandingPage: React.FC = () => {
	const [search, setSearch] = useState('');
	//imported players from mockData
	const filteredPlayers = players.filter((p) =>
		p.name.toLowerCase().includes(search.toLowerCase())
	);

	return (
		<div className='apple-minimal-container'>
			<h1 className='apple-title'>Player Statistics Predictor</h1>
			<input
				className='apple-input'
				type='text'
				placeholder='Search for a player...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<div className='apple-player-list'>
				{filteredPlayers.length === 0 ? (
					<p className='apple-empty'>No players found.</p>
				) : (
					filteredPlayers.map((player) => (
						<div key={player.name} className='apple-player-card'>
							<h2>{player.name}</h2>
							<p>
								{player.team} &mdash; {player.position}
							</p>
							<div className='apple-stats'>
								<span>
									Points: {player.predictedStats.points}
								</span>
								<span>
									Rebounds: {player.predictedStats.rebounds}
								</span>
								<span>
									Assists: {player.predictedStats.assists}
								</span>
								<span>
									Steals: {player.predictedStats.steals}
								</span>
								<span>
									Blocks: {player.predictedStats.blocks}
								</span>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default LandingPage;
