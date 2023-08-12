import React from "react";
import ExpenseTracker from "../assets/ExpenseTracker.jpg";
import Ecommerce from "../assets/Ecommerce.jpg";
import Mailbox from "../assets/Mailbox.jpg";

const Projects = () => {
  return (
    <div>
      <div className="projects" id="projects">
        <h2 className="projects-title">Some of my Recent Projects</h2>
        <div className="projects-container">
          <div className="project-container project-card">
            <img
              src={ExpenseTracker}
              alt="expense-tracker"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Expense Tracker</h3>
            <p className="project-details">
              Expense Tracker allows user to trac their expenses. apart from
              this, premium users can get extra benefits like provision to
              download their expense in excel sheet and change theme of whole
              screen. Users expense data is protected using authentication
              method
            </p>
            <a href="https://expensetracker-a99e6.web.app" target="_blank" className="project-link">
              Check it Out
            </a>
          </div>
          <div className="project-container project-card">
            <img
              src={Ecommerce}
              alt="Ecommerce"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Ecommerce</h3>
            <p className="project-details">
              E-Commerce website is an application that gives users the option
              to see different products and add them to their cart, manipulating
              cart data. user needs to login to access their cart and users can
              see the product details as well.
            </p>
            <a href="https://react-ecommerce-012.web.app" target="_blank" className="project-link">
              Check it Out
            </a>
          </div>
          <div className="project-container project-card">
            <img
              src={Mailbox}
              alt="Mailbox"
              loading="lazy"
              className="project-pic"
            />
            <h3 className="project-title">Mailbox</h3>
            <p className="project-details">
              Mail Box Client is an application where users can send and receive
              mail. Each user has their own account and users cannot access
              other users' data. Implemented GET/POST/PUT request to firebase in
              order to retrieve user specific information for each user.
            </p>
            <a href="https://jocular-ganache-73e5f7.netlify.app" target="_blank" className="project-link">
              Check it Out
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
