import { Inter, EB_Garamond, Playfair_Display } from "next/font/google";

// Primary Font
export const inter = Inter({
	subsets:['latin'],
	display:'swap',
	variable:'--font-inter'
});

// Secondary Font
export const garamond = Playfair_Display({
	subsets:['cyrillic'],
	display:'swap',
	variable:'--font-roboto-mon'
})