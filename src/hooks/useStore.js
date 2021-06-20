import React from "react";
import {StoresContext} from "../store/rootStore";

export const useStore = () => React.useContext(StoresContext);
