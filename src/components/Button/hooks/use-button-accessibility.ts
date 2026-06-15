import { useMemo } from "react";
import type { AriaAttributes } from "react";

/**
 * Attributes merged onto the DOM host (button or slotted element). Narrower than `Record<string, unknown>`.
 */
export type ButtonAccessibilityAttributes = {
	"aria-busy": boolean;
} & Partial<{
	"aria-disabled": boolean;
	"aria-describedby": string;
	"aria-live": AriaAttributes["aria-live"];
	"aria-label": string;
	"aria-haspopup": AriaAttributes["aria-haspopup"];
	"aria-controls": string;
	"aria-labelledby": string;
	"aria-pressed": AriaAttributes["aria-pressed"];
	"aria-keyshortcuts": string;
	"aria-expanded": AriaAttributes["aria-expanded"];
}>;

export interface UseButtonAccessibilityParams {
	ariaDescribedBy?: string;
	isLoading: boolean;
	progress: number | undefined;
	loadingAnnouncementId: string;
	progressAnnouncementId: string;
	asChild: boolean;
	isEffectivelyDisabled: boolean;
	ariaLive?: AriaAttributes["aria-live"];
	ariaLabel?: string;
	ariaHasPopup?: AriaAttributes["aria-haspopup"];
	ariaControls?: string;
	ariaLabelledBy?: string;
	ariaPressed?: AriaAttributes["aria-pressed"];
	ariaKeyShortcuts?: string;
	ariaExpanded?: AriaAttributes["aria-expanded"];
}

export function useButtonAccessibility({
	ariaDescribedBy,
	isLoading,
	progress,
	loadingAnnouncementId,
	progressAnnouncementId,
	asChild,
	isEffectivelyDisabled,
	ariaLive,
	ariaLabel,
	ariaHasPopup,
	ariaControls,
	ariaLabelledBy,
	ariaPressed,
	ariaKeyShortcuts,
	ariaExpanded,
}: UseButtonAccessibilityParams) {
	const mergedAriaDescribedBy = useMemo(() => {
		const ids = new Set<string>();
		if (ariaDescribedBy) {
			for (const part of ariaDescribedBy.trim().split(/\s+/)) {
				if (part) ids.add(part);
			}
		}
		if (isLoading) ids.add(loadingAnnouncementId);
		if (typeof progress === "number") ids.add(progressAnnouncementId);
		return ids.size > 0 ? [...ids].join(" ") : undefined;
	}, [ariaDescribedBy, isLoading, progress, loadingAnnouncementId, progressAnnouncementId]);

	const accessibilityProps = useMemo((): ButtonAccessibilityAttributes => {
		const attrs: ButtonAccessibilityAttributes = {
			"aria-busy": isLoading,
		};

		if (asChild) {
			attrs["aria-disabled"] = isEffectivelyDisabled;
		}

		if (mergedAriaDescribedBy) attrs["aria-describedby"] = mergedAriaDescribedBy;

		if (ariaLive) attrs["aria-live"] = ariaLive;
		if (ariaLabel) attrs["aria-label"] = ariaLabel;
		if (ariaHasPopup) attrs["aria-haspopup"] = ariaHasPopup;
		if (ariaControls) attrs["aria-controls"] = ariaControls;
		if (ariaLabelledBy) attrs["aria-labelledby"] = ariaLabelledBy;
		if (ariaPressed !== undefined) attrs["aria-pressed"] = ariaPressed;
		if (ariaKeyShortcuts) attrs["aria-keyshortcuts"] = ariaKeyShortcuts;
		if (ariaExpanded !== undefined) attrs["aria-expanded"] = ariaExpanded;

		return attrs;
	}, [
		asChild,
		isEffectivelyDisabled,
		mergedAriaDescribedBy,
		ariaKeyShortcuts,
		ariaLabelledBy,
		ariaControls,
		ariaExpanded,
		ariaHasPopup,
		ariaPressed,
		isLoading,
		ariaLabel,
		ariaLive,
	]);

	return { mergedAriaDescribedBy, accessibilityProps };
}
