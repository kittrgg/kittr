type FixedLengthArray<T, Length extends number> = Length extends Length
	? { length: Length } & [T, ...T[]]
	: never;

export const yellow: FixedLengthArray<string, 10> = [
	'#FFFDF2',
	'#FFFAE6',
	'#FDF6D9',
	'#F0DE99',
	'#EAD173',
	'#E1B920',
	'#CAA102',
	'#987901',
	'#655001',
	'#332800',
];
