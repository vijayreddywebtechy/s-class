"use client";

import React from "react";
import Select, { Props as SelectProps, components as selectComponents } from "react-select";
import { ChevronDown, Check } from "lucide-react";

// Design system color tokens - matches Tailwind CSS variables
// Note: React Select uses inline styles, so we need actual HSL values, not CSS variables
const colors = {
  // Border colors
  input: "hsl(0, 0%, 89.8%)",           // --input
  ring: "hsl(214, 100%, 44%)",          // --ring (focus color)
  
  // Text colors
  foreground: "hsl(213, 50%, 20%)",     // --foreground
  mutedForeground: "hsl(0, 0%, 45.1%)", // --muted-foreground
  
  // Background colors
  background: "hsl(0, 0%, 100%)",       // --background (white)
  accent: "hsl(214, 100%, 95%)",        // light blue for hover (custom)
  accentActive: "hsl(214, 100%, 90%)",  // darker blue for active (custom)
};

// Responsive sizing
const sizing = {
  radius: "0.375rem",        // rounded-md
  minHeightMobile: "2.5rem", // h-10
  minHeightDesktop: "3rem",  // h-12
  fontSizeMobile: "1rem",    // text-base
  fontSizeDesktop: "0.875rem", // text-sm
};

const customSelectStyles = {
  control: (base: any, state: any) => {
    const isFocused = state.isFocused || state.menuIsOpen;
    
    return {
      ...base,
      backgroundColor: "transparent",
      borderColor: colors.input,
      borderWidth: "1px",
      borderStyle: "solid",
      borderRadius: sizing.radius,
      minHeight: sizing.minHeightMobile,
      boxShadow: isFocused ? `0 0 0 1px ${colors.ring}` : "none",
      outline: "none",
      transition: "box-shadow 0.15s ease-in-out",
      "&:hover": {
        borderColor: colors.input,
      },
      "@media (min-width: 768px)": {
        minHeight: sizing.minHeightDesktop,
      },
    };
  },
  singleValue: (base: any) => ({
    ...base,
    color: colors.foreground,
    fontSize: sizing.fontSizeMobile,
    "@media (min-width: 768px)": {
      fontSize: sizing.fontSizeDesktop,
    },
  }),
  placeholder: (base: any) => ({
    ...base,
    fontSize: sizing.fontSizeMobile,
    color: colors.mutedForeground,
    "@media (min-width: 768px)": {
      fontSize: sizing.fontSizeDesktop,
    },
  }),
  option: (base: any, state: any) => ({
    ...base,
    backgroundColor: state.isFocused ? colors.accent : colors.background,
    color: colors.foreground,
    cursor: "pointer",
    "&:active": {
      backgroundColor: colors.accentActive,
    },
  }),
  menu: (base: any) => ({
    ...base,
    borderRadius: "0.375rem",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    zIndex: 50,
  }),
};

// --- Custom Dropdown Indicator ---
const DropdownIndicator = (props: any) => {
  return (
    <selectComponents.DropdownIndicator {...props}>
      <ChevronDown
        size={22}
        className="text-primary-light" strokeWidth={1.8} // custom color
      />
    </selectComponents.DropdownIndicator>
  );
};

// --- Remove the indicator separator completely ---
const IndicatorSeparator = () => null;

// --- Custom Option component (adds checkmark) ---
const Option = (props: any) => {
  return (
    <selectComponents.Option {...props}>
      <div className="flex items-center w-full">
        <span className="w-6 flex justify-center">
          {props.isSelected && (
            <Check size={18} className="text-primary-light" strokeWidth={1.5} />
          )}
        </span>
        <span>{props.label}</span>
      </div>
    </selectComponents.Option>
  );
};

function CustomReactSelect<OptionType>(props: SelectProps<OptionType>) {
  return <Select {...props} 
            styles={customSelectStyles} 
            components={{ 
              DropdownIndicator,
              IndicatorSeparator,
              Option,
            }}
  />;
}

export default CustomReactSelect;
