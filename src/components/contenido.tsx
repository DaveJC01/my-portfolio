
import DecodingText from "./nameDecoding"
export function Presentation() {
    return (
        <>
            <div className="min-h-screen flex  flex-col-reverse justify-center sm:flex-row sm:justify-normal items-center px-2 mx-auto max-w-7xl sm:px-6 lg:px-8 md:gap-72">
                <div className="mt-16 px-5 ">
                    <h1 className="leading-loose"> <span className="font-medium text-xl ">
                        Hola, mi nombre es</span> <br />   <span className="text-[#5a7224] text-3xl sm:text-4xl font-bold"><DecodingText/></span></h1>
                    <h2 className="text-[#] text-2xl leading-10 font-semibold"> <span className="text-black">Soy </span>Desarrollador Front-End</h2>
                    <p className="leading-normal pb-8 ">Me apasionan los retos de diseño de software me encanta <br className="hidden sm:block" />
                         aprender a realizar diseños UX/UI</p>

                        <button className="bg-[#5a7224] flex justify-center px-4 text-white sm:bg-transparent hover:bg-[#5a7224] sm:text-[#5a7224] hover:text-white py-2  border border-[#5a7224] hover:border-transparent rounded-lg sm:w-48">
                            Descargar CV
                        </button>
                </div>

                <div className="">
                    <div className="border-2 border-[#5b7224bb] rounded-full overflow-hidden w-60 md:w-[350px] shadow-custom-red bg-[#b1a18e] ">
                     <img
                        src="/fotoPerfil.png"
                        alt="Foto de perfil"
                        className="w-full h-full object-cover " />   
                    </div>
                    
                </div>
            </div>


        </>
    )
}