interface IRoute {
    path: string;
    name?: string;
    element: React.ReactNode | React.ReactElement;
    isNotPage?: boolean;
    index?: boolean
}

export default IRoute;