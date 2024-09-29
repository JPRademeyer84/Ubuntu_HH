let tokenBlacklist = new Set(); 

export const blacklistToken = (token) => {
  tokenBlacklist.add(token);
};

export const isTokenBlacklisted = (token) => {
  return tokenBlacklist.has(token);
};

export const clearBlacklist = () => {
  tokenBlacklist.clear();
};
