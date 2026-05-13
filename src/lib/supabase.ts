import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export type Tables = {
  homepage: {
    id: string;
    cover_image: string | null;
    hero_title: string;
    hero_subtitle: string;
    sections: any;
    created_at: string;
    updated_at: string;
  };
  about_page: {
    id: string;
    title: string;
    content: string;
    sections: any;
    created_at: string;
    updated_at: string;
  };
  products: {
    id: string;
    name: string;
    description: string;
    content: string;
    images: string[];
    videos: string[];
    order_index: number;
    created_at: string;
    updated_at: string;
  };
  blog_posts: {
    id: string;
    title: string;
    slug: string;
    content: string;
    images: string[];
    videos: string[];
    order_index: number;
    created_at: string;
    updated_at: string;
  };
  contact_form_fields: {
    id: string;
    field_name: string;
    field_type: string;
    is_required: boolean;
    order_index: number;
    created_at: string;
    updated_at: string;
  };
  contact_messages: {
    id: string;
    form_data: any;
    ip_address: string | null;
    created_at: string;
  };
};
