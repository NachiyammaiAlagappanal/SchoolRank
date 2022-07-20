const FilterManager = {
	filterMark: (context) => {
		const { data, state: { range }, config: { subjects }} = context;

		return data.filter((d) =>
			subjects.some((subject) =>
				d[subject] >= range[subject][0]
			&& d[subject] <= range[subject][1]));
	},
	updateRange: (context) => {
		const { data, state: { range }} = context;

		return { ...range, ...data };
	},
};

export default FilterManager;
