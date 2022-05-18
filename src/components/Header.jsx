



function Header (props) {

    // Inline CSS in JSX
    const headerStyle = {
        backgroundColor: "#B974B6",
        fontWeight: "500",
        textAlign: "center",
        color: "white",
        fontSize: "24pt",
        padding: "7px 50px",
        margin: "0px"
       
    }

    return (
        <h1 style={headerStyle}>STAR WARS STARSHIPS</h1>
        
    )
}

export default Header