import Spinner from "../ui/spinner"

function OverlayLoading(){
    return(
        <div className="absolute top-0 left-0 z-50 w-full h-full bg-black opacity-40 flex justify-center items-center">
            <Spinner size="lg" />
        </div>
    )
}

export default OverlayLoading