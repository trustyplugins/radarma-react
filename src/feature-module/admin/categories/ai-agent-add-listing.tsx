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

    const [jobId, setJobId] = useState<string | null>(null);
    const [progressRow, setProgressRow] = useState<any | null>(null);


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
        try {
            // Build extra_details from dropdownConfig keys
            const extra_details: Record<string, string[]> = {};
            dropdownConfig.forEach((dd) => {
                if (value[dd.key]?.length) {
                    extra_details[dd.key] = value[dd.key]; // already array of strings
                }
            });
            const jobId = crypto.randomUUID();
            setJobId(jobId);
            const payload = {
                job_id: jobId,
                query: value.query,
                mainCategory: value.mainCategory.map((m) => m.id),
                subCategory: value.subCategory.map((s) => s.id),
                is_brand: value.is_brand,
                brand_name: value.brand_name,
                extra_details,
            };

            const res = await fetch(
               // "https://ai.trustyplugins.com/webhook-test/8c6fad2c-9196-4c9f-badf-420c68ba5a7a",
                "https://ai.trustyplugins.com/webhook/8c6fad2c-9196-4c9f-badf-420c68ba5a7a",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(payload),
                }
            );

            const result = await res.json();
            console.log("Webhook raw response:", result);

            if (res.ok) {
                let resultsArray: any[] = [];

                if (Array.isArray(result)) {
                    const first = result[0];
                    if (first?.results && Array.isArray(first.results)) {
                        resultsArray = first.results.flat();
                    }
                } else if (result.results) {
                    resultsArray = result.results.flat();
                }

                // Normalize results for UI
                const normalized = resultsArray.map((r: any) => {
                    if (r.error) {
                        // Try to parse Supabase JSON error if present
                        let cleanMessage = r.error;
                        try {
                            if (typeof r.error === "string") {
                                const parsed = JSON.parse(r.error.match(/{.*}/)?.[0] || "{}");
                                cleanMessage = parsed.message || parsed.details || r.error;
                            } else if (r.error.message) {
                                cleanMessage = r.error.message;
                            }
                        } catch {
                            // fallback keep original
                        }

                        return {
                            title: r.title || r.slug || "Unknown",
                            status: "error",
                            error: cleanMessage,
                        };
                    }
                    return {
                        title: r.title || r.slug || "Untitled",
                        status: "success",
                    };
                });

                setRequestStatuses(normalized);
            }

            else {
                console.error("❌ Failed:", res.status, res.statusText, result);
                alert("Something went wrong! See console for details.");
            }
        } catch (err) {
            console.error("Error submitting:", err);
           // alert("Error connecting to AI Agent!");
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        if (!jobId) return;

        const channel = supabase
            .channel("progress-channel")
            .on(
                "postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "listing_import_progress",
                    filter: `job_id=eq.${jobId}`,
                },
                (payload) => {
                    console.log("Progress update:", payload.new);
                    setProgressRow(payload.new);
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }, [jobId]);



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
                    <div className="mt-3 text-center">
                        <span className="spinner-border spinner-border-sm text-primary me-2" role="status" />
                        Processing... please wait
                    </div>
                )}
                {progressRow && (
                    <div className="mt-4">
                        <h6>Import Progress</h6>
                        <p>
                            {progressRow.current}/{progressRow.total} processed
                            {" "}
                            ({Math.round((progressRow.current / progressRow.total) * 100)}%)
                        </p>

                        <div className="progress mb-2">
                            <div
                                className="progress-bar"
                                style={{ width: `${(progressRow.current / progressRow.total) * 100}%` }}
                            />
                        </div>

                        <p>Status: {progressRow.status}</p>

                        {progressRow.results?.length > 0 && (
                            <ul>
                                {progressRow.results.map((r: any, i: number) => (
                                    <li key={i}>
                                        <strong>{r.title}</strong> —{" "}
                                        {r.status === "success" ? (
                                            <span style={{ color: "green" }}>✅</span>
                                        ) : (
                                            <span style={{ color: "red" }}>❌ {r.error}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                )}

                {requestStatuses.length > 0 && (
                    <div className="mt-4">
                        <h6>Request Results</h6>
                        <ul>
                            <ul>
                                {requestStatuses.map((r, i) => (
                                    <li key={i}>
                                        <strong>{i + 1}. {r.title}</strong> —{" "}
                                        {r.status === "success" ? (
                                            <span style={{ color: "green" }}>✅ Saved</span>
                                        ) : (
                                            <span style={{ color: "red" }}>❌ Failed {r.error && `(${r.error})`}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>

                        </ul>
                    </div>
                )}


            </div>
        </div>
    );
};

export default AiAgentAddListing;
