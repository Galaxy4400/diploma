import css from './price-range.module.scss';
import cn from 'classnames';
import { useEffect, useRef, useState } from 'react';
import { priceFormat } from '../../../../lib/utils/price-format';
import { useClickAway } from '@uidotdev/usehooks';

export const PriceRange = ({ lowPrice, highPrice, onChange }) => {
	const [display, setDisplay] = useState('');
	const [isActive, setIsActive] = useState(false);
	const clickAwayRef = useClickAway(() => setIsActive(false));
	const lowInputRef = useRef(null);

	useEffect(() => {
		const formatDisplay = [
			...(lowPrice ? [priceFormat(lowPrice)] : []),
			...(highPrice ? [priceFormat(highPrice)] : []),
		].join(' - ');

		setDisplay(formatDisplay);
	}, [lowPrice, highPrice]);

	useEffect(() => {
		isActive && lowInputRef.current.focus();
	}, [isActive]);

	return (
		<div className={css['wrapper']} ref={clickAwayRef}>
			<input
				className={css['input']}
				onClick={() => setIsActive(true)}
				type="text"
				value={display}
				readOnly
			/>
			<div className={cn(css['container'], isActive ? 'active' : '')}>
				<label>
					<span className={css['label']}>От</span>
					<input
						className={css['input']}
						type="number"
						value={lowPrice || ''}
						onChange={(e) => onChange([e.target.value, highPrice])}
						ref={lowInputRef}
					/>
				</label>
				<label>
					<span className={css['label']}>До</span>
					<input
						className={css['input']}
						type="number"
						value={highPrice || ''}
						onChange={(e) => onChange([lowPrice, e.target.value])}
					/>
				</label>
			</div>
		</div>
	);
};
