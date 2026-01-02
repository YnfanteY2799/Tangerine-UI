import type { PhoneFormat } from "./types";

/**
 * Formats a phone number in US format: (123) 456-7890
 * @param value - The input string to format
 * @returns Formatted US phone number string (max 10 digits)
 * @example formatPhoneUS("1234567890") // "(123) 456-7890"
 */
export function formatPhoneUS(value: string): string {
	const digits = value.replace(/\D/g, "").slice(0, 10);
	const len = digits.length;
	if (len === 0) return "";
	if (len <= 3) return `(${digits}`;
	if (len <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
	return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

/**
 * Formats a phone number in UK format: 0123 456 7890
 * @param value - The input string to format
 * @returns Formatted UK phone number string (max 11 digits)
 * @example formatPhoneUK("01234567890") // "0123 456 7890"
 */
export function formatPhoneUK(value: string): string {
	const digits = value.replace(/\D/g, "").slice(0, 11);
	const len = digits.length;
	if (len === 0) return "";
	if (len <= 4) return digits;
	if (len <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
	return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
}

/**
 * Formats a phone number in EU format: +12 345 678 9012
 * @param value - The input string to format
 * @returns Formatted EU phone number string (max 12 digits)
 * @example formatPhoneEU("123456789012") // "+12 345 678 9012"
 */
export function formatPhoneEU(value: string): string {
	const digits = value.replace(/\D/g, "").slice(0, 12);
	const len = digits.length;
	if (len === 0) return "";
	if (len <= 2) return `+${digits}`;
	if (len <= 5) return `+${digits.slice(0, 2)} ${digits.slice(2)}`;
	if (len <= 8) return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
	return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
}

/**
 * Formats a phone number in international format: +123 456 7890 1234
 * @param value - The input string to format
 * @returns Formatted international phone number string (max 15 digits)
 * @example formatPhoneInternational("123456789012345") // "+123 456 7890 1234"
 */
export function formatPhoneInternational(value: string): string {
	const digits = value.replace(/\D/g, "").slice(0, 15);
	const len = digits.length;
	if (len === 0) return "";
	if (len <= 3) return `+${digits}`;
	if (len <= 6) return `+${digits.slice(0, 3)} ${digits.slice(3)}`;
	if (len <= 10) return `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
	return `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)} ${digits.slice(10)}`;
}

/**
 * Formats a phone number according to the specified format type
 * @param value - The input string to format
 * @param format - The phone format type (defaults to "US")
 * @param customFormat - Custom format string (only used when format is "custom")
 * @returns Formatted phone number string
 * @example formatPhone("1234567890", "US") // "(123) 456-7890"
 * @example formatPhone("1234567890", "custom", "(###) ###-####") // "(123) 456-7890"
 */
export function formatPhone(value: string, format: PhoneFormat = "US", customFormat?: string): string {
	switch (format) {
		case "UK":
			return formatPhoneUK(value);
		case "EU":
			return formatPhoneEU(value);
		case "international":
			return formatPhoneInternational(value);
		case "custom":
			return customFormat ? applyCustomPhoneFormat(value, customFormat) : formatPhoneUS(value);
		case "US":
		default:
			return formatPhoneUS(value);
	}
}

/**
 * Applies a custom format pattern to phone number digits
 * @param value - The input string to format
 * @param format - Format pattern string where '#' represents a digit placeholder
 * @returns Formatted string according to custom pattern
 * @example applyCustomPhoneFormat("1234567890", "(###) ###-####") // "(123) 456-7890"
 */
function applyCustomPhoneFormat(value: string, format: string): string {
	const digits = value.replace(/\D/g, "");
	let result = "";
	let digitIndex = 0;
	const formatLen = format.length;
	const digitsLen = digits.length;

	for (let i = 0; i < formatLen && digitIndex < digitsLen; i++) {
		const char = format[i];
		if (char === "#") {
			result += digits[digitIndex++];
		} else {
			result += char;
		}
	}
	return result;
}

/**
 * Formats a credit card number with spaces every 4 digits: 1234 5678 9012 3456
 * @param value - The input string to format
 * @returns Formatted credit card number string (max 16 digits)
 * @example formatCreditCard("1234567890123456") // "1234 5678 9012 3456"
 */
export function formatCreditCard(value: string): string {
	const digits = value.replace(/\D/g, "").slice(0, 16);
	return digits.replace(/(.{4})/g, "$1 ").trim();
}

/**
 * Formats a date string in MM/DD/YYYY format
 * @param value - The input string to format
 * @returns Formatted date string (max 8 digits)
 * @example formatDate("12252024") // "12/25/2024"
 */
export function formatDate(value: string): string {
	const digits = value.replace(/\D/g, "").slice(0, 8);
	const len = digits.length;
	if (len === 0) return "";
	if (len <= 2) return digits;
	if (len <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
	return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}

/**
 * Formats a number as currency with thousands separators and optional symbol
 * @param value - The input string to format
 * @param symbol - Currency symbol to prepend (defaults to "$")
 * @returns Formatted currency string with symbol and thousands separators
 * @example formatCurrency("1234.56") // "$1,234.56"
 * @example formatCurrency("1234.56", "â‚¬") // "â‚¬1,234.56"
 */
export function formatCurrency(value: string, symbol = "$"): string {
	const digits = value.replace(/[^\d.]/g, "");
	const dotIndex = digits.indexOf(".");
	const hasDot = dotIndex !== -1;
	const intPart = hasDot ? digits.slice(0, dotIndex) : digits;
	const decPart = hasDot ? digits.slice(dotIndex + 1, dotIndex + 3) : "";

	if (!intPart && !decPart) return "";

	const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	return hasDot ? `${symbol}${formatted}.${decPart}` : `${symbol}${formatted}`;
}

/**
 * Calculates password strength score based on length and character variety
 * @param password - The password string to evaluate
 * @returns Strength score from 0 (weakest) to 4 (strongest)
 * @example calculatePasswordStrength("abc") // 0
 * @example calculatePasswordStrength("Abc123!@#xyz") // 4
 */
export function calculatePasswordStrength(password: string): number {
	let strength = 0;
	const len = password.length;

	if (len >= 8) strength++;
	if (len >= 12) strength++;
	if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
	if (/\d/.test(password)) strength++;
	if (/[^a-zA-Z0-9]/.test(password)) strength++;

	return Math.min(4, strength);
}

/**
 * Extracts raw unformatted value from a formatted string
 * @param value - The formatted string
 * @param format - The format type of the input
 * @returns Raw unformatted value
 * @example getRawValue("(123) 456-7890", "phone") // "1234567890"
 * @example getRawValue("$1,234.56", "currency") // "1234.56"
 */
export function getRawValue(value: string, format: string): string {
	switch (format) {
		case "phone":
		case "creditCard":
		case "date":
			return value.replace(/\D/g, "");
		case "currency":
			return value.replace(/[^\d.]/g, "");
		default:
			return value;
	}
}

/**
 * Detects the format type of a pasted value using pattern matching
 * @param value - The input string to analyze
 * @returns Object with detected format and raw value, or null if no format detected
 * @example detectPasteFormat("(123) 456-7890") // { format: "phone", formattedValue: "1234567890" }
 */
export function detectPasteFormat(value: string): { format: string; formattedValue: string } | null {
	const digitsOnly = value.replace(/\D/g, "");
	const digitsLen = digitsOnly.length;

	// Phone number patterns (10-15 digits)
	if (digitsLen >= 10 && digitsLen <= 15 && /^[\d\s\-()+ ]{10,}$/.test(value)) return { format: "phone", formattedValue: digitsOnly };

	// Credit card (exactly 16 digits)
	if (digitsLen === 16) return { format: "creditCard", formattedValue: digitsOnly };

	// Date patterns (MM/DD/YYYY, DD/MM/YYYY, YYYY-MM-DD)
	if (/^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$/.test(value) || /^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/.test(value))
		return { format: "date", formattedValue: digitsOnly };

	// Currency ($1,234.56, â‚¬1.234,56, etc.)
	if (/^[$â‚¬Â£Â¥]?\s*[\d,]+\.?\d*$/.test(value)) return { format: "currency", formattedValue: value.replace(/[^\d.]/g, "") };

	return null;
}

/**
 * Detects the format of a value and automatically applies appropriate formatting
 * @param value - The input string to detect and format
 * @returns Formatted string based on detected pattern, or original value if no pattern detected
 * @example detectAndFormat("1234567890") // "(123) 456-7890"
 * @example detectAndFormat("1234 5678 9012 3456") // "1234 5678 9012 3456"
 */
export function detectAndFormat(value: string): string {
	const detected = detectPasteFormat(value);
	if (!detected) return value;

	const { format, formattedValue } = detected;

	switch (format) {
		case "phone":
			return formatPhoneUS(formattedValue);
		case "creditCard":
			return formatCreditCard(formattedValue);
		case "date":
			return formatDate(formattedValue);
		case "currency":
			return formatCurrency(formattedValue);
		default:
			return value;
	}
}
