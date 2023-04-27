import { Paper, Button, Typography } from "@mui/material";
import { images } from "../../constants/";

// function Item(item)
// {
//     return (
//         <Paper>

//             <h2>{item.title}</h2>

//             <Button className="CheckButton">
//                 Check it out!
//             </Button>
//         </Paper>
//     )
// }

function Item(props) {
  return (
    <Paper>
      <img
        src={props.item.image}
        style={{ width: "410px", height: "300px" }}
      ></img>

      <Typography
        variant="h5"
        sx={{ fontSize: "2.1rem", fontWeight: "400", mt: "2rem", mb: "1rem" }}
      >
        {props.item.name}
      </Typography>

      <Typography
        variant="h5"
        sx={{ fontSize: "1.1rem", fontWeight: "400", mt: "1rem", mb: "1rem" }}
      >
        {props.item.description}
      </Typography>
    </Paper>
  );
}

export default Item;
