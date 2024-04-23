const MainContainer = (props) => {
    return <main className={`grid grid-cols-12 m-auto ${props.width}`}>{props.children}</main>;
};

export default MainContainer;
