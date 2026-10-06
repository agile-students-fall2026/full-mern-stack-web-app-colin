import { useState, useEffect } from 'react'
import './AboutUs.css'
import axios from 'axios'

const AboutUs = props => {
  const [aboutUs, setAboutUs] = useState([])

  const fetchAboutUs = () => {
    axios
      .get(`${import.meta.env.VITE_SERVER_HOSTNAME}/about-us`)
      .then(response => {
        const aboutUs = response.data.aboutus
        setAboutUs(aboutUs)
      })
      .catch(err => {
        console.error(err)
      })
  }

  useEffect(() => {
    fetchAboutUs()
  }, [])

  return (
    <article className="AboutUs-article">
      <h1>About Us</h1>

      {aboutUs.map(paragraph => (
        <p>{paragraph}</p>
      ))}
    </article>
  )
}

export default AboutUs