/// <reference types="react" />
interface DefaultConfig {
    notice: string;
    accept: string;
    url?: string;
    url_label?: string;
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
            notice: string;
            accept: string;
            url: string;
            url_label: string;
        };
        expires: Date;
    };
};
export default CommonCookieNotice;
