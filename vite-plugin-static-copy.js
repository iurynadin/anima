import { createReadStream } from 'fs'
import { resolve } from 'path'

export default function staticCopy() {
  return {
    name: 'static-copy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url.startsWith('/img/') || req.url.startsWith('/svg/') || req.url.startsWith('/fonts/')) {
          const filePath = resolve(__dirname, 'public' + req.url)
          const ext = req.url.split('.').pop()
          const mimeTypes = {
            'webp': 'image/webp',
            'svg': 'image/svg+xml',
            'woff': 'font/woff',
            'woff2': 'font/woff2'
          }
          
          res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream')
          createReadStream(filePath).pipe(res)
          return
        }
        next()
      })
    }
  }
}