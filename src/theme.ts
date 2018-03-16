import {fade} from "material-ui/utils/colorManipulator";
import spacing from "material-ui/styles/spacing";
import * as Colors from "material-ui/styles/colors";

export const stripeColor = "#f5f5f5";

const theme = {
  spacing: spacing,
  fontFamily: 'Roboto, sans-serif',
  palette: {
    primary1Color: Colors.blue600,
    primary2Color: Colors.blue800,
    primary3Color: Colors.lightBlack,
    accent1Color: Colors.green400,
    accent2Color: Colors.grey400,
    accent3Color: Colors.grey600,
    textColor: Colors.blueGrey800,
    alternateTextColor: Colors.white,
    canvasColor: Colors.white,
    borderColor: Colors.grey300,
    disabledColor: fade(Colors.darkBlack, 0.3),
    pickerHeaderColor: Colors.blue500
  },
};
theme.palette["stripeColor"] = stripeColor;

export default theme;