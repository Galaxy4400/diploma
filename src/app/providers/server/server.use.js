import { useContext } from "react";
import { ServerContext } from "./server.context";

export const useServer = () => useContext(ServerContext);