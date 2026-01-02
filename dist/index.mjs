"use client";
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/components/Input/constants.ts
var PASTE_FLASH_DURATION, PASTE_FEEDBACK_DURATION, COPY_FEEDBACK_DURATION, BLUR_DELAY, SIZE_STYLES, RADIUS_STYLES, SHADOW_STYLES, SHAKE_ANIMATION, LONG_PRESS_SHAKE_ANIMATION, SUCCESS_SHAKE_ANIMATION, LONG_PRESS_SHAKE_TRANSITION, SUCCESS_SHAKE_TRANSITION, SHAKE_TRANSITION, SHAKE_FLASH_COLORS, STATUS_ICON_VARIANTS, ACTION_BUTTON_VARIANTS, RIPPLE_VARIANTS, PASTE_FLASH_VARIANTS, PREMIUM_SPRING, FAST_SPRING;
var init_constants = __esm({
  "src/components/Input/constants.ts"() {
    "use strict";
    PASTE_FLASH_DURATION = 500;
    PASTE_FEEDBACK_DURATION = 1500;
    COPY_FEEDBACK_DURATION = 1500;
    BLUR_DELAY = 150;
    SIZE_STYLES = {
      xs: { height: "h-7", text: "text-xs", padding: "px-2", iconSize: "w-3 h-3", gap: "gap-1" },
      sm: { height: "h-8", text: "text-sm", padding: "px-2.5", iconSize: "w-3.5 h-3.5", gap: "gap-1.5" },
      md: { height: "h-10", text: "text-sm", padding: "px-3", iconSize: "w-4 h-4", gap: "gap-2" },
      lg: { height: "h-11", text: "text-base", padding: "px-3.5", iconSize: "w-4.5 h-4.5", gap: "gap-2" },
      xl: { height: "h-12", text: "text-base", padding: "px-4", iconSize: "w-5 h-5", gap: "gap-2.5" },
      "2xl": { height: "h-14", text: "text-lg", padding: "px-4", iconSize: "w-5 h-5", gap: "gap-2.5" },
      "3xl": { height: "h-16", text: "text-xl", padding: "px-5", iconSize: "w-6 h-6", gap: "gap-3" },
      "4xl": { height: "h-20", text: "text-2xl", padding: "px-6", iconSize: "w-7 h-7", gap: "gap-3" },
      full: { height: "h-full", text: "text-base", padding: "px-4", iconSize: "w-5 h-5", gap: "gap-2.5" }
    };
    RADIUS_STYLES = {
      none: "rounded-none",
      xs: "rounded-xs",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      "2xl": "rounded-2xl",
      "3xl": "rounded-3xl",
      full: "rounded-full"
    };
    SHADOW_STYLES = {
      none: "",
      sm: "shadow-sm",
      md: "shadow-md",
      lg: "shadow-lg",
      xl: "shadow-xl",
      inner: "shadow-inner",
      colored: "shadow-lg shadow-primary/20",
      glow: "shadow-[0_0_15px_rgba(var(--primary),0.3)]",
      "glow-sm": "shadow-[0_0_8px_rgba(var(--primary),0.2)]",
      "glow-lg": "shadow-[0_0_25px_rgba(var(--primary),0.4)]"
    };
    SHAKE_ANIMATION = { x: [0, -12, 11, -9, 8, -5, 4, -2, 1, 0], scale: [1, 1.008, 0.995, 1.005, 0.998, 1.002, 1] };
    LONG_PRESS_SHAKE_ANIMATION = { x: [0, -6, 5, -4, 3, -2, 1, 0], scale: [1, 1.005, 0.998, 1.002, 1] };
    SUCCESS_SHAKE_ANIMATION = { scale: [1, 1.025, 0.985, 1.012, 0.995, 1], y: [0, -3, 1.5, -1, 0] };
    LONG_PRESS_SHAKE_TRANSITION = { duration: 0.4, ease: [0.22, 1, 0.36, 1] };
    SUCCESS_SHAKE_TRANSITION = { duration: 0.5, ease: [0.22, 1, 0.36, 1] };
    SHAKE_TRANSITION = { duration: 0.55, ease: [0.22, 1, 0.36, 1] };
    SHAKE_FLASH_COLORS = {
      error: { bg: "rgba(239, 68, 68, 0.08)", shadow: "0 0 0 3px rgba(239, 68, 68, 0.15), 0 0 20px rgba(239, 68, 68, 0.1)" },
      success: { bg: "rgba(34, 197, 94, 0.06)", shadow: "0 0 0 3px rgba(34, 197, 94, 0.12), 0 0 20px rgba(34, 197, 94, 0.08)" },
      longpress: { bg: "rgba(59, 130, 246, 0.05)", shadow: "0 0 0 2px rgba(59, 130, 246, 0.1), 0 0 15px rgba(59, 130, 246, 0.06)" }
    };
    STATUS_ICON_VARIANTS = {
      animate: { opacity: 1, scale: 1, rotate: 0, transition: { type: "spring", stiffness: 500, damping: 25 } },
      exit: { opacity: 0, scale: 0.5, transition: { duration: 0.12 } },
      initial: { opacity: 0, scale: 0.5, rotate: -10 }
    };
    ACTION_BUTTON_VARIANTS = {
      success: { scale: [1, 1.15, 1], transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } },
      hover: { scale: 1.08, transition: { type: "spring", stiffness: 400, damping: 20 } },
      tap: { scale: 0.92, transition: { type: "spring", stiffness: 400, damping: 20 } },
      initial: { scale: 1 }
    };
    RIPPLE_VARIANTS = {
      animate: { scale: 1, opacity: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
      initial: { scale: 0, opacity: 0.4 },
      exit: { opacity: 0 }
    };
    PASTE_FLASH_VARIANTS = {
      animate: { opacity: [0, 0.15, 0], transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } },
      initial: { opacity: 0 }
    };
    PREMIUM_SPRING = { type: "spring", stiffness: 380, damping: 28, mass: 0.6 };
    FAST_SPRING = { type: "spring", stiffness: 450, damping: 32, mass: 0.5 };
  }
});

// src/utils/functions.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var init_functions = __esm({
  "src/utils/functions.ts"() {
    "use strict";
  }
});

// src/components/Input/sub-components/Labels/InsideLabel.tsx
var InsideLabel_exports = {};
__export(InsideLabel_exports, {
  default: () => InsideLabel_default
});
import { memo as memo3 } from "react";
import { m as m3 } from "motion/react";
import { jsx as jsx4 } from "react/jsx-runtime";
var InsideLabel_default;
var init_InsideLabel = __esm({
  "src/components/Input/sub-components/Labels/InsideLabel.tsx"() {
    "use strict";
    init_functions();
    init_constants();
    InsideLabel_default = memo3(function InsideLabel({
      label,
      htmlFor,
      hasPrefix,
      isFloating,
      colorClass,
      hasLeadingIcon,
      shouldReduceMotion
    }) {
      const leftPosition = hasLeadingIcon ? "left-10" : hasPrefix ? "left-[4.5rem]" : "left-3";
      return /* @__PURE__ */ jsx4(
        m3.label,
        {
          initial: false,
          htmlFor,
          id: `${htmlFor}-label`,
          animate: {
            y: isFloating ? 0 : "-50%",
            opacity: isFloating ? 0.9 : 0.7,
            top: isFloating ? "0.25rem" : "50%",
            fontSize: isFloating ? "0.7rem" : "0.875rem"
          },
          style: { backfaceVisibility: "hidden" },
          transition: shouldReduceMotion ? { duration: 0 } : PREMIUM_SPRING,
          className: cn("absolute pointer-events-none select-none origin-left font-medium", "will-change-transform", leftPosition, colorClass),
          children: label
        }
      );
    });
  }
});

// src/components/Input/sub-components/Labels/OutsideLabel.tsx
var OutsideLabel_exports = {};
__export(OutsideLabel_exports, {
  default: () => OutsideLabel_default
});
import { memo as memo4 } from "react";
import { m as m4 } from "motion/react";
import { jsx as jsx5 } from "react/jsx-runtime";
var OutsideLabel_default;
var init_OutsideLabel = __esm({
  "src/components/Input/sub-components/Labels/OutsideLabel.tsx"() {
    "use strict";
    init_functions();
    init_constants();
    OutsideLabel_default = memo4(function OutsideLabel({
      label,
      htmlFor,
      isFloating,
      colorClass,
      hasLeadingIcon,
      hasPrefix,
      shouldReduceMotion
    }) {
      const shouldFloat = isFloating || hasPrefix;
      return /* @__PURE__ */ jsx5(
        m4.label,
        {
          htmlFor,
          id: `${htmlFor}-label`,
          className: cn(
            "absolute pointer-events-none select-none font-medium z-10 will-change-transform backface-hidden",
            hasLeadingIcon ? "left-10" : "left-3",
            colorClass
          ),
          initial: false,
          animate: {
            opacity: 1,
            x: shouldFloat ? -12 : 0,
            y: shouldFloat ? 0 : "-50%",
            top: shouldFloat ? "-1.75rem" : "50%",
            fontSize: shouldFloat ? "0.8rem" : "0.875rem"
          },
          transition: shouldReduceMotion ? { duration: 0 } : PREMIUM_SPRING,
          children: label
        }
      );
    });
  }
});

// src/components/Input/sub-components/Labels/OutsideTopLabel.tsx
var OutsideTopLabel_exports = {};
__export(OutsideTopLabel_exports, {
  default: () => OutsideTopLabel_default
});
import { memo as memo5 } from "react";
import { m as m5 } from "motion/react";
import { jsx as jsx6 } from "react/jsx-runtime";
var OutsideTopLabel_default;
var init_OutsideTopLabel = __esm({
  "src/components/Input/sub-components/Labels/OutsideTopLabel.tsx"() {
    "use strict";
    init_constants();
    init_functions();
    OutsideTopLabel_default = memo5(function OutsideTopLabel({
      label,
      htmlFor,
      isFocused,
      colorClass,
      shouldReduceMotion
    }) {
      return /* @__PURE__ */ jsx6(
        m5.label,
        {
          initial: false,
          htmlFor,
          id: `${htmlFor}-label`,
          animate: { y: isFocused ? -1 : 0 },
          style: { backfaceVisibility: "hidden" },
          transition: shouldReduceMotion ? { duration: 0 } : FAST_SPRING,
          className: cn("block font-medium mb-1.5 will-change-transform text-sm", colorClass),
          children: label
        }
      );
    });
  }
});

// src/components/Input/sub-components/Labels/OutsideLeftLabel.tsx
var OutsideLeftLabel_exports = {};
__export(OutsideLeftLabel_exports, {
  default: () => OutsideLeftLabel_default
});
import { memo as memo6 } from "react";
import { m as m6 } from "motion/react";
import { jsx as jsx7 } from "react/jsx-runtime";
var OutsideLeftLabel_default;
var init_OutsideLeftLabel = __esm({
  "src/components/Input/sub-components/Labels/OutsideLeftLabel.tsx"() {
    "use strict";
    init_functions();
    OutsideLeftLabel_default = memo6(function OutsideLeftLabel({
      label,
      htmlFor,
      isFocused,
      colorClass
    }) {
      return /* @__PURE__ */ jsx7(
        m6.label,
        {
          htmlFor,
          id: `${htmlFor}-label`,
          transition: { duration: 0.15 },
          animate: { color: isFocused ? "hsl(var(--primary))" : void 0 },
          className: cn("font-medium whitespace-nowrap shrink-0 text-sm", colorClass),
          children: label
        }
      );
    });
  }
});

// src/components/Input/sub-components/RippleContainer.tsx
var RippleContainer_exports = {};
__export(RippleContainer_exports, {
  default: () => RippleContainer_default
});
import { AnimatePresence as AnimatePresence3, m as m7 } from "motion/react";
import { memo as memo7 } from "react";
import { jsx as jsx8 } from "react/jsx-runtime";
var RippleContainer_default;
var init_RippleContainer = __esm({
  "src/components/Input/sub-components/RippleContainer.tsx"() {
    "use strict";
    init_constants();
    RippleContainer_default = memo7(function RippleContainer({ ripples, onComplete }) {
      return /* @__PURE__ */ jsx8("span", { className: "absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none", children: /* @__PURE__ */ jsx8(AnimatePresence3, { mode: "popLayout", children: ripples.map(({ id, y, x, size }) => /* @__PURE__ */ jsx8(
        m7.span,
        {
          exit: "exit",
          animate: "animate",
          initial: "initial",
          variants: RIPPLE_VARIANTS,
          onAnimationComplete: () => onComplete(id),
          className: "absolute rounded-full bg-primary/10 pointer-events-none",
          style: { x: "-50%", y: "-50%", top: y, left: x, width: size, height: size, willChange: "transform, opacity" }
        },
        id
      )) }) });
    });
  }
});

// src/components/Input/sub-components/CharacterCounter.tsx
var CharacterCounter_exports = {};
__export(CharacterCounter_exports, {
  default: () => CharacterCounter_default
});
import { memo as memo8 } from "react";
import { m as m8 } from "motion/react";
import { jsxs as jsxs4 } from "react/jsx-runtime";
var CharacterCounter_default;
var init_CharacterCounter = __esm({
  "src/components/Input/sub-components/CharacterCounter.tsx"() {
    "use strict";
    init_functions();
    CharacterCounter_default = memo8(function CharacterCounter({ current, max, limit }) {
      const isOverLimit = current > max;
      const isNearLimit = current > max * 0.8;
      return /* @__PURE__ */ jsxs4(
        m8.span,
        {
          className: cn(
            "text-xs tabular-nums transition-colors",
            isOverLimit ? "text-red-500 font-medium" : isNearLimit ? "text-amber-500" : "text-muted-foreground"
          ),
          transition: { duration: 0.15 },
          animate: isOverLimit ? { scale: [1, 1.1, 1] } : {},
          children: [
            current,
            "/",
            max,
            limit === "soft" && isOverLimit && " (soft limit)"
          ]
        }
      );
    });
  }
});

// src/components/Input/sub-components/RequirementsList.tsx
var RequirementsList_exports = {};
__export(RequirementsList_exports, {
  default: () => RequirementsList_default
});
import { memo as memo9 } from "react";
import { m as m9 } from "motion/react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";
var RequirementsList_default;
var init_RequirementsList = __esm({
  "src/components/Input/sub-components/RequirementsList.tsx"() {
    "use strict";
    init_functions();
    RequirementsList_default = memo9(function RequirementsList({ requirements, value }) {
      return /* @__PURE__ */ jsx9("ul", { className: "mt-2 space-y-1", role: "list", "aria-label": "Password requirements", children: requirements.map(({ validator, label }, i) => {
        const met = validator(value);
        return /* @__PURE__ */ jsxs5(
          m9.li,
          {
            animate: { opacity: 1, x: 0 },
            initial: { opacity: 0, x: -8 },
            transition: { delay: i * 0.03 },
            "aria-label": `${label}: ${met ? "met" : "not met"}`,
            className: cn("text-xs flex items-center gap-2 transition-colors", met ? "text-green-500" : "text-muted-foreground"),
            children: [
              /* @__PURE__ */ jsx9(
                m9.span,
                {
                  className: cn("w-1.5 h-1.5 rounded-full", met ? "bg-green-500" : "bg-muted-foreground/50"),
                  animate: { scale: met ? [1, 1.3, 1] : 1 },
                  transition: { duration: 0.15 },
                  "aria-hidden": "true"
                }
              ),
              label
            ]
          },
          i
        );
      }) });
    });
  }
});

// src/components/Input/sub-components/SuggestionsDropdown.tsx
var SuggestionsDropdown_exports = {};
__export(SuggestionsDropdown_exports, {
  default: () => SuggestionsDropdown_default
});
import { memo as memo10 } from "react";
import { m as m10 } from "motion/react";
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
var SuggestionsDropdown_default;
var init_SuggestionsDropdown = __esm({
  "src/components/Input/sub-components/SuggestionsDropdown.tsx"() {
    "use strict";
    init_functions();
    SuggestionsDropdown_default = memo10(function SuggestionsDropdown({ suggestions, activeIndex, onSelect, inputId, isOpen }) {
      if (!isOpen || suggestions.length === 0) return null;
      return /* @__PURE__ */ jsx10(
        m10.ul,
        {
          role: "listbox",
          style: { originY: 0 },
          "aria-label": "Suggestions",
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: -4, scale: 0.98 },
          initial: { opacity: 0, y: -4, scale: 0.98 },
          id: inputId ? `${inputId}-listbox` : void 0,
          transition: { duration: 0.12, ease: [0.32, 0.72, 0, 1] },
          className: "absolute z-50 w-full mt-1 bg-popover border rounded-lg shadow-lg overflow-hidden",
          children: suggestions.map((suggestion, i) => /* @__PURE__ */ jsxs6(
            m10.li,
            {
              role: "option",
              className: cn(
                "px-3 py-2 cursor-pointer flex items-center gap-2 transition-colors",
                i === activeIndex ? "bg-accent text-accent-foreground" : "hover:bg-accent/50"
              ),
              animate: { opacity: 1, x: 0 },
              initial: { opacity: 0, x: -4 },
              transition: { delay: i * 0.02 },
              "aria-selected": i === activeIndex,
              onMouseDown: (e) => {
                e.preventDefault();
              },
              onClick: () => onSelect(suggestion),
              id: inputId ? `${inputId}-option-${i}` : void 0,
              children: [
                suggestion.icon,
                /* @__PURE__ */ jsx10("span", { children: suggestion.label || suggestion.value })
              ]
            },
            suggestion.value
          ))
        }
      );
    });
  }
});

// src/components/Input/sub-components/PasswordStrengthMeter.tsx
var PasswordStrengthMeter_exports = {};
__export(PasswordStrengthMeter_exports, {
  default: () => PasswordStrengthMeter_default
});
import { memo as memo11 } from "react";
import { m as m11 } from "motion/react";
import { jsx as jsx11, jsxs as jsxs7 } from "react/jsx-runtime";
var PasswordStrengthMeter_default;
var init_PasswordStrengthMeter = __esm({
  "src/components/Input/sub-components/PasswordStrengthMeter.tsx"() {
    "use strict";
    init_functions();
    PasswordStrengthMeter_default = memo11(function PasswordStrengthMeter({ strength }) {
      const colors = ["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-lime-500", "bg-green-500"];
      const labels = ["Very weak", "Weak", "Fair", "Strong", "Very strong"];
      return /* @__PURE__ */ jsxs7("div", { className: "mt-2 space-y-1.5", children: [
        /* @__PURE__ */ jsx11("div", { className: "flex gap-1 h-1.5", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx11(
          m11.div,
          {
            className: cn("flex-1 rounded-full", i <= strength ? colors[strength] : "bg-muted"),
            transition: { duration: 0.2, delay: i * 0.03, ease: [0.32, 0.72, 0, 1] },
            initial: { scaleX: 0 },
            animate: { scaleX: 1 },
            style: { originX: 0 }
          },
          i
        )) }),
        /* @__PURE__ */ jsx11(
          m11.p,
          {
            className: cn("text-xs font-medium", colors[strength].replace("bg-", "text-")),
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            children: labels[strength]
          },
          strength
        )
      ] });
    });
  }
});

// src/components/Input/utils.ts
function formatPhoneUS(value) {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  const len = digits.length;
  if (len === 0) return "";
  if (len <= 3) return `(${digits}`;
  if (len <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}
function formatPhoneUK(value) {
  const digits = value.replace(/\D/g, "").slice(0, 11);
  const len = digits.length;
  if (len === 0) return "";
  if (len <= 4) return digits;
  if (len <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
}
function formatPhoneEU(value) {
  const digits = value.replace(/\D/g, "").slice(0, 12);
  const len = digits.length;
  if (len === 0) return "";
  if (len <= 2) return `+${digits}`;
  if (len <= 5) return `+${digits.slice(0, 2)} ${digits.slice(2)}`;
  if (len <= 8) return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5)}`;
  return `+${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(5, 8)} ${digits.slice(8)}`;
}
function formatPhoneInternational(value) {
  const digits = value.replace(/\D/g, "").slice(0, 15);
  const len = digits.length;
  if (len === 0) return "";
  if (len <= 3) return `+${digits}`;
  if (len <= 6) return `+${digits.slice(0, 3)} ${digits.slice(3)}`;
  if (len <= 10) return `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6)}`;
  return `+${digits.slice(0, 3)} ${digits.slice(3, 6)} ${digits.slice(6, 10)} ${digits.slice(10)}`;
}
function formatPhone(value, format = "US", customFormat) {
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
function applyCustomPhoneFormat(value, format) {
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
function formatCreditCard(value) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}
function formatDate(value) {
  const digits = value.replace(/\D/g, "").slice(0, 8);
  const len = digits.length;
  if (len === 0) return "";
  if (len <= 2) return digits;
  if (len <= 4) return `${digits.slice(0, 2)}/${digits.slice(2)}`;
  return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4)}`;
}
function formatCurrency(value, symbol = "$") {
  const digits = value.replace(/[^\d.]/g, "");
  const dotIndex = digits.indexOf(".");
  const hasDot = dotIndex !== -1;
  const intPart = hasDot ? digits.slice(0, dotIndex) : digits;
  const decPart = hasDot ? digits.slice(dotIndex + 1, dotIndex + 3) : "";
  if (!intPart && !decPart) return "";
  const formatted = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return hasDot ? `${symbol}${formatted}.${decPart}` : `${symbol}${formatted}`;
}
function calculatePasswordStrength(password) {
  let strength = 0;
  const len = password.length;
  if (len >= 8) strength++;
  if (len >= 12) strength++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[^a-zA-Z0-9]/.test(password)) strength++;
  return Math.min(4, strength);
}
function detectPasteFormat(value) {
  const digitsOnly = value.replace(/\D/g, "");
  const digitsLen = digitsOnly.length;
  if (digitsLen >= 10 && digitsLen <= 15 && /^[\d\s\-()+ ]{10,}$/.test(value)) return { format: "phone", formattedValue: digitsOnly };
  if (digitsLen === 16) return { format: "creditCard", formattedValue: digitsOnly };
  if (/^\d{1,2}[/-]\d{1,2}[/-]\d{2,4}$/.test(value) || /^\d{4}[/-]\d{1,2}[/-]\d{1,2}$/.test(value))
    return { format: "date", formattedValue: digitsOnly };
  if (/^[$â‚¬Â£Â¥]?\s*[\d,]+\.?\d*$/.test(value)) return { format: "currency", formattedValue: value.replace(/[^\d.]/g, "") };
  return null;
}
function detectAndFormat(value) {
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

// src/components/Input/index.tsx
import { useRef as useRef5, useId, useReducer, useCallback as useCallback5, useEffect as useEffect4, useMemo, useImperativeHandle, memo as memo12, lazy, Suspense } from "react";
import { m as m12, LazyMotion, domAnimation, domMin, MotionConfig, useReducedMotion } from "motion/react";

// src/components/Input/hooks.ts
init_constants();
import { useCallback, useEffect, useRef, useState } from "react";
import { useAnimate } from "motion/react";
function useShakeAnimation(hasError, hasSuccess, enableHaptics) {
  const [scope, animate] = useAnimate();
  const lastSuccessRef = useRef(false);
  const lastErrorRef = useRef(false);
  const isAnimatingRef = useRef(false);
  const mountedRef = useRef(false);
  const performShake = useCallback(
    async (type) => {
      if (!scope.current || isAnimatingRef.current) return;
      isAnimatingRef.current = true;
      const element = scope.current;
      const configs = {
        error: {
          vibration: [15, 30, 15],
          colors: SHAKE_FLASH_COLORS.error,
          transition: SHAKE_TRANSITION,
          animation: SHAKE_ANIMATION,
          resetDuration: 0.15,
          transitionTime: 300
        },
        success: {
          transition: SUCCESS_SHAKE_TRANSITION,
          colors: SHAKE_FLASH_COLORS.success,
          animation: SUCCESS_SHAKE_ANIMATION,
          vibration: [8],
          resetDuration: 0.15,
          transitionTime: 350
        },
        longpress: {
          vibration: [10, 20, 10],
          transition: LONG_PRESS_SHAKE_TRANSITION,
          animation: LONG_PRESS_SHAKE_ANIMATION,
          colors: SHAKE_FLASH_COLORS.longpress,
          resetDuration: 0.12,
          transitionTime: 250
        }
      };
      const config = configs[type];
      try {
        if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(config.vibration);
        element.style.boxShadow = config.colors.shadow;
        element.style.backgroundColor = config.colors.bg;
        await animate(element, config.animation, {
          ease: config.transition.ease,
          duration: config.transition.duration
        });
        await animate(element, { x: 0, y: 0, scale: 1 }, { duration: config.resetDuration, ease: [0.22, 1, 0.36, 1] });
        element.style.transition = `box-shadow ${config.transitionTime}ms ease-out, background-color ${config.transitionTime}ms ease-out`;
        element.style.backgroundColor = "transparent";
        element.style.boxShadow = "none";
        setTimeout(() => {
          if (element) element.style.transition = "";
        }, config.transitionTime + 50);
      } finally {
        isAnimatingRef.current = false;
      }
    },
    [scope, animate, enableHaptics]
  );
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      lastErrorRef.current = hasError;
      lastSuccessRef.current = hasSuccess;
      return;
    }
    if (hasError && !lastErrorRef.current) performShake("error");
    lastErrorRef.current = hasError;
  }, [hasError, performShake]);
  useEffect(() => {
    if (!mountedRef.current) return;
    if (hasSuccess && !lastSuccessRef.current) performShake("success");
    lastSuccessRef.current = hasSuccess;
  }, [hasSuccess, performShake]);
  return {
    containerRef: scope,
    triggerShake: useCallback(() => performShake("error"), [performShake]),
    triggerSuccessShake: useCallback(() => performShake("success"), [performShake]),
    triggerLongPressShake: useCallback(() => performShake("longpress"), [performShake])
  };
}
function useAsyncValidation(asyncValidate, debounceMs = 500, timeoutMs = 1e4) {
  const [asyncError, setAsyncError] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const abortControllerRef = useRef(null);
  const debounceTimeoutRef = useRef(null);
  const validationTimeoutRef = useRef(null);
  const validateAsync = useCallback(
    async (value) => {
      if (!asyncValidate) {
        setAsyncError(null);
        setIsValidating(false);
        return;
      }
      if (!value) {
        setAsyncError(null);
        setIsValidating(false);
        return;
      }
      if (abortControllerRef.current) abortControllerRef.current.abort();
      if (validationTimeoutRef.current) clearTimeout(validationTimeoutRef.current);
      abortControllerRef.current = new AbortController();
      setIsValidating(true);
      const timeoutPromise = new Promise((_, reject) => {
        validationTimeoutRef.current = setTimeout(() => reject(new Error("Validation timeout")), timeoutMs);
      });
      try {
        const error = await Promise.race([asyncValidate(value), timeoutPromise]);
        if (validationTimeoutRef.current) clearTimeout(validationTimeoutRef.current);
        setAsyncError(error);
      } catch (err) {
        if (err.name !== "AbortError") {
          if (err.message === "Validation timeout") setAsyncError("Validation timed out. Please try again.");
          else console.error("Async validation error:", err);
        }
      } finally {
        setIsValidating(false);
      }
    },
    [asyncValidate, timeoutMs]
  );
  const validateDebounced = useCallback(
    (value) => {
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
      if (!value) {
        setAsyncError(null);
        setIsValidating(false);
        return;
      }
      if (debounceMs <= 0) validateAsync(value);
      else {
        setIsValidating(true);
        debounceTimeoutRef.current = setTimeout(() => validateAsync(value), debounceMs);
      }
    },
    [validateAsync, debounceMs]
  );
  useEffect(() => {
    return () => {
      if (debounceTimeoutRef.current) clearTimeout(debounceTimeoutRef.current);
      if (validationTimeoutRef.current) clearTimeout(validationTimeoutRef.current);
      if (abortControllerRef.current) abortControllerRef.current.abort();
    };
  }, []);
  return {
    asyncError,
    isValidating,
    validateAsync,
    validateDebounced,
    clearError: useCallback(() => setAsyncError(null), [])
  };
}
function useLongPress(onLongPress, getValue, delay = 500) {
  const timeoutRef = useRef(null);
  const start = useCallback(() => {
    if (!onLongPress) return;
    timeoutRef.current = setTimeout(() => onLongPress(getValue()), delay);
  }, [onLongPress, getValue, delay]);
  const stop = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return {
    handlers: {
      onMouseDown: start,
      onMouseUp: stop,
      onMouseLeave: stop,
      onTouchStart: start,
      onTouchEnd: stop
    }
  };
}
function useRipple(enableRipple, enableHaptics) {
  const [ripples, setRipples] = useState([]);
  const addRipple = useCallback(
    ({ currentTarget, clientX, clientY }) => {
      if (!enableRipple) return;
      const rect = currentTarget.getBoundingClientRect();
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 2.5;
      setRipples((prev) => [...prev.slice(-3), { id: Date.now(), x, y, size }]);
      if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(3);
    },
    [enableRipple, enableHaptics]
  );
  const removeRipple = useCallback((id) => setRipples((prev) => prev.filter((r) => r.id !== id)), []);
  return { ripples, addRipple, removeRipple };
}

// src/components/Input/label-components.tsx
init_constants();
init_functions();
import { m, AnimatePresence } from "motion/react";
import { memo } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
var StackedLabel = memo(function StackedLabel2({
  label,
  htmlFor,
  isFloating,
  colorClass,
  shouldReduceMotion
}) {
  return /* @__PURE__ */ jsx(
    m.label,
    {
      animate: {
        fontSize: isFloating ? "0.7rem" : "0.875rem",
        marginBottom: isFloating ? 2 : 0,
        opacity: isFloating ? 0.85 : 0.7,
        y: isFloating ? 0 : 6
      },
      initial: false,
      htmlFor,
      id: `${htmlFor}-label`,
      style: { backfaceVisibility: "hidden" },
      transition: shouldReduceMotion ? { duration: 0 } : PREMIUM_SPRING,
      className: cn("origin-left font-medium pointer-events-none select-none will-change-transform", colorClass),
      children: label
    }
  );
});
var LeftAnimatedLabel = memo(function LeftAnimatedLabel2({
  label,
  htmlFor,
  isFloating,
  colorClass,
  showPlaceholder,
  shouldReduceMotion
}) {
  const transition = shouldReduceMotion ? { duration: 0 } : FAST_SPRING;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      m.div,
      {
        initial: false,
        transition,
        className: "overflow-hidden shrink-0",
        animate: { width: isFloating ? "auto" : 0, marginRight: isFloating ? 12 : 0, opacity: isFloating ? 1 : 0 },
        children: /* @__PURE__ */ jsx(
          m.label,
          {
            initial: false,
            htmlFor,
            id: `${htmlFor}-label`,
            transition,
            animate: { x: isFloating ? 0 : 8 },
            className: cn("font-medium whitespace-nowrap block text-sm", colorClass),
            children: label
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(AnimatePresence, { children: showPlaceholder && /* @__PURE__ */ jsx(
      m.span,
      {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0, x: -6, transition: { duration: 0.12 } },
        className: "absolute inset-0 flex items-center text-muted-foreground/60 pointer-events-none select-none pl-3 text-sm",
        children: label
      }
    ) })
  ] });
});

// src/components/Input/reducers.ts
var initialInputState = {
  value: "",
  copied: false,
  pasted: false,
  isFocused: false,
  isObscured: false,
  showPassword: false,
  clipboardError: null,
  showPasteFlash: false,
  showSuggestions: false,
  activeSuggestionIndex: 0
};
function createInitialState(defaultValue = "") {
  return { ...initialInputState, value: defaultValue };
}
function inputReducer(state, action) {
  switch (action.type) {
    case "SET_VALUE":
      return { ...state, value: action.payload };
    case "SET_FOCUSED":
      return { ...state, isFocused: action.payload };
    case "TOGGLE_PASSWORD":
      return { ...state, showPassword: !state.showPassword };
    case "SET_COPIED":
      return { ...state, copied: action.payload };
    case "SET_PASTED":
      return { ...state, pasted: action.payload };
    case "SET_PASTE_FLASH":
      return { ...state, showPasteFlash: action.payload };
    case "SET_SHOW_SUGGESTIONS":
      return { ...state, showSuggestions: action.payload };
    case "SET_ACTIVE_SUGGESTION":
      return { ...state, activeSuggestionIndex: action.payload };
    case "SET_OBSCURED":
      return { ...state, isObscured: action.payload };
    case "SET_CLIPBOARD_ERROR":
      return { ...state, clipboardError: action.payload };
    case "CLEAR_CLIPBOARD_ERROR":
      return { ...state, clipboardError: null };
    case "FOCUS_INPUT":
      return { ...state, isFocused: true, isObscured: false, clipboardError: null };
    case "BLUR_INPUT":
      return { ...state, isFocused: false, showSuggestions: false, activeSuggestionIndex: 0 };
    case "RESET_FEEDBACK":
      return { ...state, copied: false, pasted: false, showPasteFlash: false, clipboardError: null };
    default:
      return state;
  }
}

// src/components/Input/error-boundary.tsx
import { Component } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var AnimatedInputErrorBoundary = class extends Component {
  /**
   * Creates an instance of AnimatedInputErrorBoundary.
   *
   * @param {AnimatedInputErrorBoundaryProps} props - Component props
   */
  constructor(props) {
    super(props);
    /**
     * Resets the error boundary state, allowing the component to recover.
     * Called when the user clicks the "Try again" button.
     */
    this.handleReset = () => {
      this.setState({ hasError: false, error: null });
    };
    this.state = { hasError: false, error: null };
  }
  /**
   * Static lifecycle method called when an error is thrown in a child component.
   * Updates state to trigger the error UI.
   *
   * @static
   * @param {Error} error - The error that was thrown
   * @returns {ErrorBoundaryState} New state with error information
   */
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  /**
   * Lifecycle method called after an error is caught.
   * Logs the error and invokes the optional onError callback.
   *
   * @param {Error} error - The error that was caught
   * @param {ErrorInfo} errorInfo - React error info with component stack
   */
  componentDidCatch(error, errorInfo) {
    console.error("[AnimatedInput] Error caught by boundary:", error, errorInfo);
    this.props.onError?.(error, errorInfo);
  }
  /**
   * Renders either the children (when no error) or fallback UI (when error caught).
   *
   * @returns {ReactNode} The component tree or fallback UI
   */
  render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback;
      const { fallbackInputProps } = this.props;
      return /* @__PURE__ */ jsxs2("div", { className: "w-full space-y-2", children: [
        /* @__PURE__ */ jsx2("div", { className: "relative", children: /* @__PURE__ */ jsx2(
          "input",
          {
            ...fallbackInputProps,
            className: "flex h-10 w-full rounded-md border border-destructive/50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }
        ) }),
        /* @__PURE__ */ jsxs2("div", { className: "flex items-center justify-between text-xs", children: [
          /* @__PURE__ */ jsx2("span", { className: "text-destructive", children: "Input component error. Using fallback." }),
          /* @__PURE__ */ jsx2(
            "button",
            {
              type: "button",
              onClick: this.handleReset,
              className: "text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-1 rounded",
              children: "Try again"
            }
          )
        ] })
      ] });
    }
    return this.props.children;
  }
};
function withErrorBoundary(WrappedComponent, errorBoundaryProps) {
  const WithErrorBoundary = (props) => {
    return /* @__PURE__ */ jsx2(AnimatedInputErrorBoundary, { ...errorBoundaryProps, children: /* @__PURE__ */ jsx2(WrappedComponent, { ...props }) });
  };
  WithErrorBoundary.displayName = `WithErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return WithErrorBoundary;
}

// src/utils/hooks/use-timeout-manager.ts
import { useRef as useRef2, useCallback as useCallback2, useEffect as useEffect2 } from "react";
function useTimeoutManager() {
  const timersRef = useRef2(/* @__PURE__ */ new Map());
  const set = useCallback2((key, callback, delay) => {
    if (delay < 0) {
      throw new Error(`Timeout delay must be non-negative, received: ${delay}`);
    }
    const existing = timersRef.current.get(key);
    if (existing !== void 0) {
      clearTimeout(existing);
    }
    const timer = setTimeout(() => {
      timersRef.current.delete(key);
      callback();
    }, delay);
    timersRef.current.set(key, timer);
  }, []);
  const clear = useCallback2((key) => {
    const timer = timersRef.current.get(key);
    if (timer !== void 0) {
      clearTimeout(timer);
      timersRef.current.delete(key);
    }
  }, []);
  const clearAll = useCallback2(() => {
    timersRef.current.forEach((timer) => {
      clearTimeout(timer);
    });
    timersRef.current.clear();
  }, []);
  const has = useCallback2(
    (key) => {
      return timersRef.current.has(key);
    },
    []
  );
  const setBatch = useCallback2(
    (configs) => {
      configs.forEach((config) => {
        clear(config.key);
      });
      configs.forEach((config) => {
        set(config.key, config.callback, config.delay);
      });
    },
    [clear, set]
  );
  const clearBatch = useCallback2(
    (keys) => {
      keys.forEach((key) => {
        clear(key);
      });
    },
    [clear]
  );
  useEffect2(() => {
    return () => {
      clearAll();
    };
  }, [clearAll]);
  return { set, clear, clearAll, has, setBatch, clearBatch };
}

// src/utils/hooks/use-touch-gestures.ts
import { useEffect as useEffect3, useRef as useRef3, useCallback as useCallback3 } from "react";

// src/utils/hooks/use-history.ts
import { useState as useState2, useCallback as useCallback4, useRef as useRef4 } from "react";
function useHistory(initialValue, maxHistory = 50) {
  const [history, setHistory] = useState2({
    past: [],
    present: initialValue,
    future: []
  });
  const isUndoRedoRef = useRef4(false);
  const setState = useCallback4(
    (value) => {
      if (isUndoRedoRef.current) {
        isUndoRedoRef.current = false;
        return;
      }
      setHistory((prev) => ({
        past: [...prev.past, prev.present].slice(-maxHistory),
        present: value,
        future: []
      }));
    },
    [maxHistory]
  );
  const undo = useCallback4(() => {
    setHistory((prev) => {
      if (prev.past.length === 0) return prev;
      const newPast = [...prev.past];
      const newPresent = newPast.pop();
      isUndoRedoRef.current = true;
      return {
        past: newPast,
        present: newPresent,
        future: [prev.present, ...prev.future]
      };
    });
  }, []);
  const redo = useCallback4(() => {
    setHistory((prev) => {
      if (prev.future.length === 0) return prev;
      const newFuture = [...prev.future];
      const newPresent = newFuture.shift();
      isUndoRedoRef.current = true;
      return {
        past: [...prev.past, prev.present],
        present: newPresent,
        future: newFuture
      };
    });
  }, []);
  const clear = useCallback4(() => {
    setHistory({
      past: [],
      present: history.present,
      future: []
    });
  }, [history.present]);
  return {
    state: history.present,
    setState,
    undo,
    redo,
    canUndo: history.past.length > 0,
    canRedo: history.future.length > 0,
    clear
  };
}

// src/components/Input/index.tsx
init_functions();
init_constants();

// src/components/Input/sub-components.tsx
init_constants();
init_functions();
import { m as m2, AnimatePresence as AnimatePresence2 } from "motion/react";
import { memo as memo2 } from "react";
import { jsx as jsx3, jsxs as jsxs3 } from "react/jsx-runtime";
var PasteFlash = memo2(function PasteFlash2({ show }) {
  return /* @__PURE__ */ jsx3(AnimatePresence2, { children: show && /* @__PURE__ */ jsx3(
    m2.span,
    {
      className: "absolute inset-0 bg-primary rounded-[inherit] pointer-events-none",
      variants: PASTE_FLASH_VARIANTS,
      exit: { opacity: 0 },
      initial: "initial",
      animate: "animate"
    }
  ) });
});
var LoadingIndicator = memo2(function LoadingIndicator2({ progress, iconSize }) {
  const hasProgress = typeof progress === "number";
  const clampedProgress = hasProgress ? Math.min(100, Math.max(0, progress)) : 0;
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - clampedProgress / 100 * circumference;
  return /* @__PURE__ */ jsxs3(
    m2.span,
    {
      className: "relative flex items-center justify-center",
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      transition: { type: "spring", stiffness: 400, damping: 25 },
      role: "progressbar",
      "aria-valuenow": hasProgress ? clampedProgress : void 0,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-label": hasProgress ? `Loading ${Math.round(clampedProgress)}%` : "Loading",
      children: [
        hasProgress ? /* @__PURE__ */ jsxs3("svg", { className: cn(iconSize, "text-primary -rotate-90"), viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx3("circle", { cx: "12", cy: "12", r: radius, stroke: "currentColor", strokeOpacity: "0.15", strokeWidth: "2.5" }),
          /* @__PURE__ */ jsx3(
            m2.circle,
            {
              cx: "12",
              cy: "12",
              r: radius,
              fill: "none",
              strokeWidth: "2.5",
              strokeLinecap: "round",
              stroke: "currentColor",
              animate: { strokeDashoffset },
              strokeDasharray: circumference,
              initial: { strokeDashoffset: circumference },
              transition: { type: "spring", stiffness: 100, damping: 20 }
            }
          )
        ] }) : /* @__PURE__ */ jsxs3(
          m2.svg,
          {
            fill: "none",
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            animate: { rotate: 360 },
            className: cn(iconSize, "text-primary"),
            transition: { repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" },
            children: [
              /* @__PURE__ */ jsx3("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeOpacity: "0.15", strokeWidth: "2.5" }),
              /* @__PURE__ */ jsx3("path", { d: "M12 2C6.47715 2 2 6.47715 2 12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" })
            ]
          }
        ),
        hasProgress && /* @__PURE__ */ jsx3(
          m2.span,
          {
            "aria-hidden": "true",
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            className: "absolute text-[8px] font-semibold text-primary tabular-nums",
            children: Math.round(clampedProgress)
          },
          Math.round(clampedProgress)
        )
      ]
    }
  );
});
var ValidationIcon = memo2(function ValidationIcon2({ state, iconSize }) {
  const icons = {
    success: /* @__PURE__ */ jsxs3("svg", { className: cn(iconSize, "text-green-500"), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx3("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx3("path", { d: "m9 11 3 3L22 4", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    warning: /* @__PURE__ */ jsxs3("svg", { className: cn(iconSize, "text-amber-500"), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx3("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx3("path", { d: "M12 9v4", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx3("path", { d: "M12 17h.01", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    error: /* @__PURE__ */ jsxs3("svg", { className: cn(iconSize, "text-red-500"), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx3("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx3("path", { d: "m15 9-6 6", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx3("path", { d: "m9 9 6 6", strokeLinecap: "round", strokeLinejoin: "round" })
    ] })
  };
  return /* @__PURE__ */ jsx3(
    m2.span,
    {
      exit: "exit",
      initial: "initial",
      animate: "animate",
      variants: STATUS_ICON_VARIANTS,
      "aria-label": state === "success" ? "Valid" : state === "error" ? "Invalid" : "Warning",
      children: icons[state]
    }
  );
});
var ActionButton = memo2(function ActionButton2({
  label,
  onClick,
  disabled,
  iconSize,
  children,
  isSuccess
}) {
  return /* @__PURE__ */ jsx3(
    m2.button,
    {
      type: "button",
      onClick,
      disabled,
      className: cn(
        iconSize,
        "text-muted-foreground hover:text-foreground transition-colors rounded-sm",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
        disabled && "opacity-50 cursor-not-allowed"
      ),
      whileHover: disabled ? void 0 : "hover",
      animate: isSuccess ? "success" : "initial",
      whileTap: disabled ? void 0 : "tap",
      variants: ACTION_BUTTON_VARIANTS,
      "aria-label": label,
      initial: "initial",
      children
    }
  );
});
var ValidationProgressBar = memo2(function ValidationProgressBar2({ progress }) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return /* @__PURE__ */ jsx3(
    m2.div,
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      exit: { opacity: 0 },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "aria-valuenow": clampedProgress,
      className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]",
      children: /* @__PURE__ */ jsx3(
        m2.div,
        {
          initial: { width: 0 },
          className: "h-full bg-primary",
          animate: { width: `${clampedProgress}%` },
          transition: { type: "spring", stiffness: 100, damping: 20 }
        }
      )
    }
  );
});
var LoadingProgressBar = memo2(function LoadingProgressBar2({ progress }) {
  const hasProgress = typeof progress === "number";
  const clampedProgress = hasProgress ? Math.min(100, Math.max(0, progress)) : 0;
  if (!hasProgress) {
    return /* @__PURE__ */ jsx3(
      m2.div,
      {
        role: "progressbar",
        "aria-label": "Loading",
        exit: { opacity: 0 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]",
        children: /* @__PURE__ */ jsx3(
          m2.div,
          {
            animate: { x: ["-100%", "400%"] },
            className: "h-full w-1/3 bg-primary",
            transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsx3(
    m2.div,
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      exit: { opacity: 0 },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "aria-valuenow": clampedProgress,
      className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]",
      children: /* @__PURE__ */ jsx3(
        m2.div,
        {
          className: "h-full bg-primary",
          initial: { width: 0 },
          animate: { width: `${clampedProgress}%` },
          transition: { type: "spring", stiffness: 100, damping: 20 }
        }
      )
    }
  );
});
var HistoryButtons = memo2(function HistoryButtons2({ canUndo, canRedo, onUndo, onRedo, iconSize }) {
  return /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-0.5", role: "group", "aria-label": "History controls", children: [
    /* @__PURE__ */ jsx3(
      m2.button,
      {
        type: "button",
        onClick: onUndo,
        disabled: !canUndo,
        className: cn(
          iconSize,
          "text-muted-foreground hover:text-foreground transition-colors rounded-sm",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
          !canUndo && "opacity-30 cursor-not-allowed hover:text-muted-foreground"
        ),
        variants: ACTION_BUTTON_VARIANTS,
        initial: "initial",
        whileHover: canUndo ? "hover" : void 0,
        whileTap: canUndo ? "tap" : void 0,
        "aria-label": "Undo",
        children: /* @__PURE__ */ jsxs3("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx3("path", { d: "M3 7v6h6", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsx3("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", strokeLinecap: "round", strokeLinejoin: "round" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx3(
      m2.button,
      {
        type: "button",
        onClick: onRedo,
        disabled: !canRedo,
        className: cn(
          iconSize,
          "text-muted-foreground hover:text-foreground transition-colors rounded-sm",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/50",
          !canRedo && "opacity-30 cursor-not-allowed hover:text-muted-foreground"
        ),
        whileHover: canRedo ? "hover" : void 0,
        whileTap: canRedo ? "tap" : void 0,
        variants: ACTION_BUTTON_VARIANTS,
        initial: "initial",
        "aria-label": "Redo",
        children: /* @__PURE__ */ jsxs3("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx3("path", { d: "M21 7v6h-6", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsx3("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", strokeLinecap: "round", strokeLinejoin: "round" })
        ] })
      }
    )
  ] });
});
var ClearButton = memo2(function ClearButton2({ onClick, iconSize }) {
  return /* @__PURE__ */ jsx3(ActionButton, { onClick, label: "Clear", iconSize, children: /* @__PURE__ */ jsx3("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: /* @__PURE__ */ jsx3("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
});
var CopyButton = memo2(function CopyButton2({ onClick, iconSize, copied }) {
  return /* @__PURE__ */ jsx3(ActionButton, { onClick, label: "Copy", iconSize, isSuccess: copied, children: /* @__PURE__ */ jsx3(AnimatePresence2, { mode: "wait", children: copied ? /* @__PURE__ */ jsx3(
    m2.svg,
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      className: "w-full h-full text-green-500",
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0, opacity: 0 },
      "aria-hidden": "true",
      children: /* @__PURE__ */ jsx3("path", { d: "M20 6L9 17l-5-5", strokeLinecap: "round", strokeLinejoin: "round" })
    },
    "check"
  ) : /* @__PURE__ */ jsxs3(
    m2.svg,
    {
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      className: "w-full h-full",
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      exit: { scale: 0, opacity: 0 },
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ jsx3("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
        /* @__PURE__ */ jsx3("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
      ]
    },
    "copy"
  ) }) });
});
var PasteButton = memo2(function PasteButton2({ onClick, iconSize, pasted }) {
  return /* @__PURE__ */ jsx3(ActionButton, { onClick, label: "Paste", iconSize, isSuccess: pasted, children: /* @__PURE__ */ jsx3(AnimatePresence2, { mode: "wait", children: pasted ? /* @__PURE__ */ jsx3(
    m2.svg,
    {
      fill: "none",
      strokeWidth: "2",
      "aria-hidden": "true",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      exit: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      initial: { scale: 0, opacity: 0 },
      className: "w-full h-full text-green-500",
      children: /* @__PURE__ */ jsx3("path", { d: "M20 6L9 17l-5-5", strokeLinecap: "round", strokeLinejoin: "round" })
    },
    "check"
  ) : /* @__PURE__ */ jsxs3(
    m2.svg,
    {
      fill: "none",
      strokeWidth: "2",
      "aria-hidden": "true",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
      className: "w-full h-full",
      exit: { scale: 0, opacity: 0 },
      initial: { scale: 0, opacity: 0 },
      animate: { scale: 1, opacity: 1 },
      children: [
        /* @__PURE__ */ jsx3("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
        /* @__PURE__ */ jsx3("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" })
      ]
    },
    "paste"
  ) }) });
});
var PasswordToggleButton = memo2(function PasswordToggleButton2({
  onClick,
  iconSize,
  showPassword
}) {
  return /* @__PURE__ */ jsx3(ActionButton, { onClick, label: showPassword ? "Hide password" : "Show password", iconSize, children: showPassword ? /* @__PURE__ */ jsxs3("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx3("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }),
    /* @__PURE__ */ jsx3("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
  ] }) : /* @__PURE__ */ jsxs3("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx3("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ jsx3("circle", { cx: "12", cy: "12", r: "3" })
  ] }) });
});
var ClipboardErrorMessage = memo2(function ClipboardErrorMessage2({ message, onDismiss }) {
  return /* @__PURE__ */ jsxs3(
    m2.div,
    {
      className: "flex items-center justify-between gap-2 mt-1.5 px-2 py-1.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md",
      initial: { opacity: 0, y: -4, height: 0 },
      animate: { opacity: 1, y: 0, height: "auto" },
      exit: { opacity: 0, y: -4, height: 0 },
      transition: { duration: 0.2 },
      role: "alert",
      children: [
        /* @__PURE__ */ jsxs3("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs3("svg", { className: "w-4 h-4 text-red-500 shrink-0", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx3("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx3("path", { d: "M12 8v4", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx3("path", { d: "M12 16h.01", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ jsx3("span", { className: "text-xs text-red-600 dark:text-red-400", children: message })
        ] }),
        /* @__PURE__ */ jsx3(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "p-0.5 text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50",
            "aria-label": "Dismiss error",
            children: /* @__PURE__ */ jsx3("svg", { className: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx3("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" }) })
          }
        )
      ]
    }
  );
});

// src/components/Input/index.tsx
import { Fragment as Fragment2, jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var InsideLabel2 = lazy(() => Promise.resolve().then(() => (init_InsideLabel(), InsideLabel_exports)));
var OutsideLabel2 = lazy(() => Promise.resolve().then(() => (init_OutsideLabel(), OutsideLabel_exports)));
var OutsideTopLabel2 = lazy(() => Promise.resolve().then(() => (init_OutsideTopLabel(), OutsideTopLabel_exports)));
var OutsideLeftLabel2 = lazy(() => Promise.resolve().then(() => (init_OutsideLeftLabel(), OutsideLeftLabel_exports)));
var RippleContainer2 = lazy(() => Promise.resolve().then(() => (init_RippleContainer(), RippleContainer_exports)));
var CharacterCounter2 = lazy(() => Promise.resolve().then(() => (init_CharacterCounter(), CharacterCounter_exports)));
var RequirementsList2 = lazy(() => Promise.resolve().then(() => (init_RequirementsList(), RequirementsList_exports)));
var SuggestionsDropdown2 = lazy(() => Promise.resolve().then(() => (init_SuggestionsDropdown(), SuggestionsDropdown_exports)));
var PasswordStrengthMeter2 = lazy(() => Promise.resolve().then(() => (init_PasswordStrengthMeter(), PasswordStrengthMeter_exports)));
function InputInner(InnerProps) {
  const {
    variant = "default",
    size = "md",
    radius = "md",
    shadow = "none",
    label,
    labelPosition = "inside",
    labelAnimation = "spring",
    formatAs = "none",
    phoneFormat = "US",
    customPhoneFormat,
    currencySymbol = "$",
    prefix,
    suffix,
    error,
    warning,
    success,
    helperText,
    validationProgress,
    loadingProgress = 0,
    isLoading,
    asyncValidate,
    asyncValidateOnChange = true,
    asyncDebounceMs = 500,
    asyncValidateTimeout = 1e4,
    showCharacterCount,
    limit,
    maxCharacters,
    characterRestrictions,
    showClearButton,
    showCopyButton,
    showPasteButton,
    allowCopy = true,
    allowPaste = true,
    onCopy,
    onPaste,
    onClipboardError,
    trailingIcon,
    leadingIcon,
    multiline = false,
    rows = 3,
    maxRows,
    resize = "vertical",
    obscureAfterTimeout,
    isObscuredControlled,
    onObscureChange,
    watermarkOnCopy,
    selectAllOnDoubleClick = true,
    autoCapitalize = "none",
    suggestions,
    onSuggestionSelect,
    enableRipple = true,
    enableHaptics = false,
    enableHistory = false,
    showHistoryButtons = false,
    smartPaste = false,
    shakeOnError = true,
    shakeOnSuccess = false,
    direction = "ltr",
    className,
    type = "text",
    id,
    name,
    placeholder,
    disabled,
    onChange,
    onValueChange,
    debounceMs = 0,
    showPasswordStrength,
    passwordRequirements,
    showRequirements,
    renderMessages,
    autoTabOnComplete = false,
    smartTrim = false,
    formatOnBlur = false,
    onComplete,
    onLongPress,
    longPressMs = 500,
    defaultValue,
    value: controlledValueProp,
    showPasswordToggle = false,
    animationBundle = "full",
    ref,
    ...props
  } = InnerProps;
  const inputRef = useRef5(null);
  const textareaRef = useRef5(null);
  const generatedId = useId();
  const timeouts = useTimeoutManager();
  const inputId = id || generatedId;
  const messageId = `${inputId}-message`;
  const listboxId = `${inputId}-listbox`;
  const [state, dispatch] = useReducer(inputReducer, defaultValue || "", createInitialState);
  const shouldReduceMotion = useReducedMotion();
  const activeRef = multiline ? textareaRef : inputRef;
  useImperativeHandle(ref, () => activeRef.current, [multiline]);
  const setInputRef = useCallback5((element) => {
    inputRef.current = element;
  }, []);
  const setTextareaRef = useCallback5((element) => {
    textareaRef.current = element;
  }, []);
  useEffect4(() => {
    if (controlledValueProp !== void 0) {
      dispatch({ type: "SET_VALUE", payload: controlledValueProp });
    }
  }, [controlledValueProp]);
  useEffect4(() => {
    if (isObscuredControlled !== void 0) {
      dispatch({ type: "SET_OBSCURED", payload: isObscuredControlled });
    }
  }, [isObscuredControlled]);
  const controlledValue = controlledValueProp !== void 0 ? controlledValueProp : state.value;
  const isDisabledOrLoading = disabled || isLoading;
  const hasValue = controlledValue.length > 0;
  const isFloating = useMemo(() => state.isFocused || hasValue, [state.isFocused, hasValue]);
  const shouldFloat = useMemo(() => isFloating || !!prefix, [isFloating, prefix]);
  const requiredAnimationBundle = useMemo(() => {
    if (animationBundle === "minimal") {
      const hasActionButtons = showClearButton || showCopyButton || showPasteButton || showHistoryButtons;
      const hasLayoutAnimations = labelPosition === "left" || showRequirements;
      const hasSuggestions = suggestions && suggestions.length > 0;
      const hasProgressBars = validationProgress !== void 0 || loadingProgress !== void 0 || isLoading;
      if (hasActionButtons || hasLayoutAnimations || hasSuggestions || hasProgressBars) {
        return "full";
      }
      return "minimal";
    }
    return animationBundle;
  }, [
    animationBundle,
    showClearButton,
    showCopyButton,
    showPasteButton,
    showHistoryButtons,
    labelPosition,
    showRequirements,
    suggestions,
    validationProgress,
    loadingProgress,
    isLoading
  ]);
  const animationFeatures = requiredAnimationBundle === "minimal" ? domMin : domAnimation;
  const isObscured = isObscuredControlled !== void 0 ? isObscuredControlled : state.isObscured;
  const historyHook = useHistory(defaultValue || "");
  const pushHistory = useCallback5((value) => historyHook.setState(value), [historyHook]);
  const { undo, redo, canUndo, canRedo } = historyHook;
  useEffect4(() => {
    if (enableHistory && controlledValueProp === void 0) {
      if (historyHook.state !== controlledValue) {
        dispatch({ type: "SET_VALUE", payload: historyHook.state });
        onValueChange?.(historyHook.state);
      }
    }
  }, [historyHook.state, enableHistory, controlledValue, controlledValueProp, onValueChange]);
  const { asyncError, isValidating, validateDebounced, validateAsync, clearError } = useAsyncValidation(
    asyncValidate,
    asyncDebounceMs,
    asyncValidateTimeout
  );
  const validationState = useMemo(() => {
    if (error || asyncError) return "error";
    if (warning) return "warning";
    if (success) return "success";
    return null;
  }, [error, warning, success, asyncError]);
  const { containerRef, triggerLongPressShake, triggerShake } = useShakeAnimation(!!(error || asyncError), !!success, shakeOnError);
  const { ripples, addRipple, removeRipple } = useRipple(enableRipple && !isDisabledOrLoading, enableHaptics);
  const { handlers: longPressHandlers } = useLongPress(
    onLongPress ? (val) => {
      triggerLongPressShake();
      onLongPress(val);
    } : void 0,
    () => controlledValue,
    longPressMs
  );
  const sizeStyles = useMemo(() => SIZE_STYLES[size], [size]);
  const radiusStyle = useMemo(() => RADIUS_STYLES[radius], [radius]);
  const shadowStyle = useMemo(() => SHADOW_STYLES[shadow], [shadow]);
  const passwordStrength = useMemo(() => type === "password" ? calculatePasswordStrength(controlledValue) : 0, [type, controlledValue]);
  const filteredSuggestions = useMemo(() => {
    if (!suggestions || !controlledValue) return suggestions || [];
    return suggestions.filter((s) => s.value.toLowerCase().includes(controlledValue.toLowerCase()));
  }, [suggestions, controlledValue]);
  const inputType = type === "password" && state.showPassword ? "text" : type;
  const displayValue = useMemo(() => {
    if (isObscured) return "\xE2\u20AC\xA2".repeat(controlledValue.length);
    return controlledValue;
  }, [controlledValue, isObscured]);
  const getVariantStyles = useCallback5(() => {
    const focusRing = "focus-within:ring-2 focus-within:ring-ring/20";
    const stateStyles = validationState === "error" ? "border-red-500 focus-within:ring-red-500/20" : validationState === "warning" ? "border-amber-500 focus-within:ring-amber-500/20" : validationState === "success" ? "border-green-500 focus-within:ring-green-500/20" : "";
    switch (variant) {
      case "filled":
        return cn(
          "bg-muted/40 border-transparent hover:bg-muted/60 focus-within:bg-background focus-within:border-border",
          focusRing,
          stateStyles
        );
      case "ghost":
        return cn("bg-transparent border-transparent hover:bg-muted/40", focusRing, stateStyles);
      case "underline":
        return cn("rounded-none border-x-0 border-t-0 border-b-2 bg-transparent", stateStyles || "border-border focus-within:border-primary");
      case "bordered":
        return cn("border-2", focusRing, stateStyles || "border-border focus-within:border-primary");
      case "flushed":
        return cn("rounded-none border-0 border-b bg-transparent", stateStyles || "border-border focus-within:border-primary");
      case "unstyled":
        return "border-0 bg-transparent shadow-none";
      default:
        return cn("bg-background border border-border/60 hover:border-border", focusRing, stateStyles || "focus-within:border-primary/60");
    }
  }, [variant, validationState]);
  const getInputTextColor = useCallback5(() => {
    if (validationState === "error") return "text-red-600";
    if (validationState === "warning") return "text-amber-600";
    if (validationState === "success") return "text-green-600";
    return "text-foreground";
  }, [validationState]);
  const getLabelColor = useCallback5(() => {
    if (validationState === "error") return "text-red-500";
    if (validationState === "warning") return "text-amber-500";
    if (validationState === "success") return "text-green-500";
    if (state.isFocused) return "text-primary";
    return "text-muted-foreground";
  }, [validationState, state.isFocused]);
  const containerClasses = useMemo(
    () => cn(
      "group/input relative flex items-center w-full transition-all duration-200",
      sizeStyles.height,
      sizeStyles.padding,
      sizeStyles.gap,
      radiusStyle,
      shadowStyle,
      getVariantStyles(),
      isDisabledOrLoading && "opacity-50 cursor-not-allowed",
      state.isFocused && "ring-2 ring-ring/20"
    ),
    [sizeStyles, radiusStyle, shadowStyle, getVariantStyles, isDisabledOrLoading, state.isFocused]
  );
  const inputClasses = useMemo(
    () => cn(
      "flex-1 min-w-0 bg-transparent outline-none",
      sizeStyles.text,
      "placeholder:text-muted-foreground/50",
      "transition-colors duration-150",
      getInputTextColor()
    ),
    [sizeStyles.text, getInputTextColor]
  );
  const formatValue = useCallback5(
    (val) => {
      if (formatAs === "none") return val;
      switch (formatAs) {
        case "phone":
          return formatPhone(val, phoneFormat, customPhoneFormat);
        case "creditCard":
          return formatCreditCard(val);
        case "date":
          return formatDate(val);
        case "currency":
          return formatCurrency(val, currencySymbol);
        default:
          return val;
      }
    },
    [formatAs, phoneFormat, customPhoneFormat, currencySymbol]
  );
  const trimValue = useCallback5((val) => {
    return val.trim().replace(/\s+/g, " ");
  }, []);
  const updateValue = useCallback5(
    (newValue, triggerEvents = true) => {
      if (characterRestrictions && !characterRestrictions.test(newValue) && newValue !== "") return;
      const effectiveMaxLength = maxCharacters || (multiline ? void 0 : props.maxLength);
      if (limit === "hard" && effectiveMaxLength && newValue.length > effectiveMaxLength) return;
      const processedValue = formatOnBlur ? newValue : formatValue(newValue);
      if (enableHistory) pushHistory(processedValue);
      dispatch({ type: "SET_VALUE", payload: processedValue });
      if (triggerEvents) {
        if (debounceMs > 0) {
          timeouts.clear("debounce");
          timeouts.set("debounce", () => onValueChange?.(processedValue), debounceMs);
        } else onValueChange?.(processedValue);
        if (asyncValidate && asyncValidateOnChange) validateDebounced(processedValue);
      }
      if (autoTabOnComplete && effectiveMaxLength && processedValue.length >= effectiveMaxLength) {
        const form = activeRef.current?.form;
        if (form) {
          const elements = Array.from(form.elements);
          const index = elements.indexOf(activeRef.current);
          const next = elements[index + 1];
          if (next && "focus" in next) {
            next.focus();
            onComplete?.();
          }
        }
      }
    },
    [
      characterRestrictions,
      limit,
      maxCharacters,
      multiline,
      props.maxLength,
      formatValue,
      formatOnBlur,
      enableHistory,
      pushHistory,
      debounceMs,
      onValueChange,
      asyncValidate,
      asyncValidateOnChange,
      validateDebounced,
      autoTabOnComplete,
      onComplete,
      activeRef
    ]
  );
  const handleChange = useCallback5(
    (e) => {
      const newValue = e.target.value;
      updateValue(newValue);
      if (suggestions && suggestions.length > 0 && newValue.length > 0) {
        dispatch({ type: "SET_SHOW_SUGGESTIONS", payload: true });
        dispatch({ type: "SET_ACTIVE_SUGGESTION", payload: -1 });
      } else dispatch({ type: "SET_SHOW_SUGGESTIONS", payload: false });
      onChange?.(e);
    },
    [updateValue, onChange, suggestions]
  );
  const handleFocus = useCallback5(
    (e) => {
      dispatch({ type: "FOCUS_INPUT" });
      timeouts.clear("obscure");
      if (isObscured && onObscureChange) onObscureChange(false);
      props.onFocus?.(e);
    },
    [props.onFocus, isObscured, onObscureChange, timeouts]
  );
  const handleBlur = useCallback5(
    (e) => {
      timeouts.set(
        "blur",
        () => {
          dispatch({ type: "BLUR_INPUT" });
          let currentValue = controlledValue;
          if (smartTrim && currentValue) {
            const trimmed = trimValue(currentValue);
            if (trimmed !== currentValue) currentValue = trimmed;
          }
          if (formatOnBlur && formatAs !== "none" && currentValue) {
            const formatted = formatValue(currentValue);
            if (formatted !== currentValue) currentValue = formatted;
          }
          if (currentValue !== controlledValue) {
            dispatch({ type: "SET_VALUE", payload: currentValue });
            onValueChange?.(currentValue);
          }
          if (obscureAfterTimeout && currentValue.length > 0) {
            timeouts.set(
              "obscure",
              () => {
                dispatch({ type: "SET_OBSCURED", payload: true });
                onObscureChange?.(true);
              },
              obscureAfterTimeout
            );
          }
          if (asyncValidate && !asyncValidateOnChange && currentValue) validateAsync(currentValue);
          props.onBlur?.(e);
        },
        BLUR_DELAY
      );
    },
    [
      timeouts,
      controlledValue,
      smartTrim,
      trimValue,
      formatOnBlur,
      formatAs,
      formatValue,
      onValueChange,
      obscureAfterTimeout,
      onObscureChange,
      asyncValidate,
      asyncValidateOnChange,
      validateAsync,
      props.onBlur
    ]
  );
  const handlePaste = useCallback5(
    (e) => {
      if (!allowPaste) {
        e.preventDefault();
        return;
      }
      const pastedText = e.clipboardData.getData("text");
      if (smartPaste) {
        e.preventDefault();
        const formatted = detectAndFormat(pastedText);
        updateValue(formatted);
      }
      dispatch({ type: "SET_PASTE_FLASH", payload: true });
      timeouts.set("pasteFlash", () => dispatch({ type: "SET_PASTE_FLASH", payload: false }), PASTE_FLASH_DURATION);
      dispatch({ type: "SET_PASTED", payload: true });
      timeouts.set("pasteFeedback", () => dispatch({ type: "SET_PASTED", payload: false }), PASTE_FEEDBACK_DURATION);
      if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(5);
      onPaste?.(pastedText);
    },
    [allowPaste, smartPaste, updateValue, timeouts, enableHaptics, onPaste]
  );
  const handleCopyPrevention = useCallback5(
    (e) => {
      if (!allowCopy) {
        e.preventDefault();
        return;
      }
      if (watermarkOnCopy) {
        e.preventDefault();
        const textWithWatermark = `${controlledValue}

${watermarkOnCopy}`;
        e.clipboardData.setData("text/plain", textWithWatermark);
      }
    },
    [allowCopy, watermarkOnCopy, controlledValue]
  );
  const handleDoubleClick = useCallback5(() => {
    if (selectAllOnDoubleClick && activeRef.current) activeRef.current.select();
  }, [selectAllOnDoubleClick, activeRef]);
  const handleUndo = useCallback5(() => {
    if (canUndo) undo();
  }, [undo, canUndo]);
  const handleRedo = useCallback5(() => {
    if (canRedo) redo();
  }, [redo, canRedo]);
  const handleSuggestionSelect = useCallback5(
    (suggestion) => {
      updateValue(suggestion.value);
      timeouts.set(
        "suggestionClose",
        () => {
          dispatch({ type: "SET_SHOW_SUGGESTIONS", payload: false });
          activeRef.current?.blur();
        },
        0
      );
      onSuggestionSelect?.(suggestion);
    },
    [updateValue, onSuggestionSelect, activeRef, timeouts]
  );
  const handleKeyDown = useCallback5(
    (e) => {
      if (enableHistory) {
        if ((e.ctrlKey || e.metaKey) && e.key === "z" && !e.shiftKey) {
          e.preventDefault();
          handleUndo();
        }
        if ((e.ctrlKey || e.metaKey) && (e.key === "y" || e.key === "z" && e.shiftKey)) {
          e.preventDefault();
          handleRedo();
        }
      }
      if (state.showSuggestions && filteredSuggestions.length > 0) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          dispatch({
            type: "SET_ACTIVE_SUGGESTION",
            payload: Math.min(state.activeSuggestionIndex + 1, filteredSuggestions.length - 1)
          });
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          dispatch({
            type: "SET_ACTIVE_SUGGESTION",
            payload: Math.max(state.activeSuggestionIndex - 1, 0)
          });
        } else if (e.key === "Enter" && state.activeSuggestionIndex >= 0) {
          e.preventDefault();
          handleSuggestionSelect(filteredSuggestions[state.activeSuggestionIndex]);
        } else if (e.key === "Escape") dispatch({ type: "SET_SHOW_SUGGESTIONS", payload: false });
      }
      props.onKeyDown?.(e);
    },
    [
      enableHistory,
      handleUndo,
      handleRedo,
      state.showSuggestions,
      state.activeSuggestionIndex,
      filteredSuggestions,
      handleSuggestionSelect,
      props.onKeyDown
    ]
  );
  const handleClear = useCallback5(() => {
    updateValue("");
    clearError();
    dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });
    activeRef.current?.focus();
    if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(5);
  }, [updateValue, clearError, enableHaptics, activeRef]);
  const handleCopy = useCallback5(async () => {
    dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });
    try {
      const textToCopy = watermarkOnCopy ? `${controlledValue}

${watermarkOnCopy}` : controlledValue;
      await navigator.clipboard.writeText(textToCopy);
      dispatch({ type: "SET_COPIED", payload: true });
      timeouts.set("copyFeedback", () => dispatch({ type: "SET_COPIED", payload: false }), COPY_FEEDBACK_DURATION);
      if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(5);
      onCopy?.(controlledValue);
    } catch (err) {
      const error2 = err instanceof Error ? err : new Error("Failed to copy to clipboard");
      dispatch({ type: "SET_CLIPBOARD_ERROR", payload: "Copy failed. Try selecting and using Ctrl+C." });
      onClipboardError?.(error2, "copy");
      timeouts.set("clipboardError", () => dispatch({ type: "CLEAR_CLIPBOARD_ERROR" }), 5e3);
      if (activeRef.current) activeRef.current.select();
      triggerShake();
    }
  }, [controlledValue, watermarkOnCopy, enableHaptics, onCopy, onClipboardError, activeRef, triggerShake]);
  const handlePasteButton = useCallback5(async () => {
    dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });
    try {
      const text = await navigator.clipboard.readText();
      const newValue = smartPaste ? detectAndFormat(text) : text;
      updateValue(newValue);
      dispatch({ type: "SET_PASTE_FLASH", payload: true });
      timeouts.set("pasteFlash", () => dispatch({ type: "SET_PASTE_FLASH", payload: false }), PASTE_FLASH_DURATION);
      dispatch({ type: "SET_PASTED", payload: true });
      timeouts.set("pasteFeedback", () => dispatch({ type: "SET_PASTED", payload: false }), PASTE_FEEDBACK_DURATION);
      if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(5);
      onPaste?.(text);
    } catch (err) {
      const error2 = err instanceof Error ? err : new Error("Failed to read from clipboard");
      dispatch({ type: "SET_CLIPBOARD_ERROR", payload: "Paste failed. Try using Ctrl+V instead." });
      onClipboardError?.(error2, "paste");
      timeouts.set("clipboardError", () => dispatch({ type: "CLEAR_CLIPBOARD_ERROR" }), 5e3);
      triggerShake();
    }
  }, [smartPaste, updateValue, timeouts, enableHaptics, onPaste, onClipboardError, triggerShake]);
  const handleDismissClipboardError = useCallback5(() => {
    dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });
    timeouts.clear("clipboardError");
  }, [timeouts]);
  const togglePassword = useCallback5(() => {
    dispatch({ type: "TOGGLE_PASSWORD" });
    if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(3);
  }, [enableHaptics]);
  const handleContainerClick = useCallback5(
    (e) => {
      addRipple(e);
      if (!isDisabledOrLoading && activeRef.current) activeRef.current.focus();
    },
    [addRipple, isDisabledOrLoading, activeRef]
  );
  const actionButtons = useMemo(() => {
    const buttons = [];
    const iconSize = sizeStyles.iconSize;
    if (enableHistory && showHistoryButtons) {
      buttons.push(
        /* @__PURE__ */ jsx12(HistoryButtons, { canUndo, canRedo, onUndo: handleUndo, onRedo: handleRedo, iconSize }, "history")
      );
    }
    if (isLoading || isValidating) {
      buttons.push(/* @__PURE__ */ jsx12(LoadingIndicator, { progress: loadingProgress, iconSize }, "loading"));
    } else if (validationState && !showClearButton) {
      buttons.push(/* @__PURE__ */ jsx12(ValidationIcon, { state: validationState, iconSize }, "validation"));
    }
    if (showClearButton && hasValue && !isDisabledOrLoading) {
      buttons.push(/* @__PURE__ */ jsx12(ClearButton, { onClick: handleClear, iconSize }, "clear"));
    }
    if (showCopyButton && !isDisabledOrLoading) {
      buttons.push(/* @__PURE__ */ jsx12(CopyButton, { onClick: handleCopy, iconSize, copied: state.copied }, "copy"));
    }
    if (showPasteButton && !isDisabledOrLoading) {
      buttons.push(/* @__PURE__ */ jsx12(PasteButton, { onClick: handlePasteButton, iconSize, pasted: state.pasted }, "paste"));
    }
    if (showPasswordToggle && type === "password") {
      buttons.push(/* @__PURE__ */ jsx12(PasswordToggleButton, { onClick: togglePassword, iconSize, showPassword: state.showPassword }, "password"));
    }
    if (trailingIcon) {
      buttons.push(
        /* @__PURE__ */ jsx12(
          m12.span,
          {
            className: "text-muted-foreground shrink-0",
            animate: { scale: state.isFocused ? 1.05 : 1 },
            transition: { duration: 0.15 },
            children: trailingIcon
          },
          "trailing"
        )
      );
    }
    return buttons;
  }, [
    sizeStyles.iconSize,
    enableHistory,
    showHistoryButtons,
    canUndo,
    canRedo,
    handleUndo,
    handleRedo,
    isLoading,
    isValidating,
    loadingProgress,
    validationState,
    showClearButton,
    hasValue,
    isDisabledOrLoading,
    handleClear,
    showCopyButton,
    handleCopy,
    state.copied,
    showPasteButton,
    handlePasteButton,
    state.pasted,
    showPasswordToggle,
    type,
    togglePassword,
    state.showPassword,
    trailingIcon,
    state.isFocused
  ]);
  const progressBar = useMemo(() => {
    if (typeof validationProgress === "number") return /* @__PURE__ */ jsx12(ValidationProgressBar, { progress: validationProgress });
    if (isLoading) return /* @__PURE__ */ jsx12(LoadingProgressBar, { progress: loadingProgress });
    return null;
  }, [validationProgress, isLoading, loadingProgress]);
  const messagesArea = useMemo(() => {
    const errorMsg = typeof error === "string" ? error : asyncError;
    const warningMsg = typeof warning === "string" ? warning : null;
    const successMsg = typeof success === "string" ? success : null;
    if (renderMessages) {
      return renderMessages({
        error: errorMsg || void 0,
        warning: warningMsg || void 0,
        success: successMsg || void 0,
        helper: helperText
      });
    }
    const message = errorMsg || warningMsg || successMsg || helperText;
    if (!message) return null;
    const color = errorMsg ? "text-red-500" : warningMsg ? "text-amber-500" : successMsg ? "text-green-500" : "text-muted-foreground";
    const isError = !!errorMsg;
    return /* @__PURE__ */ jsx12(
      m12.p,
      {
        id: messageId,
        exit: { opacity: 0, y: -4 },
        animate: { opacity: 1, y: 0 },
        initial: { opacity: 0, y: -4 },
        transition: { duration: 0.15 },
        role: isError ? "alert" : void 0,
        className: cn("text-xs mt-1.5", color),
        "aria-live": isError ? "assertive" : "polite",
        children: message
      },
      message
    );
  }, [error, asyncError, warning, success, helperText, renderMessages, messageId]);
  const bottomSection = useMemo(() => {
    return /* @__PURE__ */ jsxs8(Fragment2, { children: [
      state.clipboardError && /* @__PURE__ */ jsx12(ClipboardErrorMessage, { message: state.clipboardError, onDismiss: handleDismissClipboardError }),
      showCharacterCount && maxCharacters && /* @__PURE__ */ jsx12(Suspense, { fallback: null, children: /* @__PURE__ */ jsx12("div", { className: "flex justify-end mt-1.5", children: /* @__PURE__ */ jsx12(CharacterCounter2, { current: controlledValue.length, max: maxCharacters, limit }) }) }),
      messagesArea,
      showPasswordStrength && type === "password" && /* @__PURE__ */ jsx12(Suspense, { fallback: null, children: /* @__PURE__ */ jsx12(PasswordStrengthMeter2, { strength: passwordStrength }) }),
      showRequirements && passwordRequirements && /* @__PURE__ */ jsx12(Suspense, { fallback: null, children: /* @__PURE__ */ jsx12(RequirementsList2, { requirements: passwordRequirements, value: controlledValue }) }),
      /* @__PURE__ */ jsx12("div", { className: "relative", children: /* @__PURE__ */ jsx12(Suspense, { fallback: null, children: /* @__PURE__ */ jsx12(
        SuggestionsDropdown2,
        {
          inputId,
          isOpen: state.showSuggestions,
          suggestions: filteredSuggestions,
          onSelect: handleSuggestionSelect,
          activeIndex: state.activeSuggestionIndex
        }
      ) }) })
    ] });
  }, [
    state.clipboardError,
    handleDismissClipboardError,
    showCharacterCount,
    maxCharacters,
    controlledValue,
    limit,
    messagesArea,
    showPasswordStrength,
    type,
    passwordStrength,
    showRequirements,
    passwordRequirements,
    filteredSuggestions,
    state.showSuggestions,
    state.activeSuggestionIndex,
    handleSuggestionSelect,
    inputId
  ]);
  const commonAriaProps = useMemo(
    () => ({
      "aria-describedby": messageId,
      "aria-busy": isLoading || isValidating,
      "aria-invalid": validationState === "error",
      "aria-controls": suggestions?.length ? listboxId : void 0,
      "aria-autocomplete": suggestions?.length ? "list" : void 0,
      "aria-activedescendant": state.showSuggestions && state.activeSuggestionIndex >= 0 ? `${inputId}-option-${state.activeSuggestionIndex}` : void 0
    }),
    [
      validationState,
      messageId,
      isLoading,
      isValidating,
      suggestions?.length,
      listboxId,
      state.showSuggestions,
      state.activeSuggestionIndex,
      inputId
    ]
  );
  const inputContent = useMemo(
    () => /* @__PURE__ */ jsxs8(Fragment2, { children: [
      /* @__PURE__ */ jsx12(RippleContainer2, { ripples, onComplete: removeRipple }),
      /* @__PURE__ */ jsx12(PasteFlash, { show: state.showPasteFlash }),
      prefix && /* @__PURE__ */ jsx12("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
      leadingIcon && /* @__PURE__ */ jsx12(
        m12.span,
        {
          className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
          animate: { scale: state.isFocused ? 1.05 : 1 },
          transition: { duration: 0.15 },
          children: leadingIcon
        }
      ),
      /* @__PURE__ */ jsx12(
        "input",
        {
          name,
          id: inputId,
          type: inputType,
          ref: setInputRef,
          onBlur: handleBlur,
          value: displayValue,
          style: { direction },
          onFocus: handleFocus,
          onPaste: handlePaste,
          onChange: handleChange,
          className: inputClasses,
          onKeyDown: handleKeyDown,
          onCopy: handleCopyPrevention,
          "aria-required": props.required,
          disabled: isDisabledOrLoading,
          autoCapitalize,
          onDoubleClick: handleDoubleClick,
          placeholder: isFloating || labelPosition === "outside-top" ? placeholder : "",
          ...commonAriaProps
        }
      ),
      suffix && /* @__PURE__ */ jsx12("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
      actionButtons,
      progressBar
    ] }),
    [
      ripples,
      removeRipple,
      state.showPasteFlash,
      prefix,
      leadingIcon,
      state.isFocused,
      setInputRef,
      inputId,
      name,
      inputType,
      displayValue,
      isDisabledOrLoading,
      isFloating,
      labelPosition,
      placeholder,
      inputClasses,
      direction,
      handleChange,
      handleFocus,
      handleBlur,
      handlePaste,
      handleCopyPrevention,
      handleDoubleClick,
      handleKeyDown,
      autoCapitalize,
      commonAriaProps,
      suffix,
      actionButtons,
      progressBar
    ]
  );
  if (multiline) {
    return /* @__PURE__ */ jsx12(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx12(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      label && /* @__PURE__ */ jsx12(
        OutsideTopLabel2,
        {
          label,
          htmlFor: inputId,
          isFocused: state.isFocused,
          colorClass: getLabelColor(),
          shouldReduceMotion: shouldReduceMotion ?? false
        }
      ),
      /* @__PURE__ */ jsxs8(
        "div",
        {
          className: cn(containerClasses, "h-auto min-h-20 items-start py-3"),
          onClick: handleContainerClick,
          ...onLongPress ? longPressHandlers : {},
          children: [
            /* @__PURE__ */ jsx12(RippleContainer2, { ripples, onComplete: removeRipple }),
            /* @__PURE__ */ jsx12(PasteFlash, { show: state.showPasteFlash }),
            leadingIcon && /* @__PURE__ */ jsx12(
              m12.span,
              {
                className: cn("text-muted-foreground shrink-0 mt-0.5 transition-colors", state.isFocused && "text-foreground"),
                animate: { scale: state.isFocused ? 1.05 : 1 },
                transition: { duration: 0.15 },
                children: leadingIcon
              }
            ),
            /* @__PURE__ */ jsx12(
              "textarea",
              {
                ref: setTextareaRef,
                id: inputId,
                name,
                value: displayValue,
                disabled: isDisabledOrLoading,
                placeholder,
                rows,
                maxLength: maxCharacters,
                className: cn(inputClasses, "py-0 min-h-full", {
                  "resize-none": resize === "none",
                  "resize-y": resize === "vertical",
                  "resize-x": resize === "horizontal",
                  resize: resize === "both"
                }),
                style: { direction, maxHeight: maxRows ? `${maxRows * 1.5}em` : void 0 },
                onKeyDown: handleKeyDown,
                onChange: handleChange,
                onFocus: handleFocus,
                onBlur: handleBlur,
                onDoubleClick: handleDoubleClick,
                autoCapitalize,
                onCopy: handleCopyPrevention,
                onPaste: handlePaste,
                ...commonAriaProps
              }
            ),
            actionButtons,
            progressBar
          ]
        }
      ),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "outside-top") {
    return /* @__PURE__ */ jsx12(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx12(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      label && /* @__PURE__ */ jsx12(
        OutsideTopLabel2,
        {
          label,
          htmlFor: inputId,
          isFocused: state.isFocused,
          colorClass: getLabelColor(),
          shouldReduceMotion: shouldReduceMotion ?? false
        }
      ),
      /* @__PURE__ */ jsx12("div", { className: containerClasses, onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: inputContent }),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "outside" || labelPosition === "outside-border") {
    return /* @__PURE__ */ jsx12(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx12(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxs8("div", { className: cn(containerClasses, "relative mt-7"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: [
        /* @__PURE__ */ jsx12(RippleContainer2, { ripples, onComplete: removeRipple }),
        /* @__PURE__ */ jsx12(PasteFlash, { show: state.showPasteFlash }),
        label && /* @__PURE__ */ jsx12(
          OutsideLabel2,
          {
            label,
            htmlFor: inputId,
            isFloating: shouldFloat,
            isFocused: state.isFocused,
            colorClass: getLabelColor(),
            hasLeadingIcon: !!leadingIcon,
            hasPrefix: !!prefix,
            shouldReduceMotion: shouldReduceMotion ?? false,
            sizeClass: sizeStyles.text
          }
        ),
        leadingIcon && /* @__PURE__ */ jsx12(
          m12.span,
          {
            className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
            animate: { scale: state.isFocused ? 1.05 : 1 },
            transition: { duration: 0.15 },
            children: leadingIcon
          }
        ),
        prefix && /* @__PURE__ */ jsx12("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
        /* @__PURE__ */ jsx12(
          "input",
          {
            ref: setInputRef,
            id: inputId,
            name,
            type: inputType,
            value: displayValue,
            disabled: isDisabledOrLoading,
            placeholder: shouldFloat ? placeholder : "",
            className: inputClasses,
            style: { direction },
            onChange: handleChange,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onPaste: handlePaste,
            onCopy: handleCopyPrevention,
            onDoubleClick: handleDoubleClick,
            onKeyDown: handleKeyDown,
            autoCapitalize,
            ...commonAriaProps
          }
        ),
        suffix && /* @__PURE__ */ jsx12("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
        actionButtons,
        progressBar
      ] }),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "outside-left") {
    return /* @__PURE__ */ jsx12(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx12(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-3", children: [
        label && /* @__PURE__ */ jsx12(OutsideLeftLabel2, { label, htmlFor: inputId, isFocused: state.isFocused, colorClass: getLabelColor() }),
        /* @__PURE__ */ jsx12("div", { className: cn(containerClasses, "flex-1"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: inputContent })
      ] }),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "stacked") {
    return /* @__PURE__ */ jsx12(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx12(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxs8(
        "div",
        {
          className: cn(containerClasses, "h-auto py-2.5 flex-col items-stretch"),
          onClick: handleContainerClick,
          ...onLongPress ? longPressHandlers : {},
          children: [
            /* @__PURE__ */ jsx12(RippleContainer2, { ripples, onComplete: removeRipple }),
            /* @__PURE__ */ jsx12(PasteFlash, { show: state.showPasteFlash }),
            /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2 w-full", children: [
              leadingIcon && /* @__PURE__ */ jsx12(
                m12.span,
                {
                  className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
                  animate: { scale: state.isFocused ? 1.05 : 1 },
                  transition: { duration: 0.15 },
                  children: leadingIcon
                }
              ),
              /* @__PURE__ */ jsxs8("div", { className: "flex-1 flex flex-col min-w-0", children: [
                label && /* @__PURE__ */ jsx12(
                  StackedLabel,
                  {
                    label,
                    htmlFor: inputId,
                    isFloating,
                    colorClass: getLabelColor(),
                    shouldReduceMotion: shouldReduceMotion ?? false
                  }
                ),
                /* @__PURE__ */ jsx12(
                  "input",
                  {
                    ref: setInputRef,
                    id: inputId,
                    name,
                    type: inputType,
                    value: displayValue,
                    disabled: isDisabledOrLoading,
                    placeholder: isFloating ? placeholder : "",
                    className: cn(inputClasses, "py-0"),
                    style: { direction },
                    onChange: handleChange,
                    onFocus: handleFocus,
                    onBlur: handleBlur,
                    onPaste: handlePaste,
                    onCopy: handleCopyPrevention,
                    onDoubleClick: handleDoubleClick,
                    onKeyDown: handleKeyDown,
                    autoCapitalize,
                    ...commonAriaProps
                  }
                )
              ] }),
              suffix && /* @__PURE__ */ jsx12("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
              actionButtons
            ] }),
            progressBar
          ]
        }
      ),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "left") {
    return /* @__PURE__ */ jsx12(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx12(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center", children: [
        label && /* @__PURE__ */ jsx12(
          LeftAnimatedLabel,
          {
            label,
            htmlFor: inputId,
            isFloating,
            isFocused: state.isFocused,
            colorClass: getLabelColor(),
            showPlaceholder: !isFloating,
            shouldReduceMotion: shouldReduceMotion ?? false
          }
        ),
        /* @__PURE__ */ jsxs8("div", { className: cn(containerClasses, "flex-1"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: [
          /* @__PURE__ */ jsx12(RippleContainer2, { ripples, onComplete: removeRipple }),
          /* @__PURE__ */ jsx12(PasteFlash, { show: state.showPasteFlash }),
          prefix && /* @__PURE__ */ jsx12("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
          leadingIcon && /* @__PURE__ */ jsx12(
            m12.span,
            {
              className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
              animate: { scale: state.isFocused ? 1.05 : 1 },
              transition: { duration: 0.15 },
              children: leadingIcon
            }
          ),
          /* @__PURE__ */ jsx12("div", { className: "relative flex-1 min-w-0", children: /* @__PURE__ */ jsx12(
            "input",
            {
              ref: setInputRef,
              id: inputId,
              name,
              type: inputType,
              value: displayValue,
              disabled: isDisabledOrLoading,
              placeholder: isFloating ? placeholder : "",
              className: cn(inputClasses, "py-0"),
              style: { direction },
              onChange: handleChange,
              onFocus: handleFocus,
              onBlur: handleBlur,
              onPaste: handlePaste,
              onCopy: handleCopyPrevention,
              onDoubleClick: handleDoubleClick,
              onKeyDown: handleKeyDown,
              autoCapitalize,
              ...commonAriaProps
            }
          ) }),
          suffix && /* @__PURE__ */ jsx12("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
          actionButtons,
          progressBar
        ] })
      ] }),
      bottomSection
    ] }) }) });
  }
  return /* @__PURE__ */ jsx12(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx12(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
    /* @__PURE__ */ jsxs8("div", { className: cn(containerClasses, label && "pt-7 pb-3"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: [
      /* @__PURE__ */ jsx12(RippleContainer2, { ripples, onComplete: removeRipple }),
      /* @__PURE__ */ jsx12(PasteFlash, { show: state.showPasteFlash }),
      label && /* @__PURE__ */ jsx12(
        InsideLabel2,
        {
          label,
          htmlFor: inputId,
          isFloating,
          isFocused: state.isFocused,
          colorClass: getLabelColor(),
          hasLeadingIcon: !!leadingIcon,
          hasPrefix: !!prefix,
          shouldReduceMotion: shouldReduceMotion ?? false,
          sizeClass: sizeStyles.text
        }
      ),
      prefix && /* @__PURE__ */ jsx12("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
      leadingIcon && /* @__PURE__ */ jsx12(
        m12.span,
        {
          className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
          animate: { scale: state.isFocused ? 1.05 : 1 },
          transition: { duration: 0.15 },
          children: leadingIcon
        }
      ),
      /* @__PURE__ */ jsx12(
        "input",
        {
          ref: setInputRef,
          id: inputId,
          name,
          type: inputType,
          value: displayValue,
          disabled: isDisabledOrLoading,
          placeholder: isFloating ? placeholder : "",
          className: inputClasses,
          style: { direction },
          onChange: handleChange,
          onFocus: handleFocus,
          onBlur: handleBlur,
          onPaste: handlePaste,
          onCopy: handleCopyPrevention,
          onDoubleClick: handleDoubleClick,
          onKeyDown: handleKeyDown,
          autoCapitalize,
          ...commonAriaProps
        }
      ),
      suffix && /* @__PURE__ */ jsx12("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
      actionButtons,
      progressBar
    ] }),
    bottomSection
  ] }) }) });
}
var Input_default = memo12(function AnimatedInput(props) {
  return /* @__PURE__ */ jsx12(
    AnimatedInputErrorBoundary,
    {
      fallbackInputProps: {
        defaultValue: props.defaultValue,
        placeholder: props.placeholder,
        disabled: props.disabled,
        type: props.type,
        name: props.name,
        id: props.id
      },
      children: /* @__PURE__ */ jsx12(InputInner, { ...props })
    }
  );
});

// src/index.ts
init_functions();
export {
  AnimatedInputErrorBoundary,
  Input_default as Input,
  calculatePasswordStrength,
  cn,
  detectAndFormat,
  formatCreditCard,
  formatCurrency,
  formatDate,
  formatPhone,
  useHistory,
  useTimeoutManager,
  withErrorBoundary
};
//# sourceMappingURL=index.mjs.map