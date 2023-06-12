import React from 'react'

const Loading = () => {
  return (
    <div>
      <p>Users</p>
      <ul className='list-disc pl-6 mt-4 space-y-2'>
        {
          // Error: Type 'IterableIterator<number>' can only be iterated through when using the '--downlevelIteration' flag or with a '--target' of 'es2015' or higher.ts(2802)
          // updated tsconfig.json with "target": "ES2015",
          [...Array(8).keys() as Iterable<number>].map((i) => (
            <li key={i} className='bg-sky-200 my-5'>
              <span className='inline-block h-5 animate-pulse'
              style={{
                animationDelay: `${i * 0.05}s`,
                animationDuration: "1s",
              }}>

              </span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Loading