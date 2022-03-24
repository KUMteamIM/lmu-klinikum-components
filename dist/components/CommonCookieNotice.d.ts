/// <reference types="react" />
interface DefaultConfig {
    notice: string;
    accept: string;
    url?: string;
    url_label?: string;
    title?: string;
}
interface PropDefs {
    config: DefaultConfig;
    expires: Date;
}
/**
 * Include a Cookie Notice banner in your page
 * @param {config} | object with notice, accept, url*, url_label* (*=optional)
 */
declare const CommonCookieNotice: {
    ({ config, expires }: PropDefs): JSX.Element;
    defaultProps: {
        config: {
            title: string;
            notice: string;
            accept: string;
            url: string;
            url_label: string;
        };
        title: string;
        expires: Date;
    };
};
export default CommonCookieNotice;
