import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { pricePerItem } from '@/constants';
import { formatCurrency } from '@/utils';

// TODO write types to context
const OrderDetails = createContext('');

// create custom hook to check whether we're inside a provider
export function useOrderDetails() {
	const context = useContext(OrderDetails);

	if (!context) {
		throw new Error(
			'useOrderDetails must be used within an OrderDetailsProvider',
		);
	}

	return context;
}

function calculateSubtotal(
	optionType: 'scoops' | 'toppings',
	optionCounts: any,
) {
	let optionCount = 0;
	for (const count of optionCounts[optionType].values()) {
		optionCount += count;
	}

	return optionCount * pricePerItem[optionType];
}

export function OrderDetailsProvider(props: any) {
	const [optionCounts, setOptionCounts] = useState({
		scoops: new Map(),
		toppings: new Map(),
	});
	const zeroCurrency = formatCurrency(0);
	const [totals, setTotals] = useState({
		scoops: zeroCurrency,
		toppings: zeroCurrency,
		grandTotal: zeroCurrency,
	});

	useEffect(() => {
		const scoopsSubtotal = calculateSubtotal('scoops', optionCounts);
		const toppingsSubtotal = calculateSubtotal('toppings', optionCounts);
		const grandTotal = scoopsSubtotal + toppingsSubtotal;

		setTotals({
			scoops: formatCurrency(scoopsSubtotal),
			toppings: formatCurrency(toppingsSubtotal),
			grandTotal: formatCurrency(grandTotal),
		});
	}, [optionCounts]);

	const value = useMemo(() => {
		function updateItemCount(
			itemName: string,
			newItemCount: string,
			optionType: 'scoops' | 'toppings',
		) {
			// get option Map and make a copy
			const { [optionType]: optionMap } = optionCounts;
			const newOptionMap = new Map(optionMap);

			// update the copied Map
			newOptionMap.set(itemName, parseInt(newItemCount));

			// create new object with the old optionCounts plus new map
			const newOptionCounts = { ...optionCounts };
			newOptionCounts[optionType] = newOptionMap;

			// update state
			setOptionCounts(newOptionCounts);
		}

		// getter: object containing option counts for scoops and toppinds, subtotals and totals
		// setter: updateOptionCount
		return [{ ...optionCounts, totals }, updateItemCount];
	}, [optionCounts, totals]);

	return <OrderDetails.Provider value={value} {...props} />;
}
