// import { updateFileContents } from './update_file'
import * as fs from 'fs'
import { readFile } from 'fs/promises'
import path from 'path'


// @ts-ignore
const pkg = JSON.parse(await readFile(new URL('../package.json', import.meta.url)));
const packageName = pkg.name
const __filename = new URL(import.meta.url).pathname
const thisFileName = path.basename(__filename)
// console.log('package name:',pkg.name)

function updateFileContents(removeThis, filepath, lines = 1, addThis = null) {
  fs.readFile(filepath, { encoding: 'utf-8' }, function (err, data) {
    if (err) throw Error

    let dataArray = data.split('\n') // convert file data in an array
    
    let matchingIndex = -1 // let say, we have not found the keyword
    for (let i = 0, len = dataArray.length; i < len; i++) {
      if (dataArray[i].includes(removeThis)) {
        matchingIndex = i // old timestamp line
        break
      }
    }
    
    // remove old timestamp
    if (matchingIndex >= 0) {
      dataArray.splice(matchingIndex, lines)
    }
    // add new timestamp etc
    if (addThis) {
      dataArray.push(addThis)
    }
    dataArray.push(`export const packageName = '${packageName}'`)
    const updatedData = dataArray.join('\n')
    fs.writeFile(filepath, updatedData, err => {
      if (err) throw err
      console.log('Successfully updated the file data')
    })
  })
}

const filepath = 'src/lib/config/version.ts'
const timestamp = new Date().toISOString()
const insert = `// generated by ${thisFileName} script:
export const versionTS = '${timestamp}'`
updateFileContents('insert_variables.js', filepath, 2, insert)
