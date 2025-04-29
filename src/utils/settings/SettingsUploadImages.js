export const handleDrop = (e, setAvatar) => {
  e.preventDefault();
  const file = e.dataTransfer.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  }
};

export const handleDragOver = (e) => {
  e.preventDefault();
};

export const handleFileSelect = (e, setAvatar) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result);
    reader.readAsDataURL(file);
  }
};

export const clearAvatar = (setAvatar) => {
  setAvatar('');
};
