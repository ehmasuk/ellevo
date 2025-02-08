function Loader({ loading }: { loading: boolean }) {
    return (
        <div className={`${loading ? "block" : "hidden"} fixed left-0 top-0 h-screen w-full flex items-center justify-center bg-[#ffffffaf]`}>
            <div className="loader"></div>
        </div>
    );
}

export default Loader;
