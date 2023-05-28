import OverlayLoading from "@/components/overlay/overlay";
import { createContext, useState } from "react";

type IOverlayContext = {
    show:()=>void,
    hide:()=>void,
}

export const OverlayContext = createContext<IOverlayContext>({} as IOverlayContext)

function OverlayProvider({ children }:{children:React.ReactNode}) {
    const [showOverlay, setShowOverlay] = useState(false)

    function show(){
        setShowOverlay(true)
    }
    function hide(){
        setShowOverlay(false)
    }

    return <OverlayContext.Provider value={{
        show,
        hide,
    }}>
        {showOverlay?<OverlayLoading/>:null}
        {children}
    </OverlayContext.Provider>

}

export default OverlayProvider