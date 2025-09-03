import React, { useState, useEffect } from "react";
import supabase from "../../../supabaseClient";
import Editor from "@monaco-editor/react"; // 👈 Install: npm install @monaco-editor/react

const JsonDataTags = () => {
    const [jsonData, setJsonData] = useState<string>("{}");
    const [loading, setLoading] = useState<boolean>(true);
    const [saving, setSaving] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);

    // Load JSON from Supabase
    useEffect(() => {
        const fetchJson = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data, error } = await supabase
                    .from("json_tags")
                    .select("data")
                    .eq("id", 1) // always edit row 1
                    .single();

                if (error) throw error;

                if (data?.data) {
                    setJsonData(JSON.stringify(data.data, null, 2));
                }
            } catch (err: any) {
                setError(err.message || "Failed to fetch JSON");
            } finally {
                setLoading(false);
            }
        };

        fetchJson();
    }, []);

    // Save JSON to Supabase
    const handleSave = async () => {
        try {
            setSaving(true);
            setError(null);
            setSuccess(null);

            let parsed;
            try {
                parsed = JSON.parse(jsonData);
            } catch {
                throw new Error("Invalid JSON format. Please fix it before saving.");
            }

            const { error } = await supabase
                .from("json_tags")
                .upsert({ id: 1, data: parsed }, { onConflict: "id" });

            if (error) throw error;

            setSuccess("JSON saved successfully!");
        } catch (err: any) {
            setError(err.message);
        } finally {
            setSaving(false);
        }
    };

    return (
        <div className="page-wrapper page-settings">
            <div className="content">
                <div className="content-page-header content-page-headersplit mb-3">
                    <h5>JSON data for Tags</h5>
                </div>

                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <Editor
                            height="500px"
                            defaultLanguage="json"
                            value={jsonData}
                            onChange={(val) => setJsonData(val || "{}")}
                            options={{
                                minimap: { enabled: false },
                                fontSize: 14,
                                formatOnPaste: true,
                                formatOnType: true,
                            }}
                        />

                        <div className="mt-3">
                            <button
                                className="btn btn-primary"
                                disabled={saving}
                                onClick={handleSave}
                            >
                                {saving ? "Saving..." : "Save JSON"}
                            </button>
                        </div>

                        {error && <p className="text-danger mt-2">{error}</p>}
                        {success && <p className="text-success mt-2">{success}</p>}
                    </>
                )}
            </div>
        </div>
    );
};

export default JsonDataTags;
