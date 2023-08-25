import React from 'react';

function Projects() {
  return (
    <section className="projects-section bg-light" id="projects">
                  <div class="container px-4 px-lg-5">
                {/*<!-- Featured Project Row--> */}
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="/src/assets/img/1.jpg" alt="..." /></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Assessement</h4>
                            <p class="text-black-50 mb-0">Assessment refers to the process of gathering, evaluating, and interpreting information or evidence to make judgments or decisions about a particular subject or situation. It involves systematically collecting data or evidence to measure, evaluate, and understand the knowledge, skills, abilities, or performance of individuals </p>
                        </div>
                    </div>
                </div>
                {/*<!-- Project One Row-->*/}
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="/src/assets/img/3.jpg" alt="..." /></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-white">Auto Assessement</h4>
                                    <p class="mb-0 text-white-50">
                                        also known as automated assessment or computer-based assessment, refers to the process of evaluating or grading a task or test using computer algorithms and automated techniques, without direct human intervention. It involves the use of software or AI systems to analyze and score responses based on predetermined criteria.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Project Two Row-->*/}
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="/src/assets/img/2.jpg" alt="..." /></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-white">Repport generator</h4>
                                    <p class="mb-0 text-white-50">An auto assessment report generator is a tool or software that automates the process of generating reports based on the results of automated assessments. It takes the data or scores collected from auto assessment systems and produces comprehensive reports summarizing the assessment outcomes.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  );
}

export default Projects;
