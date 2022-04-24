import { Injectable } from '@angular/core';
/**
 *
 *
 * @export
 * @class LikeService
 */
@Injectable({
  providedIn: 'root'
})

export class LikeService {

  constructor() { }

  /**
   * @function set()
   * @param key [set key name to local storage]
   * @param data [set data to this key in local storage]
   */
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.error('Error saving to localStorage', e);
    }
  }

  /**
   * @function get()
   * @param key [get key with values from local storage]
   */
  get(key: string) {
    try {
      return JSON.parse(localStorage.getItem(key) || '[]');
    } catch (e) {
      console.error('Error getting data from localStorage', e);
      return null;
    }
  }
}
