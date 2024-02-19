import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Image from 'next/image';
import {
  snapkitsLogo
} from '@components/icons'

const config: DocsThemeConfig = {
  logo: snapkitsLogo,
  project: {
    link: 'https://github.com/snapkits/snapkits.github.io',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'MIT 2024 © Snapkits',
  },
}

export default config
