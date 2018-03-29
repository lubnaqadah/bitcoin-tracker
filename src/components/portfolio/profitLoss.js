import React from "react";

class ProfitLoss extends React.Component {

	render() {
		const numBitcoins = this.props.numBitcoins;
		const price = this.props.price;
		const startingPrice = this.props.startingPrice;
		const value = numBitcoins * price;
		const PL = numBitcoins * (price - startingPrice);
		return(
			<div>
				P/L : {PL}
			</div>
		)
	}
}

export default ProfitLoss;