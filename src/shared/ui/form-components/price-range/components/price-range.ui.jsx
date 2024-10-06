import { useState } from 'react';
import css from './price-range.module.scss';

export const PriceRange = ({ lowPrice: initialLowPrice, highPrice: initialHighPrice, onChange }) => {
	const [display, setDisplay] = useState('');
	const [lowPrice, setLowPrice] = useState(initialLowPrice);
	const [highPrice, setHighPrice] = useState(initialHighPrice);

	const pricessDisplay = () => {
		setDisplay(`${lowPrice} - ${highPrice}`);
	};

	const lowPriceChangeHandler = (event) => {
		setLowPrice(event.target.value);
		pricessDisplay();
		onChange([lowPrice, highPrice]);
	};

	const highPriceChangeHandler = (event) => {
		setHighPrice(event.target.value);
		pricessDisplay();
		onChange([lowPrice, highPrice]);
	};

	return (
		<div className={css['wrapper']}>
			<input className={css['input']} type="text" value={display} readOnly placeholder="placeholder" />
			<div>
				<label>
					<span>Low price</span>
					<input type="text" value={lowPrice} onChange={lowPriceChangeHandler} />
				</label>
				<label>
					<span>High price</span>
					<input type="text" value={lowPrice} onChange={highPriceChangeHandler} />
				</label>
			</div>
		</div>
	);
};
