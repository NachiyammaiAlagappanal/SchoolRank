const FilterManager = {
	filterMark: (context) => {
		const { data, state: { filter }, config: { subjects }} = context;

		return data.filter((d) =>
			subjects.some((subject) =>
				d[subject] >= filter[subject][0]
			&& d[subject] <= filter[subject][1]));
	},
	updateFilter: (context) => {
		const { data, state: { filter }} = context;

		return { ...filter, ...data };
	},
};

export default FilterManager;
