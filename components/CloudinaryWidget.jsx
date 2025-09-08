'use client';
import { CldUploadWidget } from 'next-cloudinary';
import { Button } from '@/components/ui/button';

export default function CloudinaryWidget({ setSecureUrl, setPublicid = () => {}, options = {}, buttonText = 'Upload' }) {
  return (
    <div className="mb-4">
      <CldUploadWidget
        signatureEndpoint="/api/sign-image"
        options={{
          sources: ['local', 'url', 'unsplash'],
          multiple: false,
          maxFiles: 1,
          tags: ['post'],
          folder: 'posts',
          cropping: true,
          showSkipCropButton: true,
          maxImageFileSize: 100000,
          maxImageWidth: 800,
          showPoweredBy: false,
          showCompletedButton: true,
          ...options,
        }}
        onSuccess={(result) => {
          if (!result.info) return;
          setSecureUrl(result.info.secure_url);
          setPublicid(result.info.public_id);
        }}
      >
        {({ open }) => (
          <Button type="button" onClick={() => open()}>
            {buttonText}
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
}
