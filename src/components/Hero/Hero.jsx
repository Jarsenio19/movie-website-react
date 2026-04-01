import React from 'react'
import { Link } from 'react-router'

const Hero = () => {
  return (
    <main>
      <section className="padding-block-900">
        <div className="container">
          <div className="hero-wrapper">

            <div className="secondary-logo">JAYSONMOVIES</div>

            <div className="secondary-bttn">
              <input type="text" placeholder="Enter Movies or Series name" />
              <button className="button">Search</button>
            </div>

            <div className="third-bttn flow">
              <h2 className="fs-800 fw-semi-bold text-neutral-100 flow">
                JaysonMovies - Just a better place for watching online movies for free!
              </h2>
              <Link to='/home'><button className="button">
                <a>Go to Home page</a>
              </button></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="padding-block-900">
        <div className="container">

          <h2 className="fs-800 fw-semi-bold text-primary-400">
            JaysonMovies - Watch Free Movies Online | JaysonMovies.to
          </h2>
          <p className="fs-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque blanditiis quod tenetur modi inventore quos repellendus vero qui quia reprehenderit dolorum totam libero nobis repellat molestias cupiditate, repudiandae dolore similique!
          </p>

          <h2 className="fs-800 fw-semi-bold text-primary-400">
            What is Fmovies?
          </h2>
          <p className="fs-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus expedita beatae id similique temporibus quibusdam laborum repellendus fugiat? Quidem, nobis magni dolores quod quos illo perspiciatis minima eius odit praesentium?
          </p>

          <h2 className="fs-800 fw-semi-bold text-primary-400">
            The History of Fmovies
          </h2>
          <p className="fs-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In impedit corrupti aspernatur? Nostrum dicta sequi itaque ducimus debitis beatae reprehenderit tempora veniam sint sapiente. Amet voluptatum id nostrum cumque adipisci?
          </p>

          <h2 className="fs-800 fw-semi-bold text-primary-400">
            How to Access Fmovies from Anywhere?
          </h2>
          <p className="fs-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ipsa autem nobis aspernatur eveniet voluptate quos vero, quae dolores minus, inventore totam sint adipisci earum ad! Illum totam delectus quam.
          </p>

          <h2 className="fs-800 fw-semi-bold text-primary-400">
            What Are the Pros of Using Fmovies?
          </h2>
          <p className="fs-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eveniet nostrum quo, soluta porro ullam aliquid odit non facilis temporibus placeat fugiat possimus error tenetur voluptatum excepturi voluptate quia quasi.
          </p>

          <h2 className="fs-800 fw-semi-bold text-primary-400">
            Can You Use Fmovies on a Smart TV?
          </h2>
          <p className="fs-500">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit iusto natus esse? Aut quis repudiandae, repellat quasi dolorum optio odio numquam nihil, ad eaque necessitatibus officia expedita at ipsum facere!
          </p>

          <h2 className="fs-800 fw-semi-bold text-primary-400">
            Should I Be Worried If I Have Used Fmovies Before?
          </h2>
          <p className="fs-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, impedit! Vero consectetur perferendis architecto earum voluptates dolorem porro, quos ab minus libero iure quibusdam sit eligendi? Voluptatum earum amet quibusdam?
          </p>

          <p className="fs-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo tempora aperiam tempore soluta eos mollitia? Non at architecto cumque ducimus soluta, harum beatae expedita labore exercitationem dolorum eum dolore neque!
          </p>

        </div>
      </section>
    </main>
  )
}

export default Hero