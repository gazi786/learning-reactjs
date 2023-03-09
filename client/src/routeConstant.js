const linkRoutes = [
	{ path: "/", label: "Home" },
	{
		path: "/week-seven",
		label: "Week 7",
		children: [
			{ path: "/week-seven/thursday", label: "Thursday" },
			{ path: "/week-seven/friday", label: "Friday" },
		],
	},
	{
		path: "/week-eight",
		label: "Week 8",
		children: [
			{ path: "/week-eight/monday", label: "Monday" },
			{ path: "/week-eight/tuesday", label: "Tuesday" },
			{ path: "/week-eight/wednesday", label: "Wednesday" },
			{ path: "/week-eight/thursday", label: "Thursday" },
			{ path: "/week-eight/friday", label: "Friday" },
		],
	},
];

export default linkRoutes;