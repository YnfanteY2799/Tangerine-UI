"use client";
"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

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
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}
var import_clsx, import_tailwind_merge;
var init_functions = __esm({
  "src/utils/functions.ts"() {
    "use strict";
    import_clsx = require("clsx");
    import_tailwind_merge = require("tailwind-merge");
  }
});

// src/components/Input/sub-components/Labels/InsideLabel.tsx
var InsideLabel_exports = {};
__export(InsideLabel_exports, {
  default: () => InsideLabel_default
});
var import_react11, import_react12, import_jsx_runtime4, InsideLabel_default;
var init_InsideLabel = __esm({
  "src/components/Input/sub-components/Labels/InsideLabel.tsx"() {
    "use strict";
    import_react11 = require("react");
    import_react12 = require("motion/react");
    init_functions();
    init_constants();
    import_jsx_runtime4 = require("react/jsx-runtime");
    InsideLabel_default = (0, import_react11.memo)(function InsideLabel({
      label,
      htmlFor,
      hasPrefix,
      isFloating,
      colorClass,
      hasLeadingIcon,
      shouldReduceMotion
    }) {
      const leftPosition = hasLeadingIcon ? "left-10" : hasPrefix ? "left-[4.5rem]" : "left-3";
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
        import_react12.m.label,
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
var import_react13, import_react14, import_jsx_runtime5, OutsideLabel_default;
var init_OutsideLabel = __esm({
  "src/components/Input/sub-components/Labels/OutsideLabel.tsx"() {
    "use strict";
    import_react13 = require("react");
    init_functions();
    import_react14 = require("motion/react");
    init_constants();
    import_jsx_runtime5 = require("react/jsx-runtime");
    OutsideLabel_default = (0, import_react13.memo)(function OutsideLabel({
      label,
      htmlFor,
      isFloating,
      colorClass,
      hasLeadingIcon,
      hasPrefix,
      shouldReduceMotion
    }) {
      const shouldFloat = isFloating || hasPrefix;
      return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
        import_react14.m.label,
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
var import_react15, import_react16, import_jsx_runtime6, OutsideTopLabel_default;
var init_OutsideTopLabel = __esm({
  "src/components/Input/sub-components/Labels/OutsideTopLabel.tsx"() {
    "use strict";
    import_react15 = require("react");
    init_constants();
    import_react16 = require("motion/react");
    init_functions();
    import_jsx_runtime6 = require("react/jsx-runtime");
    OutsideTopLabel_default = (0, import_react15.memo)(function OutsideTopLabel({
      label,
      htmlFor,
      isFocused,
      colorClass,
      shouldReduceMotion
    }) {
      return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
        import_react16.m.label,
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
var import_react17, import_react18, import_jsx_runtime7, OutsideLeftLabel_default;
var init_OutsideLeftLabel = __esm({
  "src/components/Input/sub-components/Labels/OutsideLeftLabel.tsx"() {
    "use strict";
    import_react17 = require("react");
    import_react18 = require("motion/react");
    init_functions();
    import_jsx_runtime7 = require("react/jsx-runtime");
    OutsideLeftLabel_default = (0, import_react17.memo)(function OutsideLeftLabel({
      label,
      htmlFor,
      isFocused,
      colorClass
    }) {
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_react18.m.label,
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
var import_react19, import_react20, import_jsx_runtime8, RippleContainer_default;
var init_RippleContainer = __esm({
  "src/components/Input/sub-components/RippleContainer.tsx"() {
    "use strict";
    import_react19 = require("motion/react");
    init_constants();
    import_react20 = require("react");
    import_jsx_runtime8 = require("react/jsx-runtime");
    RippleContainer_default = (0, import_react20.memo)(function RippleContainer({ ripples, onComplete }) {
      return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("span", { className: "absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react19.AnimatePresence, { mode: "popLayout", children: ripples.map(({ id, y, x, size }) => /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
        import_react19.m.span,
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
var import_react21, import_react22, import_jsx_runtime9, CharacterCounter_default;
var init_CharacterCounter = __esm({
  "src/components/Input/sub-components/CharacterCounter.tsx"() {
    "use strict";
    init_functions();
    import_react21 = require("react");
    import_react22 = require("motion/react");
    import_jsx_runtime9 = require("react/jsx-runtime");
    CharacterCounter_default = (0, import_react21.memo)(function CharacterCounter({ current, max, limit }) {
      const isOverLimit = current > max;
      const isNearLimit = current > max * 0.8;
      return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
        import_react22.m.span,
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
var import_react23, import_react24, import_jsx_runtime10, RequirementsList_default;
var init_RequirementsList = __esm({
  "src/components/Input/sub-components/RequirementsList.tsx"() {
    "use strict";
    init_functions();
    import_react23 = require("react");
    import_react24 = require("motion/react");
    import_jsx_runtime10 = require("react/jsx-runtime");
    RequirementsList_default = (0, import_react23.memo)(function RequirementsList({ requirements, value }) {
      return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("ul", { className: "mt-2 space-y-1", role: "list", "aria-label": "Password requirements", children: requirements.map(({ validator, label }, i) => {
        const met = validator(value);
        return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
          import_react24.m.li,
          {
            animate: { opacity: 1, x: 0 },
            initial: { opacity: 0, x: -8 },
            transition: { delay: i * 0.03 },
            "aria-label": `${label}: ${met ? "met" : "not met"}`,
            className: cn("text-xs flex items-center gap-2 transition-colors", met ? "text-green-500" : "text-muted-foreground"),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                import_react24.m.span,
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
var import_react25, import_react26, import_jsx_runtime11, SuggestionsDropdown_default;
var init_SuggestionsDropdown = __esm({
  "src/components/Input/sub-components/SuggestionsDropdown.tsx"() {
    "use strict";
    init_functions();
    import_react25 = require("react");
    import_react26 = require("motion/react");
    import_jsx_runtime11 = require("react/jsx-runtime");
    SuggestionsDropdown_default = (0, import_react25.memo)(function SuggestionsDropdown({ suggestions, activeIndex, onSelect, inputId, isOpen }) {
      if (!isOpen || suggestions.length === 0) return null;
      return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
        import_react26.m.ul,
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
          children: suggestions.map((suggestion, i) => /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(
            import_react26.m.li,
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
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("span", { children: suggestion.label || suggestion.value })
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
var import_react27, import_react28, import_jsx_runtime12, PasswordStrengthMeter_default;
var init_PasswordStrengthMeter = __esm({
  "src/components/Input/sub-components/PasswordStrengthMeter.tsx"() {
    "use strict";
    init_functions();
    import_react27 = require("react");
    import_react28 = require("motion/react");
    import_jsx_runtime12 = require("react/jsx-runtime");
    PasswordStrengthMeter_default = (0, import_react27.memo)(function PasswordStrengthMeter({ strength }) {
      const colors = ["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-lime-500", "bg-green-500"];
      const labels = ["Very weak", "Weak", "Fair", "Strong", "Very strong"];
      return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "mt-2 space-y-1.5", children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "flex gap-1 h-1.5", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_react28.m.div,
          {
            className: cn("flex-1 rounded-full", i <= strength ? colors[strength] : "bg-muted"),
            transition: { duration: 0.2, delay: i * 0.03, ease: [0.32, 0.72, 0, 1] },
            initial: { scaleX: 0 },
            animate: { scaleX: 1 },
            style: { originX: 0 }
          },
          i
        )) }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_react28.m.p,
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

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AnimatedInputErrorBoundary: () => AnimatedInputErrorBoundary,
  Input: () => Input_default,
  calculatePasswordStrength: () => calculatePasswordStrength,
  cn: () => cn,
  detectAndFormat: () => detectAndFormat,
  formatCreditCard: () => formatCreditCard,
  formatCurrency: () => formatCurrency,
  formatDate: () => formatDate,
  formatPhone: () => formatPhone,
  useHistory: () => useHistory,
  useTimeoutManager: () => useTimeoutManager,
  withErrorBoundary: () => withErrorBoundary
});
module.exports = __toCommonJS(index_exports);

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
var import_react29 = require("react");
var import_react30 = require("motion/react");

// src/components/Input/hooks.ts
var import_react = require("react");
var import_react2 = require("motion/react");
init_constants();
function useShakeAnimation(hasError, hasSuccess, enableHaptics) {
  const [scope, animate] = (0, import_react2.useAnimate)();
  const lastSuccessRef = (0, import_react.useRef)(false);
  const lastErrorRef = (0, import_react.useRef)(false);
  const isAnimatingRef = (0, import_react.useRef)(false);
  const mountedRef = (0, import_react.useRef)(false);
  const performShake = (0, import_react.useCallback)(
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
  (0, import_react.useEffect)(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      lastErrorRef.current = hasError;
      lastSuccessRef.current = hasSuccess;
      return;
    }
    if (hasError && !lastErrorRef.current) performShake("error");
    lastErrorRef.current = hasError;
  }, [hasError, performShake]);
  (0, import_react.useEffect)(() => {
    if (!mountedRef.current) return;
    if (hasSuccess && !lastSuccessRef.current) performShake("success");
    lastSuccessRef.current = hasSuccess;
  }, [hasSuccess, performShake]);
  return {
    containerRef: scope,
    triggerShake: (0, import_react.useCallback)(() => performShake("error"), [performShake]),
    triggerSuccessShake: (0, import_react.useCallback)(() => performShake("success"), [performShake]),
    triggerLongPressShake: (0, import_react.useCallback)(() => performShake("longpress"), [performShake])
  };
}
function useAsyncValidation(asyncValidate, debounceMs = 500, timeoutMs = 1e4) {
  const [asyncError, setAsyncError] = (0, import_react.useState)(null);
  const [isValidating, setIsValidating] = (0, import_react.useState)(false);
  const abortControllerRef = (0, import_react.useRef)(null);
  const debounceTimeoutRef = (0, import_react.useRef)(null);
  const validationTimeoutRef = (0, import_react.useRef)(null);
  const validateAsync = (0, import_react.useCallback)(
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
  const validateDebounced = (0, import_react.useCallback)(
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
  (0, import_react.useEffect)(() => {
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
    clearError: (0, import_react.useCallback)(() => setAsyncError(null), [])
  };
}
function useLongPress(onLongPress, getValue, delay = 500) {
  const timeoutRef = (0, import_react.useRef)(null);
  const start = (0, import_react.useCallback)(() => {
    if (!onLongPress) return;
    timeoutRef.current = setTimeout(() => onLongPress(getValue()), delay);
  }, [onLongPress, getValue, delay]);
  const stop = (0, import_react.useCallback)(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);
  (0, import_react.useEffect)(() => {
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
  const [ripples, setRipples] = (0, import_react.useState)([]);
  const addRipple = (0, import_react.useCallback)(
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
  const removeRipple = (0, import_react.useCallback)((id) => setRipples((prev) => prev.filter((r) => r.id !== id)), []);
  return { ripples, addRipple, removeRipple };
}

// src/components/Input/label-components.tsx
init_constants();
var import_react3 = require("motion/react");
var import_react4 = require("react");
init_functions();
var import_jsx_runtime = require("react/jsx-runtime");
var StackedLabel = (0, import_react4.memo)(function StackedLabel2({
  label,
  htmlFor,
  isFloating,
  colorClass,
  shouldReduceMotion
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_react3.m.label,
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
var LeftAnimatedLabel = (0, import_react4.memo)(function LeftAnimatedLabel2({
  label,
  htmlFor,
  isFloating,
  colorClass,
  showPlaceholder,
  shouldReduceMotion
}) {
  const transition = shouldReduceMotion ? { duration: 0 } : FAST_SPRING;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react3.m.div,
      {
        initial: false,
        transition,
        className: "overflow-hidden shrink-0",
        animate: { width: isFloating ? "auto" : 0, marginRight: isFloating ? 12 : 0, opacity: isFloating ? 1 : 0 },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          import_react3.m.label,
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
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react3.AnimatePresence, { children: showPlaceholder && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      import_react3.m.span,
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
var import_react5 = require("react");
var import_jsx_runtime2 = require("react/jsx-runtime");
var AnimatedInputErrorBoundary = class extends import_react5.Component {
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
      return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "w-full space-y-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
          "input",
          {
            ...fallbackInputProps,
            className: "flex h-10 w-full rounded-md border border-destructive/50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex items-center justify-between text-xs", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-destructive", children: "Input component error. Using fallback." }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(AnimatedInputErrorBoundary, { ...errorBoundaryProps, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(WrappedComponent, { ...props }) });
  };
  WithErrorBoundary.displayName = `WithErrorBoundary(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;
  return WithErrorBoundary;
}

// src/utils/hooks/use-timeout-manager.ts
var import_react6 = require("react");
function useTimeoutManager() {
  const timersRef = (0, import_react6.useRef)(/* @__PURE__ */ new Map());
  const set = (0, import_react6.useCallback)((key, callback, delay) => {
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
  const clear = (0, import_react6.useCallback)((key) => {
    const timer = timersRef.current.get(key);
    if (timer !== void 0) {
      clearTimeout(timer);
      timersRef.current.delete(key);
    }
  }, []);
  const clearAll = (0, import_react6.useCallback)(() => {
    timersRef.current.forEach((timer) => {
      clearTimeout(timer);
    });
    timersRef.current.clear();
  }, []);
  const has = (0, import_react6.useCallback)(
    (key) => {
      return timersRef.current.has(key);
    },
    []
  );
  const setBatch = (0, import_react6.useCallback)(
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
  const clearBatch = (0, import_react6.useCallback)(
    (keys) => {
      keys.forEach((key) => {
        clear(key);
      });
    },
    [clear]
  );
  (0, import_react6.useEffect)(() => {
    return () => {
      clearAll();
    };
  }, [clearAll]);
  return { set, clear, clearAll, has, setBatch, clearBatch };
}

// src/utils/hooks/use-touch-gestures.ts
var import_react7 = require("react");

// src/utils/hooks/use-history.ts
var import_react8 = require("react");
function useHistory(initialValue, maxHistory = 50) {
  const [history, setHistory] = (0, import_react8.useState)({
    past: [],
    present: initialValue,
    future: []
  });
  const isUndoRedoRef = (0, import_react8.useRef)(false);
  const setState = (0, import_react8.useCallback)(
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
  const undo = (0, import_react8.useCallback)(() => {
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
  const redo = (0, import_react8.useCallback)(() => {
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
  const clear = (0, import_react8.useCallback)(() => {
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
var import_react9 = require("motion/react");
var import_react10 = require("react");
init_functions();
var import_jsx_runtime3 = require("react/jsx-runtime");
var PasteFlash = (0, import_react10.memo)(function PasteFlash2({ show }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react9.AnimatePresence, { children: show && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react9.m.span,
    {
      className: "absolute inset-0 bg-primary rounded-[inherit] pointer-events-none",
      variants: PASTE_FLASH_VARIANTS,
      exit: { opacity: 0 },
      initial: "initial",
      animate: "animate"
    }
  ) });
});
var LoadingIndicator = (0, import_react10.memo)(function LoadingIndicator2({ progress, iconSize }) {
  const hasProgress = typeof progress === "number";
  const clampedProgress = hasProgress ? Math.min(100, Math.max(0, progress)) : 0;
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - clampedProgress / 100 * circumference;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_react9.m.span,
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
        hasProgress ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: cn(iconSize, "text-primary -rotate-90"), viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: radius, stroke: "currentColor", strokeOpacity: "0.15", strokeWidth: "2.5" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
            import_react9.m.circle,
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
        ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
          import_react9.m.svg,
          {
            fill: "none",
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            animate: { rotate: 360 },
            className: cn(iconSize, "text-primary"),
            transition: { repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeOpacity: "0.15", strokeWidth: "2.5" }),
              /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 2C6.47715 2 2 6.47715 2 12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" })
            ]
          }
        ),
        hasProgress && /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_react9.m.span,
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
var ValidationIcon = (0, import_react10.memo)(function ValidationIcon2({ state, iconSize }) {
  const icons = {
    success: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: cn(iconSize, "text-green-500"), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m9 11 3 3L22 4", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    warning: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: cn(iconSize, "text-amber-500"), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 9v4", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 17h.01", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    error: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: cn(iconSize, "text-red-500"), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m15 9-6 6", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "m9 9 6 6", strokeLinecap: "round", strokeLinejoin: "round" })
    ] })
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react9.m.span,
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
var ActionButton = (0, import_react10.memo)(function ActionButton2({
  label,
  onClick,
  disabled,
  iconSize,
  children,
  isSuccess
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react9.m.button,
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
var ValidationProgressBar = (0, import_react10.memo)(function ValidationProgressBar2({ progress }) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react9.m.div,
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      exit: { opacity: 0 },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "aria-valuenow": clampedProgress,
      className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_react9.m.div,
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
var LoadingProgressBar = (0, import_react10.memo)(function LoadingProgressBar2({ progress }) {
  const hasProgress = typeof progress === "number";
  const clampedProgress = hasProgress ? Math.min(100, Math.max(0, progress)) : 0;
  if (!hasProgress) {
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_react9.m.div,
      {
        role: "progressbar",
        "aria-label": "Loading",
        exit: { opacity: 0 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]",
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_react9.m.div,
          {
            animate: { x: ["-100%", "400%"] },
            className: "h-full w-1/3 bg-primary",
            transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }
          }
        )
      }
    );
  }
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react9.m.div,
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      exit: { opacity: 0 },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "aria-valuenow": clampedProgress,
      className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]",
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
        import_react9.m.div,
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
var HistoryButtons = (0, import_react10.memo)(function HistoryButtons2({ canUndo, canRedo, onUndo, onRedo, iconSize }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-0.5", role: "group", "aria-label": "History controls", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_react9.m.button,
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
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3 7v6h6", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", strokeLinecap: "round", strokeLinejoin: "round" })
        ] })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
      import_react9.m.button,
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
        children: /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M21 7v6h-6", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", strokeLinecap: "round", strokeLinejoin: "round" })
        ] })
      }
    )
  ] });
});
var ClearButton = (0, import_react10.memo)(function ClearButton2({ onClick, iconSize }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ActionButton, { onClick, label: "Clear", iconSize, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
});
var CopyButton = (0, import_react10.memo)(function CopyButton2({ onClick, iconSize, copied }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ActionButton, { onClick, label: "Copy", iconSize, isSuccess: copied, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react9.AnimatePresence, { mode: "wait", children: copied ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react9.m.svg,
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
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20 6L9 17l-5-5", strokeLinecap: "round", strokeLinejoin: "round" })
    },
    "check"
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_react9.m.svg,
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
      ]
    },
    "copy"
  ) }) });
});
var PasteButton = (0, import_react10.memo)(function PasteButton2({ onClick, iconSize, pasted }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ActionButton, { onClick, label: "Paste", iconSize, isSuccess: pasted, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react9.AnimatePresence, { mode: "wait", children: pasted ? /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react9.m.svg,
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
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M20 6L9 17l-5-5", strokeLinecap: "round", strokeLinejoin: "round" })
    },
    "check"
  ) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_react9.m.svg,
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
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" })
      ]
    },
    "paste"
  ) }) });
});
var PasswordToggleButton = (0, import_react10.memo)(function PasswordToggleButton2({
  onClick,
  iconSize,
  showPassword
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(ActionButton, { onClick, label: showPassword ? "Hide password" : "Show password", iconSize, children: showPassword ? /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
  ] }) : /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "3" })
  ] }) });
});
var ClipboardErrorMessage = (0, import_react10.memo)(function ClipboardErrorMessage2({ message, onDismiss }) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    import_react9.m.div,
    {
      className: "flex items-center justify-between gap-2 mt-1.5 px-2 py-1.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md",
      initial: { opacity: 0, y: -4, height: 0 },
      animate: { opacity: 1, y: 0, height: "auto" },
      exit: { opacity: 0, y: -4, height: 0 },
      transition: { duration: 0.2 },
      role: "alert",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("svg", { className: "w-4 h-4 text-red-500 shrink-0", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 8v4", strokeLinecap: "round" }),
            /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M12 16h.01", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("span", { className: "text-xs text-red-600 dark:text-red-400", children: message })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "p-0.5 text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50",
            "aria-label": "Dismiss error",
            children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("svg", { className: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" }) })
          }
        )
      ]
    }
  );
});

// src/components/Input/index.tsx
var import_jsx_runtime13 = require("react/jsx-runtime");
var InsideLabel2 = (0, import_react29.lazy)(() => Promise.resolve().then(() => (init_InsideLabel(), InsideLabel_exports)));
var OutsideLabel2 = (0, import_react29.lazy)(() => Promise.resolve().then(() => (init_OutsideLabel(), OutsideLabel_exports)));
var OutsideTopLabel2 = (0, import_react29.lazy)(() => Promise.resolve().then(() => (init_OutsideTopLabel(), OutsideTopLabel_exports)));
var OutsideLeftLabel2 = (0, import_react29.lazy)(() => Promise.resolve().then(() => (init_OutsideLeftLabel(), OutsideLeftLabel_exports)));
var RippleContainer2 = (0, import_react29.lazy)(() => Promise.resolve().then(() => (init_RippleContainer(), RippleContainer_exports)));
var CharacterCounter2 = (0, import_react29.lazy)(() => Promise.resolve().then(() => (init_CharacterCounter(), CharacterCounter_exports)));
var RequirementsList2 = (0, import_react29.lazy)(() => Promise.resolve().then(() => (init_RequirementsList(), RequirementsList_exports)));
var SuggestionsDropdown2 = (0, import_react29.lazy)(() => Promise.resolve().then(() => (init_SuggestionsDropdown(), SuggestionsDropdown_exports)));
var PasswordStrengthMeter2 = (0, import_react29.lazy)(() => Promise.resolve().then(() => (init_PasswordStrengthMeter(), PasswordStrengthMeter_exports)));
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
  const inputRef = (0, import_react29.useRef)(null);
  const textareaRef = (0, import_react29.useRef)(null);
  const generatedId = (0, import_react29.useId)();
  const timeouts = useTimeoutManager();
  const inputId = id || generatedId;
  const messageId = `${inputId}-message`;
  const listboxId = `${inputId}-listbox`;
  const [state, dispatch] = (0, import_react29.useReducer)(inputReducer, defaultValue || "", createInitialState);
  const shouldReduceMotion = (0, import_react30.useReducedMotion)();
  const activeRef = multiline ? textareaRef : inputRef;
  (0, import_react29.useImperativeHandle)(ref, () => activeRef.current, [multiline]);
  const setInputRef = (0, import_react29.useCallback)((element) => {
    inputRef.current = element;
  }, []);
  const setTextareaRef = (0, import_react29.useCallback)((element) => {
    textareaRef.current = element;
  }, []);
  (0, import_react29.useEffect)(() => {
    if (controlledValueProp !== void 0) {
      dispatch({ type: "SET_VALUE", payload: controlledValueProp });
    }
  }, [controlledValueProp]);
  (0, import_react29.useEffect)(() => {
    if (isObscuredControlled !== void 0) {
      dispatch({ type: "SET_OBSCURED", payload: isObscuredControlled });
    }
  }, [isObscuredControlled]);
  const controlledValue = controlledValueProp !== void 0 ? controlledValueProp : state.value;
  const isDisabledOrLoading = disabled || isLoading;
  const hasValue = controlledValue.length > 0;
  const isFloating = (0, import_react29.useMemo)(() => state.isFocused || hasValue, [state.isFocused, hasValue]);
  const shouldFloat = (0, import_react29.useMemo)(() => isFloating || !!prefix, [isFloating, prefix]);
  const requiredAnimationBundle = (0, import_react29.useMemo)(() => {
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
  const animationFeatures = requiredAnimationBundle === "minimal" ? import_react30.domMin : import_react30.domAnimation;
  const isObscured = isObscuredControlled !== void 0 ? isObscuredControlled : state.isObscured;
  const historyHook = useHistory(defaultValue || "");
  const pushHistory = (0, import_react29.useCallback)((value) => historyHook.setState(value), [historyHook]);
  const { undo, redo, canUndo, canRedo } = historyHook;
  (0, import_react29.useEffect)(() => {
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
  const validationState = (0, import_react29.useMemo)(() => {
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
  const sizeStyles = (0, import_react29.useMemo)(() => SIZE_STYLES[size], [size]);
  const radiusStyle = (0, import_react29.useMemo)(() => RADIUS_STYLES[radius], [radius]);
  const shadowStyle = (0, import_react29.useMemo)(() => SHADOW_STYLES[shadow], [shadow]);
  const passwordStrength = (0, import_react29.useMemo)(() => type === "password" ? calculatePasswordStrength(controlledValue) : 0, [type, controlledValue]);
  const filteredSuggestions = (0, import_react29.useMemo)(() => {
    if (!suggestions || !controlledValue) return suggestions || [];
    return suggestions.filter((s) => s.value.toLowerCase().includes(controlledValue.toLowerCase()));
  }, [suggestions, controlledValue]);
  const inputType = type === "password" && state.showPassword ? "text" : type;
  const displayValue = (0, import_react29.useMemo)(() => {
    if (isObscured) return "\xE2\u20AC\xA2".repeat(controlledValue.length);
    return controlledValue;
  }, [controlledValue, isObscured]);
  const getVariantStyles = (0, import_react29.useCallback)(() => {
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
  const getInputTextColor = (0, import_react29.useCallback)(() => {
    if (validationState === "error") return "text-red-600";
    if (validationState === "warning") return "text-amber-600";
    if (validationState === "success") return "text-green-600";
    return "text-foreground";
  }, [validationState]);
  const getLabelColor = (0, import_react29.useCallback)(() => {
    if (validationState === "error") return "text-red-500";
    if (validationState === "warning") return "text-amber-500";
    if (validationState === "success") return "text-green-500";
    if (state.isFocused) return "text-primary";
    return "text-muted-foreground";
  }, [validationState, state.isFocused]);
  const containerClasses = (0, import_react29.useMemo)(
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
  const inputClasses = (0, import_react29.useMemo)(
    () => cn(
      "flex-1 min-w-0 bg-transparent outline-none",
      sizeStyles.text,
      "placeholder:text-muted-foreground/50",
      "transition-colors duration-150",
      getInputTextColor()
    ),
    [sizeStyles.text, getInputTextColor]
  );
  const formatValue = (0, import_react29.useCallback)(
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
  const trimValue = (0, import_react29.useCallback)((val) => {
    return val.trim().replace(/\s+/g, " ");
  }, []);
  const updateValue = (0, import_react29.useCallback)(
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
  const handleChange = (0, import_react29.useCallback)(
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
  const handleFocus = (0, import_react29.useCallback)(
    (e) => {
      dispatch({ type: "FOCUS_INPUT" });
      timeouts.clear("obscure");
      if (isObscured && onObscureChange) onObscureChange(false);
      props.onFocus?.(e);
    },
    [props.onFocus, isObscured, onObscureChange, timeouts]
  );
  const handleBlur = (0, import_react29.useCallback)(
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
  const handlePaste = (0, import_react29.useCallback)(
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
  const handleCopyPrevention = (0, import_react29.useCallback)(
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
  const handleDoubleClick = (0, import_react29.useCallback)(() => {
    if (selectAllOnDoubleClick && activeRef.current) activeRef.current.select();
  }, [selectAllOnDoubleClick, activeRef]);
  const handleUndo = (0, import_react29.useCallback)(() => {
    if (canUndo) undo();
  }, [undo, canUndo]);
  const handleRedo = (0, import_react29.useCallback)(() => {
    if (canRedo) redo();
  }, [redo, canRedo]);
  const handleSuggestionSelect = (0, import_react29.useCallback)(
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
  const handleKeyDown = (0, import_react29.useCallback)(
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
  const handleClear = (0, import_react29.useCallback)(() => {
    updateValue("");
    clearError();
    dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });
    activeRef.current?.focus();
    if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(5);
  }, [updateValue, clearError, enableHaptics, activeRef]);
  const handleCopy = (0, import_react29.useCallback)(async () => {
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
  const handlePasteButton = (0, import_react29.useCallback)(async () => {
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
  const handleDismissClipboardError = (0, import_react29.useCallback)(() => {
    dispatch({ type: "CLEAR_CLIPBOARD_ERROR" });
    timeouts.clear("clipboardError");
  }, [timeouts]);
  const togglePassword = (0, import_react29.useCallback)(() => {
    dispatch({ type: "TOGGLE_PASSWORD" });
    if (enableHaptics && typeof navigator !== "undefined" && navigator.vibrate) navigator.vibrate(3);
  }, [enableHaptics]);
  const handleContainerClick = (0, import_react29.useCallback)(
    (e) => {
      addRipple(e);
      if (!isDisabledOrLoading && activeRef.current) activeRef.current.focus();
    },
    [addRipple, isDisabledOrLoading, activeRef]
  );
  const actionButtons = (0, import_react29.useMemo)(() => {
    const buttons = [];
    const iconSize = sizeStyles.iconSize;
    if (enableHistory && showHistoryButtons) {
      buttons.push(
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(HistoryButtons, { canUndo, canRedo, onUndo: handleUndo, onRedo: handleRedo, iconSize }, "history")
      );
    }
    if (isLoading || isValidating) {
      buttons.push(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(LoadingIndicator, { progress: loadingProgress, iconSize }, "loading"));
    } else if (validationState && !showClearButton) {
      buttons.push(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ValidationIcon, { state: validationState, iconSize }, "validation"));
    }
    if (showClearButton && hasValue && !isDisabledOrLoading) {
      buttons.push(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ClearButton, { onClick: handleClear, iconSize }, "clear"));
    }
    if (showCopyButton && !isDisabledOrLoading) {
      buttons.push(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CopyButton, { onClick: handleCopy, iconSize, copied: state.copied }, "copy"));
    }
    if (showPasteButton && !isDisabledOrLoading) {
      buttons.push(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PasteButton, { onClick: handlePasteButton, iconSize, pasted: state.pasted }, "paste"));
    }
    if (showPasswordToggle && type === "password") {
      buttons.push(/* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PasswordToggleButton, { onClick: togglePassword, iconSize, showPassword: state.showPassword }, "password"));
    }
    if (trailingIcon) {
      buttons.push(
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_react30.m.span,
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
  const progressBar = (0, import_react29.useMemo)(() => {
    if (typeof validationProgress === "number") return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ValidationProgressBar, { progress: validationProgress });
    if (isLoading) return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(LoadingProgressBar, { progress: loadingProgress });
    return null;
  }, [validationProgress, isLoading, loadingProgress]);
  const messagesArea = (0, import_react29.useMemo)(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
      import_react30.m.p,
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
  const bottomSection = (0, import_react29.useMemo)(() => {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
      state.clipboardError && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(ClipboardErrorMessage, { message: state.clipboardError, onDismiss: handleDismissClipboardError }),
      showCharacterCount && maxCharacters && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react29.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "flex justify-end mt-1.5", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(CharacterCounter2, { current: controlledValue.length, max: maxCharacters, limit }) }) }),
      messagesArea,
      showPasswordStrength && type === "password" && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react29.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PasswordStrengthMeter2, { strength: passwordStrength }) }),
      showRequirements && passwordRequirements && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react29.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RequirementsList2, { requirements: passwordRequirements, value: controlledValue }) }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "relative", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react29.Suspense, { fallback: null, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
  const commonAriaProps = (0, import_react29.useMemo)(
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
  const inputContent = (0, import_react29.useMemo)(
    () => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(import_jsx_runtime13.Fragment, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RippleContainer2, { ripples, onComplete: removeRipple }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PasteFlash, { show: state.showPasteFlash }),
      prefix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
      leadingIcon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_react30.m.span,
        {
          className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
          animate: { scale: state.isFocused ? 1.05 : 1 },
          transition: { duration: 0.15 },
          children: leadingIcon
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      suffix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { ref: containerRef, className: cn("w-full", className), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        OutsideTopLabel2,
        {
          label,
          htmlFor: inputId,
          isFocused: state.isFocused,
          colorClass: getLabelColor(),
          shouldReduceMotion: shouldReduceMotion ?? false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        "div",
        {
          className: cn(containerClasses, "h-auto min-h-20 items-start py-3"),
          onClick: handleContainerClick,
          ...onLongPress ? longPressHandlers : {},
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RippleContainer2, { ripples, onComplete: removeRipple }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PasteFlash, { show: state.showPasteFlash }),
            leadingIcon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
              import_react30.m.span,
              {
                className: cn("text-muted-foreground shrink-0 mt-0.5 transition-colors", state.isFocused && "text-foreground"),
                animate: { scale: state.isFocused ? 1.05 : 1 },
                transition: { duration: 0.15 },
                children: leadingIcon
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { ref: containerRef, className: cn("w-full", className), children: [
      label && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        OutsideTopLabel2,
        {
          label,
          htmlFor: inputId,
          isFocused: state.isFocused,
          colorClass: getLabelColor(),
          shouldReduceMotion: shouldReduceMotion ?? false
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: containerClasses, onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: inputContent }),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "outside" || labelPosition === "outside-border") {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cn(containerClasses, "relative mt-7"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RippleContainer2, { ripples, onComplete: removeRipple }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PasteFlash, { show: state.showPasteFlash }),
        label && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        leadingIcon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          import_react30.m.span,
          {
            className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
            animate: { scale: state.isFocused ? 1.05 : 1 },
            transition: { duration: 0.15 },
            children: leadingIcon
          }
        ),
        prefix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        suffix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
        actionButtons,
        progressBar
      ] }),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "outside-left") {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-3", children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(OutsideLeftLabel2, { label, htmlFor: inputId, isFocused: state.isFocused, colorClass: getLabelColor() }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: cn(containerClasses, "flex-1"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: inputContent })
      ] }),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "stacked") {
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(
        "div",
        {
          className: cn(containerClasses, "h-auto py-2.5 flex-col items-stretch"),
          onClick: handleContainerClick,
          ...onLongPress ? longPressHandlers : {},
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RippleContainer2, { ripples, onComplete: removeRipple }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PasteFlash, { show: state.showPasteFlash }),
            /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center gap-2 w-full", children: [
              leadingIcon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                import_react30.m.span,
                {
                  className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
                  animate: { scale: state.isFocused ? 1.05 : 1 },
                  transition: { duration: 0.15 },
                  children: leadingIcon
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex-1 flex flex-col min-w-0", children: [
                label && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
                  StackedLabel,
                  {
                    label,
                    htmlFor: inputId,
                    isFloating,
                    colorClass: getLabelColor(),
                    shouldReduceMotion: shouldReduceMotion ?? false
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
              suffix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
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
    return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "flex items-center", children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
        /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cn(containerClasses, "flex-1"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: [
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RippleContainer2, { ripples, onComplete: removeRipple }),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PasteFlash, { show: state.showPasteFlash }),
          prefix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
          leadingIcon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
            import_react30.m.span,
            {
              className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
              animate: { scale: state.isFocused ? 1.05 : 1 },
              transition: { duration: 0.15 },
              children: leadingIcon
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "relative flex-1 min-w-0", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
          suffix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
          actionButtons,
          progressBar
        ] })
      ] }),
      bottomSection
    ] }) }) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_react30.LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { ref: containerRef, className: cn("w-full", className), children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: cn(containerClasses, label && "pt-7 pb-3"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(RippleContainer2, { ripples, onComplete: removeRipple }),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(PasteFlash, { show: state.showPasteFlash }),
      label && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      prefix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
      leadingIcon && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        import_react30.m.span,
        {
          className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
          animate: { scale: state.isFocused ? 1.05 : 1 },
          transition: { duration: 0.15 },
          children: leadingIcon
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      suffix && /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
      actionButtons,
      progressBar
    ] }),
    bottomSection
  ] }) }) });
}
var Input_default = (0, import_react29.memo)(function AnimatedInput(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(InputInner, { ...props })
    }
  );
});

// src/index.ts
init_functions();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AnimatedInputErrorBoundary,
  Input,
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
});
//# sourceMappingURL=index.js.map