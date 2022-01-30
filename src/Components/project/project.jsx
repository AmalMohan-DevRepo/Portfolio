import "./project.css";

const Project = ({title,link}) => {
  //console.log(title);
  return (
    /*
    <div className="p">
      <a href={link} target="_blank" rel="noreferrer">
      {title}
      </a>
    </div>*/
  <div class="col">
    <div class="card h-100">
      <img src={link} class="card-img-top" alt="..." style={{width:"100%",height:"200px",objectFit:"cover"}}/>
      <div class="card-body">
        <h5 class="card-title">{title}</h5>
      </div>
      <div className="d-grid gap-2 m-2">
        <a href="#" class="btn btn-primary" style={{ "background-color": "#36ba9b","border":"none"}}>Visit</a>
        <a href="#" class="btn btn-primary" style={{ "background-color": "#36ba9b","border":"none"}}>View Code</a>
        </div>
    </div>
  </div>
  
  );
};

export default Project;
