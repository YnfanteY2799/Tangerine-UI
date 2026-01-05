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
import { memo as memo2 } from "react";
import { m as m2 } from "motion/react";
import { jsx as jsx3 } from "react/jsx-runtime";
var InsideLabel_default;
var init_InsideLabel = __esm({
  "src/components/Input/sub-components/Labels/InsideLabel.tsx"() {
    "use strict";
    init_functions();
    init_constants();
    InsideLabel_default = memo2(function InsideLabel({
      label,
      htmlFor,
      hasPrefix,
      isFloating,
      colorClass,
      hasLeadingIcon,
      shouldReduceMotion
    }) {
      const leftPosition = hasLeadingIcon ? "left-10" : hasPrefix ? "left-[4.5rem]" : "left-3";
      return /* @__PURE__ */ jsx3(
        m2.label,
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

// src/components/Input/sub-components/Labels/StackedLabel.tsx
var StackedLabel_exports = {};
__export(StackedLabel_exports, {
  default: () => StackedLabel_default
});
import { memo as memo3 } from "react";
import { m as m3 } from "motion/react";
import { jsx as jsx4 } from "react/jsx-runtime";
var StackedLabel_default;
var init_StackedLabel = __esm({
  "src/components/Input/sub-components/Labels/StackedLabel.tsx"() {
    "use strict";
    init_constants();
    init_functions();
    StackedLabel_default = memo3(function StackedLabel({
      label,
      htmlFor,
      isFloating,
      colorClass,
      shouldReduceMotion
    }) {
      return /* @__PURE__ */ jsx4(
        m3.label,
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

// src/components/Input/sub-components/Labels/LeftAnimatedLabel.tsx
var LeftAnimatedLabel_exports = {};
__export(LeftAnimatedLabel_exports, {
  default: () => LeftAnimatedLabel_default
});
import { m as m7, AnimatePresence as AnimatePresence2 } from "motion/react";
import { memo as memo7 } from "react";
import { Fragment, jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var LeftAnimatedLabel_default;
var init_LeftAnimatedLabel = __esm({
  "src/components/Input/sub-components/Labels/LeftAnimatedLabel.tsx"() {
    "use strict";
    "use client";
    init_functions();
    init_constants();
    LeftAnimatedLabel_default = memo7(function LeftAnimatedLabel({
      label,
      htmlFor,
      isFloating,
      colorClass,
      showPlaceholder,
      shouldReduceMotion
    }) {
      const transition = shouldReduceMotion ? { duration: 0 } : FAST_SPRING;
      return /* @__PURE__ */ jsxs3(Fragment, { children: [
        /* @__PURE__ */ jsx8(
          m7.div,
          {
            initial: false,
            transition,
            className: "overflow-hidden shrink-0",
            animate: { width: isFloating ? "auto" : 0, marginRight: isFloating ? 12 : 0, opacity: isFloating ? 1 : 0 },
            children: /* @__PURE__ */ jsx8(
              m7.label,
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
        /* @__PURE__ */ jsx8(AnimatePresence2, { children: showPlaceholder && /* @__PURE__ */ jsx8(
          m7.span,
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
  }
});

// src/components/Input/sub-components/RippleContainer.tsx
var RippleContainer_exports = {};
__export(RippleContainer_exports, {
  default: () => RippleContainer_default
});
import { AnimatePresence as AnimatePresence3, m as m8 } from "motion/react";
import { memo as memo8 } from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
var RippleContainer_default;
var init_RippleContainer = __esm({
  "src/components/Input/sub-components/RippleContainer.tsx"() {
    "use strict";
    init_constants();
    RippleContainer_default = memo8(function RippleContainer({ ripples, onComplete }) {
      return /* @__PURE__ */ jsx9("span", { className: "absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none", children: /* @__PURE__ */ jsx9(AnimatePresence3, { mode: "popLayout", children: ripples.map(({ id, y, x, size }) => /* @__PURE__ */ jsx9(
        m8.span,
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
import { memo as memo9 } from "react";
import { m as m9 } from "motion/react";
import { jsxs as jsxs4 } from "react/jsx-runtime";
var CharacterCounter_default;
var init_CharacterCounter = __esm({
  "src/components/Input/sub-components/CharacterCounter.tsx"() {
    "use strict";
    init_functions();
    CharacterCounter_default = memo9(function CharacterCounter({ current, max, limit }) {
      const isOverLimit = current > max;
      const isNearLimit = current > max * 0.8;
      return /* @__PURE__ */ jsxs4(
        m9.span,
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
import { memo as memo10 } from "react";
import { m as m10 } from "motion/react";
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
var RequirementsList_default;
var init_RequirementsList = __esm({
  "src/components/Input/sub-components/RequirementsList.tsx"() {
    "use strict";
    init_functions();
    RequirementsList_default = memo10(function RequirementsList({ requirements, value }) {
      return /* @__PURE__ */ jsx10("ul", { className: "mt-2 space-y-1", role: "list", "aria-label": "Password requirements", children: requirements.map(({ validator, label }, i) => {
        const met = validator(value);
        return /* @__PURE__ */ jsxs5(
          m10.li,
          {
            animate: { opacity: 1, x: 0 },
            initial: { opacity: 0, x: -8 },
            transition: { delay: i * 0.03 },
            "aria-label": `${label}: ${met ? "met" : "not met"}`,
            className: cn("text-xs flex items-center gap-2 transition-colors", met ? "text-green-500" : "text-muted-foreground"),
            children: [
              /* @__PURE__ */ jsx10(
                m10.span,
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
import { memo as memo11 } from "react";
import { m as m11 } from "motion/react";
import { jsx as jsx11, jsxs as jsxs6 } from "react/jsx-runtime";
var SuggestionsDropdown_default;
var init_SuggestionsDropdown = __esm({
  "src/components/Input/sub-components/SuggestionsDropdown.tsx"() {
    "use strict";
    init_functions();
    SuggestionsDropdown_default = memo11(function SuggestionsDropdown({ suggestions, activeIndex, onSelect, inputId, isOpen }) {
      if (!isOpen || suggestions.length === 0) return null;
      return /* @__PURE__ */ jsx11(
        m11.ul,
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
            m11.li,
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
                /* @__PURE__ */ jsx11("span", { children: suggestion.label || suggestion.value })
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
import { memo as memo12 } from "react";
import { m as m12 } from "motion/react";
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var PasswordStrengthMeter_default;
var init_PasswordStrengthMeter = __esm({
  "src/components/Input/sub-components/PasswordStrengthMeter.tsx"() {
    "use strict";
    init_functions();
    PasswordStrengthMeter_default = memo12(function PasswordStrengthMeter({ strength }) {
      const colors = ["bg-red-500", "bg-orange-500", "bg-amber-500", "bg-lime-500", "bg-green-500"];
      const labels = ["Very weak", "Weak", "Fair", "Strong", "Very strong"];
      return /* @__PURE__ */ jsxs7("div", { className: "mt-2 space-y-1.5", children: [
        /* @__PURE__ */ jsx12("div", { className: "flex gap-1 h-1.5", children: [0, 1, 2, 3].map((i) => /* @__PURE__ */ jsx12(
          m12.div,
          {
            className: cn("flex-1 rounded-full", i <= strength ? colors[strength] : "bg-muted"),
            transition: { duration: 0.2, delay: i * 0.03, ease: [0.32, 0.72, 0, 1] },
            initial: { scaleX: 0 },
            animate: { scaleX: 1 },
            style: { originX: 0 }
          },
          i
        )) }),
        /* @__PURE__ */ jsx12(
          m12.p,
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
import { useRef as useRef5, useId, useReducer, useCallback as useCallback5, useEffect as useEffect4, useMemo, useImperativeHandle, memo as memo13, lazy, Suspense } from "react";
import { m as m13, LazyMotion, domAnimation, domMin, MotionConfig, useReducedMotion } from "motion/react";

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
      onMouseUp: stop,
      onTouchEnd: stop,
      onMouseLeave: stop,
      onMouseDown: start,
      onTouchStart: start
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
import { jsx, jsxs } from "react/jsx-runtime";
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
      return /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2", children: [
        /* @__PURE__ */ jsx("div", { className: "relative", children: /* @__PURE__ */ jsx(
          "input",
          {
            ...fallbackInputProps,
            className: "flex h-10 w-full rounded-md border border-destructive/50 bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-xs", children: [
          /* @__PURE__ */ jsx("span", { className: "text-destructive", children: "Input component error. Using fallback." }),
          /* @__PURE__ */ jsx(
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
    return /* @__PURE__ */ jsx(AnimatedInputErrorBoundary, { ...errorBoundaryProps, children: /* @__PURE__ */ jsx(WrappedComponent, { ...props }) });
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
import { m, AnimatePresence } from "motion/react";
import { memo } from "react";
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var PasteFlash = memo(function PasteFlash2({ show }) {
  return /* @__PURE__ */ jsx2(AnimatePresence, { children: show && /* @__PURE__ */ jsx2(
    m.span,
    {
      className: "absolute inset-0 bg-primary rounded-[inherit] pointer-events-none",
      variants: PASTE_FLASH_VARIANTS,
      exit: { opacity: 0 },
      initial: "initial",
      animate: "animate"
    }
  ) });
});
var LoadingIndicator = memo(function LoadingIndicator2({ progress, iconSize }) {
  const hasProgress = typeof progress === "number";
  const clampedProgress = hasProgress ? Math.min(100, Math.max(0, progress)) : 0;
  const radius = 10;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - clampedProgress / 100 * circumference;
  return /* @__PURE__ */ jsxs2(
    m.span,
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
        hasProgress ? /* @__PURE__ */ jsxs2("svg", { className: cn(iconSize, "text-primary -rotate-90"), viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx2("circle", { cx: "12", cy: "12", r: radius, stroke: "currentColor", strokeOpacity: "0.15", strokeWidth: "2.5" }),
          /* @__PURE__ */ jsx2(
            m.circle,
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
        ] }) : /* @__PURE__ */ jsxs2(
          m.svg,
          {
            fill: "none",
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            animate: { rotate: 360 },
            className: cn(iconSize, "text-primary"),
            transition: { repeat: Number.POSITIVE_INFINITY, duration: 1, ease: "linear" },
            children: [
              /* @__PURE__ */ jsx2("circle", { cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeOpacity: "0.15", strokeWidth: "2.5" }),
              /* @__PURE__ */ jsx2("path", { d: "M12 2C6.47715 2 2 6.47715 2 12", stroke: "currentColor", strokeWidth: "2.5", strokeLinecap: "round" })
            ]
          }
        ),
        hasProgress && /* @__PURE__ */ jsx2(
          m.span,
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
var ValidationIcon = memo(function ValidationIcon2({ state, iconSize }) {
  const icons = {
    success: /* @__PURE__ */ jsxs2("svg", { className: cn(iconSize, "text-green-500"), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx2("path", { d: "M22 11.08V12a10 10 0 1 1-5.93-9.14", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx2("path", { d: "m9 11 3 3L22 4", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    warning: /* @__PURE__ */ jsxs2("svg", { className: cn(iconSize, "text-amber-500"), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx2("path", { d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx2("path", { d: "M12 9v4", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx2("path", { d: "M12 17h.01", strokeLinecap: "round", strokeLinejoin: "round" })
    ] }),
    error: /* @__PURE__ */ jsxs2("svg", { className: cn(iconSize, "text-red-500"), viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
      /* @__PURE__ */ jsx2("circle", { cx: "12", cy: "12", r: "10" }),
      /* @__PURE__ */ jsx2("path", { d: "m15 9-6 6", strokeLinecap: "round", strokeLinejoin: "round" }),
      /* @__PURE__ */ jsx2("path", { d: "m9 9 6 6", strokeLinecap: "round", strokeLinejoin: "round" })
    ] })
  };
  return /* @__PURE__ */ jsx2(
    m.span,
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
var ActionButton = memo(function ActionButton2({
  label,
  onClick,
  disabled,
  iconSize,
  children,
  isSuccess
}) {
  return /* @__PURE__ */ jsx2(
    m.button,
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
var ValidationProgressBar = memo(function ValidationProgressBar2({ progress }) {
  const clampedProgress = Math.min(100, Math.max(0, progress));
  return /* @__PURE__ */ jsx2(
    m.div,
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      exit: { opacity: 0 },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "aria-valuenow": clampedProgress,
      className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]",
      children: /* @__PURE__ */ jsx2(
        m.div,
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
var LoadingProgressBar = memo(function LoadingProgressBar2({ progress }) {
  const hasProgress = typeof progress === "number";
  const clampedProgress = hasProgress ? Math.min(100, Math.max(0, progress)) : 0;
  if (!hasProgress) {
    return /* @__PURE__ */ jsx2(
      m.div,
      {
        role: "progressbar",
        "aria-label": "Loading",
        exit: { opacity: 0 },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]",
        children: /* @__PURE__ */ jsx2(
          m.div,
          {
            animate: { x: ["-100%", "400%"] },
            className: "h-full w-1/3 bg-primary",
            transition: { repeat: Number.POSITIVE_INFINITY, duration: 1.5, ease: "easeInOut" }
          }
        )
      }
    );
  }
  return /* @__PURE__ */ jsx2(
    m.div,
    {
      role: "progressbar",
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      exit: { opacity: 0 },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      "aria-valuenow": clampedProgress,
      className: "absolute bottom-0 left-0 right-0 h-0.5 bg-primary/10 overflow-hidden rounded-b-[inherit]",
      children: /* @__PURE__ */ jsx2(
        m.div,
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
var HistoryButtons = memo(function HistoryButtons2({ canUndo, canRedo, onUndo, onRedo, iconSize }) {
  return /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-0.5", role: "group", "aria-label": "History controls", children: [
    /* @__PURE__ */ jsx2(
      m.button,
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
        children: /* @__PURE__ */ jsxs2("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx2("path", { d: "M3 7v6h6", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsx2("path", { d: "M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13", strokeLinecap: "round", strokeLinejoin: "round" })
        ] })
      }
    ),
    /* @__PURE__ */ jsx2(
      m.button,
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
        children: /* @__PURE__ */ jsxs2("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
          /* @__PURE__ */ jsx2("path", { d: "M21 7v6h-6", strokeLinecap: "round", strokeLinejoin: "round" }),
          /* @__PURE__ */ jsx2("path", { d: "M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7", strokeLinecap: "round", strokeLinejoin: "round" })
        ] })
      }
    )
  ] });
});
var ClearButton = memo(function ClearButton2({ onClick, iconSize }) {
  return /* @__PURE__ */ jsx2(ActionButton, { onClick, label: "Clear", iconSize, children: /* @__PURE__ */ jsx2("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: /* @__PURE__ */ jsx2("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" }) }) });
});
var CopyButton = memo(function CopyButton2({ onClick, iconSize, copied }) {
  return /* @__PURE__ */ jsx2(ActionButton, { onClick, label: "Copy", iconSize, isSuccess: copied, children: /* @__PURE__ */ jsx2(AnimatePresence, { mode: "wait", children: copied ? /* @__PURE__ */ jsx2(
    m.svg,
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
      children: /* @__PURE__ */ jsx2("path", { d: "M20 6L9 17l-5-5", strokeLinecap: "round", strokeLinejoin: "round" })
    },
    "check"
  ) : /* @__PURE__ */ jsxs2(
    m.svg,
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
        /* @__PURE__ */ jsx2("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
        /* @__PURE__ */ jsx2("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
      ]
    },
    "copy"
  ) }) });
});
var PasteButton = memo(function PasteButton2({ onClick, iconSize, pasted }) {
  return /* @__PURE__ */ jsx2(ActionButton, { onClick, label: "Paste", iconSize, isSuccess: pasted, children: /* @__PURE__ */ jsx2(AnimatePresence, { mode: "wait", children: pasted ? /* @__PURE__ */ jsx2(
    m.svg,
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
      children: /* @__PURE__ */ jsx2("path", { d: "M20 6L9 17l-5-5", strokeLinecap: "round", strokeLinejoin: "round" })
    },
    "check"
  ) : /* @__PURE__ */ jsxs2(
    m.svg,
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
        /* @__PURE__ */ jsx2("path", { d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" }),
        /* @__PURE__ */ jsx2("rect", { x: "8", y: "2", width: "8", height: "4", rx: "1", ry: "1" })
      ]
    },
    "paste"
  ) }) });
});
var PasswordToggleButton = memo(function PasswordToggleButton2({
  onClick,
  iconSize,
  showPassword
}) {
  return /* @__PURE__ */ jsx2(ActionButton, { onClick, label: showPassword ? "Hide password" : "Show password", iconSize, children: showPassword ? /* @__PURE__ */ jsxs2("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx2("path", { d: "M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" }),
    /* @__PURE__ */ jsx2("line", { x1: "1", y1: "1", x2: "23", y2: "23" })
  ] }) : /* @__PURE__ */ jsxs2("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", className: "w-full h-full", "aria-hidden": "true", children: [
    /* @__PURE__ */ jsx2("path", { d: "M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" }),
    /* @__PURE__ */ jsx2("circle", { cx: "12", cy: "12", r: "3" })
  ] }) });
});
var ClipboardErrorMessage = memo(function ClipboardErrorMessage2({ message, onDismiss }) {
  return /* @__PURE__ */ jsxs2(
    m.div,
    {
      className: "flex items-center justify-between gap-2 mt-1.5 px-2 py-1.5 bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-md",
      initial: { opacity: 0, y: -4, height: 0 },
      animate: { opacity: 1, y: 0, height: "auto" },
      exit: { opacity: 0, y: -4, height: 0 },
      transition: { duration: 0.2 },
      role: "alert",
      children: [
        /* @__PURE__ */ jsxs2("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs2("svg", { className: "w-4 h-4 text-red-500 shrink-0", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", "aria-hidden": "true", children: [
            /* @__PURE__ */ jsx2("circle", { cx: "12", cy: "12", r: "10" }),
            /* @__PURE__ */ jsx2("path", { d: "M12 8v4", strokeLinecap: "round" }),
            /* @__PURE__ */ jsx2("path", { d: "M12 16h.01", strokeLinecap: "round" })
          ] }),
          /* @__PURE__ */ jsx2("span", { className: "text-xs text-red-600 dark:text-red-400", children: message })
        ] }),
        /* @__PURE__ */ jsx2(
          "button",
          {
            type: "button",
            onClick: onDismiss,
            className: "p-0.5 text-red-400 hover:text-red-600 dark:hover:text-red-300 transition-colors rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500/50",
            "aria-label": "Dismiss error",
            children: /* @__PURE__ */ jsx2("svg", { className: "w-3.5 h-3.5", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsx2("path", { d: "M18 6L6 18M6 6l12 12", strokeLinecap: "round", strokeLinejoin: "round" }) })
          }
        )
      ]
    }
  );
});

// src/components/Input/index.tsx
import { Fragment as Fragment2, jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var InsideLabel2 = lazy(() => Promise.resolve().then(() => (init_InsideLabel(), InsideLabel_exports)));
var StackedLabel2 = lazy(() => Promise.resolve().then(() => (init_StackedLabel(), StackedLabel_exports)));
var OutsideLabel2 = lazy(() => Promise.resolve().then(() => (init_OutsideLabel(), OutsideLabel_exports)));
var OutsideTopLabel2 = lazy(() => Promise.resolve().then(() => (init_OutsideTopLabel(), OutsideTopLabel_exports)));
var OutsideLeftLabel2 = lazy(() => Promise.resolve().then(() => (init_OutsideLeftLabel(), OutsideLeftLabel_exports)));
var LeftAnimatedLabel2 = lazy(() => Promise.resolve().then(() => (init_LeftAnimatedLabel(), LeftAnimatedLabel_exports)));
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
        /* @__PURE__ */ jsx13(HistoryButtons, { canUndo, canRedo, onUndo: handleUndo, onRedo: handleRedo, iconSize }, "history")
      );
    }
    if (isLoading || isValidating) {
      buttons.push(/* @__PURE__ */ jsx13(LoadingIndicator, { progress: loadingProgress, iconSize }, "loading"));
    } else if (validationState && !showClearButton) {
      buttons.push(/* @__PURE__ */ jsx13(ValidationIcon, { state: validationState, iconSize }, "validation"));
    }
    if (showClearButton && hasValue && !isDisabledOrLoading) {
      buttons.push(/* @__PURE__ */ jsx13(ClearButton, { onClick: handleClear, iconSize }, "clear"));
    }
    if (showCopyButton && !isDisabledOrLoading) {
      buttons.push(/* @__PURE__ */ jsx13(CopyButton, { onClick: handleCopy, iconSize, copied: state.copied }, "copy"));
    }
    if (showPasteButton && !isDisabledOrLoading) {
      buttons.push(/* @__PURE__ */ jsx13(PasteButton, { onClick: handlePasteButton, iconSize, pasted: state.pasted }, "paste"));
    }
    if (showPasswordToggle && type === "password") {
      buttons.push(/* @__PURE__ */ jsx13(PasswordToggleButton, { onClick: togglePassword, iconSize, showPassword: state.showPassword }, "password"));
    }
    if (trailingIcon) {
      buttons.push(
        /* @__PURE__ */ jsx13(
          m13.span,
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
    if (typeof validationProgress === "number") return /* @__PURE__ */ jsx13(ValidationProgressBar, { progress: validationProgress });
    if (isLoading) return /* @__PURE__ */ jsx13(LoadingProgressBar, { progress: loadingProgress });
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
    return /* @__PURE__ */ jsx13(
      m13.p,
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
      state.clipboardError && /* @__PURE__ */ jsx13(ClipboardErrorMessage, { message: state.clipboardError, onDismiss: handleDismissClipboardError }),
      showCharacterCount && maxCharacters && /* @__PURE__ */ jsx13(Suspense, { fallback: null, children: /* @__PURE__ */ jsx13("div", { className: "flex justify-end mt-1.5", children: /* @__PURE__ */ jsx13(CharacterCounter2, { current: controlledValue.length, max: maxCharacters, limit }) }) }),
      messagesArea,
      showPasswordStrength && type === "password" && /* @__PURE__ */ jsx13(Suspense, { fallback: null, children: /* @__PURE__ */ jsx13(PasswordStrengthMeter2, { strength: passwordStrength }) }),
      showRequirements && passwordRequirements && /* @__PURE__ */ jsx13(Suspense, { fallback: null, children: /* @__PURE__ */ jsx13(RequirementsList2, { requirements: passwordRequirements, value: controlledValue }) }),
      /* @__PURE__ */ jsx13("div", { className: "relative", children: /* @__PURE__ */ jsx13(Suspense, { fallback: null, children: /* @__PURE__ */ jsx13(
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
      /* @__PURE__ */ jsx13(RippleContainer2, { ripples, onComplete: removeRipple }),
      /* @__PURE__ */ jsx13(PasteFlash, { show: state.showPasteFlash }),
      prefix && /* @__PURE__ */ jsx13("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
      leadingIcon && /* @__PURE__ */ jsx13(
        m13.span,
        {
          className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
          animate: { scale: state.isFocused ? 1.05 : 1 },
          transition: { duration: 0.15 },
          children: leadingIcon
        }
      ),
      /* @__PURE__ */ jsx13(
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
      suffix && /* @__PURE__ */ jsx13("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
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
    return /* @__PURE__ */ jsx13(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx13(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      label && /* @__PURE__ */ jsx13(
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
            /* @__PURE__ */ jsx13(RippleContainer2, { ripples, onComplete: removeRipple }),
            /* @__PURE__ */ jsx13(PasteFlash, { show: state.showPasteFlash }),
            leadingIcon && /* @__PURE__ */ jsx13(
              m13.span,
              {
                className: cn("text-muted-foreground shrink-0 mt-0.5 transition-colors", state.isFocused && "text-foreground"),
                animate: { scale: state.isFocused ? 1.05 : 1 },
                transition: { duration: 0.15 },
                children: leadingIcon
              }
            ),
            /* @__PURE__ */ jsx13(
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
    return /* @__PURE__ */ jsx13(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx13(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      label && /* @__PURE__ */ jsx13(
        OutsideTopLabel2,
        {
          label,
          htmlFor: inputId,
          isFocused: state.isFocused,
          colorClass: getLabelColor(),
          shouldReduceMotion: shouldReduceMotion ?? false
        }
      ),
      /* @__PURE__ */ jsx13("div", { className: containerClasses, onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: inputContent }),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "outside" || labelPosition === "outside-border") {
    return /* @__PURE__ */ jsx13(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx13(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxs8("div", { className: cn(containerClasses, "relative mt-7"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: [
        /* @__PURE__ */ jsx13(RippleContainer2, { ripples, onComplete: removeRipple }),
        /* @__PURE__ */ jsx13(PasteFlash, { show: state.showPasteFlash }),
        label && /* @__PURE__ */ jsx13(
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
        leadingIcon && /* @__PURE__ */ jsx13(
          m13.span,
          {
            className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
            animate: { scale: state.isFocused ? 1.05 : 1 },
            transition: { duration: 0.15 },
            children: leadingIcon
          }
        ),
        prefix && /* @__PURE__ */ jsx13("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
        /* @__PURE__ */ jsx13(
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
        suffix && /* @__PURE__ */ jsx13("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
        actionButtons,
        progressBar
      ] }),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "outside-left") {
    return /* @__PURE__ */ jsx13(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx13(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-3", children: [
        label && /* @__PURE__ */ jsx13(OutsideLeftLabel2, { label, htmlFor: inputId, isFocused: state.isFocused, colorClass: getLabelColor() }),
        /* @__PURE__ */ jsx13("div", { className: cn(containerClasses, "flex-1"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: inputContent })
      ] }),
      bottomSection
    ] }) }) });
  }
  if (labelPosition === "stacked") {
    return /* @__PURE__ */ jsx13(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx13(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxs8(
        "div",
        {
          className: cn(containerClasses, "h-auto py-2.5 flex-col items-stretch"),
          onClick: handleContainerClick,
          ...onLongPress ? longPressHandlers : {},
          children: [
            /* @__PURE__ */ jsx13(RippleContainer2, { ripples, onComplete: removeRipple }),
            /* @__PURE__ */ jsx13(PasteFlash, { show: state.showPasteFlash }),
            /* @__PURE__ */ jsxs8("div", { className: "flex items-center gap-2 w-full", children: [
              leadingIcon && /* @__PURE__ */ jsx13(
                m13.span,
                {
                  className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
                  animate: { scale: state.isFocused ? 1.05 : 1 },
                  transition: { duration: 0.15 },
                  children: leadingIcon
                }
              ),
              /* @__PURE__ */ jsxs8("div", { className: "flex-1 flex flex-col min-w-0", children: [
                label && /* @__PURE__ */ jsx13(
                  StackedLabel2,
                  {
                    label,
                    htmlFor: inputId,
                    isFloating,
                    colorClass: getLabelColor(),
                    shouldReduceMotion: shouldReduceMotion ?? false
                  }
                ),
                /* @__PURE__ */ jsx13(
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
              suffix && /* @__PURE__ */ jsx13("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
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
    return /* @__PURE__ */ jsx13(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx13(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
      /* @__PURE__ */ jsxs8("div", { className: "flex items-center", children: [
        label && /* @__PURE__ */ jsx13(
          LeftAnimatedLabel2,
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
          /* @__PURE__ */ jsx13(RippleContainer2, { ripples, onComplete: removeRipple }),
          /* @__PURE__ */ jsx13(PasteFlash, { show: state.showPasteFlash }),
          prefix && /* @__PURE__ */ jsx13("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
          leadingIcon && /* @__PURE__ */ jsx13(
            m13.span,
            {
              className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
              animate: { scale: state.isFocused ? 1.05 : 1 },
              transition: { duration: 0.15 },
              children: leadingIcon
            }
          ),
          /* @__PURE__ */ jsx13("div", { className: "relative flex-1 min-w-0", children: /* @__PURE__ */ jsx13(
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
          suffix && /* @__PURE__ */ jsx13("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
          actionButtons,
          progressBar
        ] })
      ] }),
      bottomSection
    ] }) }) });
  }
  return /* @__PURE__ */ jsx13(MotionConfig, { reducedMotion: "user", children: /* @__PURE__ */ jsx13(LazyMotion, { features: animationFeatures, strict: true, children: /* @__PURE__ */ jsxs8("div", { ref: containerRef, className: cn("w-full", className), children: [
    /* @__PURE__ */ jsxs8("div", { className: cn(containerClasses, label && "pt-7 pb-3"), onClick: handleContainerClick, ...onLongPress ? longPressHandlers : {}, children: [
      /* @__PURE__ */ jsx13(RippleContainer2, { ripples, onComplete: removeRipple }),
      /* @__PURE__ */ jsx13(PasteFlash, { show: state.showPasteFlash }),
      label && /* @__PURE__ */ jsx13(
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
      prefix && /* @__PURE__ */ jsx13("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: prefix }),
      leadingIcon && /* @__PURE__ */ jsx13(
        m13.span,
        {
          className: cn("text-muted-foreground shrink-0 transition-colors", state.isFocused && "text-foreground"),
          animate: { scale: state.isFocused ? 1.05 : 1 },
          transition: { duration: 0.15 },
          children: leadingIcon
        }
      ),
      /* @__PURE__ */ jsx13(
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
      suffix && /* @__PURE__ */ jsx13("span", { className: "text-muted-foreground text-sm shrink-0 select-none", children: suffix }),
      actionButtons,
      progressBar
    ] }),
    bottomSection
  ] }) }) });
}
var Input_default = memo13(function AnimatedInput(props) {
  return /* @__PURE__ */ jsx13(
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
      children: /* @__PURE__ */ jsx13(InputInner, { ...props })
    }
  );
});

// src/index.ts
init_functions();

// src/components/Button/index.tsx
import { AnimatePresence as AnimatePresence6, useReducedMotion as useReducedMotion2, m as m19, LazyMotion as LazyMotion7, domMax } from "motion/react";
import { memo as memo19, useId as useId2, useRef as useRef9, useMemo as useMemo4, useEffect as useEffect9, useCallback as useCallback10 } from "react";

// src/components/Button/configs/animations/entrance-exit.ts
var premiumSpring = { type: "spring", stiffness: 400, damping: 30, mass: 0.8 };
var elasticSpring = { type: "spring", stiffness: 500, damping: 15, mass: 0.5 };
var bounceSpring = { type: "spring", stiffness: 300, damping: 10, mass: 0.8 };
var smoothExit = { duration: 0.25, ease: [0.4, 0, 1, 1] };
var entranceAnimations = {
  fade: {
    initial: { opacity: 0, scale: 0.98 },
    exit: { opacity: 0, scale: 0.98, transition: smoothExit },
    animate: { scale: 1, opacity: 1, transition: { opacity: { duration: 0.3, ease: "easeOut" }, scale: premiumSpring } }
  },
  slide: {
    initial: { opacity: 0, y: 16, filter: "blur(4px)" },
    exit: { y: -12, opacity: 0, filter: "blur(4px)", transition: smoothExit },
    animate: { y: 0, opacity: 1, filter: "blur(0px)", transition: { ...premiumSpring, filter: { duration: 0.3 } } }
  },
  scale: {
    initial: { opacity: 0, scale: 0.85, filter: "blur(4px)" },
    animate: {
      scale: 1,
      opacity: 1,
      filter: "blur(0px)",
      transition: { ...premiumSpring, opacity: { duration: 0.25 }, filter: { duration: 0.3 } }
    },
    exit: { opacity: 0, scale: 0.9, filter: "blur(2px)", transition: smoothExit }
  },
  slideUp: {
    initial: { opacity: 0, y: 24, filter: "blur(6px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { ...premiumSpring, opacity: { duration: 0.35, ease: "easeOut" }, filter: { duration: 0.35 } }
    },
    exit: { opacity: 0, y: -20, filter: "blur(4px)", transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } }
  },
  slideDown: {
    initial: { opacity: 0, y: -24, filter: "blur(6px)" },
    animate: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      transition: { ...premiumSpring, opacity: { duration: 0.35, ease: "easeOut" }, filter: { duration: 0.35 } }
    },
    exit: { y: 20, opacity: 0, filter: "blur(4px)", transition: smoothExit }
  },
  slideLeft: {
    initial: { opacity: 0, x: 30, filter: "blur(6px)" },
    exit: { opacity: 0, x: -20, filter: "blur(4px)", transition: smoothExit },
    animate: { x: 0, opacity: 1, filter: "blur(0px)", transition: { ...premiumSpring, opacity: { duration: 0.3 }, filter: { duration: 0.35 } } }
  },
  slideRight: {
    initial: { opacity: 0, x: -30, filter: "blur(6px)" },
    exit: { opacity: 0, x: 20, filter: "blur(4px)", transition: smoothExit },
    animate: { opacity: 1, x: 0, filter: "blur(0px)", transition: { ...premiumSpring, opacity: { duration: 0.3 }, filter: { duration: 0.35 } } }
  },
  flip: {
    initial: { opacity: 0, rotateX: -90, scale: 0.9, transformPerspective: 600 },
    exit: { opacity: 0, rotateX: 90, scale: 0.9, transition: { duration: 0.25, ease: [0.4, 0, 1, 1] } },
    animate: { opacity: 1, rotateX: 0, scale: 1, transition: { ...premiumSpring, opacity: { duration: 0.3 } } }
  },
  rotate: {
    initial: { opacity: 0, rotate: -180, scale: 0.5 },
    exit: { opacity: 0, rotate: 180, scale: 0.5, transition: smoothExit },
    animate: { opacity: 1, rotate: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20, opacity: { duration: 0.25 } } }
  },
  blur: {
    initial: { opacity: 0, scale: 1.1, filter: "blur(20px)" },
    exit: { opacity: 0, scale: 0.95, filter: "blur(20px)", transition: { duration: 0.3, ease: [0.4, 0, 1, 1] } },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } }
  },
  bounce: {
    initial: { opacity: 0, y: -40, scale: 0.8 },
    exit: { opacity: 0, y: 30, scale: 0.8, transition: smoothExit },
    animate: { opacity: 1, y: 0, scale: 1, transition: bounceSpring }
  },
  elastic: {
    initial: { opacity: 0, scale: 0.3, rotate: -10 },
    exit: { opacity: 0, scale: 0.5, rotate: 10, transition: smoothExit },
    animate: { opacity: 1, scale: 1, rotate: 0, transition: elasticSpring }
  },
  none: { initial: {}, animate: {}, exit: {} }
};
function getEntranceExitVariants(entrance, exit) {
  const entranceVariant = entranceAnimations[entrance] || entranceAnimations.none;
  const exitVariant = entranceAnimations[exit] || entranceAnimations.none;
  return { initial: entranceVariant.initial, animate: entranceVariant.animate, exit: exitVariant.exit };
}

// src/components/Button/configs/variants.ts
import { cva } from "class-variance-authority";
var peeledBgVariants = cva("", {
  variants: {
    color: {
      secondary: "bg-violet-600",
      success: "bg-emerald-600",
      warning: "bg-amber-500",
      default: "bg-zinc-800",
      primary: "bg-blue-600",
      danger: "bg-red-600"
    }
  },
  defaultVariants: { color: "default" }
});
var buttonVariants = cva(
  // Base styles
  [
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "relative inline-flex items-center justify-center",
    "transition-all duration-200 ease-out",
    "font-medium whitespace-nowrap",
    "disabled:pointer-events-none",
    "select-none overflow-hidden"
  ],
  {
    variants: {
      variant: {
        link: "bg-transparent p-0 h-auto min-w-0 font-normal hover:no-underline focus-visible:ring-0 focus-visible:ring-offset-0",
        destructive: "border-2 transition-all duration-300",
        subtle: "bg-transparent border border-transparent",
        ghost: "bg-transparent border border-transparent",
        light: "bg-transparent backdrop-blur-sm",
        gradient: "border-0 bg-gradient-to-r",
        hoverable: "border-2 bg-transparent",
        bordered: "bg-transparent border-2",
        peeled: "bg-transparent",
        shadow: "shadow-lg",
        faded: "border-2",
        spatial: "",
        solid: "",
        muted: "",
        flat: "",
        soft: ""
      },
      size: {
        icon: "h-10 w-10",
        xs: "h-7 px-2 text-xs",
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base"
      },
      radius: { none: "rounded-none", xs: "rounded-sm", sm: "rounded", md: "rounded-md", lg: "rounded-lg", full: "rounded-full" },
      color: { secondary: "", default: "", primary: "", success: "", warning: "", danger: "" },
      isDisabled: { true: "opacity-50 cursor-not-allowed pointer-events-none", false: "" },
      isIconOnly: { true: "aspect-square p-0", false: "" }
    },
    compoundVariants: [
      // Solid variants
      {
        variant: "solid",
        color: "default",
        className: "bg-zinc-900 text-zinc-50 hover:bg-zinc-800 active:bg-zinc-950 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-200 dark:active:bg-zinc-300"
      },
      {
        variant: "solid",
        color: "secondary",
        className: "bg-violet-600 text-white hover:bg-violet-700 active:bg-violet-800"
      },
      {
        variant: "solid",
        color: "success",
        className: "bg-emerald-600 text-white hover:bg-emerald-700 active:bg-emerald-800"
      },
      {
        variant: "solid",
        color: "warning",
        className: "bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700"
      },
      { variant: "solid", color: "primary", className: "bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800" },
      { variant: "solid", color: "danger", className: "bg-red-600 text-white hover:bg-red-700 active:bg-red-800" },
      // Hoverable
      {
        color: "default",
        variant: "hoverable",
        className: "border-zinc-300 text-zinc-500 hover:border-zinc-800 hover:bg-zinc-800 hover:text-white active:bg-zinc-900"
      },
      {
        color: "primary",
        variant: "hoverable",
        className: "border-zinc-300 text-zinc-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white active:bg-blue-700"
      },
      {
        color: "secondary",
        variant: "hoverable",
        className: "border-zinc-300 text-zinc-500 hover:border-violet-600 hover:bg-violet-600 hover:text-white active:bg-violet-700"
      },
      {
        color: "success",
        variant: "hoverable",
        className: "border-zinc-300 text-zinc-500 hover:border-emerald-600 hover:bg-emerald-600 hover:text-white active:bg-emerald-700"
      },
      {
        color: "warning",
        variant: "hoverable",
        className: "border-zinc-300 text-zinc-500 hover:border-amber-500 hover:bg-amber-500 hover:text-white active:bg-amber-600"
      },
      {
        color: "danger",
        variant: "hoverable",
        className: "border-zinc-300 text-zinc-500 hover:border-red-600 hover:bg-red-600 hover:text-white active:bg-red-700"
      },
      // Spatial
      {
        color: "default",
        variant: "spatial",
        className: [
          "bg-gradient-to-b from-zinc-100 to-zinc-200 text-zinc-800",
          "shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]",
          "hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.8)]",
          "hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.1)]"
        ].join(" ")
      },
      {
        variant: "spatial",
        color: "primary",
        className: [
          "bg-gradient-to-b from-blue-500 to-blue-600 text-white",
          "shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(59,130,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(59,130,246,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]"
        ].join(" ")
      },
      {
        variant: "spatial",
        color: "secondary",
        className: [
          "bg-gradient-to-b from-violet-500 to-violet-600 text-white",
          "shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(139,92,246,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(139,92,246,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]"
        ].join(" ")
      },
      {
        variant: "spatial",
        color: "success",
        className: [
          "bg-gradient-to-b from-emerald-500 to-emerald-600 text-white",
          "shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(16,185,129,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(16,185,129,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]"
        ].join(" ")
      },
      {
        variant: "spatial",
        color: "warning",
        className: [
          "bg-gradient-to-b from-amber-400 to-amber-500 text-white",
          "shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(245,158,11,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(245,158,11,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]"
        ].join(" ")
      },
      {
        variant: "spatial",
        color: "danger",
        className: [
          "bg-gradient-to-b from-red-500 to-red-600 text-white",
          "shadow-[0_1px_2px_rgba(0,0,0,0.1),0_4px_8px_rgba(239,68,68,0.3),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:shadow-[0_2px_4px_rgba(0,0,0,0.1),0_8px_16px_rgba(239,68,68,0.4),inset_0_1px_0_rgba(255,255,255,0.2)]",
          "hover:-translate-y-0.5",
          "active:translate-y-0 active:shadow-[0_1px_2px_rgba(0,0,0,0.1),inset_0_1px_2px_rgba(0,0,0,0.2)]"
        ].join(" ")
      },
      // Peeled variants - fixed square, background rotates on hover
      {
        variant: "peeled",
        color: "default",
        className: "text-white"
      },
      {
        variant: "peeled",
        color: "primary",
        className: "text-white"
      },
      {
        variant: "peeled",
        color: "secondary",
        className: "text-white"
      },
      {
        variant: "peeled",
        color: "success",
        className: "text-white"
      },
      {
        variant: "peeled",
        color: "warning",
        className: "text-white"
      },
      {
        variant: "peeled",
        color: "danger",
        className: "text-white"
      },
      // Bordered variants
      {
        variant: "bordered",
        color: "default",
        className: "border-zinc-300 text-zinc-900 hover:bg-zinc-100 active:bg-zinc-200 active:border-zinc-400 dark:border-zinc-700 dark:text-zinc-100 dark:hover:bg-zinc-800 dark:active:bg-zinc-700"
      },
      {
        variant: "bordered",
        color: "primary",
        className: "border-blue-600 text-blue-600 hover:bg-blue-50 active:bg-blue-100 active:border-blue-700 dark:hover:bg-blue-950 dark:active:bg-blue-900"
      },
      {
        variant: "bordered",
        color: "secondary",
        className: "border-violet-600 text-violet-600 hover:bg-violet-50 active:bg-violet-100 active:border-violet-700 dark:hover:bg-violet-950 dark:active:bg-violet-900"
      },
      {
        variant: "bordered",
        color: "success",
        className: "border-emerald-600 text-emerald-600 hover:bg-emerald-50 active:bg-emerald-100 active:border-emerald-700 dark:hover:bg-emerald-950 dark:active:bg-emerald-900"
      },
      {
        variant: "bordered",
        color: "warning",
        className: "border-amber-500 text-amber-600 hover:bg-amber-50 active:bg-amber-100 active:border-amber-600 dark:hover:bg-amber-950 dark:active:bg-amber-900"
      },
      {
        variant: "bordered",
        color: "danger",
        className: "border-red-600 text-red-600 hover:bg-red-50 active:bg-red-100 active:border-red-700 dark:hover:bg-red-950 dark:active:bg-red-900"
      },
      {
        variant: "light",
        color: "default",
        className: "text-zinc-700 hover:bg-zinc-100/80 hover:text-zinc-900 active:bg-zinc-200/90 active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] dark:text-zinc-300 dark:hover:bg-zinc-800/60 dark:hover:text-zinc-100 dark:active:bg-zinc-700/70"
      },
      {
        variant: "light",
        color: "primary",
        className: "text-blue-600 hover:bg-blue-100/70 hover:text-blue-700 active:bg-blue-200/80 active:shadow-[inset_0_2px_4px_rgba(37,99,235,0.1)] dark:text-blue-400 dark:hover:bg-blue-900/40 dark:hover:text-blue-300 dark:active:bg-blue-800/50"
      },
      {
        variant: "light",
        color: "secondary",
        className: "text-violet-600 hover:bg-violet-100/70 hover:text-violet-700 active:bg-violet-200/80 active:shadow-[inset_0_2px_4px_rgba(139,92,246,0.1)] dark:text-violet-400 dark:hover:bg-violet-900/40 dark:hover:text-violet-300 dark:active:bg-violet-800/50"
      },
      {
        variant: "light",
        color: "success",
        className: "text-emerald-600 hover:bg-emerald-100/70 hover:text-emerald-700 active:bg-emerald-200/80 active:shadow-[inset_0_2px_4px_rgba(16,185,129,0.1)] dark:text-emerald-400 dark:hover:bg-emerald-900/40 dark:hover:text-emerald-300 dark:active:bg-emerald-800/50"
      },
      {
        variant: "light",
        color: "warning",
        className: "text-amber-600 hover:bg-amber-100/70 hover:text-amber-700 active:bg-amber-200/80 active:shadow-[inset_0_2px_4px_rgba(245,158,11,0.1)] dark:text-amber-400 dark:hover:bg-amber-900/40 dark:hover:text-amber-300 dark:active:bg-amber-800/50"
      },
      {
        variant: "light",
        color: "danger",
        className: "text-red-600 hover:bg-red-100/70 hover:text-red-700 active:bg-red-200/80 active:shadow-[inset_0_2px_4px_rgba(239,68,68,0.1)] dark:text-red-400 dark:hover:bg-red-900/40 dark:hover:text-red-300 dark:active:bg-red-800/50"
      },
      // Flat variants
      {
        variant: "flat",
        color: "default",
        className: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
      },
      {
        variant: "flat",
        color: "primary",
        className: "bg-blue-100 text-blue-700 hover:bg-blue-200 active:bg-blue-300 dark:bg-blue-900/30 dark:text-blue-400 dark:hover:bg-blue-900/50 dark:active:bg-blue-900/70"
      },
      {
        variant: "flat",
        color: "secondary",
        className: "bg-violet-100 text-violet-700 hover:bg-violet-200 active:bg-violet-300 dark:bg-violet-900/30 dark:text-violet-400 dark:hover:bg-violet-900/50 dark:active:bg-violet-900/70"
      },
      {
        variant: "flat",
        color: "success",
        className: "bg-emerald-100 text-emerald-700 hover:bg-emerald-200 active:bg-emerald-300 dark:bg-emerald-900/30 dark:text-emerald-400 dark:hover:bg-emerald-900/50 dark:active:bg-emerald-900/70"
      },
      {
        variant: "flat",
        color: "warning",
        className: "bg-amber-100 text-amber-700 hover:bg-amber-200 active:bg-amber-300 dark:bg-amber-900/30 dark:text-amber-400 dark:hover:bg-amber-900/50 dark:active:bg-amber-900/70"
      },
      {
        variant: "flat",
        color: "danger",
        className: "bg-red-100 text-red-700 hover:bg-red-200 active:bg-red-300 dark:bg-red-900/30 dark:text-red-400 dark:hover:bg-red-900/50 dark:active:bg-red-900/70"
      },
      // Faded variants
      {
        variant: "faded",
        color: "default",
        className: "border-zinc-200 bg-zinc-100 text-zinc-900 hover:bg-zinc-200 active:bg-zinc-300 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:active:bg-zinc-600"
      },
      {
        variant: "faded",
        color: "primary",
        className: "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 active:bg-blue-200 dark:border-blue-800 dark:bg-blue-900/20 dark:text-blue-400 dark:active:bg-blue-900/50"
      },
      {
        variant: "faded",
        color: "secondary",
        className: "border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100 active:bg-violet-200 dark:border-violet-800 dark:bg-violet-900/20 dark:text-violet-400 dark:active:bg-violet-900/50"
      },
      {
        variant: "faded",
        color: "success",
        className: "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100 active:bg-emerald-200 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-400 dark:active:bg-emerald-900/50"
      },
      {
        variant: "faded",
        color: "warning",
        className: "border-amber-200 bg-amber-50 text-amber-700 hover:bg-amber-100 active:bg-amber-200 dark:border-amber-800 dark:bg-amber-900/20 dark:text-amber-400 dark:active:bg-amber-900/50"
      },
      {
        variant: "faded",
        color: "danger",
        className: "border-red-200 bg-red-50 text-red-700 hover:bg-red-100 active:bg-red-200 dark:border-red-800 dark:bg-red-900/20 dark:text-red-400 dark:active:bg-red-900/50"
      },
      // Shadow variants
      {
        variant: "shadow",
        color: "default",
        className: "bg-zinc-900 text-zinc-50 shadow-zinc-500/30 hover:shadow-xl hover:shadow-zinc-500/40 active:shadow-md active:shadow-zinc-500/50 dark:bg-zinc-50 dark:text-zinc-900 dark:shadow-zinc-400/20"
      },
      {
        variant: "shadow",
        color: "primary",
        className: "bg-blue-600 text-white shadow-blue-500/40 hover:shadow-xl hover:shadow-blue-500/30 active:shadow-md active:shadow-blue-600/50"
      },
      {
        variant: "shadow",
        color: "secondary",
        className: "bg-violet-600 text-white shadow-violet-500/40 hover:shadow-xl hover:shadow-violet-500/30 active:shadow-md active:shadow-violet-600/50"
      },
      {
        variant: "shadow",
        color: "success",
        className: "bg-emerald-600 text-white shadow-emerald-500/40 hover:shadow-xl hover:shadow-emerald-500/30 active:shadow-md active:shadow-emerald-600/50"
      },
      {
        variant: "shadow",
        color: "warning",
        className: "bg-amber-500 text-white shadow-amber-500/40 hover:shadow-xl hover:shadow-amber-500/30 active:shadow-md active:shadow-amber-600/50"
      },
      {
        variant: "shadow",
        color: "danger",
        className: "bg-red-600 text-white shadow-red-500/40 hover:shadow-xl hover:shadow-red-500/30 active:shadow-md active:shadow-red-600/50"
      },
      {
        variant: "ghost",
        color: "default",
        className: "text-zinc-600 hover:text-zinc-900 hover:border-zinc-200 hover:bg-zinc-50/50 active:bg-zinc-100 active:border-zinc-300 dark:text-zinc-400 dark:hover:text-zinc-100 dark:hover:border-zinc-700 dark:hover:bg-zinc-800/50 dark:active:bg-zinc-800 dark:active:border-zinc-600"
      },
      {
        variant: "ghost",
        color: "primary",
        className: "text-blue-600 hover:border-blue-200 hover:bg-blue-50/50 active:bg-blue-100 active:border-blue-300 active:text-blue-700 dark:text-blue-400 dark:hover:border-blue-800 dark:hover:bg-blue-900/30 dark:active:bg-blue-900/50 dark:active:border-blue-700"
      },
      {
        variant: "ghost",
        color: "secondary",
        className: "text-violet-600 hover:border-violet-200 hover:bg-violet-50/50 active:bg-violet-100 active:border-violet-300 active:text-violet-700 dark:text-violet-400 dark:hover:border-violet-800 dark:hover:bg-violet-900/30 dark:active:bg-violet-900/50 dark:active:border-violet-700"
      },
      {
        variant: "ghost",
        color: "success",
        className: "text-emerald-600 hover:border-emerald-200 hover:bg-emerald-50/50 active:bg-emerald-100 active:border-emerald-300 active:text-emerald-700 dark:text-emerald-400 dark:hover:border-emerald-800 dark:hover:bg-emerald-900/30 dark:active:bg-emerald-900/50 dark:active:border-emerald-700"
      },
      {
        variant: "ghost",
        color: "warning",
        className: "text-amber-600 hover:border-amber-200 hover:bg-amber-50/50 active:bg-amber-100 active:border-amber-300 active:text-amber-700 dark:text-amber-400 dark:hover:border-amber-800 dark:hover:bg-amber-900/30 dark:active:bg-amber-900/50 dark:active:border-amber-700"
      },
      {
        variant: "ghost",
        color: "danger",
        className: "text-red-600 hover:border-red-200 hover:bg-red-50/50 active:bg-red-100 active:border-red-300 active:text-red-700 dark:text-red-400 dark:hover:border-red-800 dark:hover:bg-red-900/30 dark:active:bg-red-900/50 dark:active:border-red-700"
      },
      // Muted variants
      {
        variant: "muted",
        color: "default",
        className: "bg-zinc-100 text-zinc-500 hover:text-zinc-700 hover:bg-zinc-200 active:bg-zinc-300 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-300 dark:hover:bg-zinc-700 dark:active:bg-zinc-600"
      },
      {
        variant: "muted",
        color: "primary",
        className: "bg-blue-50 text-blue-400 hover:text-blue-600 hover:bg-blue-100 active:bg-blue-200 dark:bg-blue-950/50 dark:text-blue-400 dark:hover:text-blue-300 dark:active:bg-blue-900/60"
      },
      {
        variant: "muted",
        color: "secondary",
        className: "bg-violet-50 text-violet-400 hover:text-violet-600 hover:bg-violet-100 active:bg-violet-200 dark:bg-violet-950/50 dark:text-violet-400 dark:hover:text-violet-300 dark:active:bg-violet-900/60"
      },
      {
        variant: "muted",
        color: "success",
        className: "bg-emerald-50 text-emerald-400 hover:text-emerald-600 hover:bg-emerald-100 active:bg-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-400 dark:hover:text-emerald-300 dark:active:bg-emerald-900/60"
      },
      {
        variant: "muted",
        color: "warning",
        className: "bg-amber-50 text-amber-400 hover:text-amber-600 hover:bg-amber-100 active:bg-amber-200 dark:bg-amber-950/50 dark:text-amber-400 dark:hover:text-amber-300 dark:active:bg-amber-900/60"
      },
      {
        variant: "muted",
        color: "danger",
        className: "bg-red-50 text-red-400 hover:text-red-600 hover:bg-red-100 active:bg-red-200 dark:bg-red-950/50 dark:text-red-400 dark:hover:text-red-300 dark:active:bg-red-900/60"
      },
      // Link variants
      {
        variant: "link",
        color: "default",
        className: "text-zinc-900 decoration-zinc-400 underline decoration-1 underline-offset-4 hover:decoration-zinc-900 active:text-zinc-700 dark:text-zinc-100 dark:decoration-zinc-600 dark:hover:decoration-zinc-100 dark:active:text-zinc-300"
      },
      {
        variant: "link",
        color: "primary",
        className: "text-blue-600 decoration-blue-300 underline decoration-1 underline-offset-4 hover:decoration-blue-600 active:text-blue-800 dark:text-blue-400 dark:decoration-blue-700 dark:hover:decoration-blue-400 dark:active:text-blue-300"
      },
      {
        variant: "link",
        color: "secondary",
        className: "text-violet-600 decoration-violet-300 underline decoration-1 underline-offset-4 hover:decoration-violet-600 active:text-violet-800 dark:text-violet-400 dark:decoration-violet-700 dark:hover:decoration-violet-400 dark:active:text-violet-300"
      },
      {
        variant: "link",
        color: "success",
        className: "text-emerald-600 decoration-emerald-300 underline decoration-1 underline-offset-4 hover:decoration-emerald-600 active:text-emerald-800 dark:text-emerald-400 dark:decoration-emerald-700 dark:hover:decoration-emerald-400 dark:active:text-emerald-300"
      },
      {
        variant: "link",
        color: "warning",
        className: "text-amber-600 decoration-amber-300 underline decoration-1 underline-offset-4 hover:decoration-amber-600 active:text-amber-800 dark:text-amber-400 dark:decoration-amber-700 dark:hover:decoration-amber-400 dark:active:text-amber-300"
      },
      {
        variant: "link",
        color: "danger",
        className: "text-red-600 decoration-red-300 underline decoration-1 underline-offset-4 hover:decoration-red-600 active:text-red-800 dark:text-red-400 dark:decoration-red-700 dark:hover:decoration-red-400 dark:active:text-red-300"
      },
      {
        variant: "subtle",
        color: "default",
        className: "text-zinc-500 hover:text-zinc-700 hover:bg-zinc-100/60 active:text-zinc-900 active:bg-zinc-200/70 active:shadow-[inset_0_1px_2px_rgba(0,0,0,0.04)] dark:text-zinc-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-800/50 dark:active:text-zinc-100 dark:active:bg-zinc-700/60"
      },
      {
        variant: "subtle",
        color: "primary",
        className: "text-blue-500 hover:text-blue-600 hover:bg-blue-50/60 active:text-blue-700 active:bg-blue-100/70 active:shadow-[inset_0_1px_2px_rgba(37,99,235,0.06)] dark:text-blue-400 dark:hover:text-blue-300 dark:hover:bg-blue-950/40 dark:active:text-blue-200 dark:active:bg-blue-900/50"
      },
      {
        variant: "subtle",
        color: "secondary",
        className: "text-violet-500 hover:text-violet-600 hover:bg-violet-50/60 active:text-violet-700 active:bg-violet-100/70 active:shadow-[inset_0_1px_2px_rgba(139,92,246,0.06)] dark:text-violet-400 dark:hover:text-violet-300 dark:hover:bg-violet-950/40 dark:active:text-violet-200 dark:active:bg-violet-900/50"
      },
      {
        variant: "subtle",
        color: "success",
        className: "text-emerald-500 hover:text-emerald-600 hover:bg-emerald-50/60 active:text-emerald-700 active:bg-emerald-100/70 active:shadow-[inset_0_1px_2px_rgba(16,185,129,0.06)] dark:text-emerald-400 dark:hover:text-emerald-300 dark:hover:bg-emerald-950/40 dark:active:text-emerald-200 dark:active:bg-emerald-900/50"
      },
      {
        variant: "subtle",
        color: "warning",
        className: "text-amber-500 hover:text-amber-600 hover:bg-amber-50/60 active:text-amber-700 active:bg-amber-100/70 active:shadow-[inset_0_1px_2px_rgba(245,158,11,0.06)] dark:text-amber-400 dark:hover:text-amber-300 dark:hover:bg-amber-950/40 dark:active:text-amber-200 dark:active:bg-amber-900/50"
      },
      {
        variant: "subtle",
        color: "danger",
        className: "text-red-500 hover:text-red-600 hover:bg-red-50/60 active:text-red-700 active:bg-red-100/70 active:shadow-[inset_0_1px_2px_rgba(239,68,68,0.06)] dark:text-red-400 dark:hover:text-red-300 dark:hover:bg-red-950/40 dark:active:text-red-200 dark:active:bg-red-900/50"
      },
      // Soft variants
      {
        variant: "soft",
        color: "default",
        className: "bg-zinc-100/80 text-zinc-700 hover:bg-zinc-200/80 active:bg-zinc-300/80 dark:bg-zinc-800/80 dark:text-zinc-300 dark:hover:bg-zinc-700/80 dark:active:bg-zinc-600/80"
      },
      {
        variant: "soft",
        color: "primary",
        className: "bg-blue-100/60 text-blue-700 hover:bg-blue-200/70 active:bg-blue-300/70 dark:bg-blue-900/40 dark:text-blue-300 dark:hover:bg-blue-800/50 dark:active:bg-blue-700/60"
      },
      {
        variant: "soft",
        color: "secondary",
        className: "bg-violet-100/60 text-violet-700 hover:bg-violet-200/70 active:bg-violet-300/70 dark:bg-violet-900/40 dark:text-violet-300 dark:hover:bg-violet-800/50 dark:active:bg-violet-700/60"
      },
      {
        variant: "soft",
        color: "success",
        className: "bg-emerald-100/60 text-emerald-700 hover:bg-emerald-200/70 active:bg-emerald-300/70 dark:bg-emerald-900/40 dark:text-emerald-300 dark:hover:bg-emerald-800/50 dark:active:bg-emerald-700/60"
      },
      {
        variant: "soft",
        color: "warning",
        className: "bg-amber-100/60 text-amber-700 hover:bg-amber-200/70 active:bg-amber-300/70 dark:bg-amber-900/40 dark:text-amber-300 dark:hover:bg-amber-800/50 dark:active:bg-amber-700/60"
      },
      {
        variant: "soft",
        color: "danger",
        className: "bg-red-100/60 text-red-700 hover:bg-red-200/70 active:bg-red-300/70 dark:bg-red-900/40 dark:text-red-300 dark:hover:bg-red-800/50 dark:active:bg-red-700/60"
      },
      // Gradient variants
      {
        variant: "gradient",
        color: "default",
        className: "from-zinc-700 to-zinc-900 text-white hover:from-zinc-600 hover:to-zinc-800 active:from-zinc-800 active:to-zinc-950 dark:from-zinc-200 dark:to-zinc-400 dark:text-zinc-900"
      },
      {
        variant: "gradient",
        color: "primary",
        className: "from-blue-500 to-blue-700 text-white hover:from-blue-400 hover:to-blue-600 active:from-blue-600 active:to-blue-800"
      },
      {
        variant: "gradient",
        color: "secondary",
        className: "from-violet-500 to-violet-700 text-white hover:from-violet-400 hover:to-violet-600 active:from-violet-600 active:to-violet-800"
      },
      {
        variant: "gradient",
        color: "success",
        className: "from-emerald-500 to-emerald-700 text-white hover:from-emerald-400 hover:to-emerald-600 active:from-emerald-600 active:to-emerald-800"
      },
      {
        variant: "gradient",
        color: "warning",
        className: "from-amber-400 to-amber-600 text-white hover:from-amber-300 hover:to-amber-500 active:from-amber-500 active:to-amber-700"
      },
      {
        variant: "gradient",
        color: "danger",
        className: "from-red-500 to-red-700 text-white hover:from-red-400 hover:to-red-600 active:from-red-600 active:to-red-800"
      },
      // Destructive variants
      {
        variant: "destructive",
        color: "default",
        className: "border-zinc-300 text-zinc-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-zinc-600 dark:text-zinc-400"
      },
      {
        variant: "destructive",
        color: "primary",
        className: "border-blue-300 text-blue-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-blue-700 dark:text-blue-400"
      },
      {
        variant: "destructive",
        color: "secondary",
        className: "border-violet-300 text-violet-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-violet-700 dark:text-violet-400"
      },
      {
        variant: "destructive",
        color: "success",
        className: "border-emerald-300 text-emerald-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-emerald-700 dark:text-emerald-400"
      },
      {
        variant: "destructive",
        color: "warning",
        className: "border-amber-300 text-amber-600 bg-transparent hover:border-red-500 hover:bg-red-500 hover:text-white active:bg-red-600 active:border-red-600 dark:border-amber-700 dark:text-amber-400"
      },
      {
        variant: "destructive",
        color: "danger",
        className: "border-red-300 text-red-600 bg-transparent hover:border-red-600 hover:bg-red-600 hover:text-white active:bg-red-700 active:border-red-700 dark:border-red-700 dark:text-red-400"
      },
      // Icon only sizes
      { isIconOnly: true, size: "xs", className: "h-7 w-7 min-w-7" },
      { isIconOnly: true, size: "sm", className: "h-8 w-8 min-w-8" },
      { isIconOnly: true, size: "md", className: "h-10 w-10 min-w-10" },
      { isIconOnly: true, size: "lg", className: "h-12 w-12 min-w-12" }
    ],
    defaultVariants: {
      variant: "solid",
      color: "default",
      size: "md",
      radius: "md",
      isDisabled: false,
      isIconOnly: false
    }
  }
);
var progressVariants = cva("", {
  variants: {
    color: {
      default: "bg-zinc-50/30 dark:bg-zinc-900/30",
      primary: "bg-blue-400/30",
      secondary: "bg-violet-400/30",
      success: "bg-emerald-400/30",
      warning: "bg-amber-400/30",
      danger: "bg-red-400/30"
    }
  },
  defaultVariants: { color: "default" }
});
var rippleVariants = cva("absolute rounded-full pointer-events-none", {
  variants: {
    color: {
      default: "bg-zinc-50/40 dark:bg-zinc-900/40",
      primary: "bg-white/40",
      secondary: "bg-white/40",
      success: "bg-white/40",
      warning: "bg-white/40",
      danger: "bg-white/40"
    }
  },
  defaultVariants: { color: "default" }
});

// src/components/Button/configs/animations/press.ts
var premiumTapSpring = { type: "spring", stiffness: 500, damping: 30, mass: 0.4 };
var pressAnimations = {
  squeeze: { initial: { scale: 1 }, tap: { scale: 0.975, transition: premiumTapSpring } },
  bounce: {
    initial: { scale: 1, y: 0 },
    tap: {
      y: [0, 1, -1, 0, 0],
      scale: [1, 0.95, 1.02, 0.99, 1],
      transition: { duration: 0.4, times: [0, 0.2, 0.45, 0.7, 1], ease: [0.22, 1, 0.36, 1] }
    }
  },
  rotate: {
    initial: { rotate: 0, scale: 1 },
    tap: { rotate: [0, -1, 1, -0.5, 0], scale: [1, 0.98, 0.98, 0.99, 1], transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } }
  }
};
function getPressVariant(animation) {
  return pressAnimations[animation] || pressAnimations.squeeze;
}

// src/components/Button/configs/animations/hover.ts
var premiumSpring2 = { type: "spring", stiffness: 400, damping: 28, mass: 0.6 };
var smoothEase = { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] };
var hoverAnimations = {
  scale: { initial: { scale: 1 }, hover: { scale: 1.02, transition: premiumSpring2 } },
  lift: {
    initial: { y: 0, boxShadow: "0 1px 2px rgba(0,0,0,0.04)" },
    hover: {
      y: -2,
      boxShadow: "0 8px 20px -6px rgba(0,0,0,0.12), 0 2px 6px -2px rgba(0,0,0,0.08)",
      transition: { ...premiumSpring2, boxShadow: { duration: 0.25, ease: "easeOut" } }
    }
  },
  glow: {
    initial: { boxShadow: "0 0 0 0 rgba(59, 130, 246, 0)" },
    hover: { transition: smoothEase, boxShadow: "0 0 16px 1px rgba(59, 130, 246, 0.25), 0 0 32px 2px rgba(59, 130, 246, 0.1)" }
  },
  colorShift: {
    initial: { filter: "brightness(1) saturate(1)" },
    hover: { transition: smoothEase, filter: "brightness(1.03) saturate(1.05)" }
  }
};
function getHoverVariant(animation) {
  return hoverAnimations[animation] || hoverAnimations.scale;
}

// src/components/Button/long-press-indicator.tsx
init_functions();
import { domAnimation as domAnimation2, LazyMotion as LazyMotion2, m as m14 } from "motion/react";
import { memo as memo14, useMemo as useMemo2 } from "react";
import { jsx as jsx14 } from "react/jsx-runtime";
var DARK_BACKGROUND_VARIANTS = ["solid", "shadow", "gradient"];
var LIGHT_BACKGROUND_VARIANTS = [
  "light",
  "ghost",
  "subtle",
  "soft",
  "link",
  "bordered",
  "muted",
  "faded",
  "flat"
];
var FADE_DURATION = 0.1;
var COLOR_MAP = {
  default: { light: "bg-zinc-800/60", dark: "bg-white/50", backdrop: "bg-zinc-950/5" },
  danger: { light: "bg-red-600/70", dark: "bg-red-200/60", backdrop: "bg-red-950/10" },
  primary: { light: "bg-blue-600/70", dark: "bg-blue-200/60", backdrop: "bg-blue-950/10" },
  warning: { light: "bg-amber-500/70", dark: "bg-amber-200/60", backdrop: "bg-amber-950/10" },
  secondary: { light: "bg-violet-600/70", dark: "bg-violet-200/60", backdrop: "bg-violet-950/10" },
  success: { light: "bg-emerald-600/70", dark: "bg-emerald-200/60", backdrop: "bg-emerald-950/10" }
};
var getProgressStyles = (color, variant) => {
  if (variant === "destructive") return { background: "bg-red-500/70", backdrop: "bg-red-950/10" };
  const isDarkBg = DARK_BACKGROUND_VARIANTS.includes(variant);
  const isLightBg = LIGHT_BACKGROUND_VARIANTS.includes(variant);
  const colors = COLOR_MAP[color];
  return {
    background: isDarkBg ? colors.dark : colors.light,
    backdrop: isLightBg ? colors.backdrop : "bg-transparent"
  };
};
var long_press_indicator_default = memo14(function LongPressIndicator(props) {
  const { progress, color = "default", variant = "solid", duration = 500 } = props;
  const remainingDuration = useMemo2(() => duration * (1 - progress) / 1e3, [duration, progress]);
  const { backdrop, background } = useMemo2(() => getProgressStyles(color, variant), [color, variant]);
  return /* @__PURE__ */ jsx14(LazyMotion2, { features: domAnimation2, strict: true, children: /* @__PURE__ */ jsx14(
    m14.div,
    {
      "aria-hidden": "true",
      role: "presentation",
      exit: { opacity: 0 },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: FADE_DURATION },
      className: cn("absolute inset-0 overflow-hidden rounded-[inherit] pointer-events-none", backdrop),
      children: /* @__PURE__ */ jsx14(
        m14.div,
        {
          transition: { duration: remainingDuration, ease: "linear" },
          className: cn("absolute inset-y-0 left-0", background),
          initial: { width: `${progress * 100}%` },
          animate: { width: "100%" }
        }
      )
    }
  ) });
});

// src/components/Button/cooldown-indicator.tsx
import { domAnimation as domAnimation3, LazyMotion as LazyMotion3, m as m15 } from "motion/react";
init_functions();
import { memo as memo15 } from "react";
import { jsx as jsx15 } from "react/jsx-runtime";
var FRAME_DURATION = 0.016;
var cooldown_indicator_default = memo15(function CooldownIndicator({ progress, color = "default", className }) {
  const clampedProgress = Math.min(Math.max(progress, 0), 1);
  return /* @__PURE__ */ jsx15(LazyMotion3, { features: domAnimation3, strict: true, children: /* @__PURE__ */ jsx15("div", { className: cn("pointer-events-none absolute inset-0 overflow-hidden", className), "aria-hidden": "true", role: "presentation", children: /* @__PURE__ */ jsx15(
    m15.div,
    {
      className: cn("absolute inset-y-0 left-0", progressVariants({ color })),
      transition: { duration: FRAME_DURATION, ease: "linear" },
      animate: { width: `${clampedProgress * 100}%` },
      initial: { width: "100%" }
    }
  ) }) });
});

// src/components/Button/hooks/use-long-press.ts
import { useCallback as useCallback6, useEffect as useEffect5, useRef as useRef6, useState as useState3 } from "react";
function useLongPress2(options = {}) {
  const { delay = 500, onLongPress, onPress, onStart, disabled = false, preventDefault = false, moveThreshold = 10 } = options;
  const touchStartPosRef = useRef6(null);
  const timerRef = useRef6(null);
  const animationFrameRef = useRef6(null);
  const startTimeRef = useRef6(0);
  const [isLongPress, setIsLongPress] = useState3(false);
  const [isPressed, setIsPressed] = useState3(false);
  const [progress, setProgress] = useState3(0);
  const onLongPressRef = useRef6(onLongPress);
  const onPressRef = useRef6(onPress);
  const onStartRef = useRef6(onStart);
  useEffect5(() => {
    onLongPressRef.current = onLongPress;
    onPressRef.current = onPress;
    onStartRef.current = onStart;
  }, [onLongPress, onPress, onStart]);
  const updateProgress = useCallback6(() => {
    if (startTimeRef.current === 0) return;
    const elapsed = Date.now() - startTimeRef.current;
    const currentProgress = Math.min(elapsed / delay, 1);
    setProgress(currentProgress);
    if (currentProgress < 1) animationFrameRef.current = requestAnimationFrame(updateProgress);
  }, [delay]);
  const cleanup = useCallback6(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }, []);
  const reset = useCallback6(() => {
    cleanup();
    setIsLongPress(false);
    startTimeRef.current = 0;
    touchStartPosRef.current = null;
    setIsPressed(false);
    setProgress(0);
  }, [cleanup]);
  const start = useCallback6(
    (event) => {
      if (disabled) return;
      if (preventDefault) event.preventDefault();
      if ("touches" in event && event.touches.length > 0) {
        const touch = event.touches[0];
        touchStartPosRef.current = { x: touch.clientX, y: touch.clientY };
      }
      setIsLongPress(false);
      startTimeRef.current = Date.now();
      setIsPressed(true);
      setProgress(0);
      onStartRef.current?.();
      animationFrameRef.current = requestAnimationFrame(updateProgress);
      timerRef.current = setTimeout(() => {
        setIsLongPress(true);
        setProgress(1);
        onLongPressRef.current?.();
      }, delay);
    },
    [delay, disabled, preventDefault, updateProgress]
  );
  const stop = useCallback6(
    (shouldTriggerClick = true) => {
      if (disabled) return;
      const wasLongPress = isLongPress;
      cleanup();
      if (shouldTriggerClick && !wasLongPress && startTimeRef.current > 0) {
        onPressRef.current?.();
      }
      reset();
    },
    [disabled, isLongPress, cleanup, reset]
  );
  const handleTouchMove = useCallback6(
    (event) => {
      if (disabled || !touchStartPosRef.current) return;
      const touch = event.touches[0];
      if (!touch) return;
      const deltaX = Math.abs(touch.clientX - touchStartPosRef.current.x);
      const deltaY = Math.abs(touch.clientY - touchStartPosRef.current.y);
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (distance > moveThreshold) reset();
    },
    [disabled, moveThreshold, reset]
  );
  const cancel = useCallback6(() => reset(), [reset]);
  useEffect5(() => {
    return () => cleanup();
  }, [cleanup]);
  const handlers = {
    onTouchEnd: () => stop(true),
    onTouchMove: handleTouchMove,
    onMouseUp: () => stop(true),
    onTouchCancel: cancel,
    onMouseLeave: cancel,
    onTouchStart: start,
    onMouseDown: start
  };
  return { handlers, isLongPress, progress, isPressed, cancel };
}

// src/components/Button/hooks/use-cooldown.ts
import { useCallback as useCallback7, useEffect as useEffect6, useRef as useRef7, useState as useState4 } from "react";
function useCooldown(options = {}) {
  const { cooldownMs = 0, clicksBeforeCooldown = 1, onCooldownStart, onCooldownEnd } = options;
  const [cooldownProgress, setCooldownProgress] = useState4(0);
  const [isInCooldown, setIsInCooldown] = useState4(false);
  const [clickCount, setClickCount] = useState4(0);
  const progressIntervalRef = useRef7(null);
  const cooldownTimerRef = useRef7(null);
  const onCooldownStartRef = useRef7(onCooldownStart);
  const onCooldownEndRef = useRef7(onCooldownEnd);
  const cooldownStartTimeRef = useRef7(0);
  useEffect6(() => {
    onCooldownStartRef.current = onCooldownStart;
    onCooldownEndRef.current = onCooldownEnd;
  }, [onCooldownStart, onCooldownEnd]);
  const clearTimers = useCallback7(() => {
    if (cooldownTimerRef.current) {
      clearTimeout(cooldownTimerRef.current);
      cooldownTimerRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  }, []);
  const startCooldown = useCallback7(() => {
    if (cooldownMs <= 0) return;
    setIsInCooldown(() => true);
    setCooldownProgress(() => 0);
    cooldownStartTimeRef.current = Date.now();
    onCooldownStartRef.current?.();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - cooldownStartTimeRef.current;
      const progress = Math.min(elapsed / cooldownMs, 1);
      setCooldownProgress(() => progress);
      if (progress >= 1 && progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }, 16);
    cooldownTimerRef.current = setTimeout(() => {
      setIsInCooldown(() => false);
      setCooldownProgress(() => 0);
      setClickCount(() => 0);
      onCooldownEndRef.current?.();
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
        progressIntervalRef.current = null;
      }
    }, cooldownMs);
  }, [cooldownMs, clearTimers]);
  const handleClick = useCallback7(
    (callback) => {
      if (isInCooldown) return false;
      callback?.();
      setClickCount((prev) => {
        const newCount = prev + 1;
        if (newCount >= clicksBeforeCooldown && cooldownMs > 0) startCooldown();
        return newCount;
      });
      return true;
    },
    [isInCooldown, clicksBeforeCooldown, cooldownMs, startCooldown]
  );
  const resetCooldown = useCallback7(() => {
    clearTimers();
    setIsInCooldown(() => false);
    setCooldownProgress(() => 0);
    setClickCount(() => 0);
  }, [clearTimers]);
  const getRemainingTime = useCallback7(() => {
    if (!isInCooldown || cooldownMs <= 0) return 0;
    const elapsed = Date.now() - cooldownStartTimeRef.current;
    return Math.max(cooldownMs - elapsed, 0);
  }, [isInCooldown, cooldownMs]);
  useEffect6(() => {
    return () => clearTimers();
  }, [clearTimers]);
  return { handleClick, isInCooldown, resetCooldown, getRemainingTime, cooldownProgress, clickCount };
}

// src/components/Button/index.tsx
import { Slot } from "@radix-ui/react-slot";

// src/components/Button/hooks/use-haptic.ts
import { useCallback as useCallback8, useEffect as useEffect7, useMemo as useMemo3 } from "react";
var hapticPatterns = {
  light: 10,
  heavy: 50,
  medium: 25,
  success: [10, 50, 10],
  warning: [25, 50, 25],
  error: [50, 25, 50, 25, 50]
};
function useHaptic(options = {}) {
  const { enabled = true, stopOnUnmount = true } = options;
  const isSupported = useMemo3(() => typeof navigator !== "undefined" && "vibrate" in navigator && typeof navigator.vibrate === "function", []);
  const stopVibration = useCallback8(() => {
    if (isSupported) {
      try {
        navigator.vibrate(0);
      } catch (error) {
        console.warn("Failed to stop vibration:", error);
      }
    }
  }, [isSupported]);
  const vibrate = useCallback8(
    (pattern = "light") => {
      if (!enabled || !isSupported) return false;
      try {
        let vibrationPattern;
        if (typeof pattern === "string") {
          if (!(pattern in hapticPatterns)) {
            console.warn(`Unknown haptic pattern: "${pattern}". Falling back to "light".`);
            vibrationPattern = hapticPatterns.light;
          } else vibrationPattern = hapticPatterns[pattern];
        } else if (typeof pattern === "number") {
          vibrationPattern = Math.max(0, pattern);
        } else {
          vibrationPattern = pattern.map((val) => Math.max(0, val));
        }
        return navigator.vibrate(vibrationPattern);
      } catch (error) {
        console.warn("Failed to trigger vibration:", error);
        return false;
      }
    },
    [enabled, isSupported]
  );
  useEffect7(() => {
    if (!stopOnUnmount) return;
    return () => stopVibration();
  }, [stopOnUnmount, stopVibration]);
  return { vibrate, stopVibration, isSupported };
}

// src/components/Button/hooks/use-ripple.ts
import { useCallback as useCallback9, useEffect as useEffect8, useRef as useRef8, useState as useState5 } from "react";
function useRipple2(options = {}) {
  const { disabled = false, duration = 600, maxRipples = 3, enableHapticFeedback = false } = options;
  const timeoutRefs = useRef8(/* @__PURE__ */ new Map());
  const rippleKeyRef = useRef8(0);
  const [ripples, setRipples] = useState5([]);
  const clearRipple = useCallback9((key) => {
    setRipples((prev) => prev.filter((ripple) => ripple.key !== key));
    const timeout = timeoutRefs.current.get(key);
    if (timeout) {
      clearTimeout(timeout);
      timeoutRefs.current.delete(key);
    }
  }, []);
  const clearAllRipples = useCallback9(() => {
    setRipples(() => []);
    timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
    timeoutRefs.current.clear();
  }, []);
  const createRipple = useCallback9(
    (event) => {
      if (disabled) return;
      const element = event.currentTarget;
      const rect = element.getBoundingClientRect();
      let clientX;
      let clientY;
      if ("touches" in event) {
        if (event.touches.length === 0) return;
        clientX = event.touches[0].clientX;
        clientY = event.touches[0].clientY;
      } else {
        clientX = event.clientX;
        clientY = event.clientY;
      }
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const size = Math.max(rect.width, rect.height) * 2;
      if (enableHapticFeedback && navigator.vibrate) navigator.vibrate(3);
      const key = rippleKeyRef.current;
      rippleKeyRef.current = (rippleKeyRef.current + 1) % Number.MAX_SAFE_INTEGER;
      const newRipple = {
        key,
        x: x - size / 2,
        y: y - size / 2,
        size
      };
      setRipples((prev) => {
        const updated = [...prev, newRipple];
        if (maxRipples > 0 && updated.length > maxRipples) {
          const removed = updated.slice(0, updated.length - maxRipples);
          removed.forEach((ripple) => {
            const timeout = timeoutRefs.current.get(ripple.key);
            if (timeout) {
              clearTimeout(timeout);
              timeoutRefs.current.delete(ripple.key);
            }
          });
          return updated.slice(-maxRipples);
        }
        return updated;
      });
      if (duration > 0) {
        const timeout = setTimeout(() => clearRipple(key), duration);
        timeoutRefs.current.set(key, timeout);
      }
    },
    [disabled, duration, maxRipples, clearRipple, enableHapticFeedback]
  );
  useEffect8(() => {
    return () => {
      timeoutRefs.current.forEach((timeout) => clearTimeout(timeout));
      timeoutRefs.current.clear();
    };
  }, []);
  return { ripples, createRipple, clearRipple, clearAllRipples };
}

// src/components/Button/index.tsx
init_functions();

// src/components/Button/progress-bar.tsx
import { m as m16, AnimatePresence as AnimatePresence4, LazyMotion as LazyMotion4, domAnimation as domAnimation4 } from "motion/react";
init_functions();
import { memo as memo16 } from "react";
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
var SPRING_CONFIG = { type: "spring", stiffness: 300, damping: 30 };
var FADE_CONFIG = { duration: 0.15 };
var getProgressAriaProps = (progress) => ({
  "aria-label": `Progress: ${Math.round(progress)}%`,
  "aria-valuenow": Math.round(progress),
  role: "progressbar",
  "aria-valuemax": 100,
  "aria-valuemin": 0
});
var progress_bar_default = memo16(function ProgressBar({ progress, placement, color = "default", className }) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);
  const renderContent = () => {
    switch (placement) {
      case "inline":
        return /* @__PURE__ */ jsx16(
          "div",
          {
            className: cn("absolute inset-x-0 bottom-0 h-1 overflow-hidden", className),
            ...getProgressAriaProps(clampedProgress),
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx16(
              m16.div,
              {
                className: cn("h-full origin-left", progressVariants({ color })),
                transition: SPRING_CONFIG,
                animate: { scaleX: clampedProgress / 100 },
                initial: { scaleX: 0 }
              }
            )
          }
        );
      case "label":
        return /* @__PURE__ */ jsx16(AnimatePresence4, { mode: "wait", children: /* @__PURE__ */ jsxs9(
          m16.span,
          {
            className: cn("font-medium tabular-nums", className),
            initial: { opacity: 0, scale: 0.9 },
            animate: { opacity: 1, scale: 1 },
            exit: { opacity: 0, scale: 0.9 },
            transition: FADE_CONFIG,
            "aria-live": "polite",
            "aria-atomic": "true",
            role: "status",
            children: [
              Math.round(clampedProgress),
              "%"
            ]
          },
          `progress-${Math.round(clampedProgress)}`
        ) });
      case "overlay":
      default:
        return /* @__PURE__ */ jsx16(
          "div",
          {
            className: cn("pointer-events-none absolute inset-0 overflow-hidden", className),
            ...getProgressAriaProps(clampedProgress),
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx16(
              m16.div,
              {
                className: cn("absolute inset-y-0 left-0", progressVariants({ color })),
                animate: { width: `${clampedProgress}%` },
                transition: SPRING_CONFIG,
                initial: { width: "0%" }
              }
            )
          }
        );
    }
  };
  return /* @__PURE__ */ jsx16(LazyMotion4, { features: domAnimation4, strict: true, children: renderContent() });
});

// src/components/Button/ripple.tsx
import { m as m17, AnimatePresence as AnimatePresence5, LazyMotion as LazyMotion5, domAnimation as domAnimation5 } from "motion/react";
init_functions();
import { memo as memo17 } from "react";
import { jsx as jsx17 } from "react/jsx-runtime";
var RIPPLE_DURATION = 0.6;
var RIPPLE_INITIAL_OPACITY = 0.5;
var RippleItem = memo17(function RippleItem2({ ripple, color, onComplete }) {
  return /* @__PURE__ */ jsx17(
    m17.span,
    {
      style: { top: ripple.y, left: ripple.x, width: ripple.size, height: ripple.size },
      transition: { duration: RIPPLE_DURATION, ease: "easeOut" },
      initial: { scale: 0, opacity: RIPPLE_INITIAL_OPACITY },
      className: cn(rippleVariants({ color })),
      animate: { scale: 1, opacity: 0 },
      onAnimationComplete: onComplete,
      exit: { opacity: 0 }
    }
  );
});
var ripple_default = memo17(function RippleContainer3({ onAnimationComplete, color = "default", className, ripples }) {
  return /* @__PURE__ */ jsx17(LazyMotion5, { features: domAnimation5, strict: true, children: /* @__PURE__ */ jsx17("span", { className: cn("pointer-events-none absolute inset-0 overflow-hidden", className), "aria-hidden": "true", role: "presentation", children: /* @__PURE__ */ jsx17(AnimatePresence5, { mode: "popLayout", children: ripples.map((ripple) => /* @__PURE__ */ jsx17(RippleItem, { ripple, color, onComplete: () => onAnimationComplete(ripple.key) }, ripple.key)) }) }) });
});

// src/components/Button/spinner.tsx
init_functions();
import { domAnimation as domAnimation6, LazyMotion as LazyMotion6, m as m18 } from "motion/react";
import { memo as memo18 } from "react";
import { jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
var SIZE_MAP = {
  icon: "h-4 w-4",
  xs: "h-3 w-3",
  sm: "h-3.5 w-3.5",
  md: "h-4 w-4",
  lg: "h-5 w-5"
};
var FADE_DURATION2 = 0.15;
var SCALE_VALUE = 0.8;
var spinner_default = memo18(function Spinner({ size = "md", className, label = "loading" }) {
  return /* @__PURE__ */ jsx18(LazyMotion6, { features: domAnimation6, strict: true, children: /* @__PURE__ */ jsxs10(
    m18.svg,
    {
      className: cn(SIZE_MAP[size], "animate-spin", className),
      initial: { opacity: 0, scale: SCALE_VALUE },
      exit: { opacity: 0, scale: SCALE_VALUE },
      transition: { duration: FADE_DURATION2 },
      animate: { opacity: 1, scale: 1 },
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      role: "presentation",
      "aria-hidden": "true",
      focusable: "false",
      fill: "none",
      children: [
        label && /* @__PURE__ */ jsx18("title", { children: label }),
        /* @__PURE__ */ jsx18("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
        /* @__PURE__ */ jsx18(
          "path",
          {
            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z",
            className: "opacity-75",
            fill: "currentColor"
          }
        )
      ]
    }
  ) });
});

// src/components/Button/index.tsx
import { Fragment as Fragment3, jsx as jsx19, jsxs as jsxs11 } from "react/jsx-runtime";
var DOUBLE_CLICK_DELAY = 300;
var CONTENT_FADE_DURATION = 0.2;
var SMOOTH_LAYOUT_TRANSITION = { type: "spring", stiffness: 300, damping: 30, velocity: 1, mass: 1 };
var SMOOTH_TWEEN_TRANSITION = { type: "tween", duration: 0.3, ease: [0.25, 0.1, 0.25, 1] };
var CONTENT_TRANSITION = { duration: CONTENT_FADE_DURATION, ease: [0.4, 0, 0.2, 1] };
var Button_default = memo19(function Button(innerProps) {
  const {
    // Composition
    asChild = false,
    // Identity
    id,
    ref,
    // Content
    children,
    startContent,
    endContent,
    spinner,
    // Visual props
    size = "md",
    color = "default",
    variant = "solid",
    radius = "md",
    className,
    isIconOnly = false,
    // State
    isLoading = false,
    isDisabled = false,
    progress,
    // Animation config
    disableAnimation = false,
    disableRipple = false,
    animateOnMount = false,
    animateOnUnmount = false,
    entranceAnimation = "fade",
    exitAnimation = "fade",
    hoverAnimation = "scale",
    pressAnimation = "squeeze",
    // Progress config
    progressPlacement = "overlay",
    showProgressText = false,
    // Loading config
    spinnerPlacement = "start",
    loadingText = "Loading, please wait",
    // Interaction features
    onLongPress,
    longPressDelay = 500,
    showLongPressIndicator = false,
    cooldownMs = 0,
    clicksBeforeCooldown = 1,
    showCooldownIndicator = false,
    onDoubleClick,
    enableHaptic = false,
    // ARIA attributes
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    "aria-describedby": ariaDescribedBy,
    "aria-live": ariaLive,
    "aria-pressed": ariaPressed,
    "aria-expanded": ariaExpanded,
    "aria-haspopup": ariaHasPopup,
    "aria-controls": ariaControls,
    "aria-keyshortcuts": ariaKeyShortcuts,
    // Internal (for staggered lists)
    _staggerIndex = 0,
    _staggerDelay = 0,
    // Native button props
    type = "button",
    onClick,
    onKeyDown,
    ...props
  } = innerProps;
  const uniqueId = id ?? useId2();
  const prefersReducedMotion = useReducedMotion2();
  const buttonRef = useRef9(null);
  const lastClickTimeRef = useRef9(0);
  const doubleClickTimeoutRef = useRef9(null);
  const staggerDelay = _staggerIndex * _staggerDelay;
  const loadingAnnouncementId = `${uniqueId}-loading`;
  const progressAnnouncementId = `${uniqueId}-progress`;
  const shouldDisableAnimation = disableAnimation || prefersReducedMotion;
  const effectiveIsIconOnly = isIconOnly || size === "icon";
  const isPeeledVariant = variant === "peeled";
  const combinedRef = useCallback10(
    (node) => {
      buttonRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    },
    [ref]
  );
  const { ripples, createRipple, clearRipple } = useRipple2({
    disabled: disableRipple || shouldDisableAnimation || isDisabled || isLoading,
    enableHapticFeedback: enableHaptic
  });
  const {
    progress: longPressProgress,
    handlers: longPressHandlers,
    isPressed: isLongPressing
  } = useLongPress2({
    onLongPress,
    delay: longPressDelay,
    disabled: isDisabled || isLoading || !onLongPress
  });
  const { vibrate } = useHaptic({ enabled: enableHaptic });
  const { isInCooldown, cooldownProgress, handleClick: handleCooldownClick } = useCooldown({ cooldownMs, clicksBeforeCooldown });
  const hoverVariant = useMemo4(() => shouldDisableAnimation ? {} : getHoverVariant(hoverAnimation), [hoverAnimation, shouldDisableAnimation]);
  const pressVariant = useMemo4(() => shouldDisableAnimation ? {} : getPressVariant(pressAnimation), [pressAnimation, shouldDisableAnimation]);
  const entranceExitVariant = useMemo4(() => {
    if (shouldDisableAnimation || !animateOnMount && !animateOnUnmount) return { initial: {}, animate: {}, exit: {} };
    return getEntranceExitVariants(animateOnMount ? entranceAnimation : "none", animateOnUnmount ? exitAnimation : "none");
  }, [animateOnMount, animateOnUnmount, entranceAnimation, exitAnimation, shouldDisableAnimation]);
  const handleKeyDownUpdated = useCallback10(
    (event) => {
      if (event.key === "Enter" || event.key === " ") {
        if (isDisabled || isLoading || isInCooldown) {
          event.preventDefault();
          return;
        }
      }
      onKeyDown?.(event);
    },
    [isDisabled, isLoading, isInCooldown, onKeyDown]
  );
  const handleClick = useCallback10(
    (event) => {
      if (isDisabled || isLoading || isInCooldown) {
        event.preventDefault();
        return;
      }
      if (!disableRipple && !shouldDisableAnimation) createRipple(event);
      if (enableHaptic) vibrate("light");
      const now = Date.now();
      if (onDoubleClick && now - lastClickTimeRef.current < DOUBLE_CLICK_DELAY) {
        if (doubleClickTimeoutRef.current) {
          clearTimeout(doubleClickTimeoutRef.current);
        }
        onDoubleClick();
        lastClickTimeRef.current = 0;
        return;
      }
      lastClickTimeRef.current = now;
      handleCooldownClick(() => {
        if (onDoubleClick) {
          doubleClickTimeoutRef.current = setTimeout(() => onClick?.(event), DOUBLE_CLICK_DELAY);
        } else {
          onClick?.(event);
        }
      });
    },
    [
      isDisabled,
      isLoading,
      isInCooldown,
      disableRipple,
      shouldDisableAnimation,
      enableHaptic,
      onDoubleClick,
      handleCooldownClick,
      onClick,
      createRipple,
      vibrate
    ]
  );
  useEffect9(() => {
    return () => {
      if (doubleClickTimeoutRef.current) {
        clearTimeout(doubleClickTimeoutRef.current);
      }
    };
  }, []);
  const isEffectivelyDisabled = isDisabled || isLoading || isInCooldown;
  const buttonClassName = useMemo4(
    () => cn(
      buttonVariants({
        size,
        color,
        variant,
        isDisabled: isEffectivelyDisabled,
        radius: isPeeledVariant ? "lg" : radius,
        isIconOnly: effectiveIsIconOnly || isPeeledVariant
      }),
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      isPeeledVariant && "group h-12 w-12 overflow-visible",
      className
    ),
    [variant, color, size, radius, isEffectivelyDisabled, effectiveIsIconOnly, className, isPeeledVariant]
  );
  const accessibilityProps = useMemo4(() => {
    const attrs = {
      "aria-disabled": isEffectivelyDisabled,
      "aria-busy": isLoading
    };
    if (typeof progress === "number") {
      attrs["aria-valuemin"] = 0;
      attrs["aria-valuemax"] = 100;
      attrs["aria-valuenow"] = Math.round(progress);
      attrs["aria-valuetext"] = `${Math.round(progress)}% complete`;
    }
    if (ariaLive) attrs["aria-live"] = ariaLive;
    if (ariaLabel) attrs["aria-label"] = ariaLabel;
    if (ariaHasPopup) attrs["aria-haspopup"] = ariaHasPopup;
    if (ariaControls) attrs["aria-controls"] = ariaControls;
    if (ariaLabelledBy) attrs["aria-labelledby"] = ariaLabelledBy;
    if (ariaDescribedBy) attrs["aria-describedby"] = ariaDescribedBy;
    if (ariaPressed !== void 0) attrs["aria-pressed"] = ariaPressed;
    if (ariaKeyShortcuts) attrs["aria-keyshortcuts"] = ariaKeyShortcuts;
    if (ariaExpanded !== void 0) attrs["aria-expanded"] = ariaExpanded;
    return attrs;
  }, [
    isEffectivelyDisabled,
    ariaKeyShortcuts,
    ariaDescribedBy,
    ariaLabelledBy,
    ariaControls,
    ariaExpanded,
    ariaHasPopup,
    ariaPressed,
    isLoading,
    ariaLabel,
    progress,
    ariaLive
  ]);
  const renderSpinner = useMemo4(() => {
    if (!isLoading) return null;
    return spinner || /* @__PURE__ */ jsx19(spinner_default, { size });
  }, [isLoading, spinner, size]);
  const renderPeeledContent = useMemo4(() => {
    return /* @__PURE__ */ jsxs11(Fragment3, { children: [
      /* @__PURE__ */ jsx19(
        "span",
        {
          className: cn(
            "absolute inset-0 rounded-lg transition-transform duration-300 ease-out origin-bottom z-0 group-hover:rotate-35",
            peeledBgVariants({ color })
          ),
          "aria-hidden": "true"
        }
      ),
      /* @__PURE__ */ jsx19(
        "span",
        {
          className: cn(
            "relative z-10 w-full h-full flex items-center justify-center rounded-lg",
            "group-hover:bg-zinc-500/30 group-hover:backdrop-blur-sm",
            "border border-zinc-400/50 transition-all duration-300"
          ),
          children: startContent || children
        }
      )
    ] });
  }, [startContent, children, color]);
  const renderContent = useMemo4(() => {
    if (isPeeledVariant) return renderPeeledContent;
    const hasProgress = typeof progress === "number";
    const showProgressAsLabel = hasProgress && progressPlacement === "label";
    if (effectiveIsIconOnly) {
      return /* @__PURE__ */ jsx19(AnimatePresence6, { mode: "wait", children: isLoading ? /* @__PURE__ */ jsx19(
        m19.span,
        {
          layout: true,
          "aria-hidden": "true",
          exit: { opacity: 0, scale: 0.9 },
          animate: { opacity: 1, scale: 1 },
          initial: { opacity: 0, scale: 0.9 },
          transition: CONTENT_TRANSITION,
          className: "inline-flex items-center justify-center",
          children: renderSpinner
        },
        "spinner-icon"
      ) : /* @__PURE__ */ jsx19(
        m19.span,
        {
          layout: true,
          exit: { opacity: 0, scale: 0.95 },
          initial: { opacity: 0, scale: 0.95 },
          animate: { opacity: 1, scale: 1 },
          transition: CONTENT_TRANSITION,
          className: "inline-flex items-center justify-center",
          children
        },
        "icon-content"
      ) });
    }
    return /* @__PURE__ */ jsxs11(Fragment3, { children: [
      /* @__PURE__ */ jsx19(AnimatePresence6, { mode: "wait", children: isLoading && spinnerPlacement === "start" ? /* @__PURE__ */ jsx19(
        m19.span,
        {
          layout: true,
          initial: { opacity: 0, scale: 0.9, width: 0 },
          animate: { opacity: 1, scale: 1, width: "auto" },
          exit: { opacity: 0, scale: 0.9, width: 0 },
          transition: CONTENT_TRANSITION,
          "aria-hidden": "true",
          style: { overflow: "hidden" },
          children: renderSpinner
        },
        "spinner-start"
      ) : startContent ? /* @__PURE__ */ jsx19(
        m19.span,
        {
          layout: true,
          className: "inline-flex shrink-0",
          initial: { opacity: 0, width: 0, scale: 0.95 },
          animate: { opacity: 1, width: "auto", scale: 1 },
          exit: { opacity: 0, width: 0, scale: 0.95 },
          transition: CONTENT_TRANSITION,
          "aria-hidden": "true",
          style: { overflow: "hidden" },
          children: startContent
        },
        "start-content"
      ) : null }),
      /* @__PURE__ */ jsx19(AnimatePresence6, { mode: "wait", children: showProgressAsLabel && showProgressText ? /* @__PURE__ */ jsx19(progress_bar_default, { progress, placement: "label", color }, "progress-label") : /* @__PURE__ */ jsx19(
        m19.span,
        {
          layout: true,
          className: "truncate",
          transition: CONTENT_TRANSITION,
          animate: { opacity: isLoading ? 0.7 : 1 },
          initial: isLoading ? { opacity: 0.7 } : { opacity: 1 },
          children
        },
        "children"
      ) }),
      /* @__PURE__ */ jsx19(AnimatePresence6, { mode: "wait", children: isLoading && spinnerPlacement === "end" ? /* @__PURE__ */ jsx19(
        m19.span,
        {
          layout: true,
          "aria-hidden": "true",
          transition: CONTENT_TRANSITION,
          style: { overflow: "hidden" },
          exit: { opacity: 0, scale: 0.9, width: 0 },
          initial: { opacity: 0, scale: 0.9, width: 0 },
          animate: { opacity: 1, scale: 1, width: "auto" },
          children: renderSpinner
        },
        "spinner-end"
      ) : endContent ? /* @__PURE__ */ jsx19(
        m19.span,
        {
          layout: true,
          "aria-hidden": "true",
          transition: CONTENT_TRANSITION,
          style: { overflow: "hidden" },
          className: "inline-flex shrink-0",
          exit: { opacity: 0, width: 0, scale: 0.95 },
          initial: { opacity: 0, width: 0, scale: 0.95 },
          animate: { opacity: 1, width: "auto", scale: 1 },
          children: endContent
        },
        "end-content"
      ) : null })
    ] });
  }, [
    effectiveIsIconOnly,
    renderPeeledContent,
    progressPlacement,
    spinnerPlacement,
    showProgressText,
    isPeeledVariant,
    renderSpinner,
    startContent,
    endContent,
    isLoading,
    children,
    progress,
    color
  ]);
  const motionProps = useMemo4(
    () => ({
      layoutRoot: true,
      layout: "size",
      transition: SMOOTH_TWEEN_TRANSITION,
      exit: entranceExitVariant.exit,
      initial: entranceExitVariant.initial,
      style: { willChange: "transform, width, height" },
      whileTap: isEffectivelyDisabled ? {} : pressVariant.tap,
      whileHover: isEffectivelyDisabled ? {} : hoverVariant.hover,
      animate: { ...entranceExitVariant.animate, transition: { delay: staggerDelay, ...SMOOTH_TWEEN_TRANSITION } }
    }),
    [entranceExitVariant, isEffectivelyDisabled, pressVariant, hoverVariant, staggerDelay]
  );
  const htmlProps = useMemo4(
    () => ({
      ref: combinedRef,
      className: buttonClassName,
      disabled: isEffectivelyDisabled,
      onClick: handleClick,
      onKeyDown: handleKeyDownUpdated,
      ...onLongPress ? longPressHandlers : {},
      ...accessibilityProps,
      ...props
    }),
    [
      combinedRef,
      buttonClassName,
      isEffectivelyDisabled,
      handleClick,
      handleKeyDownUpdated,
      onLongPress,
      longPressHandlers,
      accessibilityProps,
      props
    ]
  );
  const buttonContent = useMemo4(
    () => /* @__PURE__ */ jsxs11(Fragment3, { children: [
      !disableRipple && !shouldDisableAnimation && /* @__PURE__ */ jsx19(ripple_default, { ripples, color, onAnimationComplete: clearRipple }),
      typeof progress === "number" && progressPlacement !== "label" && /* @__PURE__ */ jsx19(progress_bar_default, { color, progress, placement: progressPlacement }),
      showCooldownIndicator && isInCooldown && /* @__PURE__ */ jsx19(cooldown_indicator_default, { progress: cooldownProgress }),
      /* @__PURE__ */ jsx19(AnimatePresence6, { children: showLongPressIndicator && isLongPressing && onLongPress && /* @__PURE__ */ jsx19(long_press_indicator_default, { progress: longPressProgress, color, variant, duration: longPressDelay }) }),
      /* @__PURE__ */ jsx19(
        m19.span,
        {
          layout: "size",
          transition: SMOOTH_LAYOUT_TRANSITION,
          className: cn(
            "relative z-10 inline-flex items-center justify-center gap-2 will-change-transform",
            isPeeledVariant && "w-full h-full"
          ),
          children: renderContent
        }
      )
    ] }),
    [
      disableRipple,
      shouldDisableAnimation,
      ripples,
      color,
      clearRipple,
      progress,
      progressPlacement,
      showCooldownIndicator,
      isInCooldown,
      cooldownProgress,
      showLongPressIndicator,
      isLongPressing,
      onLongPress,
      longPressProgress,
      variant,
      longPressDelay,
      isPeeledVariant,
      renderContent
    ]
  );
  return /* @__PURE__ */ jsxs11(LazyMotion7, { strict: true, features: domMax, children: [
    asChild ? (
      // SOLUTION: Wrap Slot with motion to preserve animations when asChild is used
      /* @__PURE__ */ jsx19(m19.span, { ...motionProps, style: { display: "inline-block", isolation: "isolate", ...motionProps.style }, children: /* @__PURE__ */ jsx19(Slot, { ...htmlProps, "data-button-wrapper": "true", children: buttonContent }) })
    ) : (
      // Original motion.button rendering
      /* @__PURE__ */ jsx19(m19.button, { type, ...motionProps, ...htmlProps, children: buttonContent })
    ),
    isLoading && /* @__PURE__ */ jsx19("span", { id: loadingAnnouncementId, role: "status", "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: loadingText }),
    typeof progress === "number" && /* @__PURE__ */ jsx19("span", { id: progressAnnouncementId, role: "status", "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: `Progress: ${Math.round(progress)}%` })
  ] });
});

// src/components/Button/button-group.tsx
import { Children, cloneElement, Fragment as Fragment4, isValidElement, memo as memo20, useMemo as useMemo5 } from "react";

// src/components/Button/configs/animations/stagger.ts
var staggerAnimations = {
  fade: {
    initial: { opacity: 0 },
    exit: { opacity: 0, transition: { duration: 0.2 } },
    animate: { opacity: 1, transition: { duration: 0.3, ease: "easeOut" } }
  },
  slide: {
    initial: { opacity: 0, y: 20 },
    exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
    animate: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 400, damping: 25 } }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    exit: { opacity: 0, scale: 0.9, transition: { duration: 0.15 } },
    animate: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 400, damping: 20 } }
  },
  cascade: {
    initial: { opacity: 0, x: -30, rotate: -5, scale: 0.95 },
    exit: { opacity: 0, x: 20, rotate: 3, transition: { duration: 0.2 } },
    animate: { opacity: 1, x: 0, rotate: 0, scale: 1, transition: { type: "spring", stiffness: 350, damping: 25 } }
  },
  // Wave - bouncy entrance from below
  wave: {
    initial: { y: 40, opacity: 0, scale: 0.9 },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2 } },
    animate: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 300, damping: 15, mass: 0.8 } }
  },
  // Pop - explosive scale with overshoot
  pop: {
    initial: { opacity: 0, scale: 0.3, filter: "blur(10px)" },
    exit: { opacity: 0, scale: 0.5, filter: "blur(5px)", transition: { duration: 0.15 } },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)", transition: { type: "spring", stiffness: 500, damping: 15 } }
  },
  // Typewriter - reveals from left with clip
  typewriter: {
    initial: { opacity: 0, scaleX: 0, originX: 0 },
    exit: { opacity: 0, scaleX: 0, transition: { duration: 0.2 } },
    animate: { opacity: 1, scaleX: 1, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] } }
  },
  none: { initial: {}, animate: {}, exit: {} }
};
function getStaggerVariant(animation) {
  return staggerAnimations[animation] || staggerAnimations.none;
}

// src/components/Button/button-group.tsx
init_functions();
import { m as m20, LazyMotion as LazyMotion8, domAnimation as domAnimation7 } from "motion/react";
import { jsx as jsx20 } from "react/jsx-runtime";
var spacingClasses = { none: "gap-0", sm: "gap-1", md: "gap-2", lg: "gap-4" };
function getStaggerOrder(index, totalCount, direction) {
  switch (direction) {
    case "forward":
      return index;
    case "reverse":
      return totalCount - 1 - index;
    case "center":
      return Math.abs(index - Math.floor(totalCount / 2));
    default:
      return index;
  }
}
var button_group_default = memo20(function ButtonGroup(props) {
  const {
    children,
    className,
    role = "group",
    spacing = "none",
    staggerDelay = 0.05,
    "aria-label": ariaLabel,
    staggerAnimation = false,
    orientation = "horizontal",
    staggerDirection = "forward",
    staggerAnimationType = "fade"
  } = props;
  const childArray = useMemo5(() => Children.toArray(children).filter(isValidElement), [children]);
  const totalCount = childArray.length;
  const staggerVariant = useMemo5(() => getStaggerVariant(staggerAnimationType), [staggerAnimationType]);
  const containerVariants = useMemo5(
    () => ({
      visible: { transition: { staggerChildren: staggerAnimation ? staggerDelay : 0, delayChildren: 0 } },
      hidden: {}
    }),
    [staggerAnimation, staggerDelay]
  );
  const itemVariants = useMemo5(() => ({ hidden: staggerVariant.initial, visible: staggerVariant.animate }), [staggerVariant]);
  const enhancedChildren = useMemo5(() => {
    return childArray.map((child, index) => {
      if (!isValidElement(child)) return child;
      const staggerOrder = getStaggerOrder(index, totalCount, staggerDirection);
      const internalProps = { _staggerIndex: staggerOrder, _staggerDelay: staggerAnimation ? staggerDelay : 0 };
      let radiusOverride = "";
      if (spacing === "none") {
        if (orientation === "horizontal") {
          if (index === 0) radiusOverride = "rounded-r-none";
          else if (index === totalCount - 1) radiusOverride = "rounded-l-none";
          else radiusOverride = "rounded-none";
        } else {
          if (index === 0) radiusOverride = "rounded-b-none";
          else if (index === totalCount - 1) radiusOverride = "rounded-t-none";
          else radiusOverride = "rounded-none";
        }
      }
      const enhancedChild = cloneElement(child, {
        ...internalProps,
        className: cn(child.props.className, radiusOverride)
      });
      return staggerAnimation ? /* @__PURE__ */ jsx20(m20.div, { variants: itemVariants, children: enhancedChild }, index) : /* @__PURE__ */ jsx20(Fragment4, { children: enhancedChild }, index);
    });
  }, [childArray, totalCount, staggerAnimation, staggerDelay, staggerDirection, spacing, orientation, itemVariants]);
  return /* @__PURE__ */ jsx20(LazyMotion8, { features: domAnimation7, strict: true, children: /* @__PURE__ */ jsx20(
    m20.div,
    {
      className: cn(
        "inline-flex",
        spacingClasses[spacing],
        orientation === "vertical" ? "flex-col" : "flex-row",
        spacing === "none" && orientation === "horizontal" && "[&>*:not(:first-child)]:-ml-px",
        spacing === "none" && orientation === "vertical" && "[&>*:not(:first-child)]:-mt-px",
        className
      ),
      variants: staggerAnimation ? containerVariants : void 0,
      animate: staggerAnimation ? "visible" : void 0,
      initial: staggerAnimation ? "hidden" : void 0,
      "aria-orientation": orientation,
      "aria-label": ariaLabel,
      role,
      children: enhancedChildren
    }
  ) });
});
export {
  AnimatedInputErrorBoundary,
  Button_default as Button,
  button_group_default as ButtonGroup,
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