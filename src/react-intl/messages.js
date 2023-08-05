import {LOCALES} from "./locales";
import {Hero} from "./../react-intl/messages/hero";
import {Header} from "./../react-intl/messages/header";
import {Footer} from "./../react-intl/messages/footer"
import {Front} from "./../react-intl/messages/front"
import {Contact} from "./messages/contact";
import {Students} from "./../react-intl/messages/students";
import {Ux} from "./../react-intl/messages/ux";
import {Backend} from "./messages/backend";
import {Mentors} from "./../react-intl/messages/mentors";
import {About} from "./messages/about";
import {Review} from "./messages/review";
import { Course } from "../react-intl/messages/course";



export const MESSAGES = {
    [LOCALES.KYRGYZ]: {
        ...Hero[LOCALES.KYRGYZ],
        ...Header[LOCALES.KYRGYZ],
        ...Footer[LOCALES.KYRGYZ],
        ...Contact[LOCALES.KYRGYZ],
        ...About[LOCALES.KYRGYZ],
        ...Course[LOCALES.KYRGYZ],
        ...Mentors[LOCALES.KYRGYZ],
        // ...Quastion[LOCALES.KYRGYZ],
        ...Review[LOCALES.KYRGYZ],
        ...Students[LOCALES.KYRGYZ],
        // ...Front[LOCALES.KYRGYZ],
        ...Ux[LOCALES.KYRGYZ],
        ...Front[LOCALES.KYRGYZ],
        ...Ux[LOCALES.KYRGYZ],
        // ...Flutter[LOCALES.KYRGYZ],
        ...Backend[LOCALES.KYRGYZ],
    },
    [LOCALES.RUSSIAN]: {
        ...Hero[LOCALES.RUSSIAN],
        ...Header[LOCALES.RUSSIAN],
        ...Footer[LOCALES.RUSSIAN],
        ...Contact[LOCALES.RUSSIAN],
        ...About[LOCALES.RUSSIAN],
        ...Course[LOCALES.RUSSIAN],
        ...Mentors[LOCALES.RUSSIAN],
        // ...Quastion[LOCALES.RUSSIAN],
        ...Review[LOCALES.RUSSIAN],
        ...Students[LOCALES.RUSSIAN],
        // ...Front[LOCALES.RUSSIAN],
        ...Ux[LOCALES.RUSSIAN],
        ...Front[LOCALES.RUSSIAN],
        ...Ux[LOCALES.RUSSIAN],
        // ...Flutter[LOCALES.RUSSIAN],
        ...Backend[LOCALES.RUSSIAN],
    }
}