export async function uploadImage(file) {
  const fd = new FormData();
  fd.append('file', file);

  let res;
  try {
    res = await fetch('/api/upload', { method: 'POST', body: fd });
  } catch (err) {
    console.error('Network error during upload:', err);
    throw new Error('Network error during upload');
  }

  if (!res.ok) {
    let message = 'Upload failed';
    try {
      const errData = await res.json();
      message = [errData.error || errData.message, errData.details]
        .filter(Boolean)
        .join(': ') || message;
    } catch {
      const text = await res.text();
      message = text || message;
    }
    throw new Error(message);
  }

  try {
    const data = await res.json();
    if (!data.url) throw new Error('Upload failed');
    return data.url;
  } catch (err) {
    console.error('Failed to parse upload response:', err);
    throw new Error(err.message || 'Invalid server response');
  }
}
