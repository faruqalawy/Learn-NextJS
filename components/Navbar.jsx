
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav >
        <ul className="flex gap-2 text-gray-800" >
            <li className='hover:underline'>
              <Link href="/">Home</Link>
            </li>
            <li className='hover:underline'>
              <Link href="/blog">Blog</Link>
            </li>
            <li className='hover:underline'>
              <Link href="/about">About</Link>
            </li>
            <li className='hover:underline'>
              <Link href="/contact" prefetch={false}>
                Contact
              </Link>
            </li>
          </ul>
    </nav>
  )
}
