import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import components from "./components";

const newTheme = {
    styles,
    colors,
    fonts,
    components
};

export default extendTheme(newTheme);