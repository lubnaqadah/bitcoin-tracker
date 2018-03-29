import React from "react";

class Price extends React.Component {
	render() {
		return(
			<div>
				{this.props.price} at {this.props.time} ms 
			</div>
		
		)
	}
}

export default Price;