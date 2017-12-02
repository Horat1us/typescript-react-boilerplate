import {sleep} from "../../helpers/sleep";
import {PreLoaderInterface} from "./PreLoaderInterface";

/**
 * This class represents animations on plain DOM element because
 * pre-loader will be rendered before loading js bundle
 */
export class PreLoader implements PreLoaderInterface {
    private loader: HTMLElement;
    private duration: number;

    constructor(element: HTMLElement, duration) {
        this.loader = element;
        this.duration = duration;
    }

    public async hide(): Promise<any> {
        await sleep(this.duration);

        this.loader.setAttribute("class", "loaded");
        return this;
    }

    public async show(): Promise<any> {
        this.loader.removeAttribute("class");

        return this;
    }
}
