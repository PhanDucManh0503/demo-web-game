export const setStorage = (key, value) => {
  if (!value) return;
  localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => {
  if (!key) return;
  const value = localStorage.getItem(key);
  if (!value) return;
  return JSON.parse(value);
};

export const deleteStorage = (key) => {
  if(!key) return;
  localStorage.removeItem(key);
};

export const clearStorage = () => {
  localStorage.clear();
};
