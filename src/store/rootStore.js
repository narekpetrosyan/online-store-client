import React from "react";
import UserStore from "./User/UserStore";
import DeviceStore from "./Device/DeviceStore";

export class RootStore {
    user;
    device;
    constructor() {
        this.user = new UserStore(this);
        this.device = new DeviceStore(this);
    }
}

export const StoresContext = React.createContext(new RootStore());
