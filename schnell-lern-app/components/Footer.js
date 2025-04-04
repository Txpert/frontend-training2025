export default function Footer() {

    const currentYear = new Date().getFullYear();  //Aktuelles Jahr ermitteln

    return (
        <footer className="bg-gray-800
        text-gray-300
        py-6 mt-12
        ">
        <div className="
        container mx-auto text-center
        ">
            <p>© {currentYear} SchnellLern App. Alle Rechte vorbehalten.</p>   
        </div>
        </footer>
    )
}

