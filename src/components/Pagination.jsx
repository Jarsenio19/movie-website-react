import React from 'react'

const Pagination = () => {
  const pages = [1, 2, 3, 4, 5]
  const activePage = 3

  return (
    <section>
      <div className='pagination'>
        {pages.map((item, index) => (
          <a className={`${activePage === item ? 'active' : ''}`}>{item}</a>
        ))}
        {/* <a className='active'>1</a>
        <a>2</a>
        <a>3</a>
        <a>4</a>
        <a>5</a> */}
        {/* <a className ="next">Next >></a> */}
        {/* <a>>>></a> */}
      </div>
    </section>
  )
}

export default Pagination