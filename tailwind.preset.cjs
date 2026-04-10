const path = require("path");

/**
 * Tailwind preset so class names used inside @tangerine-ui/core are not purged.
 * Add to tailwind.config: presets: [require("@tangerine-ui/core/tailwind-preset")]
 *
 * @type {import("tailwindcss").Config}
 */
module.exports = {
	content: [path.join(__dirname, "dist", "**/*.{js,mjs}")],
};
