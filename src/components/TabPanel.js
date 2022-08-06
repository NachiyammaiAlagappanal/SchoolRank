const TabPanel = (props) => {
	const { value, index, children } = props;

	return value === index && children;
};

export default TabPanel;
