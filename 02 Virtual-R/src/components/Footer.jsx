import React from 'react'
import { resourcesLinks, platformLinks, communityLinks } from '../constants'

export default function Footer() {
  return (
    <div className='mt-10 sm:mt-20 py-10 border-t border-neutral-700'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-5'>
        <div>
            <h3 className='text-lg font-semibold mb-4'>Resources</h3>
            <ul className='space-y-2'>
                {resourcesLinks.map((link, index) => (
                    <li className='text-neutral-300 hover:text-white' key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-semibold mb-4'>Platfroms</h3>
            <ul className='space-y-2'>
                {platformLinks.map((link, index) => (
                    <li className='text-neutral-300 hover:text-white' key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-semibold mb-4 sm:mt-0 mt-4'>Community</h3>
            <ul className='space-y-2'>
                {communityLinks.map((link, index) => (
                    <li className='text-neutral-300 hover:text-white' key={index}>
                        <a href={link.href}>{link.text}</a>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}
