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
      title: '50 first dates (2004)',
      image: 'images/movie-poster/50 First Dates (2004).jpg',
      isHd: true,
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
    {
      title: '50 first dates (2004)',
      image: 'images/movie-poster/50 First Dates (2004).jpg',
      isHd: true,
    },
  ]

  return (
    <section className='padding-block-100'>
      <h3>SUGGESTIONS</h3>
      <div className='box-wrapper'>
        {suggestionMovies.map((detail, index) => (
          <a key={index}>
            <div className='box-container'>
              <div className='box'>
                <img src={detail.image} alt='' />
                <h3>{detail.title}</h3>
              </div>
              {detail.isHd && <div className='badge'>HD</div>}
              <div className='overlay'>
                <div className='play-bttn'>&#9658;</div>
                <h3 className='title'>{detail.title}</h3>
              </div>
            </div>
          </a>
        ))}

        {/* <a>
          <div className='box-container'>
            <div className='box'>
              <img src='images/movie-poster/50 First Dates (2004).jpg' alt='' />
              <h3>50 first dates (2004)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>50 first dates (2004)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img src='images/movie-poster/Spirited Away (2001).jpg' alt='' />
              <h3>Spirited Away (2001)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Spirited Away (2001)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img src='images/movie-poster/Coco (2017).jpg' alt='' />
              <h3>Coco (2017)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Coco (2017)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img src='images/movie-poster/Up (2009).jpg' alt='' />
              <h3>Up (2009)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Up (2009)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img
                src='images/movie-poster/Star Wars Episode IV - A New Hope (1977).jpg'
                alt=''
              />
              <h3>Star Wars: Episode IV - A New Hope (1977)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>
                Star Wars: Episode IV - A New Hope (1977)
              </h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img src='images/movie-poster/The Godfather (1972).jpg' alt='' />
              <h3>The Godfather (1972)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>The Godfather (1972)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img
                src="images/movie-poster/Schindler's List (1993).jpg"
                alt=''
              />
              <h3>Schindler's List (1993)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Schindler's List (1993)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img src='images/movie-poster/Parasite (2019).jpg' alt='' />
              <h3>Parasite (2019)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Parasite (2019)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img
                src="images/movie-poster/Singin' in the Rain (1952).jpg"
                alt=''
              />
              <h3>Singin' in the Rain (1952)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Singin' in the Rain (1952)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img
                src='images/movie-poster/28 Years Later The Bone Temple (2026).jpg'
                alt=''
              />
              <h3>28 Years Later: The Bone Temple (2026)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>28 Years Later: The Bone Temple (2026)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img src='images/movie-poster/Song Sung Blue (2025).jpg' alt='' />
              <h3>Song Sung Blue (2025)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Song Sung Blue (2025)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img src='images/movie-poster/Real-scary-movie5.jpg' alt='' />
              <h3>Scary Movie 5</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Scary Movie 5</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img
                src='images/movie-poster/The House on Haunted Grounds (2026).jpg'
                alt=''
              />
              <h3>The House on Haunted Grounds (2026)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>The House on Haunted Grounds (2026)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img
                src='images/movie-poster/Karada sagaši The last night (2025).jpg'
                alt=''
              />
              <h3>Karada sagaši: The last night (2025)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Karada sagaši: The last night (2025)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img
                src="images/movie-poster/Good Luck, Have Fun, Don't Die (2025).jpg"
                alt=''
              />
              <h3>Good Luck, Have Fun, Don't Die (2025)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>Good Luck, Have Fun, Don't Die (2025)</h3>
            </div>
          </div>
        </a>

        <a>
          <div className='box-container'>
            <div className='box'>
              <img src='images/movie-poster/American Pie (1999).jpg' alt='' />
              <h3>American Pie (1999)</h3>
            </div>
            <div className='badge'>HD</div>
            <div className='overlay'>
              <div className='play-bttn'>&#9658;</div>
              <h3 className='title'>American Pie (1999)</h3>
            </div>
          </div>
        </a> */}
      </div>
    </section>
  )
}

export default SuggestionCard