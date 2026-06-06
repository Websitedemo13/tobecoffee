-- homepage
DROP POLICY IF EXISTS "Allow authenticated users" ON public.homepage;
CREATE POLICY "Admins manage homepage" ON public.homepage
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- about_page
DROP POLICY IF EXISTS "Allow authenticated users" ON public.about_page;
CREATE POLICY "Admins manage about_page" ON public.about_page
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- products
DROP POLICY IF EXISTS "Allow authenticated users" ON public.products;
CREATE POLICY "Admins manage products" ON public.products
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- blog_posts
DROP POLICY IF EXISTS "Allow authenticated users" ON public.blog_posts;
CREATE POLICY "Admins manage blog_posts" ON public.blog_posts
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- contact_form_fields
DROP POLICY IF EXISTS "Allow authenticated users" ON public.contact_form_fields;
CREATE POLICY "Admins manage contact_form_fields" ON public.contact_form_fields
  FOR ALL TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role))
  WITH CHECK (has_role(auth.uid(), 'admin'::app_role));

-- contact_messages: restrict viewing to admins only
DROP POLICY IF EXISTS "Allow authenticated users to view messages" ON public.contact_messages;
CREATE POLICY "Admins can view messages" ON public.contact_messages
  FOR SELECT TO authenticated
  USING (has_role(auth.uid(), 'admin'::app_role));