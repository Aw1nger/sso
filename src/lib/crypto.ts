export const hash256 = async (data: string): Promise<string> => {
  const encoder = new TextEncoder();
  const buffer = encoder.encode(data);
  const hash = await crypto.subtle.digest('SHA-256', buffer);
  return new Uint8Array(hash).toHex();
};
