import React from "react";

import Price from "./price";
import ProfitLoss from "./profitLoss";
import {data} from "../data";
import LineChart from "react-linechart";
import "../../../node_modules/react-linechart/dist/styles.css";

class Portfolio extends React.Component {
	state ={
		numBitcoins : 7,

	}
	handleChange = evt => {
		this.setState({ numBitcoins: evt.target.value });
	};


render() {
	const priceLine = {
		color: "blue",
		points: []
	};
	const priceData =[];
	const prices = data.map((dataPoint, index) =>{
		const price = dataPoint.ticker.price;
		const time = dataPoint.timestamp;
		priceLine.points.push({
			x:time,
			y:price
		})
		return(
			<Price price={price} time ={time} key ={index} />
		)
	})
	priceData.push(priceLine);
	return(
		<div>
			<div>
				Bitcoins owned: {" "}
				<input type="text" value ={this.state.numBitcoins} onChange= {this.handleChange} />
			</div>

			<ProfitLoss 
				numBitcoins ={this.state.numBitcoins}
				price = {data[0].ticker.price}
				startingPrice = {data[data.length - 1].ticker.price}
				/>	
			{prices}
			<LineChart width={500} height={400} data={priceData} />
		</div>
	)
}
}

export default Portfolio;