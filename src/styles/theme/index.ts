import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import config from "./foundations/config";
import colors from "./foundations/colors";
import fonts from "./foundations/fonts";
import components from "./components";

const newTheme = {
    styles,
    config,
    colors,
    fonts,
    components
};

export default extendTheme(newTheme);