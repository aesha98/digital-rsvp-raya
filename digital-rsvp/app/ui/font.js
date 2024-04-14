import { Inter, Roboto_Mono } from "next/font/google";

// Primary Font
export const inter = Inter({
	subsets:['latin'],
	display:'swap',
	variable:'--font-inter'
});

// Secondary Font
export const roboto_mono = Roboto_Mono({
	subsets:['latin'],
	display:'swap',
	variable:'--font-roboto-mon'
})