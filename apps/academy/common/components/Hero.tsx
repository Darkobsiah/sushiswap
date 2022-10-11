import { classNames, DiscordIcon, GithubIcon, InstagramIcon, TwitterIcon } from '@sushiswap/ui'
import { FC } from 'react'

import { defaultSidePadding } from '../helpers'

export const Hero: FC = () => {
  return (
    <section
      className={classNames(
        'flex sm:pt-[70px] flex-col items-center max-w-[870px] mx-auto pt-10 pb-8 sm:pb-12',
        defaultSidePadding
      )}
    >
      <div className="relative w-[280px] sm:w-[520px] h-[75px] sm:h-[135px] text-slate-50">
        <h1 className="text-[38px] sm:text-7xl absolute top-0 left-0">Sushi</h1>
        <h1 className="text-[38px] font-bold sm:text-7xl absolute bottom-0 right-0">Academy</h1>
      </div>
      <span className="mt-3 text-sm text-center text-slate-500 sm:text-slate-300 sm:text-xl">
        Demystifying DeFI and Crypto - everything you need to know in one place. For beginners to advanced users, and
        everyone in between.
      </span>
      <div className="absolute hidden right-12 lg:grid top-[184px] gap-8">
        <a href="https://github.com/sushiswap" target="_blank" rel="noopener noreferrer">
          <GithubIcon width={24} className="text-slate-300 hover:text-slate-50" />
        </a>
        <a href="https://twitter.com/sushiswap" target="_blank" rel="noopener noreferrer">
          <TwitterIcon width={24} className="text-slate-300 hover:text-slate-50" />
        </a>
        <a href="https://discord.gg/NVPXN4e" target="_blank" rel="noopener noreferrer">
          <DiscordIcon width={24} className="text-slate-300 hover:text-slate-50" />
        </a>
        <a href="https://instagram.com/instasushiswap" target="_blank" rel="noopener noreferrer">
          <InstagramIcon width={24} className="text-slate-300 hover:text-slate-50" />
        </a>
      </div>
    </section>
  )
}
