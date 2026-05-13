import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { toast } from 'sonner';

interface AboutPage {
  id: string;
  title: string;
  content: string;
  sections: any;
}

const AboutAdmin = () => {
  const [aboutPage, setAboutPage] = useState<AboutPage | null>(null);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    fetchAboutPage();
  }, []);

  const fetchAboutPage = async () => {
    try {
      const { data, error } = await supabase
        .from('about_page')
        .select('*')
        .single();

      if (error && error.code !== 'PGRST116') {
        throw error;
      }

      if (data) {
        setAboutPage(data);
        setFormData({
          title: data.title,
          content: data.content,
        });
      } else {
        const { data: newData, error: insertError } = await supabase
          .from('about_page')
          .insert([{
            title: 'About ToBe Coffee',
            content: 'We are passionate about bringing you the finest coffee from around the world.',
            sections: [],
          }])
          .select()
          .single();

        if (insertError) throw insertError;
        setAboutPage(newData);
        setFormData({
          title: newData.title,
          content: newData.content,
        });
      }
    } catch (error) {
      toast.error('Failed to load about page');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!aboutPage) {
      toast.error('About page not initialized');
      return;
    }

    if (!formData.title.trim()) {
      toast.error('Title is required');
      return;
    }

    try {
      const { error } = await supabase
        .from('about_page')
        .update({
          title: formData.title,
          content: formData.content,
          updated_at: new Date().toISOString(),
        })
        .eq('id', aboutPage.id);

      if (error) throw error;
      toast.success('About page updated successfully');
      fetchAboutPage();
    } catch (error) {
      toast.error('Failed to update about page');
      console.error(error);
    }
  };

  if (loading) {
    return (
      <AdminLayout>
        <p className="text-gray-600">Loading...</p>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-gray-900">Edit About Page</h1>

        <Card>
          <CardHeader>
            <CardTitle>About Page Content</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <Label htmlFor="title">Page Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                placeholder="Enter page title"
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="content">Page Content</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                placeholder="Enter detailed page content. You can use multiple paragraphs."
                rows={8}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-2">
                Supports plain text. For rich formatting, consider using HTML in the future.
              </p>
            </div>

            <div className="bg-blue-50 border border-blue-200 rounded p-4">
              <h4 className="font-semibold text-blue-900 mb-2">Preview</h4>
              <div className="bg-white p-6 rounded border border-blue-200">
                <h2 className="text-3xl font-bold mb-4 text-gray-900">{formData.title}</h2>
                <div className="text-gray-600 whitespace-pre-wrap leading-relaxed">
                  {formData.content}
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <Button variant="outline" onClick={fetchAboutPage}>
                Reset
              </Button>
              <Button onClick={handleSave}>
                Save Changes
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </AdminLayout>
  );
};

export default AboutAdmin;
