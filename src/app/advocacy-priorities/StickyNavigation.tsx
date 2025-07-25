interface StickyNavigation {
    className?:string
}
export default function StickyNavigation({className}:StickyNavigation) {
    return(
   <div className={className}>
    <p className="py-3 border-b w-full hover:bg-primary px-3 text-primary hover:text-card">Advocacy priorities</p>
     <p className="py-3 border-b w-full hover:bg-primary px-3 text-primary hover:text-card">Advocacy priorities</p>
     <p className="py-3 border-b w-full hover:bg-primary px-3 text-primary hover:text-card">Advocacy priorities</p>
     <p className="py-3 border-b w-full hover:bg-primary px-3 text-primary hover:text-card">Advocacy priorities</p>
     <p className="py-3 border-b w-full hover:bg-primary px-3 text-primary hover:text-card">Advocacy priorities</p>
   </div>
    )
}