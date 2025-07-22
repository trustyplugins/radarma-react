import React, { useEffect, useState } from 'react'
import { Dropdown } from 'primereact/dropdown';
interface CustomDropdownProps {
    options: { label: string, value: string | number }[];
    defaultValue?: any;
    placeholder?: string;
    disabled?: boolean;
    className?:string;
    onChange?: (value: string | number | null) => void;  // Optional onChange from parent
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, placeholder, disabled, onChange,className,defaultValue }) => {
    const [selectedValue, setSelectedValue] = useState<string | number | null>(null);

    // Handle onChange internally
    const handleDropdownChange = (e: { value: string | number }) => {
        setSelectedValue(e.value);  // Set the selected value in the local state

        // Call the parent's onChange if it's provided
        if (onChange) {
            onChange(e.value);
        }
    };
    useEffect(() => {
        // Set the default value when the component mounts or the defaultValue changes
        if (defaultValue) {
            setSelectedValue(defaultValue);
        }
    }, [defaultValue]);

    return (
        <Dropdown
            value={selectedValue}
            options={options}
            onChange={handleDropdownChange}
            placeholder={placeholder || "Select an option"}
            disabled={disabled}
            className={className}
        />
    );
};

export default CustomDropdown;