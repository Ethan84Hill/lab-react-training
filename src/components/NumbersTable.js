function NumbersTable(props) {
    let numberArr = [];
    for (let i = 1; i <= props.limit; i++) {
      numberArr.push(i);
    }
  
    return (
      <div>
        {numberArr.map((element) => {
          if (element % 2 === 0) {
            return (
              <div style={{ backgroundColor: "red" }}>
                {element}
              </div>
            );
          } else {
            return (
              <div style={{ backgroundColor: "white" }}>
                {element}
              </div>
            );
          }
        })}
      </div>
    );
  }
  
  export default NumbersTable;