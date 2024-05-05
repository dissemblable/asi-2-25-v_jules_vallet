import "@/styles/globals.css";
import Link from "next/link";

const App = ({Component, pageProps}) => (
    <main>
        <header className="bg-[#f6f7f8] p-4 px-10 flex justify-between items-center">
            <div className="logo">
                <img src="images/logo.png" alt="Logo" className="h-20" />
            </div>
            <nav>
                <ul className="flex space-x-10">
                    <li><Link href="/" className="text-gray-800 hover:text-blue-500 text-xl">Liste</Link></li>
                    <li><Link href="/retails/create" className="text-gray-800 hover:text-blue-500 text-xl">Ajout</Link></li>
                </ul>
            </nav>
        </header>
        <section>
            <div className="mx-auto max-w-5xl p-4">
            <Component {...pageProps} />
            </div>
        </section>
    </main>

)

export default App;

