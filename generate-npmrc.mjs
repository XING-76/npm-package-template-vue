import { config } from 'dotenv'
import { writeFileSync } from 'fs'
import { join } from 'path'

// 加載 .env 文件
config()

const npmrcContent = `
@xing-76:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${process.env.NPM_AUTH_TOKEN}
`

writeFileSync(join(process.cwd(), '.npmrc'), npmrcContent)
