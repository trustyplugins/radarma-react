import React, { useState } from 'react';

import { Dropdown } from 'primereact/dropdown';
import { FilterDropDownProps } from '../../core/models/interface';

const FilterDropDown = (props: FilterDropDownProps) => {
  const [selectedCity, setSelectedCity] = useState(null);

  return (
    <>
      <Dropdown
        value={selectedCity}
        onChange={(e: any) => setSelectedCity(e.value)}
        options={props.list}
        optionLabel="name"
        placeholder={`${
          props.placeholder ? props.placeholder : 'Select a value'
        }`}
        className={props.className}
      />
    </>
  );
};
export default FilterDropDown;
