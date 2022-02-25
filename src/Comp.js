const FourCard = (props) => {
return(
  <>
    <div className="col-12 col-sm-4 p-1 m-0">
      <div className="card-title bg-secondary flex p-2 m-0"><h3>{props.title}</h3></div>
      <div className="card-exp bg-warning p-2 p-2 m-0"><p>{props.exp}</p></div>
    </div>
  </>
)
};

export const Cardrow = (props) => {
return(
    <div class="container-xl">
      <div className="row">
        <FourCard title="Title - 4"       exp="inside paragraph inside paragraph inside paragraph" />
        <FourCard title="Title - 1"       exp="inside paragraph inside paragraph inside paragraph" />
        <FourCard title="Title - 2"       exp="inside paragraph inside paragraph" />
        <FourCard title="Title - 3"       exp="inside paragraph inside paragraphinside paragraphinside paragraph" />
        <FourCard title="Title - 1"       exp="inside paragraph inside paragraphinside paragraphinside paragraph" />
        <FourCard title="Title - 3"       exp="inside paragraph inside paragraphinside paragraphinside paragraph" />
        <FourCard title="Title - 4"       exp="inside paragraph inside paragraphinside paragraphinside paragraph" />
        <FourCard title="Title - 2"       exp="inside paragraph inside paragraph" />
        <FourCard title="Title - 4"       exp="inside paragraph inside paragraph inside paragraph" />
        <FourCard title="Title - 1"       exp="inside paragraph inside paragraph" />
        <FourCard title="Title - 2"       exp="inside paragraph inside paragraph" />
        <FourCard title="Title - 3"       exp="inside paragraph inside paragraph" />
        
      </div>
    </div>
)
};