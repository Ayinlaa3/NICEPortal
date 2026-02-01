import { useState } from "react";
import { uploadMemberFile } from "@/hooks/useFileUpload";
import { useAuth } from "@/hooks/useAuth";

const UploadDocument = () => {
  const { user } = useAuth();
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return alert("Select a file");
    setLoading(true);

    try {
      await uploadMemberFile({
        userId: user.id,
        file,
        type: "passport"
      });
      alert("Uploaded successfully");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
    </div>
  );
};

export default UploadDocument;
