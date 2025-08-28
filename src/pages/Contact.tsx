const Contact: React.FC = () => {
  return (
    <div className="Container">
      <form>
        <div className="input-group">
          <div className="input-group-text">Name</div>
          <input
            type="text"
            className="form-control"
            placeholder="Your Name"
            id="name"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
