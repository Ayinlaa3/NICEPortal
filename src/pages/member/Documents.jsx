import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { getSignedFileUrl } from "@/hooks/useFileDownload";
import { useAuth } from "@/hooks/useAuth";

const Documents = () => {
  const { user } = useAuth();
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    supabase
      .from("documents")
      .select("*")
      .eq("user_id", user.id)
      .then(({ data }) => setDocs(data));
  }, []);

  return (
    <div>
      <h2>My Documents</h2>
      {docs.map((doc) => (
        <div key={doc.id}>
          <span>{doc.type}</span>
          <button
            onClick={async () => {
              const url = await getSignedFileUrl(doc.storage_path);
              window.open(url);
            }}
          >
            View
          </button>
        </div>
      ))}
    </div>
  );
};

export default Documents;
