import css from './price-range.module.scss';
import { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import { priceFormat } from '../../../../lib/utils/price-format';

export const PriceRange = ({ lowPrice: initialLowPrice, highPrice: initialHighPrice, onChange }) => {
	const [lowPrice, setLowPrice] = useState(initialLowPrice);
	const [highPrice, setHighPrice] = useState(initialHighPrice);
	const [isActive, setIsActive] = useState(false);
	const wrapperRef = useRef(null);

	const display = [
		...(lowPrice ? [priceFormat(lowPrice)] : []),
		...(highPrice ? [priceFormat(highPrice)] : []),
	].join(' - ');

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
			<input className={css['input']} onClick={handleClickInside} type="text" value={display} readOnly />
			<div className={cn(css['container'], isActive ? 'active' : '')}>
				<label>
					<span className={css['label']}>От</span>
					<input className={css['input']} type="number" value={lowPrice} onChange={lowPriceChangeHandler} />
				</label>
				<label>
					<span className={css['label']}>До</span>
					<input className={css['input']} type="number" value={highPrice} onChange={highPriceChangeHandler} />
				</label>
			</div>
		</div>
	);
};
