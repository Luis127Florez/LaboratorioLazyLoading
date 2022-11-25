function Home() {
    function Goto(vista) {
        switch (vista) {
            case "About":
                window.location.href = "/About"
                break;          
            case "Contact":
                window.location.href = "/Contact"
                break;
        }
    }

    return(
        <div>
            <h1>Home</h1>
            <div>
                <button onClick={()=>Goto("About")}>About</button>
                <button onClick={()=>Goto("Contact")}>Contact</button>
            </div>
        </div>
    )
}
export default Home