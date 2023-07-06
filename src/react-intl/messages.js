import {LOCALES} from "./locales";
// import {Hero} from "./messages/hero";
// import {Header} from "./messages/header";
// import {Front} from "./messages/front";
// import {Contact} from "./messages/contact";
// import Students from "../page/home/students/students";
// import {Ux} from "./messages/ux"
// import {Flutter} from "./messages/flutter";
// import {Backend} from "./messages/backend";
// import Mentors from "../page/home/mentors/mentors";
// import About from "../page/home/about/about";
// import Review from "../page/home/review/review";
import { Course } from "../react-intl/messages/course";



export const MESSAGES = {
    [LOCALES.KYRGYZ]: {
        // ...Hero[LOCALES.KYRGYZ],
        // ...Header[LOCALES.KYRGYZ],
        // ...Contact[LOCALES.KYRGYZ],
        // // ...About[LOCALES.KYRGYZ],
        ...Course[LOCALES.KYRGYZ],
        // // ...Mentors[LOCALES.KYRGYZ],
        // ...Quastion[LOCALES.KYRGYZ],
        // // ...Review[LOCALES.KYRGYZ],
        // // ...Students[LOCALES.KYRGYZ],
        // ...Front[LOCALES.KYRGYZ],
        // ...Ux[LOCALES.KYRGYZ],
        // ...Flutter[LOCALES.KYRGYZ],
        // ...Backend[LOCALES.KYRGYZ],
    },
    [LOCALES.RUSSIAN]: {
        // ...Hero[LOCALES.RUSSIAN],
        // ...Header[LOCALES.RUSSIAN],
        // ...Contact[LOCALES.RUSSIAN],
        // // ...About[LOCALES.RUSSIAN],
        ...Course[LOCALES.RUSSIAN],
        // // ...Mentors[LOCALES.RUSSIAN],
        // ...Quastion[LOCALES.RUSSIAN],
        // // ...Review[LOCALES.RUSSIAN],
        // // ...Students[LOCALES.RUSSIAN],
        // ...Front[LOCALES.RUSSIAN],
        // ...Ux[LOCALES.RUSSIAN],
        // ...Flutter[LOCALES.RUSSIAN],
        // ...Backend[LOCALES.RUSSIAN],
    }
}