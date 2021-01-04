import "./style.css";

function Employee({ name, email, phone, skills, avatar}) {
  return (
    <div className="Employee">
      <img alt="tree" src={avatar} />
      <div className="EmployeeDiv">
        <h1>{name}</h1>
        <p><b>Email:</b>{email}</p>
        <p><b>Phone:</b>{phone}</p>
        <p><b>Skills:</b>{skills}</p>
      </div>
    </div>
  );
}

export default Employee;
