/// <reference types="react" />
interface PropDefs {
    loading: boolean;
    children?: object[];
}
export declare const CommonSpinner: {
    ({ children, loading }: PropDefs): JSX.Element;
    defaultProps: {
        loading: boolean;
    };
};
export default CommonSpinner;
