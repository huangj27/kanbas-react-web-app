import ModuleList from "../Modules/ModuleList";

function Home() {
  return (
    <div>
      <h2 style={{"margin-top":"30px"}}>Home</h2>
      <div className="home d-none d-md-block">
            <i>202410_1 Fall 2023 Semester</i>
            
            <div className="float-end">
                <button type="button" className="btn btn-light">
                    Collapse All
                </button>
                <button type="button" className="btn btn-light">
                    View Progress
                </button>
                <button className="btn btn-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Publish All
                </button>
                <button type="button" className="btn btn-danger">
                    <i class="fas fa-plus" style={{"color": "#ffffff"}}></i>
                    Module
                </button>
                <button type="button" className="btn btn-light">
                    <i className="fa fa-ellipsis-v"></i>
                </button>

            </div>

            <hr></hr>

            <div className="list-group">                
                    <li className="list-group-item list-group-item-secondary">
                        <i className="fa fa-ellipsis-v float-end"></i>
                        <i className="fas fa-plus float-end" style={{"color": "#000000"}}></i>
                        <i className="fas fa-caret-down float-end" style={{"color": "#000000"}}></i>
                        <span className="fa-stack fa float-end">
                            <i className="fas fa-circle fa-stack-2x green-circle" style={{"font-size":"large"}}></i>
                            <i className="fas fa-check fa-stack-1x check-mark" style={{"font-size": "x-small"}}></i>
                        </span>
                        <i className="fa fa-ellipsis-v" id="six-dots"></i>
                        <i className="fa fa-ellipsis-v" id="six-dots"></i>
                        <i className="fas fa-caret-down" style={{"color": "#000000"}}></i>
                        <h4>Week 0 - INTRO</h4>
                    </li>

                    <li className="list-group-item">
                        <i className="fa fa-ellipsis-v float-end"></i>
                        <span className="fa-stack fa float-end">
                            <i className="fas fa-circle fa-stack-2x green-circle" style={{"font-size":"large"}}></i>
                            <i className="fas fa-check fa-stack-1x check-mark" style={{"font-size": "x-small"}}></i>
                        </span>
                        <span className="home-icons">
                            <i className="fa fa-ellipsis-v" id="six-dots"></i>
                            <i className="fa fa-ellipsis-v" id="six-dots"></i>
                        </span>
                        <div className="home-section-header">
                                <b>LEARNING OBJECTIVES</b>
                        </div>
                    </li>
                    </div>
                    </div>
      <ModuleList />
      <h2>Status</h2>
      <div class="course-status d-none d-xxl-block">
            <h3><b>Course Status</b></h3>
            <button type="button" class="btn btn-light" style={{"display":"inline", "width":"48%"}}>
                <i class="fas fa-undo-alt" style={{"color": "#000000"}}></i>
                Unpublish
            </button>
            <button type="button" class="btn btn-success" style={{"display":"inline", "width":"48%"}}>
                <i class="fas fa-check" style={{"color": "#ffffff"}}></i>
                Publish
            </button><br></br>
            <button type="button" class="btn btn-light">
                <i class="fas fa-file-import" style={{"color": "#000000"}}></i>
                <a href="#">Import Existing Content</a>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-sign-in-alt" style={{"color": "#000000"}}></i>
                <a href="#">Import From Commons</a>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-life-ring" style={{"color": "#000000"}}></i>
                <a href="#">Choose Home Page</a>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-chart-bar" style={{"color": "#000000"}}></i>
                <a href="#">View Course Stream</a>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-bullhorn" style={{"color": "#000000"}}></i>
                <a href="#">New Announcement</a>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-chart-bar" style={{"color": "#000000"}}></i>
                <a href="#">New Analytics</a>
            </button>
            <button type="button" class="btn btn-light">
                <i class="fas fa-bell" style={{"color": "#000000"}}></i>
                <a href="#">View Course Notifications</a>
            </button><br></br>

            <h5><b>To Do</b></h5>
            <hr></hr>
            <div class="list-group">
                <ul>
                    <li class="list-group-item">
                        <i class="fas fa-circle" style={{"color": "#000000"}}></i>
                        <a href="#">Grade A1 - ENV + HTML</a>
                        <p>100 points Sep 18 at 11:59pm</p>
                    </li>
                </ul>
            </div>

            <a href="#" class="float-end" style={{"color": "red"}}>
                <i class="fas fa-calendar-alt" style={{"color": "#000000"}}></i>
                View Calendar
            </a>
            
            <h5><b>Coming Up</b></h5>
            <hr></hr>

            <div class="list-group">
                <ul>
                    <li class="list-group-item">
                        <i class="fas fa-calendar-alt" style={{"color": "#000000"}}></i>
                        <a href="#">Lecture</a>
                        <p>CS4550.12631.202410 Sep 7 at 11:45am</p>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-calendar-alt" style={{"color": "#000000"}}></i>
                        <a href="#">CS5610 06 SP23 Lecture</a>
                        <p>Sep 11 at 11:45am</p>
                    </li>
                    <li class="list-group-item">
                        <i class="fas fa-calendar-alt" style={{"color": "#000000"}}></i>
                        <a href="#">CS5610 Web Development</a>
                        <p>CS4550.12631.202410 Sep 7 at 11:45am</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  );
}
export default Home;