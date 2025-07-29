'use client';

import React, { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    number: '',
    title: '',
    description: '',
    mainImage: '',
    portfolioImages: [],
  });


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const [mainImagePreview, setMainImagePreview] = useState('');
  const [portfolioPreviews, setPortfolioPreviews] = useState([]);
  const [errors, setErrors] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);

  const uploadFile = async (file) => {
    const fd = new FormData();
    fd.append('file', file);
    const res = await fetch('/api/upload', { method: 'POST', body: fd });
    const data = await res.json();
    return data.url;
  };

  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (/\.(jpe?g|png)$/i.test(file.name)) {
      setUploading(true);
      try {
        const url = await uploadFile(file);
        setFormData((prev) => ({ ...prev, mainImage: url }));
        setMainImagePreview(url);
      } catch (err) {
        setErrors('Image upload failed.');
      } finally {
        setUploading(false);
      }
    } else {
      setErrors('Main image must be a JPG, JPEG, or PNG file.');
    }
  };

  const handlePortfolioImagesChange = async (e) => {
    setErrors('');
    const files = Array.from(e.target.files);

    const allowedFiles = files.filter(file =>
      /\.(jpe?g|png)$/i.test(file.name)
    );

    if (allowedFiles.length < files.length) {
      setErrors('Only JPG, JPEG, and PNG images are allowed.');
    }

    const existingCount = formData.portfolioImages.length;
    const availableSlots = 3 - existingCount;

    if (allowedFiles.length > availableSlots) {
      setErrors(`You can upload a total of 3 portfolio images only.`);
      allowedFiles.splice(availableSlots);
    }

    if (!allowedFiles.length) return;

    setUploading(true);
    try {
      const uploaded = [];
      for (const f of allowedFiles) {
        const url = await uploadFile(f);
        uploaded.push(url);
      }

      setFormData((prev) => ({
        ...prev,
        portfolioImages: [...prev.portfolioImages, ...uploaded].slice(0, 3),
      }));

      setPortfolioPreviews((prev) =>
        [...prev, ...uploaded].slice(0, 3)
      );
    } catch (err) {
      setErrors('Image upload failed.');
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (e) => {
    setErrors('');
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors('');

    if (!formData.mainImage) {
      setErrors('Please select a main image.');
      return;
    }

    if (!formData.number || !formData.title || !formData.description) {
      setErrors('Please fill all required fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('/api/project', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        setErrors(data.message || 'Something went wrong');
      } else {
        alert('Project submitted!');
        setFormData({
          number: '',
          title: '',
          description: '',
          mainImage: '',
          portfolioImages: [],
        });
        setMainImagePreview('');
        setPortfolioPreviews([]);
      }
    } catch (error) {
      setErrors('Failed to submit project');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 my-5 bg-white shadow-md border rounded-xl space-y-6">
      <h2 className="text-2xl font-semibold text-[#097362]">Add New Project</h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Project Number */}
        <div className="space-y-2">
          <Label htmlFor="number" className="text-[#097362] block">Project Number</Label>
          <Input
            id="number"
            name="number"
            type="number"
            value={formData.number}
            onChange={handleChange}
          />
        </div>

        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-[#097362] block">Title</Label>
          <Input
            id="title"
            name="title"
            type="text"
            value={formData.title}
            onChange={handleChange}
          />
        </div>

        {/* Description */}
        <div className="space-y-2">
          <Label htmlFor="description" className="text-[#097362] block">Description</Label>
          <Textarea
            id="description"
            name="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* Main Image Upload */}
        <div className="space-y-2">
          <Label htmlFor="mainImage" className="text-[#097362] block">Main Image</Label>
          <Input
            id="mainImage"
            name="mainImage"
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={(e) => {
              handleMainImageChange(e);
              e.target.value = null;
            }}
          />
          {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
          {mainImagePreview && (
            <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">Preview:</p>
              <img
                src={mainImagePreview}
                alt="Main preview"
                className="h-16 w-16 rounded-full object-cover border"
              />
            </div>
          )}
        </div>

        {/* Portfolio Image Upload */}
        <div className="space-y-2">
          <Label htmlFor="portfolioImages" className="text-[#097362] block">Portfolio Images</Label>
          <Input
            id="portfolioImages"
            name="portfolioImages"
            type="file"
            accept=".jpg,.jpeg,.png"
            multiple
            onChange={(e) => {
              handlePortfolioImagesChange(e);
              e.target.value = null;
            }}
          />
          {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
          <p className="text-sm text-gray-500">You can upload a total of 3 images (JPG, JPEG, PNG).</p>

          {portfolioPreviews.length > 0 && (
            <div className="flex gap-2 mt-2 flex-wrap">
              {portfolioPreviews.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="h-14 w-14 rounded-full object-cover border"
                />
              ))}
            </div>
          )}
        </div>

        {/* Error & Submit */}
        {errors && <p className="text-sm text-red-600">{errors}</p>}
        <Button
          type="submit"
          className="w-full bg-gradient-to-b from-[#097362] to-[#0FA78E]"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit Project'}
        </Button>
      </form>
    </div>
  );
};

export default ProjectForm;
