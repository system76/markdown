/**
 * test/_helpers.js
 * Some nice to have test functions
 */

import { readFile } from 'fs'
import { resolve } from 'path'

export function readFixture (name) {
  const fullPath = resolve(__dirname, './fixtures/', name)

  return new Promise((resolve, reject) => {
    readFile(fullPath, { encoding: 'utf8' }, (err, data) => {
      if (err != null) {
        return reject(err)
      } else {
        return resolve(data)
      }
    })
  })
}
