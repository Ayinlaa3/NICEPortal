import { supabase } from "@/lib/supabase";

export const uploadMemberFile = async ({
  userId,
  file,
  type = "document"
}) => {
  const filePath = `${userId}/${Date.now()}-${file.name}`;

  // 1️⃣ Upload to storage
  const { error: uploadError } = await supabase.storage
    .from("members")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  // 2️⃣ Save record in documents table
  const { error: dbError } = await supabase.from("documents").insert({
    user_id: userId,
    type,
    storage_path: filePath,
    meta: {
      original_name: file.name,
      size: file.size,
      mime: file.type
    }
  });

  if (dbError) throw dbError;

  return true;
};
