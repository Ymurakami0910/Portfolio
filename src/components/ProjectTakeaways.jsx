const ProjectTakeaways = ({ title, description }) => {
    return (
      <section className="Paper_v2 bg_pattern">
        <div className="container Project-Takeaways">
          <div className="fadeIn Project-Takeaways__box">
            <h4>{title}</h4>
            <p>{description}</p>
          </div>
        </div>
      </section>
    );
  };
  
  export default ProjectTakeaways;
  