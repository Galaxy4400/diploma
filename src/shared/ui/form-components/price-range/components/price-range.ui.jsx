import { useState } from 'react';
import css from './price-range.module.scss';

export const PriceRange = ({ lowPrice: initialLowPrice, highPrice: initialHighPrice, onChange }) => {
	const [lowPrice, setLowPrice] = useState(initialLowPrice || '0');
	const [highPrice, setHighPrice] = useState(initialHighPrice || '0');

	const display = [lowPrice, highPrice].join(' - ');

	const lowPriceChangeHandler = (event) => {
		setLowPrice(event.target.value);
		onChange([lowPrice, highPrice]);
	};

	const highPriceChangeHandler = (event) => {
		setHighPrice(event.target.value);
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
					<input type="text" value={highPrice} onChange={highPriceChangeHandler} />
				</label>
			</div>
		</div>
	);
};
