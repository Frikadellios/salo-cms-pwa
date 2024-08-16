import { atom, map } from 'nanostores'

export const isCartOpen = atom(false)

export type CartItem = {
	id: string
	name: string
	imageSrc: string
	quantity: number
}

export const activeProduct = atom({
	thumbnail: null,
	name: '',
	price: ''
})

export const cartItems = map<Record<string, CartItem>>({})
export const productVariations = atom([])
export const productExtraPrice = atom(0)
export const showContact = atom(false)
