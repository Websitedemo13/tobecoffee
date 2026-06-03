// Single shared Supabase client (re-exported to avoid multiple GoTrue instances)
import { supabase } from "@/integrations/supabase/client";

export { supabase };

/**
 * Lấy dữ liệu CMS của một trang cụ thể (bọc try-catch an toàn).
 * Trả về fallback nếu không có dữ liệu hoặc lỗi.
 */
export async function getPageContent<T>(pageName: string, fallback: T): Promise<T> {
  try {
    const { data, error } = await supabase
      .from("page_contents")
      .select("content")
      .eq("page", pageName)
      .maybeSingle();

    if (error || !data || !data.content) {
      return fallback;
    }
    return data.content as T;
  } catch (err) {
    console.error(`[Supabase] Lỗi khi tải trang ${pageName}:`, err);
    return fallback;
  }
}

/**
 * Lưu (upsert) dữ liệu nội dung trang lên Supabase.
 */
export async function updatePageContent(pageName: string, content: unknown): Promise<boolean> {
  try {
    const { error } = await supabase
      .from("page_contents")
      .upsert(
        { page: pageName, content: content as never, updated_at: new Date().toISOString() },
        { onConflict: "page" }
      );

    if (error) {
      console.error(`[Supabase] Không thể lưu trang ${pageName}:`, error.message);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`[Supabase] Lỗi hệ thống khi lưu trang ${pageName}:`, err);
    return false;
  }
}
