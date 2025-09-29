import React from "react";

/**
 * Responsive Badge component
 * Props:
 * - label: string (text to display)
 * - color: string (Tailwind color, e.g. 'bg-pink-500')
 */
export default function Badge({ label = "Badge", color = "bg-pink-500" }) {
	return (
		<span
			className={`inline-block px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-semibold text-white shadow-md ${color} transition-all duration-300`}
		>
			{label}
		</span>
	);
}
