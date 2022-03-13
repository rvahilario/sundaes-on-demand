export interface ToppingOptionProps {
	name: string;
	imagePath: string;
	updateItemCount: (itemName: string, newItemCount: number) => void;
}
