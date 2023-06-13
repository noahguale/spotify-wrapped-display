import { Spotify } from "./Spotify"



export const Header = () => {

    return (
        <>
            <div className="flex flex-col my-10 justify-center items-center space-y-2">
                <Spotify height="100px" width=""/>
                <div className="font-gotham text-[#1DB954] text-[50px] w-full font-semibold">Noah&apos;s Wrapped</div>
            </div>
        
        
        </>
    )
}