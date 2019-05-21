import React from "react";
import Header from "../component/header";
import "../../styles/home.scss";

import About from "../component/about";
import Contact from "../component/contact";
import Projects from "../component/projects";
import Services from "../component/services";

export class Home extends React.Component {
	// componentDidmount(){
	// 	if (this.$ref && location.href.includes())
	// }
	render() {
		return (
			<React.Fragment>
				<Header />
				<Services />
				<div className="container-fluid">
					<div className="row about-sec">
						<div className="col text-center">
							<About />
						</div>
					</div>
					<div className="row projects-sec">
						<div className="col text-center">
							<h2 className="text-secondary" id="projects">
								Projects
							</h2>
							<Projects />
						</div>
					</div>
					<div className="row contact-sec">
						<div className="col text-center">
							<h2 className="text-secondary">Contact</h2>

							<Contact />
						</div>
					</div>

					<div className="row p-3 footer-sec">
						<div className="col text-center">
							<div className="d-inline-flex social-icon">
								<i className="fab fa-linkedin fa-3x text-info" />
							</div>
							{"  "}
							<div className="d-inline-flex social-icon">
								<i className="fab fa-github-square fa-3x text-info" />
							</div>
							{"  "}
							<div className="d-inline-flex social-icon">
								<i className="fab fa-twitter-square fa-3x text-info" />
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}
