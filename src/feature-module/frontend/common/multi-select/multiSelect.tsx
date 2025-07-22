import React, { useState } from "react";
import { MultiSelect, MultiSelectChangeEvent } from 'primereact/multiselect';
import ImageWithBasePath from "../../../../core/img/ImageWithBasePath";

interface Country {
    name: string;
    code: string;
    flag: string;  // Local image path
}

export default function TemplateDemo() {
    const [selectedCountries, setSelectedCountries] = useState<Country[] | null>(null);
    
    const countries: Country[] = [
        { name: 'Darlee Robertson', code: '1', flag: 'assets/img/profiles/avatar-01.jpg' },
        { name: 'Sharon Roy', code: '2', flag: 'assets/img/profiles/avatar-02.jpg' },
        { name: 'Vaughan', code: '3', flag: 'assets/img/profiles/avatar-03.jpg' },
        { name: 'Jessica', code: '4', flag: 'assets/img/profiles/avatar-04.jpg' },
        { name: 'Carol Thomas', code: '5', flag: 'assets/img/profiles/avatar-05.jpg' },
        
    ];
    const removeCountry = (countryToRemove: Country) => {
        setSelectedCountries(selectedCountries?.filter(country => country.code !== countryToRemove.code) || null);
    };
    const countryTemplate = (option: Country) => {
        return (
            <div className="d-d-flex align-items-center">
                <ImageWithBasePath alt={option.name} src={option.flag} className="tag-avatar w-14 rounded me-1" style={{ width: '14px !important ' }} />
                <span>{option.name}</span>
            </div>
        );
    };


    const selectedCountryTemplate = (option: Country) => {
        if (!option) return null;

        return (
            <div className="d-flex prime-chip align-items-center">
                <ImageWithBasePath alt={option.name} src={option.flag} className="tag-avatar w-14 rounded me-1" style={{ width: '18px' }} />
                <span>{option.name}</span>
                {/* Remove button */}
                <button
                    type="button"
                    className="chip-remove"
                    onClick={() => removeCountry(option)}
                >
                    ✕
                </button>
            </div>
        );
    };

    const panelFooterTemplate = () => {
        const length = selectedCountries ? selectedCountries.length : 0;

        return (
            <div className="py-2 px-3">
                <b>{length}</b> item{length > 1 ? 's' : ''} selected.
            </div>
        );
    };

    return (
        <div className="prime-multiselect">
            <MultiSelect 
                value={selectedCountries} 
                options={countries} 
                onChange={(e: MultiSelectChangeEvent) => setSelectedCountries(e.value)} 
                optionLabel="name" 
                placeholder="Select Staffs" 
                itemTemplate={countryTemplate} 
                selectedItemTemplate={selectedCountryTemplate} 
                panelFooterTemplate={panelFooterTemplate} 
                className="multiple-img w-100" 
                display="chip" 
                showClear
            />
        </div>
    );
}
