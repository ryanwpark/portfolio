// src/mockData/players.ts
export type PlayerStats = {
	name: string;
	team: string;
	position: string;
	predictedStats: {
		points: number;
		rebounds: number;
		assists: number;
		steals: number;
		blocks: number;
	};
};

export const players: PlayerStats[] = [
	{
		name: 'LeBron James',
		team: 'Los Angeles Lakers',
		position: 'SF',
		predictedStats: {
			points: 27.5,
			rebounds: 7.8,
			assists: 7.2,
			steals: 1.1,
			blocks: 0.7,
		},
	},
	{
		name: 'Stephen Curry',
		team: 'Golden State Warriors',
		position: 'PG',
		predictedStats: {
			points: 30.1,
			rebounds: 5.4,
			assists: 6.3,
			steals: 1.2,
			blocks: 0.4,
		},
	},
	{
		name: 'Nikola Jokic',
		team: 'Denver Nuggets',
		position: 'C',
		predictedStats: {
			points: 25.6,
			rebounds: 11.9,
			assists: 9.8,
			steals: 1.3,
			blocks: 0.8,
		},
	},
];
