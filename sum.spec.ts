import { describe, it, expect } from 'vitest';
import { sum } from './sum';

describe('sum', () => {
  it('should return 0 for no arguments', () => {
    expect(sum()).toBe(0);
  });

  it('should sum up numbers correctly', () => {
    expect(sum(1, 2, 3)).toBe(6);
    expect(sum(10, -5, 5)).toBe(10);
    expect(sum(0, 0, 0)).toBe(0);
  });

  it('should sum up numeric strings correctly', () => {
    expect(sum('1', '2', '3')).toBe(6);
    expect(sum('10', '-5', '5')).toBe(10);
    expect(sum('0', '0', '0')).toBe(0);
  });

  it('should sum up numbers and numeric strings correctly', () => {
    expect(sum(1, '2', 3)).toBe(6);
    expect(sum('10', -5, '5')).toBe(10);
    expect(sum(0, '0', 0)).toBe(0);
  });

  it('should throw an error for non-numeric strings', () => {
    expect(() => sum('a', 'b')).toThrowError('Cannot convert string "a" to number');
    expect(() => sum('1', '2', 'c')).toThrowError('Cannot convert string "c" to number');
  });

  it('should throw an error for unsupported types', () => {
    expect(() => sum(1, {}, 3)).toThrowError('Unsupported type: object');
    expect(() => sum(1, [], 3)).toThrowError('Unsupported type: object');
    expect(() => sum(1, true, 3)).toThrowError('Unsupported type: boolean');
  });
});
