import { supabase } from "@/lib/supabase";

export const getSignedFileUrl = async (path) => {
  const { data, error } = await supabase.storage
    .from("members")
    .createSignedUrl(path, 60); // 60 seconds

  if (error) throw error;

  return data.signedUrl;
};
