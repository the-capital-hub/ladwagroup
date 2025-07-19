'use client';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export default function ProductForm() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState({
    category: '',
    name: '',
    slug: '',
    description: '',
    longDescription: '',
    image: '',
    gallery: '',
    keyFeatures: '',
    additionalFeatures: '',
    weight: '',
    dimension: '',
    specifications: '',
  });
  const [editId, setEditId] = useState(null);
  const [uploading, setUploading] = useState(false);


  const fetchData = async () => {
    const [catRes, prodRes] = await Promise.all([
      fetch('/api/categories'),
      fetch('/api/products'),
    ]);
    setCategories(await catRes.json());
    setProducts(await prodRes.json());
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      ...form,
      gallery: form.gallery.split('\n').filter(Boolean),
      keyFeatures: form.keyFeatures.split('\n').filter(Boolean),
      additionalFeatures: form.additionalFeatures.split('\n').filter(Boolean),
      specifications: form.specifications.split('\n').map((l) => {
        const [key, value] = l.split(':');
        return { key: key?.trim(), value: value?.trim() };
      }).filter((s) => s.key),
    };
    const method = editId ? 'PUT' : 'POST';
    const url = editId ? `/api/products/${editId}` : '/api/products';
    const res = await fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });
    if (res.ok) {
      await fetchData();
      setForm({
        category: '',
        name: '',
        slug: '',
        description: '',
        longDescription: '',
        image: '',
        gallery: '',
        keyFeatures: '',
        additionalFeatures: '',
        weight: '',
        dimension: '',
        specifications: '',
      });
      setEditId(null);
    }
  };

  const handleEdit = (p) => {
    setForm({
      category: p.category?._id || '',
      name: p.name,
      slug: p.slug,
      description: p.description || '',
      longDescription: p.longDescription || '',
      image: p.image || '',
      gallery: (p.gallery || []).join('\n'),
      keyFeatures: (p.keyFeatures || []).join('\n'),
      additionalFeatures: (p.additionalFeatures || []).join('\n'),
      weight: p.weight || '',
      dimension: p.dimension || '',
      specifications: (p.specifications || []).map((s) => `${s.key}: ${s.value}`).join('\n'),
    });
    setEditId(p._id);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/products/${id}`, { method: 'DELETE' });
    fetchData();
  };

  const uploadFile = async (file) => {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: fd });
    const data = await res.json();
    return data.url;
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const url = await uploadFile(file);
      if (url) setForm({ ...form, image: url });
    } finally {
      setUploading(false);
    }
  };

  const handleGalleryUpload = async (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    setUploading(true);
    try {
      const uploaded = [];
      for (const f of files) {
        const url = await uploadFile(f);
        if (url) uploaded.push(url);
      }
      setForm({ ...form, gallery: uploaded.join('\n') });
    } finally {
      setUploading(false);
    }
  };


  return (
    <div className="max-w-4xl mx-auto p-6 my-5 bg-white shadow-md border rounded-xl space-y-6 overflow-auto">
      <h2 className="text-2xl font-semibold text-[#097362]">{editId ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="category" className="text-[#097362]">Category</Label>
          <select id="category" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full border rounded px-2 py-1">
            <option value="">Select</option>
            {categories.map((c) => (
              <option key={c._id} value={c._id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="name" className="text-[#097362]">Name</Label>
          <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="slug" className="text-[#097362]">Slug</Label>
          <Input id="slug" value={form.slug} onChange={(e) => setForm({ ...form, slug: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="description" className="text-[#097362]">Short Description</Label>
          <Input id="description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="longDescription" className="text-[#097362]">Long Description</Label>
          <Textarea id="longDescription" rows={4} value={form.longDescription} onChange={(e) => setForm({ ...form, longDescription: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="image" className="text-[#097362]">Image</Label>
          <Input id="image" type="file" onChange={handleImageUpload} />
          {form.image && (
            <p className="text-sm mt-1 break-all">{form.image}</p>
          )}
        </div>
        <div>
          <Label htmlFor="gallery" className="text-[#097362]">Gallery Images</Label>
          <Input id="gallery" type="file" multiple onChange={handleGalleryUpload} />
          {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
          {form.gallery && (
            <Textarea id="galleryUrls" rows={3} value={form.gallery} readOnly />
          )}

        </div>
        <div>
          <Label htmlFor="keyFeatures" className="text-[#097362]">Key Features (one per line)</Label>
          <Textarea id="keyFeatures" rows={3} value={form.keyFeatures} onChange={(e) => setForm({ ...form, keyFeatures: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="additionalFeatures" className="text-[#097362]">Additional Features (one per line)</Label>
          <Textarea id="additionalFeatures" rows={3} value={form.additionalFeatures} onChange={(e) => setForm({ ...form, additionalFeatures: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <Label htmlFor="weight" className="text-[#097362]">Weight</Label>
            <Input id="weight" value={form.weight} onChange={(e) => setForm({ ...form, weight: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="dimension" className="text-[#097362]">Dimension</Label>
            <Input id="dimension" value={form.dimension} onChange={(e) => setForm({ ...form, dimension: e.target.value })} />
          </div>
        </div>
        <div>
          <Label htmlFor="specifications" className="text-[#097362]">Specifications (key: value per line)</Label>
          <Textarea id="specifications" rows={3} value={form.specifications} onChange={(e) => setForm({ ...form, specifications: e.target.value })} />
        </div>
        <Button type="submit" className="w-full bg-gradient-to-b from-[#097362] to-[#0FA78E]">
          {editId ? 'Update' : 'Create'}
        </Button>
      </form>

      <div className="pt-6">
        {products.map((p) => (
          <div key={p._id} className="border-b py-2 flex justify-between items-center">
            <span>{p.name}</span>
            <div className="space-x-2">
              <Button size="sm" onClick={() => handleEdit(p)}>Edit</Button>
              <Button size="sm" variant="destructive" onClick={() => handleDelete(p._id)}>Delete</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
