import css from './price-range.module.scss';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { priceFormat } from '../../../../lib/utils/price-format';

export const PriceRange = ({ lowPrice: initialLowPrice, highPrice: initialHighPrice, onChange }) => {
	const [lowPrice, setLowPrice] = useState(initialLowPrice || '0');
	const [highPrice, setHighPrice] = useState(initialHighPrice || '0');
	const [isActive, setIsActive] = useState(false);
	const wrapperRef = useRef(null);

	const display = [priceFormat(lowPrice), priceFormat(highPrice)].join(' - ');

	const lowPriceChangeHandler = (event) => {
		setLowPrice(event.target.value);
		onChange([lowPrice, highPrice]);
	};

	const highPriceChangeHandler = (event) => {
		setHighPrice(event.target.value);
		onChange([lowPrice, highPrice]);
	};

	const handleClickInside = () => {
		setIsActive(true);
	};

	const handleClickOutside = (event) => {
		if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
			setIsActive(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);

		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<div className={css['wrapper']} ref={wrapperRef}>
			<input
				className={css['input']}
				onClick={handleClickInside}
				type="text"
				value={display}
				readOnly
				placeholder="placeholder"
			/>
			<div className={cn(css['container'], isActive ? 'active' : '')}>
				<label>
					<span>От</span>
					<input className={css['input']} type="number" value={lowPrice} onChange={lowPriceChangeHandler} />
				</label>
				<label>
					<span>До</span>
					<input className={css['input']} type="number" value={highPrice} onChange={highPriceChangeHandler} />
				</label>
			</div>
		</div>
	);
};
