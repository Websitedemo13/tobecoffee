-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Homepage table
create table public.homepage (
  id uuid default uuid_generate_v4() primary key,
  cover_image text,
  hero_title text not null default 'Welcome to Our Coffee',
  hero_subtitle text not null default 'Discover the finest coffee experience',
  sections jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- About page table
create table public.about_page (
  id uuid default uuid_generate_v4() primary key,
  title text not null default 'About Us',
  content text not null default 'Our story...',
  sections jsonb default '[]'::jsonb,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Products table
create table public.products (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  description text,
  content text not null default '',
  images text[] default '{}',
  videos text[] default '{}',
  order_index integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Blog posts table
create table public.blog_posts (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  slug text not null unique,
  content text not null default '',
  images text[] default '{}',
  videos text[] default '{}',
  order_index integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Contact form fields table
create table public.contact_form_fields (
  id uuid default uuid_generate_v4() primary key,
  field_name text not null,
  field_type text not null default 'text',
  is_required boolean default false,
  order_index integer default 0,
  created_at timestamp with time zone default timezone('utc'::text, now()),
  updated_at timestamp with time zone default timezone('utc'::text, now())
);

-- Contact messages table
create table public.contact_messages (
  id uuid default uuid_generate_v4() primary key,
  form_data jsonb not null,
  ip_address text,
  created_at timestamp with time zone default timezone('utc'::text, now())
);

-- Storage bucket for media
insert into storage.buckets (id, name) values ('media', 'media') on conflict do nothing;

-- Set up RLS policies
alter table public.homepage enable row level security;
alter table public.about_page enable row level security;
alter table public.products enable row level security;
alter table public.blog_posts enable row level security;
alter table public.contact_form_fields enable row level security;
alter table public.contact_messages enable row level security;

-- Allow public read access
create policy "Allow public read" on public.homepage for select using (true);
create policy "Allow public read" on public.about_page for select using (true);
create policy "Allow public read" on public.products for select using (true);
create policy "Allow public read" on public.blog_posts for select using (true);
create policy "Allow public read" on public.contact_form_fields for select using (true);

-- Allow authenticated users to manage content (you'll need to add auth later)
create policy "Allow authenticated users" on public.homepage for all using (auth.role() = 'authenticated'::text);
create policy "Allow authenticated users" on public.about_page for all using (auth.role() = 'authenticated'::text);
create policy "Allow authenticated users" on public.products for all using (auth.role() = 'authenticated'::text);
create policy "Allow authenticated users" on public.blog_posts for all using (auth.role() = 'authenticated'::text);
create policy "Allow authenticated users" on public.contact_form_fields for all using (auth.role() = 'authenticated'::text);
create policy "Allow anyone to create messages" on public.contact_messages for insert with check (true);
create policy "Allow authenticated users to view messages" on public.contact_messages for select using (auth.role() = 'authenticated'::text);

-- Insert mock data
insert into public.homepage (cover_image, hero_title, hero_subtitle) values
  ('https://images.unsplash.com/photo-1495474472645-4d71bcdd2085?w=1200', 'Welcome to ToBe Coffee', 'Discover Premium Coffee Experience');

insert into public.about_page (title, content) values
  ('About ToBe Coffee', 'We are passionate about bringing you the finest coffee from around the world. Our mission is to share the art and culture of coffee.');

insert into public.products (name, description, order_index) values
  ('Espresso Blend', 'Rich and bold espresso beans from South America', 1),
  ('Single Origin Ethiopia', 'Fruity and floral notes from Ethiopian highlands', 2),
  ('Cappuccino Mix', 'Perfect balance for your morning cappuccino', 3);

insert into public.blog_posts (title, slug, content, order_index) values
  ('How to Brew the Perfect Coffee', 'how-to-brew-perfect-coffee', 'Learn the techniques to brew amazing coffee at home.', 1),
  ('Coffee Around the World', 'coffee-around-the-world', 'Discover different coffee cultures and traditions.', 2);

insert into public.contact_form_fields (field_name, field_type, is_required, order_index) values
  ('name', 'text', true, 1),
  ('email', 'email', true, 2),
  ('phone', 'tel', false, 3),
  ('message', 'textarea', true, 4);
