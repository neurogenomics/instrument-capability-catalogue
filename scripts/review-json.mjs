import {createHash} from 'node:crypto';

// Serialize generated JSON values. This is not an importer for arbitrary JSON text.
export function canonicalJson(value) {
  if (value === null || typeof value === 'boolean') return JSON.stringify(value);
  if (typeof value === 'string' && value.isWellFormed()) return JSON.stringify(value);
  if (typeof value === 'number' && Number.isSafeInteger(value)) return JSON.stringify(value);
  if (Array.isArray(value)) return '[' + Array.from(value, canonicalJson).join(',') + ']';
  if (typeof value === 'object' && Object.getPrototypeOf(value) === Object.prototype) {
    const keys = Object.keys(value).sort();
    if (keys.some(key => /[^\x00-\x7f]/.test(key))) throw new Error('Review JSON keys must be ASCII');
    return '{' + keys.map(key => JSON.stringify(key) + ':' + canonicalJson(value[key])).join(',') + '}';
  }
  throw new Error('Value is outside the review JSON profile');
}

export const sha256 = bytes => 'sha256:' + createHash('sha256').update(bytes).digest('hex');
export const reviewJsonDigest = value => sha256(canonicalJson(value));
