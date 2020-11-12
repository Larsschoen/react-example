import * as React from "react";
import {FunctionComponent} from "react";
import {T, useTranslate} from "@polygloat/react";
import {ChooseLanguage} from "./ChooseLanguage";

export const Page: FunctionComponent<{}> = () => {
    const t = useTranslate();

    return (
        <div>
            <ChooseLanguage/>

            <h1><T>hello_world</T></h1>
            <p><T>Texts in attributes can also be translated with polygloat\.</T></p>
            <input placeholder={t("i_am_translated_placeholder")}/>
            <p><T>And also! You can translate text inside options of select!</T></p>
            <select>
                <option>{t("hi_i_am_translated_option")}</option>
            </select>
        </div>
    )
}