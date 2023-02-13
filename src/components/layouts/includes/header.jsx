import _ from 'lodash'
import { Bars3Icon } from "@heroicons/react/24/outline";

const lists = ['about-me', 'projects', 'blogs']

function Header ({ setIsOpen }) {
  const items = lists.map(list => {
    return (
      <a
        key={list}
        href={`/${list}`}
        className="
          text-sm
          hover:drop-shadow-lg
          duration-300
        "
      >
        {_.lowerCase(list)}
      </a>
    )
  })

  return (
    <div className="flex px-3 py-4 text-zinc-50">
      <div className="grow">
        <a href="/" className='font-bold antialiased tracking-wide'>uzair</a>
      </div>
      <div className="shrink-0">
        <div className="hidden sm:block flex space-x-4">
          { items }
        </div>
        <Bars3Icon
          class="sm:hidden h-6 text-zinc-50"
          onClick={() => setIsOpen(true)}
        />
      </div>
    </div>
  )
}

export default Header