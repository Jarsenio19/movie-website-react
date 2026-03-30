import React from 'react'

const SuggestionCard = () => {
  // Create an array of object
  // add all the properties needed for the object
  // use map() function from JS, to loop
  // make sure to add a key

  const suggestionMovies = [
    {
      title: '50 first dates (2004)',
      image: 'images/movie-poster/50 First Dates (2004).jpg',
      isHd: true,
    },
    {
      title: 'Send Help',
      image: '../../public/Movie-poster/SendHelp.jpg',
      isCAM: true,
    },
    {
      title: 'Crime 101',
      image: '../../public/Movie-poster/Crime101.jpg',
      isCAM: true,
    },
    {
      title: '50 first dates (2004)',
      image: 'images/movie-poster/50 First Dates (2004).jpg',
      isHd: true,
    },
    {
      title: '50 first dates (2004)',
      image: 'images/movie-poster/50 First Dates (2004).jpg',
      isHd: true,
    },
  ]

  return (
    <section className='padding-block-100'>
      <div className='container'>
        <h3>SUGGESTIONS</h3>
        <div className='box-wrapper'>
          {suggestionMovies.map((detail, index) => (
            <MovieCards
              key={index}
              image={detail.image}
              title={detail.title}
              isHD={detail.isHD}
              isCAM={detail.isCAM}
              // isEp={true}
              // epNum={13}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default SuggestionCard