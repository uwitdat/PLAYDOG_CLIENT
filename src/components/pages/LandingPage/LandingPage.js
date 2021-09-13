import React from 'react'
import './LandingPage.css'

const LandingPage = () => {
	return (
		<div>
				<link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet" />
				<div id="page-top">
					<nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
							<div className="container px-1">
									<a className="navbar-brand fw-bold" href="#page-top">Walkie</a>
									<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
										Menu
										<i className="bi-list"></i>
									</button>
									<div className="collapse navbar-collapse" id="navbarResponsive">
											<ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
													<li className="nav-item"><a className="nav-link me-lg-3" href="#features">Features</a></li>
													<li className="nav-item"><a className="nav-link me-lg-3" href="#download">Download</a></li>
											</ul>
											<button className="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
													<span className="d-flex align-items-center">
															<i className="bi-person-circle me-2"></i>
															<span className="">Register</span>
													</span>
											</button>
									</div>
							</div>
					</nav>
					<header className="masthead">
							<div className="container px-5">
									<div className="row gx-5 align-items-center">
											<div className="col-lg-12">
													<div className="mb-5 mb-lg-0 text-center">
															<h1 className="display-1 lh-1 mb-3">Walkie.</h1>
															<p className="lead fw-normal text-muted mb-5">Catchphrase goes here..... we'll need to take some shrooms and think of a good one.....</p>
															<div className="flex-column flex-lg-row align-items-center">
																	<a className="me-lg-3 mb-4 mb-lg-0" href="#!">
																		<img className="app-badge" src="../../../assets/google-play-badge.svg" alt="..." />
																	</a>
																	<a href="#!">
																		<img className="app-badge" src="../../../assets/app-store-badge.svg" alt="..." />
																	</a>
															</div>
													</div>
											</div>
											<div className="col-lg-6">
												<div className="masthead-device-mockup">

												</div>
											</div>
									</div>
							</div>
					</header>
					<aside className="text-center bg-gradient-primary-to-secondary">
							<div className="container px-5">
									<div className="row gx-5 justify-content-center">
											<div className="col-xl-8">
													<div className="h2 fs-1 text-white mb-4">"An intuitive solution to a common problem that we all face, wrapped up in a single app!"</div>
													<img src="../../../../assets/tnw-logo.svg" alt="picture1" style={{height: "3rem"}} />
											</div>
									</div>
							</div>
					</aside>
					<section id="features">
							<div className="container px-5">
									<div className="row gx-5 align-items-center">
											<div className="col-lg-12 order-lg-1 mb-5 mb-lg-0">
													<div className="container-fluid px-5">
															<div className="row gx-5">
																	<div className="col-md-6 mb-5">
																			<div className="text-center">
																					<i className="bi-phone icon-feature text-gradient d-block mb-3"></i>
																					<h3 className="font-alt">Device Mockups</h3>
																					<p className="text-muted mb-0">Ready to use HTML/CSS device mockups, no Photoshop required!</p>
																			</div>
																	</div>
																	<div className="col-md-6 mb-5">
																			<div className="text-center">
																					<i className="bi-camera icon-feature text-gradient d-block mb-3"></i>
																					<h3 className="font-alt">Flexible Use</h3>
																					<p className="text-muted mb-0">Put an image, video, animation, or anything else in the screen!</p>
																			</div>
																	</div>
															</div>
															<div className="row">
																	<div className="col-md-6 mb-5 mb-md-0">
																			<div className="text-center">
																					<i className="bi-gift icon-feature text-gradient d-block mb-3"></i>
																					<h3 className="font-alt">Free to Use</h3>
																					<p className="text-muted mb-0">As always, this theme is free to download and use for any purpose!</p>
																			</div>
																	</div>
																	<div className="col-md-6">
																			<div className="text-center">
																					<i className="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
																					<h3 className="font-alt">Open Source</h3>
																					<p className="text-muted mb-0">Since this theme is MIT licensed, you can use it commercially!</p>
																			</div>
																	</div>
															</div>
													</div>
											</div>
											<div className="col-lg-4 order-lg-0">
													<div className="features-device-mockup">

													</div>
											</div>
									</div>
							</div>
					</section>
					<section className="bg-light">
							<div className="container px-5">
									<div className="row gx-5 align-items-center justify-content-center justify-content-lg-between">
											<div className="col-12 col-lg-5">
													<h2 className="display-4 lh-1 mb-4">Enter a new age of web design</h2>
													<p className="lead fw-normal text-muted mb-5 mb-lg-0">This section is perfect for featuring some information about your application, why it was built, the problem it solves, or anything else! There's plenty of space for text here, so don't worry about writing too much.</p>
											</div>
											<div className="col-sm-8 col-md-6">
													<div className="px-5 px-sm-0"><img className="img-fluid rounded-circle" src="https://source.unsplash.com/u8Jn2rzYIps/900x900" alt="..." /></div>
											</div>
									</div>
							</div>
					</section>
					<section className="cta">
							<div className="cta-content">
									<div className="container px-5">
											<h2 className="text-white display-1 lh-1 mb-4">
													Stop waiting.
													<br />
													Start building.
											</h2>
									</div>
							</div>
					</section>
					<section className="bg-gradient-primary-to-secondary" id="download">
							<div className="container px-5">
									<h2 className="text-center text-white font-alt mb-4">Get the app now!</h2>
									<div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
											<a className="me-lg-3 mb-4 mb-lg-0" href="#!"><img className="app-badge" src="../../../assets/google-play-badge.svg" alt="..." /></a>
											<a href="#!"><img className="app-badge" src="../../../assets/app-store-badge.svg" alt="..." /></a>
									</div>
							</div>
					</section>
					<footer className="bg-black text-center py-5">
							<div className="container px-5">
									<div className="text-white-50 small">
											<div className="mb-2">&copy; Walki 2021. All Rights Reserved.</div>
											<a href="#!">Privacy</a>
											<span className="mx-1">&middot;</span>
											<a href="#!">Terms</a>
											<span className="mx-1">&middot;</span>
											<a href="#!">FAQ</a>
									</div>
							</div>
					</footer>
					<div className="modal fade" id="feedbackModal" tabIndex="-1" aria-labelledby="feedbackModalLabel" aria-hidden="true">
							<div className="modal-dialog modal-dialog-centered">
									<div className="modal-content">
											<div className="modal-header bg-gradient-primary-to-secondary p-4">
													<h5 className="modal-title font-alt text-white" id="feedbackModalLabel">Send feedback</h5>
													<button className="btn-close btn-close-white" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
											</div>
											<div className="modal-body border-0 p-4">
													<form id="contactForm" data-sb-form-api-token="API_TOKEN">
															<div className="form-floating mb-3">
																	<input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
																	<label htmlFor="name">Full name</label>
																	<div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
															</div>
															<div className="form-floating mb-3">
																	<input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
																	<label htmlFor="email">Email address</label>
																	<div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
																	<div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
															</div>
															<div className="form-floating mb-3">
																	<input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
																	<label htmlFor="phone">Phone number</label>
																	<div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
															</div>
															<div className="form-floating mb-3">
																	<textarea className="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: "10rem"}}></textarea>
																	<label htmlFor="message">Message</label>
																	<div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
															</div>
															<div className="d-none" id="submitSuccessMessage">
																	<div className="text-center mb-3">
																			<div className="fw-bolder">Form submission successful!</div>
																	</div>
															</div>
															<div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
															<div className="d-grid"><button className="btn btn-primary rounded-pill btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
													</form>
											</div>
									</div>
							</div>
					</div>
					<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
					<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
				</div>
			</div>
	)
}

export default LandingPage;