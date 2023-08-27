
function Projects() {
  return (
    <section className="projects-section bg-light" id="projects">
                  <div className="container px-4 px-lg-5">
                {/*<!-- Featured Project Row--> */}
                <div className="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div className="col-xl-8 col-lg-7"><img className="img-fluid mb-3 mb-lg-0" src="/src/assets/img/1.jpg" alt="..." /></div>
                    <div className="col-xl-4 col-lg-5">
                        <div className="featured-text text-center text-lg-left">
                            <h4>Assessement</h4>
                            <p className="text-black-50 mb-0">Assessment refers to the process of gathering, evaluating, and interpreting information or evidence to make judgments or decisions about a particular subject or situation. It involves systematically collecting data or evidence to measure, evaluate, and understand the knowledge, skills, abilities, or performance of individuals </p>
                        </div>
                    </div>
                </div>
                {/*<!-- Project One Row-->*/}
                <div className="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="/src/assets/img/3.jpg" alt="..." /></div>
                    <div className="col-lg-6">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 className="text-white">Auto Assessement</h4>
                                    <p className="mb-0 text-white-50">
                                        also known as automated assessment or computer-based assessment, refers to the process of evaluating or grading a task or test using computer algorithms and automated techniques, without direct human intervention. It involves the use of software or AI systems to analyze and score responses based on predetermined criteria.                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<!-- Project Two Row-->*/}
                <div className="row gx-0 justify-content-center">
                    <div className="col-lg-6"><img className="img-fluid" src="/src/assets/img/2.jpg" alt="..." /></div>
                    <div className="col-lg-6 order-lg-first">
                        <div className="bg-black text-center h-100 project">
                            <div className="d-flex h-100">
                                <div className="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 className="text-white">Repport generator</h4>
                                    <p className="mb-0 text-white-50">An auto assessment report generator is a tool or software that automates the process of generating reports based on the results of automated assessments. It takes the data or scores collected from auto assessment systems and produces comprehensive reports summarizing the assessment outcomes.                                    </p>
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
