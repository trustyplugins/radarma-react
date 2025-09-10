import React, { useState, useEffect } from "react";
import { MultiSelect } from "primereact/multiselect";
import { Dropdown } from "primereact/dropdown";
import supabase from "../../../supabaseClient";

type Option = { id: number; name: string; parent_id?: number };
type BrandOption = { label: string; value: string };
type DynamicDropdown = { key: string; label: string; options: BrandOption[] };

const AiAgentAddListing: React.FC = () => {
    const [mainCategoryOptions, setMainCategoryOptions] = useState<Option[]>([]);
    const [subCategoryOptions, setSubCategoryOptions] = useState<Option[]>([]);
    const [dropdownConfig, setDropdownConfig] = useState<DynamicDropdown[]>([]);
    const [brandsOptions, setBrandsOptions] = useState<BrandOption[]>([]);
    const [loading, setLoading] = useState(false);
    const [requestStatuses, setRequestStatuses] = useState<
        { title: string; status: string; error?: any }[]
    >([]);
    const [progress, setProgress] = useState({ current: 0, total: 0 });
    const [sessionId, setSessionId] = useState<string | null>(null);

    const [value, setValue] = useState<{
        query: string;
        mainCategory: Option[];
        subCategory: Option[];
        is_brand: boolean;
        brand_name: string | null;
        [key: string]: any; // allow dynamic keys from json_tags
    }>({
        query: "gurudwara in Mohali",
        mainCategory: [],
        subCategory: [],
        is_brand: false,
        brand_name: null,
    });

    /** Fetch Main Categories */
    useEffect(() => {
        const fetchMainCats = async () => {
            const { data, error } = await supabase
                .from("main_categories")
                .select("id, category");
            if (!error && data) {
                setMainCategoryOptions(
                    data.map((mc) => ({ id: mc.id, name: mc.category }))
                );
            }
        };
        fetchMainCats();
    }, []);

    /** Fetch Sub Categories when mainCategory selected */
    useEffect(() => {
        const fetchSubCats = async () => {
            if (!value.mainCategory.length) {
                setSubCategoryOptions([]);
                onChange({ subCategory: [] });
                return;
            }
            const ids = value.mainCategory.map((m) => m.id);
            const { data, error } = await supabase
                .from("sub_categories")
                .select("id, category, parent_id")
                .in("parent_id", ids);
            if (!error && data) {
                setSubCategoryOptions(
                    data.map((sc) => ({
                        id: sc.id,
                        name: sc.category,
                        parent_id: sc.parent_id,
                    }))
                );
            }
        };
        fetchSubCats();
    }, [value.mainCategory]);

    /** Fetch Dropdown Config + Brands from json_tags */
    useEffect(() => {
        const fetchConfig = async () => {
            const { data, error } = await supabase
                .from("json_tags")
                .select("data")
                .single();

            if (!error && data?.data) {
                setDropdownConfig(data.data.dropdowns || []);
                setBrandsOptions(data.data.brands?.[0]?.options || []);
            }
        };
        fetchConfig();
    }, []);

    /** Handle Change */
    const onChange = (update: Partial<typeof value>) => {
        setValue((prev) => ({ ...prev, ...update }));
    };

    /** Submit to n8n webhook */
    const handleSubmit = async () => {
        if (!value.query) {
            alert("Please enter a Google Maps search query!");
            return;
        }

        setLoading(true);
        setRequestStatuses([]);
        setProgress({ current: 0, total: 0 });

        try {
            const payload = {
                query: value.query,
                mainCategory: value.mainCategory.map((m) => m.id),
                subCategory: value.subCategory.map((s) => s.id),
                is_brand: value.is_brand,
                brand_name: value.brand_name,
                extra_details: Object.fromEntries(
                    dropdownConfig
                        .filter((dd) => value[dd.key]?.length)
                        .map((dd) => [dd.key, value[dd.key]])
                ),
            };

            // Hit webhook → respond immediately with session_id + total
            const res = await fetch(
                "https://ai.trustyplugins.com/webhook-test/8c6fad2c-9196-4c9f-badf-420c68ba5a7a",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            const { session_id, total } = await res.json();
            console.log("Session started:", session_id, "total:", total);

            setSessionId(session_id);
            setProgress({ current: 0, total: total || 0 });
        } catch (err) {
            console.error("Error starting import:", err);
            alert("Could not start import.");
            setLoading(false);
        }
    };
    useEffect(() => {
        if (!sessionId) return;

        const channel = supabase
            .channel("import_status")
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "import_status",
                    filter: `session_id=eq.${sessionId}`,
                },
                (payload) => {
                    const row = payload.new as {
                        title: string;
                        status: string;
                        error?: string;
                    };

                    setRequestStatuses((prev) => [...prev, row]);
                    setProgress((prev) => ({
                        ...prev,
                        current: prev.current + 1,
                    }));
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [sessionId]);




    return (
        <div className="page-wrapper">
            <div className="content">
                <fieldset id="first-field">
                    <div className="container-service space-service">
                        <div className="sub-title">
                            <h6>AI Add Listing</h6>
                        </div>

                        {/* Query input */}
                        <div className="row mb-3">
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Google Maps Search Query</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder='e.g. "gurudwara in mohali"'
                                        value={value.query}
                                        onChange={(e) => onChange({ query: e.target.value })}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {/* Main Categories */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Main Categories</label>
                                    <MultiSelect
                                        value={value.mainCategory}
                                        options={mainCategoryOptions}
                                        onChange={(e) =>
                                            onChange({ mainCategory: e.value, subCategory: [] })
                                        }
                                        optionLabel="name"
                                        placeholder="Select Main Categories"
                                        display="chip"
                                        filter
                                        className="w-100"
                                    />
                                </div>
                            </div>

                            {/* Sub Categories */}
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Sub Categories</label>
                                    <MultiSelect
                                        value={value.subCategory}
                                        options={subCategoryOptions}
                                        onChange={(e) => onChange({ subCategory: e.value })}
                                        optionLabel="name"
                                        placeholder="Select Sub Categories"
                                        display="chip"
                                        filter
                                        className="w-100"
                                        disabled={!value.mainCategory?.length}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Extra Dynamic Dropdowns */}
                        <div className="extra-service">
                            <div className="row">
                                {dropdownConfig.map((dropdown) => (
                                    <div key={dropdown.key} className="col-sm-6">
                                        <div className="form-group">
                                            <label>{dropdown.label}</label>
                                            <MultiSelect
                                                value={(value as any)[dropdown.key] ?? []}
                                                options={dropdown.options}
                                                onChange={(e) =>
                                                    onChange({ [dropdown.key]: e.value } as any)
                                                }
                                                optionLabel="label"
                                                optionValue="value"
                                                placeholder={`Select ${dropdown.label}`}
                                                display="chip"
                                                filter
                                                className="w-100"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Brand Toggle + Dropdown */}
                        <div className="row mt-3">
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label style={{ width: "100%" }}>Is Brand?</label>
                                    <div className="status-toggle mb-3">
                                        <input
                                            type="checkbox"
                                            id="is_brand_toggle"
                                            className="check"
                                            checked={value.is_brand}
                                            onChange={(e) =>
                                                onChange({
                                                    is_brand: e.target.checked,
                                                    brand_name: null,
                                                })
                                            }
                                        />
                                        <label
                                            htmlFor="is_brand_toggle"
                                            className="checktoggle"
                                        ></label>
                                    </div>
                                </div>
                            </div>

                            {value.is_brand && (
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label>Select Brand</label>
                                        <Dropdown
                                            value={value.brand_name}
                                            options={brandsOptions}
                                            optionLabel="label"
                                            optionValue="value"
                                            onChange={(e) => onChange({ brand_name: e.value })}
                                            placeholder="Select Brand"
                                            className="w-100"
                                            showClear
                                            filter
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <div
                                className="bottom-btn"
                                style={{ justifyContent: "flex-start" }}
                            >
                                <div className="field-btns">
                                    <button
                                        className="btn btn-primary next_btn"
                                        type="button"
                                        onClick={handleSubmit}
                                        disabled={loading}
                                    >
                                        {loading ? "Submitting..." : "Submit"}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </fieldset>
                {loading && (
                    <div className="mt-3">
                        <p>
                            ⏳ Processing {progress.current} / {progress.total} items...
                        </p>
                        <div className="progress">
                            <div
                                className="progress-bar"
                                style={{
                                    width: `${progress.total > 0
                                        ? (progress.current / progress.total) * 100
                                        : 0}%`,
                                }}
                            />
                        </div>
                    </div>
                )}

                {requestStatuses.length > 0 && (
                    <div className="mt-4">
                        <h6>Request Results</h6>
                        <ul>
                            {requestStatuses.map((r, i) => (
                                <li key={i}>
                                    <strong>{i + 1}. {r.title || "Unknown"}</strong> —{" "}
                                    {r.status === "success" ? (
                                        <span style={{ color: "green" }}>✅ Saved</span>
                                    ) : r.status === "processing" ? (
                                        <span style={{ color: "orange" }}>⏳ Processing</span>
                                    ) : (
                                        <span style={{ color: "red" }}>
                                            ❌ Failed {r.error && `(${r.error})`}
                                        </span>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}



            </div>
        </div>
    );
};

export default AiAgentAddListing;
