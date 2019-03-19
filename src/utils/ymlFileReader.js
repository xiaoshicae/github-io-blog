import yaml from 'js-yaml'
import fs from 'fs'

export function readYmlContent (filePath, encode) {
    console.log('222')
    alert(filePath)
    let content = yaml.safeLoad(fs.readFileSync(filePath, encode))
    return content
}
