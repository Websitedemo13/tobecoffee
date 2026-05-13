# ToBe Coffee Admin Panel Setup

## Overview

This admin panel provides complete management for your website content:
- **Homepage**: Edit hero section with cover image, title, and subtitle
- **About**: Manage about page content
- **Products**: Create, edit, delete products with images and videos
- **Blog**: Manage blog posts with content, images, and videos
- **Contact**: Manage contact form fields and view submitted messages

## Setup Instructions

### 1. Database Setup

Run the SQL commands from `database.sql` in your Supabase dashboard:

1. Go to https://app.supabase.com/
2. Select your project: `tobecoffee` (ID: kkvvosbyntcfpmluqxmn)
3. Go to SQL Editor
4. Create a new query and paste the contents of `database.sql`
5. Execute the query

This will create:
- `homepage` table
- `about_page` table
- `products` table
- `blog_posts` table
- `contact_form_fields` table
- `contact_messages` table
- Storage bucket for media

### 2. Environment Variables

The `.env` file is already configured with your Supabase credentials.

### 3. Access Admin Panel

Navigate to `/admin` in your application.

## Features

### Homepage Admin (`/admin/homepage`)
- Edit cover image URL
- Update hero title and subtitle
- Live preview of changes
- Automatically manages single homepage record

### About Page Admin (`/admin/about`)
- Edit page title
- Manage full page content
- Live preview
- Automatically manages single about page record

### Products Admin (`/admin/products`)
- Create new products
- Edit existing products
- Delete products
- Add/remove images (URLs)
- Add/remove videos (URLs)
- Automatic ordering by creation

### Blog Admin (`/admin/blog`)
- Create new blog posts
- Edit existing posts
- Delete posts
- Auto-generate URL slugs from titles
- Add/remove images and videos
- Organized by creation date

### Contact Management (`/admin/contact`)
Two tabs:

**Form Fields Tab:**
- Add/edit/delete contact form fields
- Set field types: text, email, tel, textarea, checkbox, select
- Mark fields as required
- Reorder fields

**Messages Tab:**
- View all submitted messages
- See submission date and time
- View full message details in a modal
- Delete messages

## Database Schema

### Homepage
```sql
- id (UUID)
- cover_image (text)
- hero_title (text)
- hero_subtitle (text)
- sections (jsonb) - for future use
- created_at, updated_at
```

### About Page
```sql
- id (UUID)
- title (text)
- content (text)
- sections (jsonb) - for future use
- created_at, updated_at
```

### Products
```sql
- id (UUID)
- name (text)
- description (text)
- content (text)
- images (text array)
- videos (text array)
- order_index (integer)
- created_at, updated_at
```

### Blog Posts
```sql
- id (UUID)
- title (text)
- slug (text, unique)
- content (text)
- images (text array)
- videos (text array)
- order_index (integer)
- created_at, updated_at
```

### Contact Form Fields
```sql
- id (UUID)
- field_name (text)
- field_type (text)
- is_required (boolean)
- order_index (integer)
- created_at, updated_at
```

### Contact Messages
```sql
- id (UUID)
- form_data (jsonb)
- ip_address (text)
- created_at
```

## Mock Data

The database includes sample data:
- 1 homepage with ToBe Coffee hero content
- 1 about page with example content
- 3 sample products (Espresso Blend, Single Origin Ethiopia, Cappuccino Mix)
- 2 sample blog posts
- 4 default contact form fields (name, email, phone, message)

You can delete and replace these with your actual content.

## File Structure

```
src/
├── components/
│   └── AdminLayout.tsx          # Main admin layout
├── lib/
│   └── supabase.ts              # Supabase client
└── pages/
    ├── admin/
    │   ├── Dashboard.tsx        # Admin dashboard
    │   ├── HomepageAdmin.tsx    # Homepage editor
    │   ├── AboutAdmin.tsx       # About page editor
    │   ├── ProductsAdmin.tsx    # Products manager
    │   ├── BlogAdmin.tsx        # Blog manager
    │   └── ContactAdmin.tsx     # Contact manager
    └── ...existing pages...
```

## Future Enhancements

1. **Authentication**: Add admin login/authentication
2. **Media Upload**: Implement file upload instead of URL input
3. **Rich Text Editor**: Add WYSIWYG editor for content
4. **Google Docs Integration**: Embed Google Docs for product/post details
5. **Image Optimization**: Compress and optimize uploaded images
6. **Drag-to-Reorder**: Implement drag-and-drop for product/post ordering
7. **Preview Links**: Generate preview URLs for products and posts

## Troubleshooting

### No data showing in admin
- Ensure database.sql has been executed
- Check Supabase credentials in .env file
- Verify network connection

### Can't save changes
- Check browser console for errors
- Verify Supabase RLS policies allow authenticated access
- Ensure all required fields are filled

### Images/Videos not loading
- Verify URLs are accessible from public internet
- Check that URLs are properly formatted (include protocol)

## Support

For issues, check:
1. Browser console for error messages
2. Supabase dashboard for database errors
3. Network tab in DevTools for failed requests
