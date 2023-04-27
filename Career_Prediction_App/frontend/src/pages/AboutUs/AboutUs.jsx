import React from "react";
import "./AboutUs.css";
import Avatar from "@mui/material/Avatar";
import { Container, Typography, Button } from "@mui/material/";
import EmailIcon from "@mui/icons-material/Email";
import IconButton from "@mui/material/IconButton";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faEnvelope } from "@fortawesome/free-brands-svg-icons";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { images } from "../../constants/";
import CardMedia from "@mui/material/CardMedia";

import Card from "@mui/material/Card";

const AboutUs = () => {
  const developers = [
    {
      image: images.dev1,
      name: "Monirul Islam",
      description: "Frontend Developer",
      email: "abc@gmail.com",
      socialMedia: {
        twitter: "https://twitter.com/bobjohnson",
        github: "",
        linkedin: "",
      },
    },

    {
      image: images.dev2,
      name: "Sourav Dutta",
      description: "Frontend Developer",
      email: "duttasourav586@gmail.com",
      socialMedia: {
        twitter: "",
        github: "",
        linkedin: "https://www.linkedin.com/in/sourav-dutta-3375b220a/",
      },
    },

    {
      image: images.dev3,
      name: "Phirat Passi",
      description: "Machine Learning Engineer",
      email: "abc@gmail.com",
      socialMedia: {
        twitter: "",
        github: "",
        linkedin: "",
      },
    },
  ];

  function Developer({ image, name, description, email, socialMedia }) {
    return (
      <div className="developer-card">
        <Card sx={{ maxWidth: 345, minHeight: 350 }}>
          <div style={{ textAlign: "center" }}>
            <CardMedia sx={{ height: 210 }} image={image} />
          </div>

          <Typography
            gutterBottom
            variant="h5"
            // fontWeight={500}
            style={{
              textAlign: "center",
              margin: "1rem",
              fontWeight: "400",
              fontSize: "1.7rem",
            }}
          >
            {name}
          </Typography>

          <div className="card-content">
            <Typography variant="body1" sx={{ textAlign: "center" }}>
              {description}
            </Typography>

            {/* <Typography variant="body1" style={{ fontFamily: "Open Sans" }}>
              <span style={{ fontSize: "1rem" }}>&#9993;</span> {email}
            </Typography> */}

            <ul style={{ textAlign: "center" }}>
              {/* <li>
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#1DA1F2", fontSize: "1rem" }}
                />
                <a href={socialMedia.twitter}></a>
              </li> */}

              <IconButton aria-label="delete" href={socialMedia.github}>
                <li>
                  <FontAwesomeIcon
                    icon={faGithub}
                    style={{ color: "#333", fontSize: "2rem" }}
                  />
                </li>
              </IconButton>

              {/* <li>
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "#0077B5", fontSize: "2rem" }}
                />
                <a href={socialMedia.linkedin}></a>
              </li> */}

              <li>
                <IconButton aria-label="delete" href={socialMedia.linkedin}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    style={{ color: "#0077B5", fontSize: "2rem" }}
                  />
                </IconButton>
              </li>

              <li>
                <IconButton aria-label="delete" href={`mailto:${email}`}>
                  <EmailIcon style={{ color: "black", fontSize: "35px" }} />
                </IconButton>
              </li>

              {/* <li>
                <FontAwesomeIcon icon={faEnvelope} />
              </li> */}
            </ul>
          </div>
        </Card>
      </div>
    );
  }

  function AboutUs() {
    return (
      <div>
        <Typography variant="h3" style={{ textAlign: "center" }}></Typography>

        <div className="developer-card-container">
          {developers.map((developer) => (
            <Developer key={developer.name} {...developer} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default AboutUs;
