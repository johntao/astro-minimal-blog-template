// import { atom, map } from 'nanostores';
import { persistentAtom, persistentMap } from '@nanostores/persistent';

export const isCartOpen = persistentAtom<boolean>('cart.open:', false, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export type CartItem = {
	id: string;
	name: string;
	imageSrc: string;
	quantity: number;
};

export type CartItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'imageSrc'>;

export const cartItems = persistentMap<Record<string, CartItem>>('cart.items:', {}, {
	encode: JSON.stringify,
	decode: JSON.parse,
});

export function addCartItem({ id, name, imageSrc }: CartItemDisplayInfo) {
	const existingEntry = cartItems.get()[id];
	if (existingEntry) {
		cartItems.setKey(id, {
			...existingEntry,
			quantity: existingEntry.quantity + 1,
		});
	} else {
		cartItems.setKey(id, {
			id,
			name,
			imageSrc,
			quantity: 1,
		});
	}
}
