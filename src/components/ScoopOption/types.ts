export interface ScoopOptionProps {
	name: string;
	imagePath: string;
	updateItemCount: (itemName: string, newItemCount: string) => void;
}
