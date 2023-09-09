import { atom } from "recoil";

const mobileMenuOpenState = atom({
    key: 'mobileMenuOpenState',
    default: false,
});

export default mobileMenuOpenState