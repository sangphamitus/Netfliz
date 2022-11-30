import React from "react";
import Rating from '@mui/material/Rating';

const Rate = () => {
	const [value, setValue] = React.useState(0);

	return (
		<div className="p-[5px]">
		<Rating
			name="rating"
			value={value}
			size="large"
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
      	/>
		</div>
	)
}

export { Rate };
