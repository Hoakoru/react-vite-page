const Aside = () => {
  return (
    <>
      <h2 className="text-uppercase">ultimas noticias</h2>
      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          A list item
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          A second list item
          <span className="badge bg-primary rounded-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          A third list item
          <span className="badge bg-primary rounded-pill">1</span>
        </li>
      </ul>
    </>
  );
};

export default Aside;
