```javascript
// app/layout.js
import './globals.css'
import { notFound } from 'next/navigation'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

// app/page.js

export default function Page() {
    return (
        <h1>Hello world</h1>
    )
}
```