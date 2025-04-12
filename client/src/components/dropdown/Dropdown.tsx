import React, { useState } from "react";
import Select, { components } from "react-select";
import PropTypes from "prop-types";

// Default options
const defaultOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "mango", label: "Mango" },
];

// Tailwind Indigo palette
const indigoPalette = {
  700: "#4f46e5", // indigo-700
  600: "#5b21b6", // indigo-600 (adjusted for contrast)
  500: "#6b7280", // gray-500 (neutral accent, adjusted from indigo-500 for readability)
  400: "#a5b4fc", // indigo-400
};

// Light mode theme
const lightTheme = (theme) => ({
  ...theme,
  borderRadius: 6,
  colors: {
    ...theme.colors,
    primary: indigoPalette[700], // indigo-700 for selections
    primary75: indigoPalette[600], // indigo-600
    primary50: indigoPalette[500], // indigo-500
    primary25: indigoPalette[400], // indigo-400 for hover
    neutral0: "#ffffff", // white background
    neutral5: "#f9fafb", // gray-50
    neutral10: "#f3f4f6", // gray-100
    neutral20: "#e5e7eb", // gray-200
    neutral30: "#d1d5db", // gray-300
    neutral40: "#9ca3af", // gray-400
    neutral50: "#6b7280", // gray-500
    neutral60: "#4b5563", // gray-600
    neutral70: "#374151", // gray-700
    neutral80: "#1f2937", // gray-800
    neutral90: "#111827", // gray-900
  },
  spacing: {
    ...theme.spacing,
    baseUnit: 4,
    controlHeight: 38,
    menuGutter: 8,
  },
});

// Dark mode theme
const darkTheme = (theme) => ({
  ...theme,
  borderRadius: 6,
  colors: {
    ...theme.colors,
    primary: indigoPalette[400], // indigo-400 for selections
    primary75: indigoPalette[500], // indigo-500
    primary50: indigoPalette[600], // indigo-600
    primary25: indigoPalette[700], // indigo-700 for hover
    neutral0: indigoPalette[700], // indigo-700 background
    neutral5: "#4338ca", // indigo-800
    neutral10: "#4b5563", // gray-600
    neutral20: "#6b7280", // gray-500
    neutral30: "#9ca3af", // gray-400
    neutral40: "#d1d5db", // gray-300
    neutral50: "#e5e7eb", // gray-200
    neutral60: "#f3f4f6", // gray-100
    neutral70: "#f9fafb", // gray-50
    neutral80: "#ffffff", // white
    neutral90: "#ffffff", // white
  },
  spacing: {
    ...theme.spacing,
    baseUnit: 4,
    controlHeight: 38,
    menuGutter: 8,
  },
});

// Custom styles for both modes
const getCustomStyles = (mode) => ({
  control: (provided, state) => ({
    ...provided,
    backgroundColor: mode === "dark" ? indigoPalette[600] : "#ffffff",
    borderColor: state.isFocused
      ? indigoPalette[mode === "dark" ? 400 : 700]
      : "#e5e7eb",
    boxShadow: state.isFocused
      ? `0 0 0 2px ${indigoPalette[mode === "dark" ? 400 : 700]}50`
      : "none",
    "&:hover": {
      borderColor: indigoPalette[mode === "dark" ? 500 : 600],
    },
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? indigoPalette[mode === "dark" ? 400 : 700]
      : state.isFocused
      ? indigoPalette[mode === "dark" ? 700 : 400]
      : mode === "dark"
      ? indigoPalette[600]
      : "#ffffff",
    "&:active": {
      backgroundColor: indigoPalette[mode === "dark" ? 400 : 700],
      color: "#fff",
    },
    color: mode === "dark" || state.isSelected ? "#ffffff" : "#111827",
    padding: "8px 12px",
  }),
  menu: (provided) => ({
    ...provided,
    backgroundColor: mode === "dark" ? indigoPalette[600] : "#ffffff",
    boxShadow:
      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    border: `1px solid ${mode === "dark" ? indigoPalette[500] : "#e5e7eb"}`,
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: indigoPalette[mode === "dark" ? 500 : 600],
    borderRadius: "9999px",
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#ffffff" : "#1f2937",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#ffffff" : "#1f2937",
    "&:hover": {
      backgroundColor: "#ef4444", // red-500 for consistency
      color: "#ffffff",
    },
  }),
  placeholder: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#d1d5db" : "#9ca3af",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: mode === "dark" ? "#ffffff" : "#111827",
  }),
});

const Dropdown = ({
  options = defaultOptions,
  isMulti = false,
  isSearchable = true,
  placeholder = "Select an option...",
  onChange,
  defaultValue = null,
  mode = "light", // Add mode prop
  className = "",
}) => {
  const [selected, setSelected] = useState([]);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
  };

  return (
    <Select
      options={options}
      value={selected}
      onChange={handleChange}
      isMulti={true}
      isSearchable={isSearchable}
      placeholder={placeholder}
      theme={mode === "dark" ? darkTheme : lightTheme}
      styles={getCustomStyles(mode)}
      classNamePrefix="react-select"
      noOptionsMessage={() => "No options found"}
      components={{
        DropdownIndicator: null,
      }}
    />
  );
};

// // N items selected custom
// const ValueContainer: React.FC<unknown> = ({ children, ...props }) => {
//   let [values, input] = children;
//   if (Array.isArray(values)) {
//     if (values.length === 1) {
//       values = values[0].props.data.label;
//     } else if (props?.selectProps?.pluralPlaceHolder) {
//       const plural = values.length === 1 ? "" : "s";
//       values = `${values.length} ${
//         props?.selectProps?.pluralPlaceHolder ?? "Not Found"
//       }${plural} selected`;
//     } else {
//       const plural = values.length === 1 ? "" : "s";
//       values = `${values.length} item${plural} selected`;
//     }
//   }
//   return (
//     <components.ValueContainer {...props}>
//       {values}
//       {input}
//     </components.ValueContainer>
//   );
// };

export default Dropdown;
