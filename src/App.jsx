import React from "react";
import "./App.css";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

export default function App() {
  return (
    <>
      <navbar>
        <svg
          role="img"
          aria-labelledby="logo"
          class="main-nav__logo__image"
          xmlns="http://www.w3.org/2000/svg"
          width="45"
          height="21"
          viewBox="0 0 45 21"
        >
          <title id="logo">Ableton Homepage</title>
          <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
        </svg>
        <nav>
          <ul className="first_nav">
            <li>Live</li>
            <li>Push</li>
            <li>Note</li>
            <li>Link</li>
            <li>Shop</li>
            <li>Packs</li>
            <li>Help</li>
            <li>More +</li>
          </ul>
          <div className="menu_dropdown">Menu</div>
        </nav>
        <div className="navbar_right">
          <div>Try Live for free</div>
          <div>Log in or register</div>
        </div>
      </navbar>
      <div className="divider" />
      <div className="nav_bottom">
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>Apprenticeship</li>
        </ul>
      </div>
      <div className="hero_section">
        <div className="image_container">
          <h1>Ableton</h1>
        </div>
      </div>
      <div className="text_section">
        <h2>
          We make Live, Push and Link — unique software and hardware for music
          creation and performance. With these products, our community of users
          creates amazing things.
        </h2>
        <p>
          Ableton was founded in 1999 and released the first version of Live in
          2001. Our products are used by a community of dedicated musicians,
          sound designers, and artists from across the world.
        </p>
      </div>
      <div className="about_collage">
        <img className="collage1" src="photo-1.jpg" alt="collage1" />
        <img className="collage2" src="photo-2.jpg" alt="collage2" />
        <div className="collage_yellow_square"></div>
      </div>
      <div className="text_section">
        <h2>
          Making music isn’t easy. It takes time, effort, and learning. But when
          you’re in the flow, it’s incredibly rewarding.
        </h2>
        <p>
          We feel the same way about making Ableton products. The driving force
          behind Ableton is our passion for what we make, and the people we make
          it for.
        </p>
      </div>
      <div className="yt_video">
        <iframe
          width="560"
          height="400"
          src="https://www.youtube.com/embed/9SbnhgjeyXA"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="text_section">
        <h2>
          We are more than 350 people from 30 different countries divided
          between our headquarters in Berlin and our offices in Los Angeles and
          Tokyo.
        </h2>
        <p>
          Most of us are active musicians, producers, and DJs, and many of us
          use Live and Push every day. We come from a wide range of cultural and
          professional backgrounds. Some of us have PhDs, some are self-taught,
          and most of us are somewhere in between. What connects us is the
          shared belief that each of us has the skills and knowledge to
          contribute to something big: helping to shape the future of music
          culture.
        </p>
      </div>
      <div className="about_collage2">
        <div>
          <img id="photo-3" src="photo-3.jpg" alt="" />
          <img id="photo-4" src="photo-4.jpg" alt="" />
        </div>
        <div>
          <img id="photo-5" src="photo-5.jpg" alt="" />
        </div>
        <div id="collage_square_2"></div>
      </div>
      <div className="text_section">
        <h2>
          We believe it takes focus to create truly outstanding instruments. We
          only work on a few products and we strive to make them great.
        </h2>
        <p>
          Rather than having a one-size-fits-all process, we try to give our
          people what they need to work their magic and grow. We’ve learned that
          achieving the best results comes from building teams that are richly
          diverse, and thus able to explore problems from a wider set of
          perspectives. We don’t always agree with each other, but opinion and
          debate are valued and openly encouraged.
        </p>
      </div>
      <div id="poster_1">
        <img src="poster-meet-the-makers.jpg" alt="" />
      </div>
      <div className="text_section">
        <h2>
          We’re passionate about what we do, but we’re equally passionate about
          improving who we are.
        </h2>
        <p>
          We work hard to foster an environment where people can grow both
          personally and professionally, and we strive to create a wealth of
          opportunities to learn from and with each other.
        </p>
        <p>
          Alongside an internal training program, employees are actively
          supported in acquiring new knowledge and skills, and coached on
          applying these in their daily work. In addition, staff-organized
          development and music salons are a chance to discuss new technologies,
          production techniques and best practices.
        </p>
      </div>
      <div className="about_collage3">
        <img src="photo-6.jpg" alt="" />
        <div></div>
        <img src="photo-7.jpg" alt="" />
      </div>
      <div className="text_section">
        <h2>
          We want our employees to love it here. Since we’re looking for
          exceptional talent from around the world, we will do everything we can
          to make your transition as easy as possible.
        </h2>
        <p>
          If you're joining us in Berlin, we'll help with relocation and
          paperwork. We’ll even provide you with free German or English lessons.
          Plus, working in Germany means you can expect comprehensive health
          insurance for you and your family, as well as generous maternity and
          paternity leave. Office hours are flexible, but it’s not all work; we
          have several company and team outings throughout the year as well as a
          variety of fun, informal small-group activities.
        </p>
      </div>
      <div className="jobs_teaser">
        <img src="photo-8.jpg" alt="" />
        <div>
          <p>
            We’re really proud of the work we’ve done so far. But there’s so
            much more to come. If you’d like to be a part of it, please join us.
          </p>
          <p>See latest jobs</p>
        </div>
      </div>
      <div className="footer">
        <div className="footer_header">Ableton</div>
        <div className="footer_top">
          <div className="footer_top_first">
            <ul>
              <li>Register Live or Push</li>
              <li>About Ableton</li>
              <li>Jobs</li>
            </ul>
            <div className="social_media_icons">
              <Facebook />
              <Twitter />
              <YouTube />
              <Instagram />
            </div>
          </div>
          <div className="footer_top_second">
            <ul>
              <li>Education</li>
              <li>Offers for students and teachers</li>
              <li>Ableton for the Classrooms</li>
              <li>Ableton for Colleges and Universities</li>
            </ul>
          </div>
          <div className="footer_top_third">
            <ul>
              <li>Sign up to our newsletter</li>
              <li>
                Ender your email address to stay up to date with the latest
                offers, tutorials, downloads, survey and more.
              </li>
            </ul>
            <div>
              <input type="text" name="" id="" placeholder="Email Address" />
              <button>Sign up</button>
            </div>
          </div>
        </div>
        <div className="footer_middle">
          <div className="footer_middle_first">
            <ul>
              <li>Community</li>
              <li>Find Ableton User Groups</li>
              <li>Find Certified Training</li>
              <li>Become a Certified Trainer</li>
            </ul>
          </div>
          <div className="footer_middle_second">
            <div>Language and Location</div>
            <div>
              <select name="" id="">
                <option value="English">English</option>
                <option value="French">French</option>
                <option value="German">German</option>
              </select>
              <select name="" id="">
                <option value="Netherlands">Netherlands</option>
                <option value="France">France</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
          </div>
        </div>
        <div className="footer_bottom">
          <ul>
            <li>Contact Us</li>
            <li>Press Recources</li>
            <li>Legal Info</li>
            <li>Privacy Policy</li>
            <li>Cookie Settings</li>
            <li>Imprint</li>
          </ul>
          <div>
            Made in Berlin
            {/* prettier-ignore */}
            <svg role="img" aria-labelledby="logo" class="main-nav__logo__image" xmlns="http://www.w3.org/2000/svg" width="45" height="21" viewBox="0 0 45 21">
              <title id="logo">Ableton Homepage</title>
              <path d="M0 0h3v21H0zM6 0h3v21H6zM12 0h3v21h-3zM18 0h3v21h-3zM24 18h21v3H24zM24 12h21v3H24zM24 6h21v3H24zM24 0h21v3H24z"></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}
